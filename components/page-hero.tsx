import { cn } from "@/lib/utils";
import { Reveal } from "./motion/reveal";

interface PageHeroProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
}

export function PageHero({ title, description, image, className }: PageHeroProps) {
  return (
    <div className={cn("relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-obsidian text-white border-b border-white/5", className)}>
      {image && (
        <>
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity"
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent pointer-events-none" />
        </>
      )}
      <div className="absolute inset-0 noise-overlay"></div>
      
      <div className="container-tight relative z-10 text-center flex flex-col items-center">
        <Reveal variant="blur" direction="up">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium tracking-tight mb-6 leading-[1.1]">
            {title}
          </h1>
        </Reveal>
        
        <Reveal variant="fade" delay={0.2}>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
        </Reveal>
        
        <Reveal variant="dramatic" direction="up" delay={0.3}>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto text-balance leading-relaxed font-light">
            {description}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
