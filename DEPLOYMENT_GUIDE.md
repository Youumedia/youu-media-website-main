# 🚀 Deployment Guide - Youu Media Website

## Pre-Deployment Checklist

### ✅ **Code Changes Complete**

- Fixed freelancer application form submit button
- Created API route: `/api/freelancer-applications`
- Updated form to use API instead of direct Supabase
- Fixed database table name case sensitivity

### ⚠️ **Database Setup Required**

**CRITICAL:** Before deployment, you MUST set up the database:

1. **Go to Supabase Dashboard**

   - Visit: https://app.supabase.com
   - Select your project: `https://xelzztlyhmgjldxozuwh.supabase.co`
   - Go to "SQL Editor" → "New Query"

2. **Run Database Setup**

   - Copy content from `CREATE_FREELANCER_TABLE.sql`
   - Paste into Supabase SQL Editor
   - Click "Run" to execute

3. **Verify Table Created**
   - Check that `freelancer_applications` table exists
   - Verify it has all required columns

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

**Step 1: Prepare for Vercel**

```bash
# Build the project locally first
npm run build

# If build succeeds, you're ready for Vercel
```

**Step 2: Deploy to Vercel**

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings

**Step 3: Configure Environment Variables**
In Vercel dashboard, add these environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://xelzztlyhmgjldxozuwh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
NEXT_PUBLIC_DEV_MODE=false
```

**Step 4: Deploy**

- Click "Deploy"
- Wait for deployment to complete
- Test your live site!

---

### Option 2: Netlify

**Step 1: Build Settings**

```bash
# Build command
npm run build

# Publish directory
.next
```

**Step 2: Deploy**

1. Go to https://netlify.com
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables (same as Vercel)

---

### Option 3: Manual Server Deployment

**Step 1: Build for Production**

```bash
npm run build
npm run start
```

**Step 2: Configure Server**

- Set up Node.js server
- Configure environment variables
- Set up reverse proxy (nginx/Apache)
- Configure SSL certificate

---

## 🔧 Environment Variables for Production

### Required Variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xelzztlyhmgjldxozuwh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
NEXT_PUBLIC_DEV_MODE=false
```

### Optional Variables:

```env
NEXT_PUBLIC_ADMIN_EMAIL=admin@youumedia.com
ADMIN_EMAIL=admin@youumedia.com
RESEND_API_KEY=your_resend_key_here
```

---

## 🧪 Post-Deployment Testing

### Test Checklist:

- [ ] Homepage loads: `https://your-domain.com`
- [ ] Freelancer form works: `https://your-domain.com/join-team`
- [ ] Form submissions save to database
- [ ] Contact form works: `https://your-domain.com/contact`
- [ ] All pages load without errors
- [ ] Mobile responsive design works

### Test the Freelancer Form:

1. Go to `/join-team`
2. Fill out the form with test data
3. Click "Submit Application"
4. Should see success message
5. Check Supabase dashboard for new record

---

## 🐛 Common Deployment Issues

### Issue: "Table not found" error

**Solution:** Run the database setup script in Supabase

### Issue: Environment variables not loading

**Solution:**

- Check variable names (must start with `NEXT_PUBLIC_` for client-side)
- Restart deployment after adding variables
- Verify no typos in variable names

### Issue: Build fails

**Solution:**

```bash
# Check for TypeScript errors
npm run lint

# Check for build errors
npm run build
```

### Issue: Form submissions not working

**Solution:**

- Verify database table exists
- Check API route is accessible
- Verify environment variables are set

---

## 📊 Monitoring & Analytics

### Vercel Analytics

- Built-in analytics with Vercel
- Performance monitoring
- Error tracking

### Supabase Monitoring

- Database performance
- API usage
- Error logs

---

## 🔒 Security Considerations

### Production Security:

- ✅ Set `NEXT_PUBLIC_DEV_MODE=false`
- ✅ Use environment variables for secrets
- ✅ Enable Supabase Row Level Security
- ✅ Configure proper CORS settings
- ✅ Use HTTPS in production

### Database Security:

- ✅ RLS policies are enabled
- ✅ Public can only insert freelancer applications
- ✅ Admin access is properly configured

---

## 🎯 Success Criteria

Your deployment is successful when:

✅ **Website loads** without errors  
✅ **Freelancer form** submits successfully  
✅ **Database** stores applications  
✅ **All pages** are accessible  
✅ **Mobile responsive** design works  
✅ **Performance** is good (under 3s load time)

---

## 🆘 Support

If you encounter issues:

1. **Check Vercel/Netlify logs** for build errors
2. **Check Supabase logs** for database errors
3. **Verify environment variables** are set correctly
4. **Test locally** with `npm run build && npm run start`
5. **Check database setup** - run the SQL script

---

## 🎉 Final Steps

1. **Deploy to your chosen platform**
2. **Set up environment variables**
3. **Run database setup script**
4. **Test all functionality**
5. **Update DNS/domain settings**
6. **Monitor for any issues**

**Your freelancer application form will work perfectly once deployed!** 🚀
