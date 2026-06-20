import Link from "next/link";
import { siteConfig, NAV_LINKS, WELLNESS_DISCLAIMER } from "@/lib/constants";
import { NewsletterForm } from "@/components/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="bg-obsidian text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}></div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-8 h-8 rounded-full bg-white/10 text-gold flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:bg-primary/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <span className="font-display font-semibold text-lg tracking-widest text-white uppercase">
                Elevate
              </span>
            </Link>
            <p className="text-white/60 text-[15px] leading-relaxed max-w-sm">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.socials.instagram} className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href={siteConfig.socials.facebook} className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href={siteConfig.socials.youtube} className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Navigation</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-[15px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-white/70 hover:text-white transition-colors text-[15px]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/70 hover:text-white transition-colors text-[15px]">Terms of Service</Link></li>
              <li><Link href="/faq" className="text-white/70 hover:text-white transition-colors text-[15px]">FAQ</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Newsletter</h3>
            <p className="text-white/60 text-[15px] mb-6 leading-relaxed">Exclusive performance insights and early access to intensive programs.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-white/40 max-w-2xl leading-relaxed">
            {WELLNESS_DISCLAIMER}
          </p>
          <p className="text-[13px] text-white/40 whitespace-nowrap">
            &copy; {new Date().getFullYear()} {siteConfig.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
