"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 border-b border-transparent",
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-sm py-4 border-border/50"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50 group">
          {/* Luxury Logo Mark */}
          <div className="w-8 h-8 rounded-full bg-charcoal text-gold flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
          </div>
          <div className="h-5 w-[1px] bg-border mx-1"></div>
          <span className="font-display font-semibold text-lg tracking-wide text-charcoal">
            ELEVATE <span className="font-light italic text-muted-foreground">Wellness</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[13px] uppercase tracking-[0.15em] font-medium transition-colors relative group py-2",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-charcoal"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 transition-transform origin-left duration-300",
                    isActive ? "scale-x-100" : "group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/booking"
            className="hidden md:inline-flex btn-primary !py-2.5 !px-6 !rounded-full !text-[13px] !uppercase !tracking-wider"
          >
            Client Portal
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
