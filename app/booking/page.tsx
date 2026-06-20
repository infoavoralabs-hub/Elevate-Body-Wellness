import { buildMetadata } from "@/lib/seo";
import { BookingForm } from "@/components/booking-form";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export const metadata = buildMetadata({
  title: "Apply for Audit",
  description: "Submit your application for a rigorous biomechanical audit and protocol mapping.",
  noIndex: true, 
  path: "/booking",
});

export default function BookingPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-background relative overflow-hidden">
        {/* Abstract structural background */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-sand/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        
        <div className="container-tight relative z-10">
          <Reveal>
            <SectionHeading 
              eyebrow="Application"
              title="Initiate Protocol"
              subtitle="Due to the uncompromising nature of our work and strict capacity limits, we only accept clients who are prepared for a total systemic overhaul. Please provide detailed information below."
            />
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <div className="bg-white p-8 md:p-14 border border-border/60 shadow-soft-xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20"></div>
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
