import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { statistics } from "../data/resortData";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = document.querySelectorAll(".stat-number");
      
      counters.forEach((counter) => {
        const targetValue = parseInt(counter.getAttribute("data-target"), 10);
        
        gsap.fromTo(
          counter,
          { textContent: 0 },
          {
            textContent: targetValue,
            duration: 2.5,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onUpdate: function () {
              // Add thousands comma separator if value is large
              const currentVal = parseInt(counter.textContent, 10);
              if (currentVal >= 1000) {
                counter.innerHTML = currentVal.toLocaleString();
              }
            },
          }
        );
      });

      // Animate background visual lines
      gsap.fromTo(
        ".stat-divider",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative py-20 bg-luxury-dark border-b border-luxury-dark-border px-6 md:px-12 select-none"
    >
      {/* Background Subtle Overlay Pattern */}
      <div className="absolute inset-0 dotted-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-6 text-center">
          {statistics.map((stat, idx) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center p-4 relative"
            >
              {/* Animated Gold Digits */}
              <div className="flex items-baseline mb-2 justify-center">
                <span
                  className="stat-number font-serif text-4xl sm:text-5xl md:text-6xl font-light text-luxury-gold luxury-text-glow"
                  data-target={stat.value}
                >
                  0
                </span>
                <span className="font-serif text-3xl sm:text-4xl text-luxury-gold ml-0.5">
                  {stat.suffix}
                </span>
              </div>

              {/* Stat Description */}
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-luxury text-slate-400 font-medium">
                {stat.label}
              </span>

              {/* Vertical divider element on desktop */}
              {idx < 3 && (
                <div className="stat-divider hidden lg:block absolute right-0 top-1/6 w-[1px] h-2/3 bg-luxury-gold/20 origin-top" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
