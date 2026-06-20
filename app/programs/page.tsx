import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/program-card";

export const metadata = buildMetadata({
  title: "Programs",
  description: "Signature 4, 8, and 12-week wellness transformation programs.",
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <>
      <PageHero 
        title="Signature Programs" 
        description="Structured, milestone-driven plans designed to take you from where you are to where you want to be."
      />

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {programs.map((program) => (
              <ProgramCard key={program.title} program={program} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
