"use server";

import { supabase } from "../lib/supabaseServer";

export async function subscribeNewsletter(email: string) {
  if (!email || !email.includes("@")) {
    return { success: false, error: "Invalid email" };
  }

  // Try inserting the subscriber
  const { error } = await supabase
    .from("newsletter_subscriber")
    .insert({ email, subscribed_at: new Date().toISOString() });

  if (error) {
    if (error.code === "23505") {
      // unique_violation
      return { success: false, error: "Email already subscribed" };
    }
    console.error("❌ Newsletter insert error:", error);
    return { success: false, error: "Database error" };
  }

  return { success: true };
}
