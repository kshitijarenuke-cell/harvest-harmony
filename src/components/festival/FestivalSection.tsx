import { useEffect, useRef, useState, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FestivalSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const FestivalSection = forwardRef<HTMLElement, FestivalSectionProps>(
  ({ children, className, id }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const internalRef = useRef<HTMLElement>(null);
    const sectionRef = (ref as React.RefObject<HTMLElement>) || internalRef;

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          threshold: 0.2,
          rootMargin: "-50px",
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, [sectionRef]);

    return (
      <section
        ref={sectionRef as React.RefObject<HTMLElement>}
        id={id}
        className={cn(
          "min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          className
        )}
      >
        {children}
      </section>
    );
  }
);

FestivalSection.displayName = "FestivalSection";

export default FestivalSection;
