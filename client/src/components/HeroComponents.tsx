import { useEffect, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function FadeIn({ children, delay = 0, duration = 1000 }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="transition-opacity"
      style={{
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
  duration?: number;
  style?: React.CSSProperties;
}

export function AnimatedHeading({
  text,
  className = "",
  delay = 200,
  charDelay = 20,
  duration = 500,
  style = {},
}: AnimatedHeadingProps) {
  const [animatedChars, setAnimatedChars] = useState<boolean[]>([]);

  // Count total characters excluding linebreaks
  const rawChars = text.replace(/\n/g, "");
  const totalChars = rawChars.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      for (let i = 0; i < totalChars; i++) {
        setTimeout(() => {
          setAnimatedChars((prev) => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });
        }, i * charDelay);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, charDelay, totalChars]);

  // Split text by line breaks first, then wrap each word in whitespace-nowrap to prevent mid-word linebreaks
  const lines = text.split("\n");
  let globalCharCounter = 0;

  return (
    <div className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const words = line.split(" ");
        return (
          <div key={lineIndex} className="flex flex-wrap gap-x-[0.35em] gap-y-1 items-baseline">
            {words.map((word, wordIndex) => {
              const wordChars = word.split("");
              return (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {wordChars.map((char, charIdx) => {
                    const charIndex = globalCharCounter++;
                    const isAnimated = animatedChars[charIndex];
                    return (
                      <span
                        key={charIdx}
                        className="inline-block transition-all"
                        style={{
                          opacity: isAnimated ? 1 : 0,
                          transform: isAnimated ? "translateX(0)" : "translateX(-10px)",
                          transitionDuration: `${duration}ms`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
