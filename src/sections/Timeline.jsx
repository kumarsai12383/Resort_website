import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/SectionTitle";
import { experienceTimeline } from "../data/resortData";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const containerRef = useRef(null);
  const progressLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress line fill animation on scroll
      gsap.fromTo(
        progressLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );

      // Staggered reveal for timeline events
      const events = document.querySelectorAll(".timeline-event");
      events.forEach((event) => {
        const marker = event.querySelector(".timeline-marker");
        const card = event.querySelector(".timeline-card");
        const image = event.querySelector(".timeline-image-wrapper");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: event,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          marker,
          { scale: 0, borderColor: "rgba(197, 168, 128, 0.2)" },
          { scale: 1, borderColor: "#C5A880", duration: 0.5, ease: "back.out(1.7)" }
        )
          .fromTo(
            card,
            { opacity: 0, x: card.classList.contains("left-card") ? -30 : 30 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
            "-=0.2"
          )
          .fromTo(
            image,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
            "-=0.6"
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="timeline"
      className="py-24 md:py-32 bg-luxury-dark-accent border-b border-luxury-dark-border px-6 md:px-12 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        <SectionTitle
          subtitle="Resort Storytelling"
          title="A Perfect Day in Paradise"
          description="From the moment you step off your private transfer to the final morning farewell, every moment is meticulously custom-designed."
        />

        {/* Timeline Wrapper */}
        <div className="relative mt-20">
          
          {/* Central Vertical Line Backing (Gray) */}
          <div className="absolute left-4 lg:left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-luxury-dark-border z-0" />
          
          {/* central Vertical Progress Line (Gold - GSAP Animated) */}
          <div
            ref={progressLineRef}
            className="absolute left-4 lg:left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-luxury-gold origin-top z-10 shadow-[0_0_10px_#C5A880]"
          />

          {/* Timeline Events Stack */}
          <div className="space-y-16 md:space-y-24 relative z-20">
            {experienceTimeline.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={event.id}
                  className="timeline-event grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center relative"
                >
                  
                  {/* CENTRAL CIRCLE MARKER */}
                  <div className="absolute left-4 lg:left-1/2 top-4 lg:top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="timeline-marker w-8 h-8 rounded-full bg-luxury-dark border-2 border-luxury-dark-border flex items-center justify-center shadow-lg">
                      <div className="w-2.5 h-2.5 rounded-full bg-luxury-gold shadow-[0_0_6px_#C5A880]" />
                    </div>
                  </div>

                  {/* LEFT COLUMN: Narrative Card (on Desktop, is either Text or Image) */}
                  <div
                    className={`pl-12 lg:pl-0 lg:col-span-5 ${
                      isEven ? "lg:order-1 text-left lg:text-right lg:pr-12" : "lg:order-3 text-left lg:pl-12"
                    }`}
                  >
                    <div className={`timeline-card ${isEven ? "left-card" : "right-card"} bg-luxury-dark p-6 md:p-8 rounded-sm border border-luxury-dark-border shadow-xl`}>
                      <span className="text-luxury-gold tracking-luxury-wide font-sans text-xs md:text-sm font-semibold uppercase block mb-2">
                        {event.time}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-light text-white mb-4">
                        {event.title}
                      </h3>
                      <p className="font-sans text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer Column in between */}
                  <div className="hidden lg:block lg:col-span-2 lg:order-2" />

                  {/* RIGHT COLUMN: Media Frame (on Desktop, is opposite) */}
                  <div
                    className={`pl-12 lg:pl-0 lg:col-span-5 ${
                      isEven ? "lg:order-3 lg:pl-12" : "lg:order-1 lg:pr-12"
                    }`}
                  >
                    <div className="timeline-image-wrapper relative h-[220px] sm:h-[280px] w-full overflow-hidden rounded-sm border border-luxury-dark-border shadow-2xl group">
                      <div className="absolute inset-0 bg-luxury-dark/15 z-10 transition-colors group-hover:bg-transparent duration-500" />
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-102"
                        loading="lazy"
                      />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
