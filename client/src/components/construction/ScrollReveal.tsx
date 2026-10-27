import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

/**
 * Scroll-triggered reveal built on the same fade/translate language as
 * the existing FadeIn / AnimatedHeading components in HeroComponents.tsx.
 * Uses IntersectionObserver so sections animate in as the user scrolls,
 * without touching any of the original hero/frame animation code.
 */
export function ScrollReveal({
  children,
  delay = 0,
  duration = 700,
  y = 24,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : `translateY(${y}px)`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface StaggerGroupProps {
  children: React.ReactNode[];
  baseDelay?: number;
  step?: number;
  duration?: number;
  y?: number;
  className?: string;
  itemClassName?: string;
}

/** Reveals a list of children with an incremental delay per item. */
export function StaggerGroup({
  children,
  baseDelay = 0,
  step = 90,
  duration = 700,
  y = 24,
  className = "",
  itemClassName = "",
}: StaggerGroupProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <ScrollReveal
          key={i}
          delay={baseDelay + i * step}
          duration={duration}
          y={y}
          className={itemClassName}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
