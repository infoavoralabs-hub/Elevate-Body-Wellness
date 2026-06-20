import Link from "next/link";
import { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services#${service.slug}`} className="group block relative">
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl shadow-soft-lg -z-10"></div>
      
      <div className="p-8 md:p-10 border border-transparent group-hover:border-border/40 transition-colors duration-500 rounded-2xl h-full flex flex-col">
        <div className="w-12 h-12 rounded-full border border-border/60 flex items-center justify-center text-charcoal mb-8 group-hover:bg-charcoal group-hover:text-gold transition-colors duration-500">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        
        <h3 className="font-display text-2xl font-medium text-charcoal mb-4 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed font-light flex-1">
          {service.shortDescription}
        </p>
        
        <div className="mt-8 flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <span>Explore</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
