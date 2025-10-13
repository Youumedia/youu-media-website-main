-- Add missing columns to project_inquiries table
-- Run this in Supabase SQL Editor

-- Add missing columns if they don't exist
ALTER TABLE public.project_inquiries 
ADD COLUMN IF NOT EXISTS client_name TEXT,
ADD COLUMN IF NOT EXISTS client_email TEXT,
ADD COLUMN IF NOT EXISTS client_phone TEXT,
ADD COLUMN IF NOT EXISTS project_name TEXT,
ADD COLUMN IF NOT EXISTS project_type TEXT,
ADD COLUMN IF NOT EXISTS project_description TEXT,
ADD COLUMN IF NOT EXISTS budget_range TEXT,
ADD COLUMN IF NOT EXISTS expected_completion_date DATE,
ADD COLUMN IF NOT EXISTS requirements JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS special_requests TEXT,
ADD COLUMN IF NOT EXISTS team_size INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new',
ADD COLUMN IF NOT EXISTS reference_number TEXT UNIQUE,
ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Make sure required columns are NOT NULL
ALTER TABLE public.project_inquiries 
ALTER COLUMN client_name SET NOT NULL,
ALTER COLUMN client_email SET NOT NULL,
ALTER COLUMN project_type SET NOT NULL,
ALTER COLUMN project_description SET NOT NULL;

-- Update the status constraint
ALTER TABLE public.project_inquiries 
DROP CONSTRAINT IF EXISTS project_inquiries_status_check;

ALTER TABLE public.project_inquiries 
ADD CONSTRAINT project_inquiries_status_check 
CHECK (status IN ('new', 'in_review', 'quoted', 'accepted', 'declined', 'completed'));

-- Ensure RLS is enabled
ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies if they don't exist
DROP POLICY IF EXISTS "Anyone can create project inquiries" ON public.project_inquiries;
CREATE POLICY "Anyone can create project inquiries" ON public.project_inquiries
    FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone can view inquiries" ON public.project_inquiries;
CREATE POLICY "Anyone can view inquiries" ON public.project_inquiries
    FOR SELECT USING (true);

-- Grant permissions
GRANT INSERT ON public.project_inquiries TO anon, authenticated;
GRANT SELECT ON public.project_inquiries TO authenticated;

-- Create or replace the reference number function
CREATE OR REPLACE FUNCTION generate_project_reference()
RETURNS TEXT AS $$
DECLARE
    reference TEXT;
    exists_check INTEGER;
BEGIN
    LOOP
        reference := 'PROJ-' || TO_CHAR(NOW(), 'YYYY') || '-' || 
                    UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 6));
        
        SELECT COUNT(*) INTO exists_check FROM public.project_inquiries WHERE reference_number = reference;
        
        IF exists_check = 0 THEN
            EXIT;
        END IF;
    END LOOP;
    
    RETURN reference;
END;
$$ LANGUAGE plpgsql;

-- Create or replace the trigger function
CREATE OR REPLACE FUNCTION set_project_reference()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.reference_number IS NULL THEN
        NEW.reference_number := generate_project_reference();
    END IF;
    
    NEW.updated_at := NOW();
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop and recreate the trigger
DROP TRIGGER IF EXISTS project_inquiries_reference_trigger ON public.project_inquiries;
CREATE TRIGGER project_inquiries_reference_trigger
    BEFORE INSERT ON public.project_inquiries
    FOR EACH ROW
    EXECUTE FUNCTION set_project_reference();
