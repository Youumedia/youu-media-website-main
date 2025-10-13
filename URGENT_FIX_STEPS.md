# 🚨 URGENT: Fix Contact Form - Follow These Exact Steps

## The Problem

Your contact form is failing because the database table doesn't exist. You need to create it in Supabase.

## ⚡ QUICK FIX (5 minutes)

### Step 1: Open Supabase Dashboard

1. Go to https://supabase.com/dashboard
2. Sign in to your account
3. Click on your project

### Step 2: Open SQL Editor

1. In the left sidebar, click **"SQL Editor"**
2. Click **"New Query"**

### Step 3: Copy and Paste This Code

Copy the ENTIRE contents of the file `PROJECT_INQUIRIES_SCHEMA.sql` and paste it into the SQL editor.

### Step 4: Run the Script

1. Click the **"Run"** button (or press Ctrl+Enter)
2. Wait for it to complete (should take 5-10 seconds)
3. You should see "Success. No rows returned" or similar

### Step 5: Test Your Form

1. Go to http://localhost:3000/contact
2. Fill out the form with any test data
3. Click "Send Project Inquiry"
4. You should see "Project Created Successfully!" with a reference number

## 🔍 How to Verify It Worked

After running the SQL script, you should see:

- ✅ Table `project_inquiries` created
- ✅ All columns added (client_name, client_email, etc.)
- ✅ Triggers and functions created
- ✅ Permissions set correctly

## 🚨 If You Get Errors

**Common Issues:**

1. **"Permission denied"** - Make sure you're logged into the correct Supabase project
2. **"Table already exists"** - This is fine, the script uses `IF NOT EXISTS`
3. **"Function already exists"** - This is fine, the script uses `CREATE OR REPLACE`

## 📞 Need Help Right Now?

If you're still stuck:

1. Check your Supabase project URL matches your environment variables
2. Make sure your `.env.local` file has the correct Supabase credentials
3. Try running the SQL script in smaller chunks if it fails

## 🎯 Expected Result

After completing these steps:

- ✅ Contact form will submit successfully
- ✅ You'll get a reference number (like PROJ-2024-ABC123)
- ✅ Data will be stored in your Supabase database
- ✅ No more "Submission Failed" errors

**This WILL fix your problem - the issue is 100% the missing database table.**
