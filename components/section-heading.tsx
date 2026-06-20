import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  centered = false,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-16 md:mb-24", centered && "text-center flex flex-col items-center", className)}>
      {eyebrow && (
        <div className={cn(
          "inline-flex items-center gap-4 mb-6",
          centered ? "justify-center" : "justify-start"
        )}>
          {!centered && <div className="w-8 h-[1px] bg-gold"></div>}
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </span>
          {centered && <div className="w-8 h-[1px] bg-gold"></div>}
        </div>
      )}
      <h2 className={cn(
        "text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-6 leading-[1.1]",
        light ? "text-white" : "text-charcoal"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl font-light max-w-2xl text-balance leading-relaxed",
          centered ? "mx-auto" : "",
          light ? "text-white/70" : "text-muted-foreground"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
