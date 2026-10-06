/** Supabase is optional: without these variables the app runs fully on localStorage. */
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured = () => SUPABASE_URL.startsWith("https://") && SUPABASE_ANON_KEY.length > 20;
