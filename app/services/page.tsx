import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { services } from "@/data/services";
import { CheckCircle2, Activity, Move, User, Heart, Apple, Laptop } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  activity: <Activity className="h-8 w-8" />,
  move: <Move className="h-8 w-8" />,
  user: <User className="h-8 w-8" />,
  heart: <Heart className="h-8 w-8" />,
  apple: <Apple className="h-8 w-8" />,
  laptop: <Laptop className="h-8 w-8" />,
};

export const metadata = buildMetadata({
  title: "Services",
  description: "Explore our holistic body wellness services including personal training, mobility, and recovery coaching.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        title="Our Services" 
        description="Comprehensive wellness solutions designed to address your unique movement, strength, and recovery needs."
      />

      <section className="py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.slug} id={service.slug} className="scroll-mt-32">
                <div key={service.slug} className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 w-full relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-soft">
                    <div className="bg-sand/30 p-10 rounded-3xl h-full flex flex-col justify-center">
                      <div className="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-8 transition-transform duration-300 hover:scale-110">
                        {iconMap[service.icon] || <Activity className="h-8 w-8" />}
                      </div>
                      <h2 className="text-3xl font-display font-bold text-charcoal mb-6">{service.title}</h2>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      <Button asChild className="w-fit btn-primary">
                        <Link href={`/booking?service=${service.slug}`}>Book this service</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <div className="bg-white border border-border p-10 rounded-3xl shadow-sm">
                      <h3 className="font-display font-semibold text-xl mb-6 border-b border-border pb-4">Key Benefits</h3>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
