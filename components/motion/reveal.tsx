"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  variant?: "fade" | "slide" | "blur" | "scale" | "dramatic";
  className?: string;
  duration?: number;
}

export function Reveal({
  children,
  width = "100%",
  delay = 0,
  direction = "up",
  variant = "slide",
  className,
  duration = 0.8,
}: RevealProps) {
  const ref = useRef(null);
  // Using margin to trigger slightly before it comes into view for smoother UX
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const mainControls = useAnimation();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getHiddenVariant = (): Variant => {
    if (prefersReducedMotion) return { opacity: 0 };
    
    if (variant === "blur") return { opacity: 0, filter: "blur(12px)", y: direction === "up" ? 20 : 0 };
    if (variant === "scale") return { opacity: 0, scale: 0.95 };
    if (variant === "dramatic") return { opacity: 0, y: direction === "up" ? 40 : 0, scale: 0.98, filter: "blur(8px)" };
    if (variant === "fade" || direction === "none") return { opacity: 0 };

    switch (direction) {
      case "up": return { opacity: 0, y: 30 };
      case "down": return { opacity: 0, y: -30 };
      case "left": return { opacity: 0, x: 30 };
      case "right": return { opacity: 0, x: -30 };
      default: return { opacity: 0, y: 30 };
    }
  };

  const getVisibleVariant = (): Variant => {
    if (prefersReducedMotion) return { opacity: 1 };
    
    if (variant === "blur") return { opacity: 1, filter: "blur(0px)", y: 0 };
    if (variant === "scale") return { opacity: 1, scale: 1 };
    if (variant === "dramatic") return { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" };
    if (variant === "fade" || direction === "none") return { opacity: 1 };

    switch (direction) {
      case "up":
      case "down": return { opacity: 1, y: 0 };
      case "left":
      case "right": return { opacity: 1, x: 0 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <div ref={ref} className={cn("relative overflow-visible", className)} style={{ width }}>
      <motion.div
        variants={{
          hidden: getHiddenVariant(),
          visible: getVisibleVariant(),
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: prefersReducedMotion ? 0.3 : duration, 
          delay, 
          ease: [0.16, 1, 0.3, 1] // Luxury cubic bezier curve (smooth deceleration)
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
