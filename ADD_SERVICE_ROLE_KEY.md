# 🔧 Add Service Role Key to .env.local

## Current Status
✅ Environment variables are now loading correctly!  
⚠️ Missing `SUPABASE_SERVICE_ROLE_KEY` for server-side operations

## What You Need to Do

**Add this line to your `.env.local` file:**

```env
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## How to Get Your Service Role Key

1. **Go to [https://app.supabase.com](https://app.supabase.com)**
2. **Select your project**
3. **Navigate to Settings → API**
4. **Copy the "Service Role Key"** (it's different from the anon key)
5. **Add it to your `.env.local` file**

## Your Complete .env.local Should Look Like:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xelzztlyhmgjldxozuwh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlbHp6dGx5aG1namxkeG96dXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MjEzNjYsImV4cCI6MjA3NDI5NzM2Nn0.EaO7URCnW5XN_nldMana4ESt_oBuuzBTTdTRrk0tby8

# Development Mode
NEXT_PUBLIC_DEV_MODE=true

# Admin Configuration (Optional)
NEXT_PUBLIC_ADMIN_EMAIL=your-email@example.com
ADMIN_EMAIL=your-email@example.com

# Service Role Key (for server-side operations)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## After Adding the Service Role Key:

1. **Save the `.env.local` file**
2. **Restart your development server:**
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev
   ```
3. **Test the form at `/join-team`**

## Why This Matters

The service role key allows the API to:
- Bypass Row Level Security (RLS) if needed
- Perform server-side operations
- Handle file uploads to Supabase Storage
- Ensure form data is always saved

**Your form should work perfectly after adding this key and restarting the server!** 🎯
