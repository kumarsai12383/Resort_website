import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FiArrowDown, FiChevronDown } from "react-icons/fi";
import { resortInfo } from "../data/resortData";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Parallax background scroll effect
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Subtle scroll fade for content
      gsap.to([titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 0,
        y: -50,
        ease: "power1.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "40% top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = (e) => {
    e.preventDefault();
    const element = document.getElementById("about");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-luxury-dark select-none"
    >
      {/* Background Image with GSAP Parallax */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-[130%] bg-cover bg-center origin-top brightness-[0.45]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />

      {/* Luxury Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-luxury-dark/60" />

      {/* Cinematic Grid Lines Overlay */}
      <div className="absolute inset-0 dotted-pattern pointer-events-none opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Coordinates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-luxury-gold tracking-luxury-widest text-xs md:text-sm font-sans font-medium uppercase mb-4 md:mb-6"
        >
          {resortInfo.location} &bull; {resortInfo.coordinates}
        </motion.div>

        {/* Hero Title */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-normal leading-[1.1] mb-6 drop-shadow-2xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Experience Luxury
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="block gold-gradient-text luxury-text-glow font-medium mt-2"
          >
            Beyond Imagination
          </motion.span>
        </h1>

        {/* Subtitle description */}
        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="max-w-2xl text-slate-300 font-sans font-light text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-12 tracking-wide"
        >
          A secluded sanctuary suspended between the emerald cliffs and azure Mediterranean waters. Built for those who seek timeless, bespoke excellence.
        </motion.p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.02 }}
            href="#rooms"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 bg-luxury-gold text-luxury-dark font-sans font-semibold text-xs md:text-sm uppercase tracking-luxury shadow-lg hover:bg-white transition-all duration-300 rounded-sm w-48 sm:w-auto"
          >
            Explore Suites
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.02 }}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 border border-white/30 text-white hover:border-luxury-gold font-sans font-medium text-xs md:text-sm uppercase tracking-luxury transition-all duration-300 rounded-sm backdrop-blur-sm w-48 sm:w-auto hover:text-luxury-gold"
          >
            Reserve Now
          </motion.a>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.a
        href="#about"
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-[9px] uppercase tracking-luxury text-luxury-gold font-light opacity-80 group-hover:opacity-100 transition-opacity">
          Discover Our Story
        </span>
        <FiChevronDown className="text-luxury-gold group-hover:scale-110 transition-transform" size={20} />
      </motion.a>
    </section>
  );
}
