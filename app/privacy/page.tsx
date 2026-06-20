import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Elevate Body Wellness.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <div className="py-32 bg-background min-h-screen">
      <div className="container max-w-3xl prose-wellness">
        <h1 className="text-4xl font-display font-bold mb-8 text-charcoal">Privacy Policy</h1>
        <p>Last updated: June 2026</p>
        <p>This privacy policy explains how we collect, use, and protect your personal information.</p>
        
        <h2>Information We Collect</h2>
        <p>When you fill out a form on our site, we may collect:</p>
        <ul>
          <li>Name and email address</li>
          <li>Phone number</li>
          <li>Health and fitness goals</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use this information solely to:</p>
        <ul>
          <li>Respond to your inquiries</li>
          <li>Provide personal training services</li>
          <li>Send periodic wellness newsletters (if opted in)</li>
        </ul>

        <p>We do not sell or share your personal data with third parties.</p>
      </div>
    </div>
  );
}
