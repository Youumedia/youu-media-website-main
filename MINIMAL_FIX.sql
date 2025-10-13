-- MINIMAL FIX - Just run this in Supabase SQL Editor
-- This creates the essential table structure

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
    status TEXT NOT NULL DEFAULT 'new',
    reference_number TEXT UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public insert
CREATE POLICY "Anyone can create project inquiries" ON public.project_inquiries
    FOR INSERT WITH CHECK (true);

-- Allow public select  
CREATE POLICY "Anyone can view inquiries" ON public.project_inquiries
    FOR SELECT USING (true);

-- Grant permissions
GRANT INSERT ON public.project_inquiries TO anon, authenticated;
GRANT SELECT ON public.project_inquiries TO authenticated;

-- Simple reference number function
CREATE OR REPLACE FUNCTION generate_project_reference()
RETURNS TEXT AS $$
BEGIN
    RETURN 'PROJ-' || TO_CHAR(NOW(), 'YYYY') || '-' || UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 6));
END;
$$ LANGUAGE plpgsql;

-- Simple trigger
CREATE OR REPLACE FUNCTION set_project_reference()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.reference_number IS NULL THEN
        NEW.reference_number := generate_project_reference();
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER project_inquiries_reference_trigger
    BEFORE INSERT ON public.project_inquiries
    FOR EACH ROW
    EXECUTE FUNCTION set_project_reference();
