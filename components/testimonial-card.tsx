import { Testimonial } from "@/lib/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="h-full flex flex-col p-8 md:p-10 bg-white border border-border/40 group hover:border-charcoal/20 transition-all duration-500 relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-charcoal scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div className="mb-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold/60 mb-6">
            <path d="M10 11L8.5 16H5.5L7 11H5V5H10V11ZM19 11L17.5 16H14.5L16 11H14V5H19V11Z" fill="currentColor"/>
          </svg>
          <blockquote className="text-charcoal/90 font-display text-lg leading-relaxed md:text-xl">
            &quot;{testimonial.quote}&quot;
          </blockquote>
        </div>
        
        <div className="flex flex-col gap-4 mt-auto">
          <div className="w-10 h-[1px] bg-border"></div>
          <div>
            <div className="font-sans text-[13px] font-bold tracking-[0.1em] uppercase text-charcoal">{testimonial.name}</div>
            <div className="text-[12px] text-muted-foreground uppercase tracking-widest mt-1">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
