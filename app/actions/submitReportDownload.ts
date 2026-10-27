"use server";

import { supabase } from "../lib/supabaseServer";

export async function submitReportDownload(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();

  if (!name || !email) {
    return { success: false, error: "Missing required fields" };
  }

  const { error } = await supabase.from("report_downloads").insert({
    name,
    email,
    submitted_at: new Date().toISOString(),
  });

  if (error) {
    console.error("❌ report_downloads insert failed:", error);
    return { success: false, error: "Database insert failed" };
  }

  return { success: true };
}
