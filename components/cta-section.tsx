import Link from "next/link";

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CtaSection({
  title = "Ready to elevate your wellness?",
  description = "Apply for an initial consultation to discuss your history, goals, and whether we are a fit to work together.",
  buttonText = "Apply Now",
  buttonHref = "/booking",
}: CtaSectionProps) {
  return (
    <section className="relative py-32 bg-obsidian text-white overflow-hidden">
      {/* Background elements for luxury feel */}
      <div className="absolute inset-0 noise-overlay opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen"></div>
      
      <div className="container-tight relative z-10 text-center">
        <div className="w-12 h-[1px] bg-gold mx-auto mb-10"></div>
        
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium tracking-tight mb-8 leading-[1.1]">
          {title}
        </h2>
        
        <p className="text-lg md:text-xl text-white/60 mb-12 text-balance leading-relaxed font-light max-w-2xl mx-auto">
          {description}
        </p>
        
        <Link 
          href={buttonHref}
          className="inline-flex items-center justify-center bg-white text-charcoal hover:bg-gold hover:text-charcoal transition-all duration-300 py-5 px-10 rounded-full text-[13px] uppercase tracking-[0.15em] font-medium"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
