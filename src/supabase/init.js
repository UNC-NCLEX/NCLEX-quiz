import { createClient } from "@supabase/supabase-js";

// Provide a custom schema. Defaults to "public".
//gets supabase key and url from .env file

const supabaseUrl = process.env.VUE_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.VUE_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
