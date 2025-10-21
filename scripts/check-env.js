#!/usr/bin/env node

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

console.log('🔍 Environment Variables Check');
console.log('================================');

const requiredVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY'
];

const optionalVars = [
  'NEXT_PUBLIC_DEV_MODE',
  'NEXT_PUBLIC_ADMIN_EMAIL',
  'ADMIN_EMAIL',
  'SUPABASE_SERVICE_ROLE_KEY'
];

console.log('\n📋 Required Variables:');
let allRequired = true;
requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (value && value !== 'your_supabase_project_url_here' && value !== 'your_supabase_anon_key_here') {
    console.log(`✅ ${varName}: Set`);
  } else {
    console.log(`❌ ${varName}: Missing or placeholder`);
    allRequired = false;
  }
});

console.log('\n📋 Optional Variables:');
optionalVars.forEach(varName => {
  const value = process.env[varName];
  if (value && !value.includes('your_') && !value.includes('example.com')) {
    console.log(`✅ ${varName}: Set`);
  } else {
    console.log(`⚠️  ${varName}: Not set or placeholder`);
  }
});

console.log('\n🎯 Summary:');
if (allRequired) {
  console.log('✅ All required environment variables are set!');
  console.log('✅ Your form should work now!');
} else {
  console.log('❌ Missing required environment variables!');
  console.log('❌ Create .env.local file with your Supabase credentials');
  console.log('📖 See CREATE_ENV_LOCAL.md for instructions');
}

console.log('\n🔧 Next Steps:');
if (!allRequired) {
  console.log('1. Create .env.local file in project root');
  console.log('2. Add your Supabase credentials');
  console.log('3. Restart your development server');
  console.log('4. Test the form at /join-team');
} else {
  console.log('1. Restart your development server if you just added .env.local');
  console.log('2. Test the form at /join-team');
  console.log('3. Check browser console for any remaining errors');
}
