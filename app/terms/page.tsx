import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  noIndex: true,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="py-32 bg-background min-h-screen">
      <div className="container max-w-3xl prose-wellness">
        <h1 className="text-4xl font-display font-bold mb-8 text-charcoal">Terms of Service</h1>
        <p>Last updated: June 2026</p>
        
        <h2>1. Agreement to Terms</h2>
        <p>By accessing our website and using our services, you agree to be bound by these Terms of Service.</p>

        <h2>2. Medical Disclaimer</h2>
        <p>The information provided on this website and in our training programs is for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician before beginning any new exercise or nutrition program.</p>

        <h2>3. Cancellations & Refunds</h2>
        <p>Appointments must be canceled at least 24 hours in advance to avoid being charged for the session. Program purchases are non-refundable after the first 14 days.</p>
      </div>
    </div>
  );
}
