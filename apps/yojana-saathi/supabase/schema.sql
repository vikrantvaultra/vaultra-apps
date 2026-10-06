-- Yojana Saathi: optional sync for signed-in users.
-- Run once in the Supabase SQL editor. Every table is private to its owner via RLS.

create table if not exists public.profiles (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,   -- eligibility answers (income as a band, never exact)
  updated_at timestamptz not null default now()
);

create table if not exists public.bookmarks (
  user_id    uuid not null references auth.users (id) on delete cascade,
  slug       text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, slug)
);

create table if not exists public.kundli (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,   -- "already receiving" ticks and optional first name
  updated_at timestamptz not null default now()
);

-- Issue reports and contact messages. Anyone may insert; nobody can read through the API.
create table if not exists public.feedback (
  id         bigint generated always as identity primary key,
  kind       text not null check (kind in ('scheme-issue', 'contact')),
  slug       text,
  type       text,
  name       text,
  message    text not null check (char_length(message) between 5 and 2000),
  email      text,
  page       text,
  created_at timestamptz not null default now()
);

alter table public.profiles  enable row level security;
alter table public.bookmarks enable row level security;
alter table public.kundli    enable row level security;
alter table public.feedback  enable row level security;

create policy "own profile"   on public.profiles  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own bookmarks" on public.bookmarks for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own kundli"    on public.kundli    for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "anyone can send feedback" on public.feedback for insert to anon, authenticated with check (true);

-- "Delete my account and all data": removes the auth user; rows above go with it (on delete cascade).
create or replace function public.delete_my_account()
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null then
    raise exception 'not signed in';
  end if;
  delete from auth.users where id = auth.uid();
end;
$$;

revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
