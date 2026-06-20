import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { getSupabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";
import { siteConfig } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactFormSchema.parse(body);

    if (validatedData.website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const dbData = {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        message: validatedData.message
    };

    // 1. Save to Supabase
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = getSupabaseAdmin();
      const { error } = await supabase
        .from('contacts')
        .insert([{
          ...dbData,
          status: 'new',
          created_at: new Date().toISOString()
        }]);

      if (error) console.error("Supabase Error:", error);
    } else {
      console.log("Mocking DB insert for contact:", dbData);
    }

    // 2. Send Email
    if (resend) {
      await resend.emails.send({
        from: `Website <noreply@${process.env.RESEND_DOMAIN || 'example.com'}>`,
        to: siteConfig.email,
        subject: `New Contact Message from ${validatedData.name}`,
        text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone}

Message:
${validatedData.message}
        `,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
