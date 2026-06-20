"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { bookingFormSchema } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { services } from "@/data/services";

type BookingFormValues = z.infer<typeof bookingFormSchema>;

export function BookingForm() {
  const [loading, setLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      consent: false,
    }
  });

  const onSubmit = async (data: BookingFormValues) => {
    if (data.website) return; // Honeypot
    
    setLoading(true);
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit booking');
      
      toast.success("Audit request received. Our team will contact you within 24 hours.");
      reset();
    } catch {
      toast.error("An error occurred. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = "bg-transparent border-0 border-b border-border/50 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold transition-colors text-charcoal";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      <div className="hidden">
        <Label htmlFor="b-website">Website</Label>
        <Input id="b-website" {...register("website")} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4 border-b border-border/40 pb-4">
          <span className="text-[10px] text-gold font-bold uppercase tracking-[0.2em]">01</span>
          <h3 className="font-display text-xl text-charcoal">Personal Dossier</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-3">
            <Label htmlFor="b-name" className="text-[11px] uppercase tracking-widest text-muted-foreground">Full Name</Label>
            <Input id="b-name" {...register("name")} className={errors.name ? "border-b-destructive text-charcoal bg-transparent border-0 border-b rounded-none px-0 focus-visible:ring-0" : inputStyles} />
            {errors.name && <p className="text-[11px] text-destructive tracking-wide mt-1">{errors.name.message}</p>}
          </div>
          <div className="space-y-3">
            <Label htmlFor="b-email" className="text-[11px] uppercase tracking-widest text-muted-foreground">Email Address</Label>
            <Input id="b-email" type="email" {...register("email")} className={errors.email ? "border-b-destructive text-charcoal bg-transparent border-0 border-b rounded-none px-0 focus-visible:ring-0" : inputStyles} />
            {errors.email && <p className="text-[11px] text-destructive tracking-wide mt-1">{errors.email.message}</p>}
          </div>
        </div>
        <div className="space-y-3">
          <Label htmlFor="b-phone" className="text-[11px] uppercase tracking-widest text-muted-foreground">Direct Line</Label>
          <Input id="b-phone" type="tel" {...register("phone")} className={errors.phone ? "border-b-destructive text-charcoal bg-transparent border-0 border-b rounded-none px-0 focus-visible:ring-0" : inputStyles} />
          {errors.phone && <p className="text-[11px] text-destructive tracking-wide mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4 border-b border-border/40 pb-4">
          <span className="text-[10px] text-gold font-bold uppercase tracking-[0.2em]">02</span>
          <h3 className="font-display text-xl text-charcoal">Protocol Parameters</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-3">
            <Label htmlFor="b-date" className="text-[11px] uppercase tracking-widest text-muted-foreground">Preferred Date</Label>
            <Input id="b-date" type="date" {...register("preferredDate")} className={errors.preferredDate ? "border-b-destructive text-charcoal bg-transparent border-0 border-b rounded-none px-0 focus-visible:ring-0" : inputStyles} />
            {errors.preferredDate && <p className="text-[11px] text-destructive tracking-wide mt-1">{errors.preferredDate.message}</p>}
          </div>
          <div className="space-y-3">
            <Label className="text-[11px] uppercase tracking-widest text-muted-foreground">Preferred Time</Label>
            <Select onValueChange={(val: string | null) => val && setValue("preferredTime", val)}>
              <SelectTrigger className={errors.preferredTime ? "border-b-destructive text-charcoal bg-transparent border-0 border-b rounded-none px-0 focus-visible:ring-0" : inputStyles}>
                <SelectValue placeholder="Select a window" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                <SelectItem value="evening">Evening (4PM - 7PM)</SelectItem>
              </SelectContent>
            </Select>
            {errors.preferredTime && <p className="text-[11px] text-destructive tracking-wide mt-1">{errors.preferredTime.message}</p>}
          </div>
        </div>
        <div className="space-y-3">
          <Label className="text-[11px] uppercase tracking-widest text-muted-foreground">Primary Objective</Label>
          <Select onValueChange={(val: string | null) => val && setValue("service", val)}>
            <SelectTrigger className={errors.service ? "border-b-destructive text-charcoal bg-transparent border-0 border-b rounded-none px-0 focus-visible:ring-0" : inputStyles}>
              <SelectValue placeholder="Select intervention type" />
            </SelectTrigger>
            <SelectContent>
              {services.map(s => (
                <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>
              ))}
              <SelectItem value="not_sure">Comprehensive Assessment Needed</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && <p className="text-[11px] text-destructive tracking-wide mt-1">{errors.service.message}</p>}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4 border-b border-border/40 pb-4">
          <span className="text-[10px] text-gold font-bold uppercase tracking-[0.2em]">03</span>
          <h3 className="font-display text-xl text-charcoal">Current Status</h3>
        </div>
        <div className="space-y-3">
          <Label htmlFor="b-goals" className="text-[11px] uppercase tracking-widest text-muted-foreground">Detail your current limitations & goals</Label>
          <Textarea 
            id="b-goals" 
            rows={4}
            {...register("goals")} 
            className={errors.goals ? "border-b-destructive text-charcoal bg-transparent border-0 border-b rounded-none px-0 focus-visible:ring-0 resize-none" : `${inputStyles} resize-none`} 
          />
          {errors.goals && <p className="text-[11px] text-destructive tracking-wide mt-1">{errors.goals.message}</p>}
        </div>
        <div className="space-y-3">
          <Label htmlFor="b-heard" className="text-[11px] uppercase tracking-widest text-muted-foreground">Referral Source</Label>
          <Input id="b-heard" {...register("heardAbout")} className={inputStyles} />
        </div>
      </div>

      <div className="space-y-6 pt-4 border-t border-border/20">
        <div className="flex items-start space-x-4">
          <Checkbox 
            id="consent" 
            // eslint-disable-next-line react-hooks/incompatible-library
            checked={watch("consent") === true}
            onCheckedChange={(checked) => setValue("consent", checked as boolean)}
            className="mt-1 border-charcoal/30 data-[state=checked]:bg-charcoal data-[state=checked]:border-charcoal"
          />
          <Label htmlFor="consent" className="text-[13px] font-light text-charcoal/70 leading-relaxed cursor-pointer">
            I acknowledge that Elevate operates at maximum capacity and submitting this dossier does not guarantee acceptance into a protocol. I agree to the Terms of Service.
          </Label>
        </div>
        {errors.consent && <p className="text-[11px] text-destructive pl-8 tracking-wide">{errors.consent.message}</p>}
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-obsidian hover:bg-gold text-white hover:text-charcoal transition-all duration-300 h-16 rounded-none text-[13px] uppercase tracking-[0.2em] font-medium mt-8">
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {loading ? "Processing..." : "Submit Application"}
      </Button>
    </form>
  );
}
