-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Bookings Table
create table public.bookings (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text not null,
  service text not null,
  preferredDate text,
  preferredTime text,
  goals text,
  heardAbout text,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Contacts Table
create table public.contacts (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text,
  inquiry text,
  message text not null,
  status text default 'unread',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Subscribers Table (Newsletter / Lead Magnet)
create table public.subscribers (
  id uuid default uuid_generate_v4() primary key,
  email text not null unique,
  name text,
  source text default 'newsletter',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Secure the tables with RLS
alter table public.bookings enable row level security;
alter table public.contacts enable row level security;
alter table public.subscribers enable row level security;

-- Create policies for Admin Service Role (The API routes use service role key, which bypasses RLS)
-- We don't need anon policies since all inserts are done securely via the Next.js API routes using SUPABASE_SERVICE_ROLE_KEY.
