# Job Application System Setup Guide

This guide will help you set up the job application system for the Youu Media website.

## 1. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Email Configuration (Optional - for notifications)
RESEND_API_KEY=your_resend_api_key
```

### Getting Supabase Credentials:
1. Go to [Supabase](https://supabase.com) and create a new project
2. In your project dashboard, go to Settings > API
3. Copy the Project URL and anon/public key

### Getting Resend API Key (Optional):
1. Go to [Resend](https://resend.com) and create an account
2. Create an API key in your dashboard
3. Add it to your environment variables

## 2. Database Setup

Run the following SQL commands in your Supabase SQL editor:

```sql
-- Create jobs table
create table jobs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  title text not null,
  type text not null,
  location text not null,
  date date not null,
  duration text not null,
  budget text not null,
  urgency text check (urgency in ('high','medium','low')) default 'medium',
  description text,
  requirements text[] default '{}',
  team_size text,
  slots integer not null default 1,
  runner_up_slots integer not null default 1,
  status text check (status in ('active','inactive','filled')) default 'active'
);

-- Create applications table
create table applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  freelancer_id uuid not null,
  job_id uuid not null references jobs(id) on delete cascade,
  status text check (status in ('primary','runner_up')) not null
);

-- Create profiles table (if not exists)
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable Row Level Security (RLS)
alter table jobs enable row level security;
alter table applications enable row level security;
alter table profiles enable row level security;

-- Create policies for jobs (public read access)
create policy "Jobs are viewable by everyone" on jobs
  for select using (true);

-- Create policies for applications (users can only see their own)
create policy "Users can view their own applications" on applications
  for select using (auth.uid() = freelancer_id);

create policy "Users can insert their own applications" on applications
  for insert with check (auth.uid() = freelancer_id);

-- Create policies for profiles
create policy "Users can view their own profile" on profiles
  for select using (auth.uid() = id);

create policy "Users can update their own profile" on profiles
  for update using (auth.uid() = id);

create policy "Users can insert their own profile" on profiles
  for insert with check (auth.uid() = id);
```

## 3. Sample Data (Optional)

To test the system, you can insert some sample jobs:

```sql
-- Insert sample jobs
insert into jobs (title, type, location, date, duration, budget, urgency, description, requirements, team_size, slots, runner_up_slots) values
(
  'Wedding Videographer - Luxury Venue',
  'Event Videography',
  'London, UK',
  '2024-12-15',
  '8 hours',
  '£800-1200',
  'high',
  'Seeking experienced wedding videographer for high-end ceremony and reception. Multi-camera setup required.',
  ARRAY['5+ years experience', 'Own equipment', 'Portfolio required'],
  '2-3 people',
  2,
  1
),
(
  'Corporate Brand Video Editor',
  'Video Editing',
  'Remote',
  '2024-12-20',
  '3-5 days',
  '£1500-2000',
  'medium',
  'Edit corporate brand film with motion graphics and color grading. Fast turnaround needed.',
  ARRAY['Adobe Premiere Pro', 'After Effects', 'Color grading experience'],
  '1 person',
  1,
  1
),
(
  'Product Photography - Tech Launch',
  'Photography',
  'London, UK',
  '2024-12-25',
  '4 hours',
  '£600-900',
  'low',
  'Product photography for tech startup launch. Studio setup with professional lighting.',
  ARRAY['Product photography portfolio', 'Studio lighting experience', 'High-res delivery'],
  '1-2 people',
  1,
  2
);
```

## 4. Features Overview

### For Public Users (Not Logged In):
- View template/dummy jobs on the For Freelancers page
- "Apply Now" buttons redirect to the Freelancer Application Page (`/join-team`)
- Cannot apply directly to jobs

### For Logged-In Users:
- View real jobs from the database
- Dynamic button states:
  - **Apply Now**: Job has open primary slots
  - **Runner Up**: All primary slots filled, runner-up slots available
  - **Job Filled**: Both primary and runner-up slots are full
- Apply directly to jobs with slot management
- Receive confirmation of application status

### For Admins:
- Access admin panel at `/admin/jobs`
- View all jobs (active and inactive)
- Clean up expired jobs (moves jobs past their date to inactive)
- Create new jobs (interface to be built)
- View applications for each job

### Email Notifications:
- Admin receives email when someone applies for a job
- Email includes freelancer name and application status (primary/runner-up)
- Uses Resend API if configured, falls back to console logging

### Auto-Removal:
- Jobs are automatically hidden when their date has passed
- Admin can manually clean up expired jobs using the cleanup button
- Expired jobs are marked as 'inactive' rather than deleted

## 5. Testing the System

1. **Test Public View**: Visit `/freelancers` without logging in - should see template jobs
2. **Test Authentication**: Sign in at `/signin` 
3. **Test Job Application**: Visit `/freelancers` while logged in - should see real jobs with dynamic buttons
4. **Test Admin Panel**: Visit `/admin/jobs` while logged in - should see job management interface

## 6. API Endpoints

- `GET /api/jobs` - Fetch active jobs (for logged-in users)
- `POST /api/jobs/apply` - Apply for a job
- `GET /api/jobs/[jobId]/applications` - Get application counts for a job
- `POST /api/jobs/cleanup` - Clean up expired jobs
- `GET /api/admin/jobs` - Fetch all jobs (admin)

## 7. Troubleshooting

### Common Issues:

1. **Jobs not showing**: Check if Supabase environment variables are set correctly
2. **Authentication not working**: Verify Supabase auth is enabled in your project
3. **Email notifications not sending**: Check Resend API key or check console logs for fallback messages
4. **Database errors**: Ensure all tables are created and RLS policies are set correctly

### Debug Mode:
- Check browser console for any JavaScript errors
- Check Supabase dashboard for database errors
- Check server logs for API errors

## 8. Next Steps

- Set up a cron job or scheduled function to automatically clean up expired jobs
- Create a job creation form for admins
- Add job editing and deletion functionality
- Implement application management (approve/reject applications)
- Add more detailed email templates
- Set up proper user roles and permissions