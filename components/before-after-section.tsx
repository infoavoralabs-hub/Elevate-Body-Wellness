import { transformations } from "@/data/transformations";
import { TransformationCard } from "./transformation-card";
import { SectionHeading } from "./section-heading";

export function BeforeAfterSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <SectionHeading
          title="Real People. Real Results."
          subtitle="Don't just take my word for it. See the transformations my clients have achieved."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {transformations.map((transform, index) => (
            <TransformationCard key={index} transformation={transform} />
          ))}
        </div>
      </div>
    </section>
  );
}
