import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // SERVER ONLY

export const supabase = createClient(url, serviceRoleKey, {
  auth: { persistSession: false }, // server actions don't need sessions
});
