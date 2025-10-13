# ⚡ Quick Start: Environment Setup

## ✅ What's Been Fixed

Your VS Code environment is now properly configured! The stop sign icon issue has been resolved.

## 🎯 What You Need to Do Now

### Step 1: Get Your Supabase Credentials (2 minutes)

1. Visit: https://app.supabase.com
2. Go to your project → **Settings** → **API**
3. Copy these two values:
   - **Project URL**
   - **anon public key**

### Step 2: Update `.env.local` File

Open `.env.local` in the project root and replace:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
# ☝️ Replace with your actual Project URL

NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
# ☝️ Replace with your actual anon key
```

### Step 3: Verify & Start

```bash
# Verify environment variables are loaded
npm run verify-env

# Start the development server
npm run dev
```

**Important:** Restart the dev server after updating `.env.local`!

---

## 🔍 Quick Verification

After updating your credentials, run:

```bash
npm run verify-env
```

You should see:

```
✅ NEXT_PUBLIC_SUPABASE_URL: SET
✅ NEXT_PUBLIC_SUPABASE_ANON_KEY: SET
✅ NEXT_PUBLIC_DEV_MODE: SET
```

---

## 📁 Files Created

- ✅ `.env.local` - Your environment variables (git ignored)
- ✅ `.env.example` - Template for team members
- ✅ `.vscode/settings.json` - VS Code recognizes .env files
- ✅ `.vscode/extensions.json` - Recommended extensions
- ✅ `scripts/verify-env.js` - Environment checker
- ✅ `.gitignore` - Updated to protect your secrets

---

## 🚀 What's Working Now

1. **VS Code Recognition** - No more stop sign icon on `.env.local`
2. **Syntax Highlighting** - Proper .env file formatting
3. **Git Protection** - `.env.local` is properly ignored
4. **Verification Tools** - Easy way to check configuration
5. **Development Mode** - Set to `true` for easy testing

---

## 🆘 If Something's Wrong

### Environment variables not loading?

```bash
# Make sure the file exists
ls .env.local

# Check the content
cat .env.local

# Restart your dev server
npm run dev
```

### VS Code still showing issues?

1. Press `F1` → Type "Reload Window" → Enter
2. Install DotENV extension: `Ctrl+Shift+X` → Search "DotENV"

---

## 🔗 Next Steps

1. Add your Supabase credentials to `.env.local`
2. Run `npm run verify-env` to confirm
3. Start dev server: `npm run dev`
4. Visit: http://localhost:3000

---

**Need more details?** See `ENV_SETUP_INSTRUCTIONS.md` for comprehensive documentation.

