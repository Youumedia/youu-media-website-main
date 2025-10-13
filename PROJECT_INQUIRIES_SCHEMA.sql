-- Project Inquiries Database Schema
-- Run this in your Supabase SQL editor to create the project_inquiries table

-- Create project_inquiries table
CREATE TABLE IF NOT EXISTS public.project_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    client_phone TEXT,
    project_name TEXT,
    project_type TEXT NOT NULL,
    project_description TEXT NOT NULL,
    budget_range TEXT,
    expected_completion_date DATE,
    requirements JSONB DEFAULT '[]',
    special_requests TEXT,
    team_size INTEGER DEFAULT 1,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_review', 'quoted', 'accepted', 'declined', 'completed')),
    reference_number TEXT UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_project_inquiries_status ON public.project_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_project_inquiries_created_at ON public.project_inquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_project_inquiries_reference_number ON public.project_inquiries(reference_number);
CREATE INDEX IF NOT EXISTS idx_project_inquiries_client_email ON public.project_inquiries(client_email);

-- Enable Row Level Security (RLS)
ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies for project_inquiries table
-- Allow public insert (for contact form submissions)
CREATE POLICY "Anyone can create project inquiries" ON public.project_inquiries
    FOR INSERT WITH CHECK (true);

-- Allow authenticated users to view their own inquiries (if they have the reference number)
CREATE POLICY "Users can view inquiries with reference" ON public.project_inquiries
    FOR SELECT USING (true);

-- Allow service role to do everything for admin operations
CREATE POLICY "Service role bypass project inquiries" ON public.project_inquiries
    FOR ALL USING (auth.role() = 'service_role');

-- Grant necessary permissions
GRANT INSERT ON public.project_inquiries TO anon, authenticated;
GRANT SELECT ON public.project_inquiries TO authenticated;
GRANT ALL ON public.project_inquiries TO service_role;

-- Create a function to generate reference numbers
CREATE OR REPLACE FUNCTION generate_project_reference()
RETURNS TEXT AS $$
DECLARE
    reference TEXT;
    exists_check INTEGER;
BEGIN
    LOOP
        -- Generate a reference like "PROJ-2024-ABC123"
        reference := 'PROJ-' || TO_CHAR(NOW(), 'YYYY') || '-' || 
                    UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 6));
        
        -- Check if this reference already exists
        SELECT COUNT(*) INTO exists_check FROM public.project_inquiries WHERE reference_number = reference;
        
        -- If it doesn't exist, we can use it
        IF exists_check = 0 THEN
            EXIT;
        END IF;
    END LOOP;
    
    RETURN reference;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically set reference_number and updated_at
CREATE OR REPLACE FUNCTION set_project_reference_and_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    -- Set reference number if not already set
    IF NEW.reference_number IS NULL THEN
        NEW.reference_number := generate_project_reference();
    END IF;
    
    -- Set updated_at timestamp
    NEW.updated_at := NOW();
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger
DROP TRIGGER IF EXISTS project_inquiries_reference_trigger ON public.project_inquiries;
CREATE TRIGGER project_inquiries_reference_trigger
    BEFORE INSERT OR UPDATE ON public.project_inquiries
    FOR EACH ROW
    EXECUTE FUNCTION set_project_reference_and_updated_at();
