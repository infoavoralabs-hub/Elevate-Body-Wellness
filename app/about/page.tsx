import { buildMetadata } from "@/lib/seo";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "The Founder",
  description: "Learn about the clinical biomechanics and systemic recovery philosophy behind Elevate.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Immersive Dark Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-obsidian overflow-hidden pt-24">
        <div className="absolute inset-0 noise-overlay opacity-30"></div>
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop"
            alt="Elena Rostova Training"
            fill
            className="object-cover opacity-[0.15] mix-blend-luminosity grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>
        </div>

        <div className="container-tight relative z-10 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">The Origin</span>
              <div className="w-12 h-[1px] bg-gold"></div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-6 tracking-tight leading-[1.1]">
              A Rejection of<br />
              <span className="italic text-white/80">Mediocrity</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Elevate was founded on a singular premise: the standard fitness industry is fundamentally broken, optimizing for aesthetics at the expense of longevity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Philosophy Section - High Contrast White Space */}
      <section className="py-32 bg-white relative">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <Reveal variant="slide" className="relative">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop"
                  alt="Elena Rostova, Performance Specialist"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Abstract decorative element */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-gold/30 rounded-full flex items-center justify-center p-2 hidden md:flex">
                <div className="w-full h-full border border-gold/10 rounded-full flex items-center justify-center p-2 animate-[spin_30s_linear_infinite]">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-charcoal/20">
                    <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                  </svg>
                </div>
              </div>
            </Reveal>

            <div className="space-y-12">
              <Reveal>
                <SectionHeading 
                  eyebrow="The Architect"
                  title="Elena Rostova"
                  subtitle="Lead Performance & Mobility Specialist"
                  className="mb-8"
                />
              </Reveal>

              <div className="space-y-8 text-lg font-light leading-relaxed text-charcoal/80">
                <Reveal delay={0.1}>
                  <p>
                    For the first decade of my career, I operated within the standard confines of elite personal training. I trained executives, athletes, and founders to push past their physical limits. 
                  </p>
                </Reveal>
                
                <Reveal delay={0.2}>
                  <p>
                    But the model was flawed. Pushing limits without foundational biomechanical structural integrity inevitably leads to systemic failure. 
                  </p>
                </Reveal>
                
                <Reveal delay={0.3}>
                  <p>
                    After a severe spinal compression injury temporarily paralyzed my own trajectory, I abandoned the &quot;no pain, no gain&quot; dogma. I immersed myself in clinical biomechanics, neurological rehab, and autonomic nervous system regulation.
                  </p>
                </Reveal>
                
                <Reveal delay={0.4}>
                  <p className="pl-6 border-l-2 border-gold text-charcoal font-medium text-xl italic my-10">
                    &quot;Elevate is not a fitness program. It is a clinical, unyielding pursuit of physiological autonomy.&quot;
                  </p>
                </Reveal>
                
                <Reveal delay={0.5}>
                  <p>
                    Today, I engineer highly calibrated, low-friction recovery and output protocols for individuals whose time and physical capacity are their most heavily guarded assets.
                  </p>
                </Reveal>
              </div>
              
              <Reveal delay={0.6}>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                  <div>
                    <div className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-gold mb-2">Certifications</div>
                    <ul className="space-y-1 text-sm text-charcoal/70">
                      <li>Clinical Biomechanics (M.S.)</li>
                      <li>Advanced Neuromuscular Therapy</li>
                      <li>Functional Range Conditioning (FRCms)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-gold mb-2">Specialties</div>
                    <ul className="space-y-1 text-sm text-charcoal/70">
                      <li>Executive Performance</li>
                      <li>Post-Rehab Integration</li>
                      <li>Autonomic Regulation</li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaSection 
        title="Ready to rebuild?"
        description="Submit your application for a rigorous biomechanical audit and protocol mapping."
        buttonText="Apply for Audit"
      />
    </>
  );
}
