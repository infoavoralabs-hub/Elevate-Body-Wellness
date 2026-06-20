"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger 
        className="md:hidden relative w-10 h-10 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
      >
        <span className="sr-only">Toggle menu</span>
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className={cn("w-full h-[1.5px] bg-foreground transition-all duration-300 origin-right", open ? "-rotate-45 -translate-x-1" : "")} />
          <span className={cn("w-full h-[1.5px] bg-foreground transition-all duration-300", open ? "opacity-0" : "")} />
          <span className={cn("w-full h-[1.5px] bg-foreground transition-all duration-300 origin-right", open ? "rotate-45 -translate-x-1" : "")} />
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px] bg-white/95 backdrop-blur-2xl border-l border-border/50 p-0 flex flex-col">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        
        <div className="flex-1 flex flex-col justify-center px-10">
          <div className="mb-12 flex items-center gap-3 opacity-50">
             <div className="w-6 h-6 rounded-full bg-charcoal text-gold flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
            </div>
            <span className="font-display font-semibold text-sm tracking-widest uppercase">Elevate</span>
          </div>
          
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="overflow-hidden"
                >
                  <span className={cn(
                    "block text-3xl sm:text-4xl font-display transition-all duration-500 hover:text-primary",
                    isActive ? "text-primary italic" : "text-charcoal"
                  )}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>
          
          <div className="mt-16">
            <Link 
              href="/booking" 
              onClick={() => setOpen(false)}
              className="btn-primary w-full max-w-[240px] flex items-center justify-between group"
            >
              <span>Client Portal</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
