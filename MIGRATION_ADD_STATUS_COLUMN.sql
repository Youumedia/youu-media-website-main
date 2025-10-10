-- ============================================================
-- MIGRATION: Add Status Column to FreelancerApplications
-- Run this if you already have the FreelancerApplications table
-- ============================================================

-- Add status column to existing FreelancerApplications table
ALTER TABLE public.FreelancerApplications 
ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'pending' 
CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected'));

-- Update existing records to have pending status
UPDATE public.FreelancerApplications 
SET status = 'pending' 
WHERE status IS NULL;

-- Create index for status column for better performance
CREATE INDEX IF NOT EXISTS idx_freelancer_applications_status 
ON public.FreelancerApplications(status);

-- Grant necessary permissions (if needed)
GRANT SELECT, UPDATE ON public.FreelancerApplications TO authenticated;

-- Migration complete!
-- You can now access the admin applications dashboard at /admin/applications



