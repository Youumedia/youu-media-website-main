-- Project Tracking System Database Schema
-- This schema supports reference number generation and project status tracking

-- Projects table - stores all client projects with reference numbers
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  reference_number VARCHAR(20) UNIQUE NOT NULL,
  client_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(50),
  project_name VARCHAR(500) NOT NULL,
  project_type VARCHAR(100) NOT NULL, -- 'Wedding Videography', 'Corporate Video', 'Photography', etc.
  project_description TEXT,
  location VARCHAR(255),
  budget_range VARCHAR(100), -- e.g., '£1000-2000'
  
  -- Project timeline
  start_date DATE,
  expected_completion_date DATE,
  actual_completion_date DATE,
  
  -- Current status
  current_status VARCHAR(50) DEFAULT 'quote_requested',
  
  -- Project details
  requirements TEXT[],
  special_requests TEXT,
  team_size INTEGER DEFAULT 1,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id),
  
  -- Status tracking
  status_history JSONB DEFAULT '[]',
  last_status_update TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project status updates table - tracks all status changes
CREATE TABLE IF NOT EXISTS project_status_updates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  previous_status VARCHAR(50),
  new_status VARCHAR(50) NOT NULL,
  update_notes TEXT,
  updated_by UUID REFERENCES auth.users(id),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Additional context
  estimated_days_to_next_stage INTEGER,
  client_notified BOOLEAN DEFAULT FALSE,
  notification_sent_at TIMESTAMP WITH TIME ZONE
);

-- Project milestones table - tracks specific project milestones
CREATE TABLE IF NOT EXISTS project_milestones (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  milestone_name VARCHAR(255) NOT NULL,
  milestone_description TEXT,
  due_date DATE,
  completed_date DATE,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'in_progress', 'completed', 'overdue'
  priority INTEGER DEFAULT 1, -- 1=low, 2=medium, 3=high
  assigned_to UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project files table - stores project-related files and deliverables
CREATE TABLE IF NOT EXISTS project_files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  file_name VARCHAR(255) NOT NULL,
  file_type VARCHAR(100), -- 'video', 'photo', 'document', 'contract', etc.
  file_path VARCHAR(500) NOT NULL,
  file_size BIGINT,
  upload_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  uploaded_by UUID REFERENCES auth.users(id),
  is_deliverable BOOLEAN DEFAULT FALSE,
  client_access BOOLEAN DEFAULT FALSE,
  description TEXT
);

-- Project communications table - tracks all client communications
CREATE TABLE IF NOT EXISTS project_communications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  communication_type VARCHAR(50) NOT NULL, -- 'email', 'phone', 'meeting', 'note'
  subject VARCHAR(255),
  message TEXT,
  sent_by UUID REFERENCES auth.users(id),
  sent_to VARCHAR(255), -- client email or contact info
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_internal BOOLEAN DEFAULT FALSE,
  attachments JSONB DEFAULT '[]'
);

-- Reference number sequence table - manages reference number generation
CREATE TABLE IF NOT EXISTS reference_sequences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  year INTEGER NOT NULL,
  sequence_number INTEGER DEFAULT 0,
  prefix VARCHAR(10) DEFAULT 'YM',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(year, prefix)
);

-- Function to generate reference numbers
CREATE OR REPLACE FUNCTION generate_reference_number()
RETURNS TEXT AS $$
DECLARE
  current_year INTEGER;
  next_number INTEGER;
  reference_number TEXT;
BEGIN
  current_year := EXTRACT(YEAR FROM NOW());
  
  -- Get or create sequence for current year
  INSERT INTO reference_sequences (year, sequence_number, prefix)
  VALUES (current_year, 1, 'YM')
  ON CONFLICT (year, prefix)
  DO UPDATE SET 
    sequence_number = reference_sequences.sequence_number + 1,
    updated_at = NOW()
  RETURNING sequence_number INTO next_number;
  
  -- Generate reference number
  reference_number := 'YM' || current_year || LPAD(next_number::TEXT, 3, '0');
  
  RETURN reference_number;
END;
$$ LANGUAGE plpgsql;

-- Function to update project status and track history
CREATE OR REPLACE FUNCTION update_project_status(
  p_project_id UUID,
  p_new_status VARCHAR(50),
  p_notes TEXT DEFAULT NULL,
  p_updated_by UUID DEFAULT NULL
)
RETURNS VOID AS $$
DECLARE
  old_status VARCHAR(50);
BEGIN
  -- Get current status
  SELECT current_status INTO old_status
  FROM projects
  WHERE id = p_project_id;
  
  -- Update project status
  UPDATE projects
  SET 
    current_status = p_new_status,
    updated_at = NOW(),
    last_status_update = NOW(),
    status_history = COALESCE(status_history, '[]'::jsonb) || 
      jsonb_build_object(
        'status', p_new_status,
        'updated_at', NOW(),
        'updated_by', p_updated_by,
        'notes', p_notes
      )
  WHERE id = p_project_id;
  
  -- Record status update
  INSERT INTO project_status_updates (
    project_id,
    previous_status,
    new_status,
    update_notes,
    updated_by
  ) VALUES (
    p_project_id,
    old_status,
    p_new_status,
    p_notes,
    p_updated_by
  );
END;
$$ LANGUAGE plpgsql;

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_reference_number ON projects(reference_number);
CREATE INDEX IF NOT EXISTS idx_projects_client_email ON projects(client_email);
CREATE INDEX IF NOT EXISTS idx_projects_current_status ON projects(current_status);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at);
CREATE INDEX IF NOT EXISTS idx_project_status_updates_project_id ON project_status_updates(project_id);
CREATE INDEX IF NOT EXISTS idx_project_milestones_project_id ON project_milestones(project_id);
CREATE INDEX IF NOT EXISTS idx_project_files_project_id ON project_files(project_id);
CREATE INDEX IF NOT EXISTS idx_project_communications_project_id ON project_communications(project_id);

-- Row Level Security (RLS) policies
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_status_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_communications ENABLE ROW LEVEL SECURITY;

-- Policies for projects table
CREATE POLICY "Projects are viewable by authenticated users" ON projects
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Projects are insertable by authenticated users" ON projects
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Projects are updatable by authenticated users" ON projects
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Policies for project_status_updates
CREATE POLICY "Status updates are viewable by authenticated users" ON project_status_updates
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Status updates are insertable by authenticated users" ON project_status_updates
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Sample data for testing
INSERT INTO projects (
  reference_number,
  client_name,
  client_email,
  project_name,
  project_type,
  location,
  budget_range,
  start_date,
  expected_completion_date,
  current_status,
  requirements
) VALUES 
(
  'YM2024001',
  'Sarah Johnson',
  'sarah.johnson@email.com',
  'Wedding Videography - Spring Garden Wedding',
  'Wedding Videography',
  'London, UK',
  '£2000-3000',
  '2024-01-15',
  '2024-02-15',
  'post_production',
  ARRAY['Multi-camera setup', 'Drone footage', 'Same-day highlights']
),
(
  'YM2024002',
  'TechStart Ltd',
  'contact@techstart.com',
  'Corporate Brand Video',
  'Corporate Video',
  'Manchester, UK',
  '£1500-2500',
  '2024-01-20',
  '2024-02-10',
  'production',
  ARRAY['Professional lighting', 'Interview setup', 'Motion graphics']
),
(
  'YM2024003',
  'Emma & James',
  'emma.james@email.com',
  'Engagement Photo Session',
  'Photography',
  'Brighton, UK',
  '£500-800',
  '2024-01-10',
  '2024-01-25',
  'completed',
  ARRAY['Outdoor location', 'Natural lighting', 'High-res delivery']
);

-- Update reference sequence to reflect existing projects
INSERT INTO reference_sequences (year, sequence_number, prefix)
VALUES (2024, 3, 'YM')
ON CONFLICT (year, prefix)
DO UPDATE SET sequence_number = 3;
