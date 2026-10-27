"use server";

import { supabase } from "../lib/supabaseServer";

export async function insertInquiry(formData: FormData) {
  const data = Object.fromEntries(formData);

  const { first_name, last_name, email, phone, company_description } = data;

  const { error } = await supabase.from("inquiries").insert({
    first_name: String(first_name),
    last_name: String(last_name),
    email: String(email),
    phone: phone ? Number(phone) : null, // ✅ BIGINT SAFE
    company_description: String(company_description),
    date_submitted: new Date().toISOString(),
  });

  if (error) {
    console.error("❌ Insert Error:", error);
    return { success: false };
  }

  return { success: true };
}


