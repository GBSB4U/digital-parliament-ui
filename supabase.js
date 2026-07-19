const SUPABASE_URL = "https://dvsdqnhjucguavevcfjq.supabase.co";

const SUPABASE_ANON_KEY = "यहाँ अपनी Publishable Key (sb_publishable...) पेस्ट करें";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
