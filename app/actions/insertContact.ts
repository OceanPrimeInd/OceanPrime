"use server";

import { supabase } from "../lib/supabaseServer";

export async function insertContact(formData: FormData) {
  const data = Object.fromEntries(formData);

  const { first_name, last_name, email, phone, message } = data;

  const { error } = await supabase.from("contact").insert({
    first_name: String(first_name),
    last_name: String(last_name),
    email: String(email),
    phone: phone ? Number(phone) : null, // ✅ BIGINT SAFE
    message: String(message),
    created_at: new Date().toISOString(),
  });

  if (error) {
    console.error("❌ Insert Error:", error);
    return { success: false };
  }

  return { success: true };
}

