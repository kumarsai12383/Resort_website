import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const imgLargeRef = useRef(null);
  const imgSmallRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax scroll for the main large image
      gsap.to(imgLargeRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax scroll for the overlapping small image
      gsap.to(imgSmallRef.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 md:py-32 bg-luxury-dark border-b border-luxury-dark-border px-6 md:px-12 max-w-7xl mx-auto overflow-hidden select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Narrative storytelling */}
        <div className="lg:col-span-5 flex flex-col items-start z-10">
          <SectionTitle
            subtitle="The Sanctuary"
            title="A Living Monument to Coastal Tranquility"
            align="left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-slate-300 font-light leading-relaxed mb-6 text-sm md:text-base"
          >
            Suspended 300 meters above the shimmering azure waters of the Mediterranean, Aethelgard is a testament to natural harmony and architectural grandeur. What began as a historic 17th-century clifftop monastery has been painstakingly re-engineered into an exclusive, low-density modern sanctuary.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-slate-400 font-light leading-relaxed mb-8 text-sm"
          >
            Here, luxury is not announced. It is discovered in the timeless quiet of ancient olive trees, the bespoke temperature of your private infinity plunge pool, and the absolute discretion of a personal butler who anticipates your needs before they arise. It is a portal to an unhurried existence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#timeline"
              className="px-6 py-3 border border-luxury-gold/50 text-luxury-gold hover:border-luxury-gold hover:bg-luxury-gold/5 transition-all duration-300 text-xs uppercase tracking-luxury font-medium rounded-sm"
            >
              Our Experience Philosophy
            </a>
          </motion.div>
        </div>

        {/* Right Column: Layered Collage with GSAP Parallax */}
        <div className="lg:col-span-7 relative h-[450px] sm:h-[600px] flex items-center justify-center">
          
          {/* Decorative Gold Frame Backing */}
          <div className="absolute top-8 left-12 w-[70%] h-[75%] border border-luxury-gold/20 rounded-sm pointer-events-none hidden sm:block" />

          {/* Primary Large Image */}
          <div className="absolute top-16 left-6 w-[70%] h-[65%] sm:h-[70%] overflow-hidden rounded-sm border border-luxury-dark-border shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
            <div
              ref={imgLargeRef}
              className="w-full h-[120%] bg-cover bg-center brightness-90"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop')`,
              }}
            />
          </div>

          {/* Secondary Overlapping Small Image */}
          <div className="absolute bottom-8 right-6 w-[45%] h-[40%] sm:h-[45%] overflow-hidden rounded-sm border border-luxury-dark-border shadow-[0_20px_45px_rgba(0,0,0,0.8)] z-10">
            <div
              ref={imgSmallRef}
              className="w-full h-[130%] bg-cover bg-center brightness-95"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop')`,
              }}
            />
          </div>

          {/* Floating Gold Geometry Accent */}
          <div className="absolute bottom-4 left-1/3 w-8 h-8 border-l border-b border-luxury-gold/40 z-20 pointer-events-none" />
          <div className="absolute top-4 right-1/4 w-8 h-8 border-r border-t border-luxury-gold/40 z-20 pointer-events-none" />

        </div>
      </div>
    </section>
  );
}
