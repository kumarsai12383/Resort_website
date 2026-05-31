import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { testimonials } from "../data/resortData";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Automatic slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-luxury-dark border-b border-luxury-dark-border px-6 md:px-12 select-none"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <SectionTitle
          subtitle="Guest Reveries"
          title="Endorsed by Discerning Travelers"
        />

        {/* Carousel Container */}
        <div className="relative w-full min-h-[350px] sm:min-h-[280px] bg-luxury-dark-accent rounded-sm border border-luxury-dark-border p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-xl">
          
          {/* Decorative Giant Quote Mark */}
          <div className="absolute top-4 left-6 text-luxury-gold/5 font-serif text-[12rem] leading-none pointer-events-none select-none">
            “
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex flex-col items-center"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6 text-luxury-gold">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <FiStar key={i} className="fill-luxury-gold" size={16} />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="font-serif text-lg md:text-2xl font-light text-slate-100 leading-relaxed italic mb-8 max-w-2xl">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Guest Profile Details */}
              <div className="flex items-center gap-4 text-left">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-12 h-12 rounded-full object-cover border border-luxury-gold/40 shadow-md"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-serif text-base text-white font-medium">
                    {testimonials[activeIndex].name}
                  </h4>
                  <span className="font-sans text-[10px] uppercase tracking-luxury text-slate-500 font-light">
                    {testimonials[activeIndex].location}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls Left/Right */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 text-white/50 hover:text-luxury-gold p-3 rounded-full border border-white/5 hover:border-luxury-gold/50 bg-luxury-dark/40 backdrop-blur-sm transition-all duration-300 focus:outline-none"
            aria-label="Previous Review"
          >
            <FiChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 text-white/50 hover:text-luxury-gold p-3 rounded-full border border-white/5 hover:border-luxury-gold/50 bg-luxury-dark/40 backdrop-blur-sm transition-all duration-300 focus:outline-none"
            aria-label="Next Review"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Carousel Indicators/Dots */}
        <div className="flex items-center gap-2.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none ${
                activeIndex === idx ? "w-6 bg-luxury-gold shadow-[0_0_8px_#C5A880]" : "w-1.5 bg-slate-600 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
