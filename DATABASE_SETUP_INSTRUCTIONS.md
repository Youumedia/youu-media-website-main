# 🚨 CRITICAL: Database Setup Required

## The Problem

Your contact form is failing because the `project_inquiries` table doesn't exist in your Supabase database. The error message shows:

```
"Could not find the 'clientName' column of 'project_inquiries' in the schema cache"
```

## The Solution

You need to run the database schema script in your Supabase project.

### Step 1: Access Supabase SQL Editor

1. Go to your Supabase project dashboard
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"

### Step 2: Run the Schema Script

Copy and paste the entire contents of `PROJECT_INQUIRIES_SCHEMA.sql` into the SQL editor and click "Run".

### Step 3: Verify the Table was Created

After running the script, you should see:

- ✅ `project_inquiries` table created
- ✅ All required columns added
- ✅ Proper indexes created
- ✅ Row Level Security enabled
- ✅ Triggers for automatic reference number generation

### Step 4: Test the Contact Form

1. Go to your contact page: `http://localhost:3000/contact`
2. Fill out the form with test data
3. Submit the form
4. You should see a success message with a reference number

## What the Schema Creates

The `project_inquiries` table includes these columns:

- `client_name` - Full name from the form
- `client_email` - Email address
- `client_phone` - Phone number
- `project_name` - Project name
- `project_type` - Type of service needed
- `project_description` - Project details
- `budget_range` - Budget range selected
- `expected_completion_date` - Preferred date
- `requirements` - JSON array of requirements
- `special_requests` - Special requests
- `team_size` - Team size needed
- `status` - Project status (new, in_review, etc.)
- `reference_number` - Auto-generated reference (e.g., PROJ-2024-ABC123)
- `created_at` - Timestamp when created
- `updated_at` - Timestamp when last updated

## Security Features

- Row Level Security (RLS) enabled
- Public can insert new inquiries
- Authenticated users can view inquiries
- Service role has full access for admin operations

## Automatic Features

- Reference numbers are auto-generated (PROJ-YYYY-XXXXXX format)
- Updated timestamp is automatically maintained
- Proper indexing for fast queries

## After Setup

Once you've run the schema script, your contact form will work perfectly and you'll get:

- ✅ Successful form submissions
- ✅ Automatic reference number generation
- ✅ Proper error handling
- ✅ Database storage of all inquiries

## Need Help?

If you encounter any issues:

1. Check the Supabase logs for any SQL errors
2. Verify your environment variables are set correctly
3. Make sure you have the correct permissions in Supabase
