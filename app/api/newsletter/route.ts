import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendLeadMagnetEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { email, name, source } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = getSupabaseAdmin();
      const { error } = await supabase
        .from('subscribers')
        .insert([{ 
          email, 
          name: name || null,
          source: source || 'newsletter',
          created_at: new Date().toISOString() 
        }]);

      // Ignore unique constraint violations (already subscribed)
      if (error && error.code !== '23505') {
        console.error("Supabase Error:", error);
      }

      // If they subscribed via the lead magnet, trigger the PDF email immediately
      if (source === 'lead_magnet' && (!error || error.code === '23505')) {
        await sendLeadMagnetEmail(email, name);
      }
    } else {
      console.log("Mocking DB insert for newsletter:", email);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Newsletter submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
