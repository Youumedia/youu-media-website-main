## Supabase Setup

Set environment variables in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

Create tables in Supabase SQL editor:

```sql
create table jobs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  title text not null,
  type text not null,
  location text not null,
  date date not null,
  duration text not null,
  budget text not null,
  urgency text check (urgency in ('high','medium','low')) default 'medium',
  description text,
  requirements text[] default '{}',
  team_size text,
  slots integer not null default 1,
  runner_up_slots integer not null default 1,
  status text check (status in ('active','inactive','filled')) default 'active'
);

create table applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  freelancer_id uuid not null,
  job_id uuid not null references jobs(id) on delete cascade,
  status text check (status in ('primary','runner_up')) not null
);

create table portfolio_items (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  user_id uuid not null,
  path text not null
);
```

Create storage bucket `portfolio` with public access (optional) or generate signed URLs as needed.

# Youu Media website

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/youumediaagency-2198s-projects/v0-youu-media-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/A4amv2dsgJ2)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/youumediaagency-2198s-projects/v0-youu-media-website](https://vercel.com/youumediaagency-2198s-projects/v0-youu-media-website)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/A4amv2dsgJ2](https://v0.app/chat/projects/A4amv2dsgJ2)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository