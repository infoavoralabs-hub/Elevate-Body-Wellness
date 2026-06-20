"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2, Download } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function LeadMagnet() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source: 'lead_magnet' }),
      });
      if (!response.ok) throw new Error('Request failed');
      toast.success("Success! Check your inbox for the download link.");
      setEmail("");
      setName("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-sand/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[5%] w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-soft max-w-5xl mx-auto border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                <Download className="h-4 w-4" /> Free Download
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal leading-tight">
                Get the <span className="text-primary italic">5-Minute Morning Mobility</span> Guide
              </h2>
              <p className="text-lg text-gray-600">
                Stop waking up stiff. Download my free PDF guide featuring 5 simple movements to lubricate your joints and set you up for a pain-free day.
              </p>
              <ul className="space-y-3">
                {["Detailed step-by-step photos", "Modifications for all levels", "Printable checklist format"].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <div className="h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sand/30 rounded-2xl p-8 border border-border">
              <h3 className="font-display text-2xl font-bold mb-2">Where should I send it?</h3>
              <p className="text-sm text-gray-500 mb-6">Join {siteConfig.name}&apos;s newsletter. No spam, ever.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="lm-name" className="text-sm font-medium text-gray-700">First Name</label>
                  <Input 
                    id="lm-name" 
                    placeholder="Jane" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lm-email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input 
                    id="lm-email" 
                    type="email" 
                    placeholder="jane@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    className="bg-white"
                  />
                </div>
                <Button type="submit" disabled={loading} className="w-full h-12 text-base mt-2 btn-primary">
                  {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  Send My Free Guide
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By signing up, you agree to our privacy policy.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
