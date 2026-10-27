"use server";

import { supabase } from "../lib/supabaseServer";
import nodemailer from "nodemailer";

export async function insertInvestor(formData: FormData) {
  try {
    const data = Object.fromEntries(formData);

    const firstname = String(data.firstname || "");
    const lastname = String(data.lastname || "");
    const email = String(data.email || "");
    const mobile = data.mobile ? Number(data.mobile) : null; // ✅ BIGINT SAFE
    const message = String(data.message || "");

    // ✅ 1. Insert into Supabase table
    const { error } = await supabase.from("investors").insert({
      firstname,
      lastname,
      email,
      mobile,
      message,
      date_submitted: new Date().toISOString(),
    });

    if (error) {
      console.error("❌ Insert Error:", error);
      return { success: false, error: "Database insert failed" };
    }

    // ✅ 2. Send email notification after successful insert
    try {
      // Use your SMTP or transactional email service
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, // e.g. "smtp.gmail.com" or "smtp.office365.com"
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const emailBody = `
        <h2 style="color:#004080;">New Investor Submission</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile ?? "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p style="font-size:13px;color:#777;">This notification was sent automatically from OceanPrime.co</p>
      `;

      await transporter.sendMail({
        from: `"Ocean Prime" <hello@oceanprime.co>`,
        to: "jayani.bhatwadiya@oceanprime.co", // ✅ admin email
        subject: "New Investor Submission for Approval",
        html: emailBody,
      });

      console.log("✅ Email sent successfully");
    } catch (mailError) {
      console.error("❌ Email sending failed:", mailError);
      // Note: we don't block success on mail failure
    }

    return { success: true };
  } catch (e) {
    console.error("❌ Unexpected error in insertInvestor:", e);
    return { success: false, error: "Unexpected server error" };
  }
}
