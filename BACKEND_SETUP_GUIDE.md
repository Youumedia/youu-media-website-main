# 🚀 Youu Media Backend System Setup Guide

This guide will help you set up and test your Supabase backend for the Youu Media website.

---

## 📋 Table of Contents
1. [Supabase Configuration](#supabase-configuration)
2. [Database Setup](#database-setup)
3. [Environment Variables](#environment-variables)
4. [Development Mode](#development-mode)
5. [Testing the System](#testing-the-system)
6. [Troubleshooting](#troubleshooting)

---

## 🔧 Supabase Configuration

### Step 1: Get Your Supabase Credentials

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Sign in or create a new account
3. Create a new project or select your existing project
4. Navigate to **Settings** → **API**
5. Copy the following values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **Anon/Public Key** (starts with `eyJ...`)

---

## 💾 Database Setup

### Step 2: Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Open the file `SUPABASE_SETUP_COMPLETE.sql` from this project
3. Copy the entire contents
4. Paste it into the Supabase SQL Editor
5. Click **Run** to execute the script

This will create:
- ✅ **jobs** table - For job postings
- ✅ **job_applications** table - For job applications from authenticated users
- ✅ **FreelancerApplications** table - For public freelancer application form submissions
- ✅ **portfolio_items** table - For user portfolio uploads
- ✅ All necessary indexes and RLS policies
- ✅ Sample job data for testing

### Step 3: Create Storage Bucket (Optional)

If you want to enable portfolio uploads:

1. In Supabase dashboard, go to **Storage**
2. Click **Create new bucket**
3. Name it: `portfolio`
4. Set as **Public** or configure RLS policies as needed

---

## ⚙️ Environment Variables

### Step 4: Configure Your .env.local File

1. A `.env.local` file has been created in your project root
2. Open it and replace the placeholder values with your actual Supabase credentials:

```env
# Replace these with your actual Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Development Mode - Keep as 'true' for testing
NEXT_PUBLIC_DEV_MODE=true

# Admin Configuration (optional)
NEXT_PUBLIC_ADMIN_EMAIL=your-email@example.com
ADMIN_EMAIL=your-email@example.com
```

**Important:** 
- Replace `NEXT_PUBLIC_SUPABASE_URL` with your Project URL
- Replace `NEXT_PUBLIC_SUPABASE_ANON_KEY` with your Anon Key
- Keep `NEXT_PUBLIC_DEV_MODE=true` for testing (see next section)

---

## 🔓 Development Mode

### What is Development Mode?

Development Mode allows you to **bypass authentication** when testing backend pages. This means:
- ✅ No need to sign in manually
- ✅ Instant access to dashboard, profile, and admin pages
- ✅ Test features without creating user accounts
- ✅ Visual indicator showing dev mode is active

### How to Enable/Disable

**Enable Development Mode** (for testing):
```env
NEXT_PUBLIC_DEV_MODE=true
```

**Disable Development Mode** (for production):
```env
NEXT_PUBLIC_DEV_MODE=false
```

### Pages with Dev Mode Support

When dev mode is enabled, you can access:
- `/dashboard` - User dashboard with job listings
- `/profile` - User profile and portfolio uploads
- `/admin/jobs` - Admin job management panel
- `/dashboard/jobs` - Alternative job board

You'll see a yellow banner at the top indicating dev mode is active.

---

## 🧪 Testing the System

### Step 5: Start the Development Server

```bash
npm run dev
```

The server will start on `http://localhost:3000`

### Step 6: Test Each Component

#### 1️⃣ **Test Freelancer Application Form**
- Navigate to: `http://localhost:3000/join-team`
- Fill out the form
- Click "Submit Application"
- ✅ Should save to `FreelancerApplications` table in Supabase

**Verify in Supabase:**
1. Go to **Table Editor** → **FreelancerApplications**
2. You should see your submission

---

#### 2️⃣ **Test Dashboard (Job Listings)**
- Navigate to: `http://localhost:3000/dashboard`
- ✅ Should show job listings from the database
- ✅ Should see dev mode banner (yellow)
- ✅ No authentication required

**What to check:**
- Jobs are displayed correctly
- Job details are visible
- "Apply Now" button is present

---

#### 3️⃣ **Test Profile Page**
- Navigate to: `http://localhost:3000/profile`
- ✅ Should show profile page with upload form
- ✅ Should see dev mode banner
- Try uploading a file (requires storage bucket setup)

---

#### 4️⃣ **Test Admin Jobs Page**
- Navigate to: `http://localhost:3000/admin/jobs`
- ✅ Should show all jobs with management controls
- ✅ Should see dev mode banner
- ✅ Can create, edit, delete jobs
- ✅ Can see applications for each job

**What to try:**
- Click "Create New Job" and add a test job
- Change job status (open/filled/closed)
- View applications count

---

#### 5️⃣ **Test API Endpoints**

You can test the API directly:

**Get all jobs:**
```
GET http://localhost:3000/api/jobs?admin=true
```

**Get applications:**
```
GET http://localhost:3000/api/applications
```

---

## ❌ Troubleshooting

### Issue: "Unauthorized" errors

**Solution:**
1. Make sure `NEXT_PUBLIC_DEV_MODE=true` in `.env.local`
2. Restart the dev server: `npm run dev`
3. Clear browser cache and refresh

---

### Issue: Supabase connection errors

**Solution:**
1. Verify your `.env.local` credentials are correct
2. Check that your Supabase project is active
3. Ensure you've run the database setup SQL script
4. Check browser console for specific error messages

---

### Issue: Jobs not displaying

**Solution:**
1. Go to Supabase **Table Editor** → **jobs**
2. Verify sample jobs were created
3. Check that job dates are in the future
4. Look in server console for error messages

---

### Issue: Freelancer form not submitting

**Solution:**
1. Check browser console for errors
2. Verify `FreelancerApplications` table exists in Supabase
3. Check RLS policies allow INSERT for anonymous users
4. Ensure all required form fields are filled

---

## 📊 Database Tables Overview

### **jobs**
- Stores job postings
- Fields: title, description, location, date, hours, pay, status, team_size
- Status: 'open', 'filled', 'closed'

### **job_applications**
- Stores applications from authenticated users
- Links to jobs via `job_id`
- Links to users via `user_id`
- State: 'applied', 'runner_up', 'accepted'

### **FreelancerApplications**
- Stores public freelancer applications
- No authentication required
- Captures: name, email, phone, portfolio, skills, etc.

### **portfolio_items**
- Stores user-uploaded portfolio files
- Links to users via `user_id`
- Stores file path in Supabase storage

---

## 🎯 Next Steps

After testing:

1. **Disable Dev Mode** before going live:
   ```env
   NEXT_PUBLIC_DEV_MODE=false
   ```

2. **Set up authentication** for real users:
   - Enable email/password auth in Supabase
   - Configure sign-in/sign-up flows
   - Test with real user accounts

3. **Configure admin access**:
   - Set `NEXT_PUBLIC_ADMIN_EMAIL` to your email
   - Or use `NEXT_PUBLIC_ADMIN_USER_ID` with a specific user ID

4. **Deploy to production**:
   - Push to your git repository
   - Deploy on Vercel/Netlify
   - Add production environment variables

---

## 🎉 You're All Set!

Your backend is now configured and ready for testing. If you encounter any issues, check the console logs and refer to the troubleshooting section above.

**Happy coding! 🚀**


