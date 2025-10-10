# Job Board System Setup Guide

## Overview
This job board system includes:
- Supabase database with jobs and applications tables
- Protected routes for logged-in users (`/dashboard/jobs`)
- Admin panel for job management (`/admin/jobs`)
- Email notifications via Resend
- RLS policies for security

## Database Setup

1. **Run the SQL migration** in your Supabase SQL editor:
   ```sql
   -- Copy and paste the contents of database-setup.sql
   ```

2. **Verify tables created**:
   - `jobs` table with RLS enabled
   - `job_applications` table with RLS enabled
   - Sample data inserted

## Environment Variables

Add these to your `.env.local` file:

```env
# Existing Supabase variables (you should already have these)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Admin configuration
NEXT_PUBLIC_ADMIN_USER_ID=your_user_id_here
NEXT_PUBLIC_ADMIN_EMAIL=your_admin_email@example.com

# Email notifications (optional - system works without this)
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=Contact@youumedia.com
```

### Getting Admin User ID
1. Go to your Supabase dashboard
2. Navigate to Authentication > Users
3. Find your user and copy the User UUID
4. Use this as `NEXT_PUBLIC_ADMIN_USER_ID`

### Resend Setup (Optional)
1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add it to your environment variables
4. If not configured, notifications will be logged to console instead

## File Structure

```
├── database-setup.sql              # Database schema and sample data
├── components/
│   ├── JobCard.tsx                 # Job card component for logged-in users
│   └── job-board-basic.tsx         # Updated public example jobs
├── app/
│   ├── api/
│   │   ├── jobs/
│   │   │   ├── route.ts            # GET (list) and POST (create) jobs
│   │   │   └── [id]/route.ts       # PUT (update) and DELETE jobs
│   │   ├── applications/
│   │   │   └── route.ts            # GET and POST applications
│   │   └── notifications/
│   │       └── application/
│   │           └── route.ts        # Email notifications
│   ├── dashboard/
│   │   └── jobs/
│   │       └── page.tsx            # Protected job board for users
│   └── admin/
│       └── jobs/
│           └── page.tsx            # Admin job management panel
└── lib/
    └── supabase.ts                 # Existing Supabase client
```

## Testing Steps

### 1. Basic Setup Test
1. Run the database setup SQL
2. Start your development server: `npm run dev`
3. Visit `/dashboard/jobs` - should redirect to `/join-team` if not logged in
4. Visit `/admin/jobs` - should redirect to `/dashboard/jobs` if not admin

### 2. User Flow Test (Apply → Runner Up → Filled)
1. **Create test users**:
   - Sign up two different user accounts
   - Note one user's ID for admin access

2. **Set up admin access**:
   - Add your user ID to `NEXT_PUBLIC_ADMIN_USER_ID` in `.env.local`
   - Restart your dev server

3. **Test the flow**:
   - Login as first user → visit `/dashboard/jobs` → apply to a job
   - Login as second user → visit `/dashboard/jobs` → should see "Runner Up" button
   - Login as admin → visit `/admin/jobs` → change job status to "filled"
   - Login as users → should see "Job Filled" (disabled button)

### 3. Email Notification Test
1. Add `RESEND_API_KEY` to your `.env.local`
2. Apply to a job as a user
3. Check your email for notification
4. If no API key, check console logs for notification details

### 4. Admin CRUD Test
1. Login as admin → visit `/admin/jobs`
2. Create a new job
3. Edit an existing job
4. Change job status
5. View applications (ordered by application time)
6. Delete a job

## Security Features

- **Row Level Security (RLS)** enabled on both tables
- **Authentication required** for all job operations
- **Admin-only access** for job management
- **User isolation** - users only see their own applications
- **Service role bypass** for admin operations

## API Endpoints

### Jobs
- `GET /api/jobs` - List jobs (filtered for users, all for admin)
- `POST /api/jobs` - Create job (admin only)
- `PUT /api/jobs/[id]` - Update job (admin only)
- `DELETE /api/jobs/[id]` - Delete job (admin only)

### Applications
- `GET /api/applications` - List applications (user's own, or all for admin)
- `POST /api/applications` - Apply to job (creates application with smart state detection)

### Notifications
- `POST /api/notifications/application` - Send email notification (internal use)

## Troubleshooting

### Common Issues

1. **"Unauthorized" errors**:
   - Check Supabase environment variables
   - Ensure user is logged in
   - Verify RLS policies are set up correctly

2. **"Forbidden" errors on admin routes**:
   - Check `NEXT_PUBLIC_ADMIN_USER_ID` matches your user ID
   - Restart dev server after changing env vars

3. **Jobs not showing**:
   - Check job dates are in the future
   - Verify job status is 'open'
   - Check RLS policies allow SELECT operations

4. **Email notifications not working**:
   - Check `RESEND_API_KEY` is set correctly
   - Verify `ADMIN_EMAIL` is set
   - Check console logs for errors

### Database Queries for Debugging

```sql
-- Check jobs
SELECT * FROM jobs ORDER BY created_at DESC;

-- Check applications
SELECT ja.*, j.title as job_title 
FROM job_applications ja 
JOIN jobs j ON ja.job_id = j.id 
ORDER BY ja.created_at DESC;

-- Check RLS policies
SELECT * FROM pg_policies WHERE tablename IN ('jobs', 'job_applications');
```

## Next Steps

1. **Customize admin email** - Update `ADMIN_EMAIL` in environment variables
2. **Add user profiles** - Consider storing user names/emails in a profiles table
3. **Enhanced notifications** - Add more detailed email templates
4. **Job categories** - Add categories/tags for better organization
5. **Application status updates** - Allow admins to update individual application states

## Support

If you encounter issues:
1. Check the console logs in your browser and terminal
2. Verify all environment variables are set correctly
3. Ensure the database schema was applied successfully
4. Check Supabase dashboard for any RLS policy issues