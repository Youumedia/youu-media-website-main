-- Add portfolio_file_url column to freelancer_applications table
-- Run this in your Supabase SQL editor

ALTER TABLE public.freelancer_applications 
ADD COLUMN IF NOT EXISTS portfolio_file_url TEXT;

-- Add index for better performance
CREATE INDEX IF NOT EXISTS idx_freelancer_applications_portfolio_file_url 
ON public.freelancer_applications(portfolio_file_url);
