import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/testimonial-card";
import { BeforeAfterSection } from "@/components/before-after-section";

export const metadata = buildMetadata({
  title: "Testimonials",
  description: "Read success stories and transformations from our clients.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero 
        title="Success Stories" 
        description="Don't just take my word for it. Read about the real results achieved by real clients."
      />

      <BeforeAfterSection />

      <section className="py-24 bg-sand/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
