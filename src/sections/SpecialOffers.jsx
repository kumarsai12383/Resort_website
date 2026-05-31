import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { specialOffers } from "../data/resortData";
import { FiArrowRight } from "react-icons/fi";

export default function SpecialOffers() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleBookClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
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
      id="offers"
      className="py-24 md:py-32 bg-luxury-dark border-b border-luxury-dark-border px-6 md:px-12 select-none"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Exclusive Packages"
          title="Curated Seasonal Experiences"
          description="Indulge in our carefully tailored seasonal packages, blending clifftop suites, private yacht charters, and restorative holistic spa treatments."
        />

        {/* Offers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {specialOffers.map((offer) => (
            <motion.div
              key={offer.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-luxury-dark-accent rounded-sm border border-luxury-dark-border overflow-hidden flex flex-col justify-between luxury-shine luxury-box-glow-hover transition-all duration-500"
            >
              {/* Image Frame with Badge Overlay */}
              <div className="relative h-[220px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-luxury-dark/35 z-10 transition-colors group-hover:bg-luxury-dark/15 duration-500" />
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                  loading="lazy"
                />
                
                {/* Floating Gold Package Badge */}
                <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 bg-luxury-gold text-luxury-dark text-[9px] font-bold uppercase tracking-luxury font-sans rounded-sm shadow-md">
                  {offer.badge}
                </div>
              </div>

              {/* Offer Details */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-light text-white mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                    {offer.title}
                  </h3>
                  <p className="font-sans text-slate-300 font-light text-xs md:text-sm leading-relaxed mb-6">
                    {offer.description}
                  </p>
                  
                  {/* Terms / Highlights banner */}
                  <div className="px-4 py-3 bg-luxury-dark border-l-2 border-luxury-gold text-[10px] sm:text-xs text-slate-400 font-sans tracking-wide leading-relaxed rounded-r-sm mb-6">
                    {offer.terms}
                  </div>
                </div>

                {/* Claim CTA action */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={handleBookClick}
                    className="flex items-center justify-between w-full pb-1 border-b border-luxury-dark-border hover:border-luxury-gold text-xs uppercase tracking-luxury text-luxury-gold hover:text-white transition-all duration-300 font-sans font-medium group/btn"
                  >
                    Claim Offer
                    <FiArrowRight className="transform translate-x-0 group-hover/btn:translate-x-1.5 transition-transform" size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
