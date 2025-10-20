-- Create freelancer_applications table
CREATE TABLE IF NOT EXISTS public.freelancer_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT,
    portfolio_url TEXT,
    skills TEXT,
    availability TEXT,
    experience_years TEXT,
    about_you TEXT,
    equipment_software TEXT,
    day_rate TEXT,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.freelancer_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert freelancer applications (public form)
CREATE POLICY "Anyone can submit freelancer application" ON public.freelancer_applications
    FOR INSERT WITH CHECK (true);

-- Only authenticated users can view freelancer applications
CREATE POLICY "Only authenticated can view freelancer applications" ON public.freelancer_applications
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_freelancer_applications_email ON public.freelancer_applications(email);
CREATE INDEX IF NOT EXISTS idx_freelancer_applications_created_at ON public.freelancer_applications(created_at);
