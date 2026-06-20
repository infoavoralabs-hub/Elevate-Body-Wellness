import { Resend } from 'resend';
import { LeadMagnetEmail } from '@/components/emails/lead-magnet-email';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key');
const domain = process.env.RESEND_DOMAIN || 'elevatebodywellness.com';

export async function sendLeadMagnetEmail(email: string, name?: string) {
  if (!process.env.RESEND_API_KEY) {
    console.log(`[Email Mock] Sending Lead Magnet to ${email}`);
    return { success: true };
  }

  try {
    const data = await resend.emails.send({
      from: `Elevate Body Wellness <hello@${domain}>`,
      to: [email],
      subject: 'Your 5-Minute Morning Mobility Guide',
      react: LeadMagnetEmail({ 
        name, 
        downloadUrl: `https://${domain}/lead-magnet-pdf-placeholder.pdf` 
      }),
    });

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}
