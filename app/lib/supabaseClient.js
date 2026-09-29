import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zydhfhfhspflvhlpmokj.supabase.co';
const supabasePublishableKey = 'sb_publishable_DJN48TNChvPce3MZ7bDaiw_5Q8Eam6x';

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});
