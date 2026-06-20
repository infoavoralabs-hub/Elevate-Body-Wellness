import { NextResponse } from "next/server";
import { bookingFormSchema } from "@/lib/validations";
import { getSupabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";
import { siteConfig } from "@/lib/constants";

// Graceful degradation if keys are missing
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = bookingFormSchema.parse(body);

    if (validatedData.website) {
      // Honeypot caught a bot
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 1. Save to Supabase (if configured)
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = getSupabaseAdmin();
      const { error } = await supabase
        .from('bookings')
        .insert([{
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          preferredDate: validatedData.preferredDate,
          preferredTime: validatedData.preferredTime,
          service: validatedData.service,
          goals: validatedData.goals,
          heardAbout: validatedData.heardAbout,
          status: 'pending',
          created_at: new Date().toISOString()
        }]);

      if (error) {
        console.error("Supabase Error:", error);
      }
    } else {
      console.log("Mocking database insert for booking:", validatedData);
    }

    // 2. Send Email Notification (if configured)
    if (resend) {
      await resend.emails.send({
        from: `Website <noreply@${process.env.RESEND_DOMAIN || 'example.com'}>`,
        to: siteConfig.email,
        subject: `New Booking Request from ${validatedData.name}`,
        text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone}
Date: ${validatedData.preferredDate}
Time: ${validatedData.preferredTime}
Service: ${validatedData.service}
Goals: ${validatedData.goals}
Heard About: ${validatedData.heardAbout || 'N/A'}
        `,
      });
    } else {
      console.log("Mocking email send for booking");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
