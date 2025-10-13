#!/usr/bin/env node

/**
 * Environment Variables Verification Script
 * This script checks if your .env.local file is properly loaded
 */

// Load environment variables from .env.local
const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      process.env[key] = value;
    }
  });
}

console.log('\n🔍 Verifying Environment Variables...\n');

const requiredVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'NEXT_PUBLIC_DEV_MODE'
];

let allGood = true;

requiredVars.forEach(varName => {
  const value = process.env[varName];
  
  if (!value) {
    console.log(`❌ ${varName}: NOT SET`);
    allGood = false;
  } else if (value.includes('your-project-id') || value.includes('your-key-here')) {
    console.log(`⚠️  ${varName}: SET (but using placeholder value)`);
    console.log(`   Current: ${value.substring(0, 50)}...`);
  } else {
    console.log(`✅ ${varName}: SET`);
    console.log(`   Value: ${value.substring(0, 30)}...`);
  }
});

console.log('\n📋 Summary:');
if (!allGood) {
  console.log('❌ Some required environment variables are missing!');
  console.log('\n📖 Instructions:');
  console.log('1. Make sure .env.local file exists in the project root');
  console.log('2. Add your Supabase credentials from https://app.supabase.com');
  console.log('3. Restart your dev server after making changes\n');
  process.exit(1);
} else {
  console.log('✅ All required environment variables are set!');
  console.log('\n⚠️  NOTE: If you see placeholder values above, replace them with your actual Supabase credentials.\n');
}

