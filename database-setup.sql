-- Job Board Database Setup
-- Run this in your Supabase SQL editor

-- Create jobs table
CREATE TABLE jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    location TEXT,
    date TIMESTAMPTZ NOT NULL,
    hours TEXT,
    pay TEXT,
    status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'filled', 'closed')),
    team_size INT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create job_applications table
CREATE TABLE job_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
    user_id UUID NOT NULL, -- Supabase auth user id
    state TEXT NOT NULL DEFAULT 'applied' CHECK (state IN ('applied', 'runner_up', 'accepted')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on both tables
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for jobs table
-- Allow authenticated users to read jobs
CREATE POLICY "Authenticated users can view jobs" ON jobs
    FOR SELECT USING (auth.role() = 'authenticated');

-- Allow service role to bypass RLS for admin operations
CREATE POLICY "Service role bypass" ON jobs
    FOR ALL USING (auth.role() = 'service_role');

-- RLS Policies for job_applications table
-- Users can only see their own applications
CREATE POLICY "Users can view own applications" ON job_applications
    FOR SELECT USING (auth.uid() = user_id);

-- Users can insert their own applications
CREATE POLICY "Users can create own applications" ON job_applications
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Service role can do everything for admin operations
CREATE POLICY "Service role bypass applications" ON job_applications
    FOR ALL USING (auth.role() = 'service_role');

-- Create indexes for better performance
CREATE INDEX idx_jobs_date_status ON jobs(date, status);
CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_job_applications_job_id ON job_applications(job_id);
CREATE INDEX idx_job_applications_user_id ON job_applications(user_id);
CREATE INDEX idx_job_applications_created_at ON job_applications(created_at);

-- Insert some sample jobs for testing
INSERT INTO jobs (title, description, location, date, hours, pay, status, team_size) VALUES
('Wedding Videographer - Luxury Venue', 'Seeking experienced wedding videographer for high-end ceremony and reception. Multi-camera setup required.', 'London, UK', '2024-03-15 10:00:00+00', '8 hours', '£400-600', 'open', 2),
('Corporate Brand Video Editor', 'Edit corporate brand film with motion graphics and color grading. Fast turnaround needed for client presentation.', 'Remote', '2024-03-20 14:00:00+00', '6 hours', '£300-500', 'open', 1),
('Product Photography - Tech Launch', 'Product photography for tech startup launch. Studio setup with professional lighting and high-res delivery required.', 'London, UK', '2024-03-25 09:00:00+00', '4 hours', '£250-400', 'open', 1),
('Event Photography - Corporate Gala', 'Corporate gala event photography. Multiple locations, formal attire required.', 'Manchester, UK', '2024-03-18 18:00:00+00', '5 hours', '£350-500', 'filled', 1),
('Social Media Content Creator', 'Create engaging social media content for brand campaign. Video and photo content required.', 'Remote', '2024-03-22 12:00:00+00', '6 hours', '£200-350', 'closed', 1);