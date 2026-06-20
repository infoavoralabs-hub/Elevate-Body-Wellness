import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/constants";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Elevate Body Wellness.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Get in Touch" 
        description="Have a question about our services? Send us a message and we'll get back to you within 24 hours."
      />

      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="font-display font-semibold text-2xl mb-6">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 text-gray-600">
                    <MapPin className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal mb-1">Location</p>
                      <p>{siteConfig.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-gray-600">
                    <Phone className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal mb-1">Phone</p>
                      <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="hover:text-primary transition-colors">{siteConfig.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-gray-600">
                    <Mail className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal mb-1">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">{siteConfig.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-soft border border-border">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
