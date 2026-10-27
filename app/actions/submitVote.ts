"use server";

import { supabase } from "../lib/supabaseServer";

export async function submitVote(formData: FormData) {
  const data = Object.fromEntries(formData);

  const first_name = String(data.first_name || "");
  const last_name = String(data.last_name || "");
  const email = String(data.email || "");
  const vote_choice = String(data.vote_choice || "");
  const comments = String(data.comments || "");

  if (!email || !vote_choice) {
    return { success: false, error: "Missing required fields" };
  }

  // ✅ Check if user already voted
  const { data: existing, error: checkError } = await supabase
    .from("voting_form")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (checkError) {
    console.error("❌ Error checking existing vote:", checkError);
    return { success: false, error: "Database check failed" };
  }

  if (existing) {
    return { success: false, error: "User already voted" };
  }

  // ✅ Insert new vote
  const { error: insertError } = await supabase.from("voting_form").insert({
    first_name,
    last_name,
    email,
    vote_choice,
    comments,
    submitted_at: new Date().toISOString(),
  });

  if (insertError) {
    console.error("❌ Insert vote failed:", insertError);
    return { success: false, error: "Database insert failed" };
  }

  return { success: true };
}
