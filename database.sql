-- Supabase SQL Schema for ScamDNA Analysis History

-- 1. Create the table
create table analysis_history (
  id uuid primary key default gen_random_uuid(),
  message_hash text not null,
  risk_score integer not null,
  scam_type text not null,
  created_at timestamptz default now()
);

-- 2. Create indexes for performance
-- Index on created_at for fast retrieval of recent analyses
create index idx_analysis_history_created_at on analysis_history(created_at desc);
-- Index on message_hash for potential future deduplication or lookups
create index idx_analysis_history_message_hash on analysis_history(message_hash);

-- 3. Row Level Security (RLS)
alter table analysis_history enable row level security;

-- For a demo project where the backend uses the Service Role Key to bypass RLS,
-- we can keep the table locked down from the public API entirely.
-- The Service Role Key will automatically bypass these policies.

-- Alternatively, if you want to allow read-only access to anonymous users directly via Supabase client:
create policy "Allow anonymous read access to recent history"
  on analysis_history for select
  to anon
  using (true);

-- 4. Supabase Setup Instructions
-- - Go to the Supabase Dashboard -> SQL Editor
-- - Paste this entire script and click "Run"
-- - Go to Project Settings -> API to find your URL and Service Role Key
-- - Add them to the backend/.env file:
--     SUPABASE_URL=your-project-url
--     SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
