import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { services } from "@/data/services";
import { programs } from "@/data/programs";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { ProgramCard } from "@/components/program-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CtaSection } from "@/components/cta-section";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* 1. Cinematic Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden bg-obsidian text-white">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2920&auto=format&fit=crop"
            alt="Performance training"
            fill
            className="object-cover object-center scale-105"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent z-0" />
        <div className="absolute inset-0 noise-overlay z-0"></div>

        <div className="container-tight relative z-10 text-center flex flex-col items-center mt-20">
          <Reveal variant="blur" direction="up" delay={0.2}>
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-gold"></div>
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-gold">
                {siteConfig.trainerName} — {siteConfig.trainerTitle}
              </span>
              <div className="w-8 h-[1px] bg-gold"></div>
            </div>
          </Reveal>
          
          <Reveal variant="dramatic" direction="up" delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight mb-8 leading-[1.05]">
              Master Your <span className="font-light italic text-white/80">Physical</span> Form
            </h1>
          </Reveal>
          
          <Reveal variant="fade" delay={0.6}>
            <p className="text-lg md:text-xl text-white/60 mb-12 text-balance leading-relaxed font-light max-w-2xl mx-auto">
              {siteConfig.tagline}
            </p>
          </Reveal>
          
          <Reveal variant="slide" direction="up" delay={0.8}>
            <Button asChild size="lg" className="btn-primary">
              <Link href="/booking">Apply for Coaching</Link>
            </Button>
          </Reveal>
        </div>
        
        {/* Scroll Indicator */}
        <Reveal variant="fade" delay={1.2} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 opacity-50">
            <span className="text-[9px] uppercase tracking-[0.3em] font-medium">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </Reveal>
      </section>

      {/* 2. The Philosophy (Editorial Statement) */}
      <section className="py-32 md:py-48 bg-white relative">
        <div className="container-tight text-center">
          <Reveal variant="fade">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-charcoal leading-[1.2] text-balance mb-12">
              You&apos;ve achieved success in every area of your life. <span className="italic text-muted-foreground font-light">Your body should not be the exception.</span>
            </h2>
          </Reveal>
          <Reveal variant="slide" direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto font-light">
              We reject the generic fitness industry. True wellness is not about exhaustion; it is about intelligent adaptation. We rebuild your foundation, eliminate chronic pain, and engineer a body capable of elite performance and effortless longevity.
            </p>
          </Reveal>
          <Reveal variant="fade" delay={0.4}>
             <div className="w-16 h-[1px] bg-charcoal/20 mx-auto mt-16"></div>
          </Reveal>
        </div>
      </section>

      {/* 3. Expertise (Services) */}
      <section className="py-32 bg-sand/30 border-t border-charcoal/5">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <Reveal variant="slide" direction="left" className="md:w-1/2">
              <SectionHeading
                eyebrow="Our Expertise"
                title="Systems over symptoms."
                className="mb-0"
              />
            </Reveal>
            <Reveal variant="fade" className="md:w-1/3">
              <p className="text-charcoal/60 leading-relaxed">
                We address the root cause of dysfunction through precision biomechanics, mobility restoration, and systemic strength training.
              </p>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {services.map((service, idx) => (
              <Reveal key={service.slug} delay={idx * 0.15} direction="up" variant="slide">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Standard (Process) */}
      <section className="py-32 bg-obsidian text-white relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay"></div>
        <div className="container relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="The Protocol"
              title="A calculated approach."
              light
              centered
            />
          </Reveal>
          
          <div className="max-w-5xl mx-auto mt-24">
            {[
              { step: "01", title: "Comprehensive Audit", desc: "A 90-minute deep dive into your biomechanics, injury history, and lifestyle constraints." },
              { step: "02", title: "Architectural Design", desc: "We engineer a bespoke protocol targeting your specific structural imbalances." },
              { step: "03", title: "Precision Execution", desc: "1-on-1 intensive sessions focusing on neurological adaptation and flawless mechanics." },
              { step: "04", title: "Systemic Evolution", desc: "Continuous data-driven adjustments to ensure perpetual progress without plateau." }
            ].map((item, idx) => (
              <Reveal key={item.step} delay={idx * 0.1} variant="slide" direction="up">
                <div className="group relative border-t border-white/10 py-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center hover:bg-white/[0.02] transition-colors px-6 -mx-6">
                  <div className="font-sans font-light text-5xl text-gold/50 group-hover:text-gold transition-colors w-20 shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-medium text-white mb-3 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
                    <p className="text-white/50 text-[15px] leading-relaxed max-w-2xl">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-white/10"></div>
          </div>
        </div>
      </section>

      {/* 5. Programs */}
      <section className="py-32 bg-white">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="Engagements"
              title="Transformative pathways."
              centered
            />
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
            {programs.map((program, idx) => (
              <Reveal key={program.title} delay={idx * 0.2} direction="up" variant="scale">
                <ProgramCard program={program} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Proof / Results */}
      <section className="py-32 bg-sand/30 overflow-hidden">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <SectionHeading
                eyebrow="The Standard"
                title="Uncompromising results."
                className="mb-0"
              />
              <Button asChild variant="outline" className="mt-8 md:mt-0 rounded-full group">
                <Link href="/testimonials" className="flex items-center gap-2">
                  View Case Studies
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Reveal>
          
          <div className="flex flex-nowrap overflow-x-auto pb-12 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar gap-8">
            {testimonials.slice(0, 4).map((testimonial, idx) => (
              <div key={testimonial.name} className="w-[85vw] md:w-[400px] shrink-0 snap-center">
                <Reveal delay={idx * 0.15} direction="left" variant="slide">
                  <TestimonialCard testimonial={testimonial} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <CtaSection />
    </>
  );
}
