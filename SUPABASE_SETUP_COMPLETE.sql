-- ============================================================
-- COMPLETE SUPABASE DATABASE SETUP FOR YOUU MEDIA
-- Run this entire script in your Supabase SQL Editor
-- ============================================================

-- ============================================================
-- 1. JOBS AND JOB APPLICATIONS (Authenticated System)
-- ============================================================

-- Create jobs table
CREATE TABLE IF NOT EXISTS public.jobs (
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
CREATE TABLE IF NOT EXISTS public.job_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    job_id UUID REFERENCES public.jobs(id) ON DELETE CASCADE,
    user_id UUID NOT NULL,
    state TEXT NOT NULL DEFAULT 'applied' CHECK (state IN ('applied', 'runner_up', 'accepted')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 2. FREELANCER APPLICATIONS (Public Form Submissions)
-- ============================================================

CREATE TABLE IF NOT EXISTS public.FreelancerApplications (
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

-- ============================================================
-- 3. PORTFOLIO STORAGE (For User Uploads)
-- ============================================================

CREATE TABLE IF NOT EXISTS public.portfolio_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    path TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 4. INDEXES FOR PERFORMANCE
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_jobs_date_status ON public.jobs(date, status);
CREATE INDEX IF NOT EXISTS idx_jobs_status ON public.jobs(status);
CREATE INDEX IF NOT EXISTS idx_job_applications_job_id ON public.job_applications(job_id);
CREATE INDEX IF NOT EXISTS idx_job_applications_user_id ON public.job_applications(user_id);
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON public.job_applications(created_at);
CREATE INDEX IF NOT EXISTS idx_freelancer_applications_email ON public.FreelancerApplications(email);
CREATE INDEX IF NOT EXISTS idx_freelancer_applications_created_at ON public.FreelancerApplications(created_at);

-- ============================================================
-- 5. ENABLE ROW LEVEL SECURITY (RLS)
-- ============================================================

ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.FreelancerApplications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- 6. RLS POLICIES FOR JOBS TABLE
-- ============================================================

-- Allow public to view open jobs
CREATE POLICY "Public can view open jobs" ON public.jobs
    FOR SELECT USING (status = 'open');

-- Allow authenticated users to view all jobs
CREATE POLICY "Authenticated users can view all jobs" ON public.jobs
    FOR SELECT USING (auth.role() = 'authenticated');

-- Allow authenticated users to create jobs (will be restricted to admin in app logic)
CREATE POLICY "Authenticated users can create jobs" ON public.jobs
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to update jobs (will be restricted to admin in app logic)
CREATE POLICY "Authenticated users can update jobs" ON public.jobs
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Allow authenticated users to delete jobs (will be restricted to admin in app logic)
CREATE POLICY "Authenticated users can delete jobs" ON public.jobs
    FOR DELETE USING (auth.role() = 'authenticated');

-- ============================================================
-- 7. RLS POLICIES FOR JOB_APPLICATIONS TABLE
-- ============================================================

-- Users can view their own applications
CREATE POLICY "Users can view own applications" ON public.job_applications
    FOR SELECT USING (auth.uid() = user_id);

-- Users can create their own applications
CREATE POLICY "Users can create own applications" ON public.job_applications
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============================================================
-- 8. RLS POLICIES FOR FREELANCER APPLICATIONS
-- ============================================================

-- Allow anyone to insert freelancer applications (public form)
CREATE POLICY "Anyone can submit freelancer application" ON public.FreelancerApplications
    FOR INSERT WITH CHECK (true);

-- Only authenticated admins can view freelancer applications
CREATE POLICY "Only authenticated can view freelancer applications" ON public.FreelancerApplications
    FOR SELECT USING (auth.role() = 'authenticated');

-- ============================================================
-- 9. RLS POLICIES FOR PORTFOLIO_ITEMS
-- ============================================================

-- Users can view their own portfolio items
CREATE POLICY "Users can view own portfolio items" ON public.portfolio_items
    FOR SELECT USING (auth.uid() = user_id);

-- Users can insert their own portfolio items
CREATE POLICY "Users can insert own portfolio items" ON public.portfolio_items
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can delete their own portfolio items
CREATE POLICY "Users can delete own portfolio items" ON public.portfolio_items
    FOR DELETE USING (auth.uid() = user_id);

-- ============================================================
-- 10. SAMPLE DATA FOR TESTING
-- ============================================================

-- Insert sample jobs
INSERT INTO public.jobs (title, description, location, date, hours, pay, status, team_size) VALUES
('Wedding Videographer - Luxury Venue', 'Seeking experienced wedding videographer for high-end ceremony and reception. Multi-camera setup required.', 'London, UK', NOW() + INTERVAL '15 days', '8 hours', '£400-600', 'open', 2),
('Corporate Brand Video Editor', 'Edit corporate brand film with motion graphics and color grading. Fast turnaround needed for client presentation.', 'Remote', NOW() + INTERVAL '20 days', '6 hours', '£300-500', 'open', 1),
('Product Photography - Tech Launch', 'Product photography for tech startup launch. Studio setup with professional lighting and high-res delivery required.', 'London, UK', NOW() + INTERVAL '25 days', '4 hours', '£250-400', 'open', 1),
('Event Photography - Corporate Gala', 'Corporate gala event photography. Multiple locations, formal attire required.', 'Manchester, UK', NOW() + INTERVAL '18 days', '5 hours', '£350-500', 'open', 1),
('Social Media Content Creator', 'Create engaging social media content for brand campaign. Video and photo content required.', 'Remote', NOW() + INTERVAL '22 days', '6 hours', '£200-350', 'open', 1)
ON CONFLICT DO NOTHING;

-- ============================================================
-- 11. STORAGE BUCKET FOR PORTFOLIO (Run in Supabase Dashboard)
-- ============================================================

-- Note: Storage buckets must be created via Supabase Dashboard
-- Go to Storage > Create new bucket > Name it "portfolio_uploads"
-- Set as Public or configure RLS policies as needed

-- ============================================================
-- SETUP COMPLETE!
-- ============================================================


