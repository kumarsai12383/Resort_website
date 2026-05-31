import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { amenities } from "../data/resortData";
import { FiDroplet, FiHeart, FiAward, FiZap, FiSun, FiKey } from "react-icons/fi";

const iconMap = {
  "infinity-pool": <FiDroplet size={24} />,
  "spa-wellness": <FiHeart size={24} />,
  "fine-dining": <FiAward size={24} />,
  "fitness-center": <FiZap size={24} />,
  "private-beach": <FiSun size={24} />,
  "concierge-service": <FiKey size={24} />,
};

export default function Amenities() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="amenities"
      className="py-24 md:py-32 bg-luxury-dark border-b border-luxury-dark-border px-6 md:px-12 select-none"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Exclusive Services"
          title="The Standard of Excellence"
          description="At Aethelgard, we have elevated daily relaxation to an art form. Explore our carefully curated spectrum of elite resort assets designed to indulge your senses."
        />

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {amenities.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group bg-luxury-dark-accent rounded-sm border border-luxury-dark-border overflow-hidden flex flex-col luxury-box-glow-hover transition-all duration-500"
            >
              {/* Image Banner with Zoom & Gold Icon Overlay */}
              <div className="relative h-[200px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-luxury-dark/45 z-10 transition-colors duration-500 group-hover:bg-luxury-dark/25" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Floating Gold Rounded Icon */}
                <div className="absolute top-4 left-4 z-20 w-12 h-12 rounded-full bg-luxury-dark/80 backdrop-blur-md border border-luxury-gold/40 text-luxury-gold flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110">
                  {iconMap[item.id] || <FiDroplet size={24} />}
                </div>
              </div>

              {/* Title & Description */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-xl md:text-2xl font-light text-white mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-slate-400 font-light text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
