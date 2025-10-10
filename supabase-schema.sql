-- Create Jobs table
CREATE TABLE IF NOT EXISTS public.jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('open', 'filled', 'closed')) DEFAULT 'open',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create JobApplications table
CREATE TABLE IF NOT EXISTS public.job_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
    freelancer_id TEXT NOT NULL, -- This will link to FreelancerApplications table
    status TEXT NOT NULL CHECK (status IN ('applied', 'runner_up', 'accepted')) DEFAULT 'applied',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_jobs_status_date ON public.jobs(status, date);
CREATE INDEX IF NOT EXISTS idx_jobs_date ON public.jobs(date);
CREATE INDEX IF NOT EXISTS idx_job_applications_job_id ON public.job_applications(job_id);
CREATE INDEX IF NOT EXISTS idx_job_applications_freelancer_id ON public.job_applications(freelancer_id);

-- Enable Row Level Security (RLS)
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for jobs table (public read access)
CREATE POLICY "Anyone can view open jobs" ON public.jobs
    FOR SELECT USING (status = 'open' AND date > NOW());

CREATE POLICY "Authenticated users can view all jobs" ON public.jobs
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create policies for job_applications table
CREATE POLICY "Users can view their own applications" ON public.job_applications
    FOR SELECT USING (auth.uid()::text = freelancer_id);

CREATE POLICY "Users can create their own applications" ON public.job_applications
    FOR INSERT WITH CHECK (auth.uid()::text = freelancer_id);

-- Grant necessary permissions
GRANT SELECT ON public.jobs TO anon, authenticated;
GRANT SELECT, INSERT ON public.job_applications TO authenticated;
