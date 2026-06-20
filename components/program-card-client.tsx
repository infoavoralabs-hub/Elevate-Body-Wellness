"use client";

import { useState } from "react";
import { Program } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function ProgramCardClient({ program }: { program: Program }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          programName: program.title,
          priceId: "price_placeholder"
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to start checkout');
      }
    } catch (error) {
      console.error(error);
      toast.error("Direct checkout unavailable. Redirecting to application...");
      window.location.href = "/booking";
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn(
      "h-full flex flex-col transition-all duration-500 relative group",
      program.highlight ? "scale-105 z-10" : "scale-100 opacity-90 hover:opacity-100"
    )}>
      {/* Background layer */}
      <div className={cn(
        "absolute inset-0 rounded-none md:rounded-2xl -z-10 transition-colors duration-500",
        program.highlight ? "bg-obsidian" : "bg-charcoal"
      )}>
        <div className="absolute inset-0 noise-overlay opacity-30 rounded-none md:rounded-2xl"></div>
        {program.highlight && (
          <div className="absolute inset-0 border border-gold/20 rounded-none md:rounded-2xl pointer-events-none"></div>
        )}
      </div>

      {program.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-[10px] uppercase tracking-[0.2em] font-bold py-1.5 px-4 z-20">
          The Standard
        </div>
      )}

      <div className="p-8 md:p-12 flex flex-col h-full relative z-10 text-white">
        <div className="text-[11px] font-bold text-gold mb-6 uppercase tracking-[0.2em]">
          {program.duration}
        </div>
        
        <h3 className="font-display text-3xl font-medium mb-3">
          {program.title}
        </h3>
        
        <p className="text-white/50 text-[13px] uppercase tracking-wider mb-8 pb-8 border-b border-white/10">
          {program.idealFor}
        </p>
        
        <ul className="space-y-4 flex-1 mb-10">
          {program.includes.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0 mt-2"></div>
              <span className="text-white/70 font-light leading-relaxed text-[15px]">{item}</span>
            </li>
          ))}
        </ul>
        
        <button 
          onClick={handleCheckout} 
          disabled={loading}
          className={cn(
            "w-full py-4 text-[13px] uppercase tracking-[0.15em] font-medium transition-all flex items-center justify-center", 
            program.highlight 
              ? "bg-white text-charcoal hover:bg-gold hover:text-charcoal" 
              : "border border-white/20 text-white hover:bg-white hover:text-charcoal"
          )}
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {loading ? "Processing..." : "Select Protocol"}
        </button>
      </div>
    </div>
  );
}
