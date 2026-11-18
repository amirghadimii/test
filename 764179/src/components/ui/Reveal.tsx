"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "mask" | "fade";
  as?: ElementType;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frameId: number | null = null;
    const revealNow = () => {
      frameId = requestAnimationFrame(() => setVisible(true));
    };

    // 1. Accessibility: if reduced motion is preferred, reveal immediately
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      revealNow();
      return () => {
        if (frameId) cancelAnimationFrame(frameId);
      };
    }

    // 2. IntersectionObserver unsupported: reveal immediately
    if (typeof IntersectionObserver === "undefined") {
      revealNow();
      return () => {
        if (frameId) cancelAnimationFrame(frameId);
      };
    }

    // 3. Immediate viewport check: if already in or near viewport, reveal without delay
    try {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= viewportHeight + 80 && rect.bottom >= -40) {
        revealNow();
        return () => {
          if (frameId) cancelAnimationFrame(frameId);
        };
      }
    } catch {
      // In case getBoundingClientRect fails
    }

    // 4. Safety fallback timer: content MUST NEVER stay invisible if reveal fails
    const safetyTimer = window.setTimeout(() => {
      setVisible(true);
    }, 1200);

    // 5. Permissive observer: low threshold and comfortable margin so it reveals ahead of scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
            clearTimeout(safetyTimer);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 60px 0px" },
    );

    observer.observe(node);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, []);

  const variantClass =
    variant === "mask" ? "reveal-mask" : variant === "fade" ? "" : "reveal";
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`${variantClass} ${visible ? "is-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
