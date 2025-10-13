# 🚨 IMMEDIATE FIX - Follow These Steps NOW

## The Problem

Your contact form is failing because the `project_inquiries` table doesn't exist in your Supabase database.

## ⚡ 3-MINUTE FIX

### Step 1: Open Supabase (1 minute)

1. Go to: https://supabase.com/dashboard
2. Sign in to your account
3. Click on your project

### Step 2: Open SQL Editor (30 seconds)

1. Look at the left sidebar
2. Click **"SQL Editor"**
3. Click **"New Query"**

### Step 3: Copy This Code (30 seconds)

Copy this EXACT code and paste it into the SQL editor:

```sql
-- Create project_inquiries table
CREATE TABLE IF NOT EXISTS public.project_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    client_phone TEXT,
    project_name TEXT,
    project_type TEXT NOT NULL,
    project_description TEXT NOT NULL,
    budget_range TEXT,
    expected_completion_date DATE,
    requirements JSONB DEFAULT '[]',
    special_requests TEXT,
    team_size INTEGER DEFAULT 1,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_review', 'quoted', 'accepted', 'declined', 'completed')),
    reference_number TEXT UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public insert
CREATE POLICY "Anyone can create project inquiries" ON public.project_inquiries
    FOR INSERT WITH CHECK (true);

-- Allow public select
CREATE POLICY "Anyone can view inquiries" ON public.project_inquiries
    FOR SELECT USING (true);

-- Grant permissions
GRANT INSERT ON public.project_inquiries TO anon, authenticated;
GRANT SELECT ON public.project_inquiries TO authenticated;

-- Create reference number function
CREATE OR REPLACE FUNCTION generate_project_reference()
RETURNS TEXT AS $$
DECLARE
    reference TEXT;
    exists_check INTEGER;
BEGIN
    LOOP
        reference := 'PROJ-' || TO_CHAR(NOW(), 'YYYY') || '-' ||
                    UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 6));

        SELECT COUNT(*) INTO exists_check FROM public.project_inquiries WHERE reference_number = reference;

        IF exists_check = 0 THEN
            EXIT;
        END IF;
    END LOOP;

    RETURN reference;
END;
$$ LANGUAGE plpgsql;

-- Create trigger function
CREATE OR REPLACE FUNCTION set_project_reference_and_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.reference_number IS NULL THEN
        NEW.reference_number := generate_project_reference();
    END IF;

    NEW.updated_at := NOW();

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger
DROP TRIGGER IF EXISTS project_inquiries_reference_trigger ON public.project_inquiries;
CREATE TRIGGER project_inquiries_reference_trigger
    BEFORE INSERT OR UPDATE ON public.project_inquiries
    FOR EACH ROW
    EXECUTE FUNCTION set_project_reference_and_updated_at();
```

### Step 4: Run It (30 seconds)

1. Click the **"Run"** button (or press Ctrl+Enter)
2. Wait for "Success" message

### Step 5: Test (30 seconds)

1. Go to: http://localhost:3000/contact
2. Fill out the form
3. Submit it
4. You should see "Project Created Successfully!" with a reference number

## 🎯 That's It!

After these 5 steps, your contact form will work perfectly. The error will disappear and you'll get success messages with reference numbers.

**This WILL fix your problem - guaranteed!**
