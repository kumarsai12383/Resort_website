import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { signatureRooms } from "../data/resortData";
import { FiMaximize2, FiUsers, FiEye, FiArrowRight } from "react-icons/fi";

export default function SignatureRooms() {
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

  const handleBookRedirect = (e) => {
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
      id="rooms"
      className="py-24 md:py-32 bg-luxury-dark-accent border-b border-luxury-dark-border px-6 md:px-12 select-none"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Accommodations"
          title="Architectural Sanctuaries"
          description="Each clifftop residence is carefully sculpted into the coastline to ensure panoramic ocean views, private heated plunge pools, and seamless indoor-outdoor coastal living."
        />

        {/* Rooms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {signatureRooms.map((room) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-luxury-dark rounded-sm border border-luxury-dark-border overflow-hidden flex flex-col group luxury-box-glow-hover transition-all duration-500"
            >
              {/* Image Frame with Zoom */}
              <div className="relative h-[300px] sm:h-[350px] w-full overflow-hidden">
                {/* Background zoom overlay */}
                <div className="absolute inset-0 bg-luxury-dark/20 z-10 transition-colors duration-500 group-hover:bg-transparent" />
                <motion.img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Price Tag Floating */}
                <div className="absolute bottom-6 right-6 z-20 px-4 py-2 bg-luxury-dark/80 backdrop-blur-md border border-luxury-gold/30 text-luxury-gold text-xs font-semibold uppercase tracking-luxury font-sans rounded-sm shadow-md">
                  {room.price}
                </div>
              </div>

              {/* Room Metadata */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                    {room.name}
                  </h3>
                  <p className="font-sans text-slate-400 font-light text-xs md:text-sm leading-relaxed mb-6">
                    {room.description}
                  </p>
                  
                  {/* Features / Specs Horizontal Grid */}
                  <div className="grid grid-cols-3 gap-2 border-y border-luxury-dark-border py-4 mb-6">
                    <div className="flex flex-col items-center justify-center text-center">
                      <FiMaximize2 className="text-luxury-gold/80 mb-1" size={14} />
                      <span className="text-[9px] uppercase tracking-wide text-slate-500 font-medium">Size</span>
                      <span className="text-[10px] text-slate-300 font-sans tracking-wide mt-0.5">{room.size}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center border-x border-luxury-dark-border">
                      <FiUsers className="text-luxury-gold/80 mb-1" size={14} />
                      <span className="text-[9px] uppercase tracking-wide text-slate-500 font-medium">Guests</span>
                      <span className="text-[10px] text-slate-300 font-sans tracking-wide mt-0.5">{room.occupancy}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                      <FiEye className="text-luxury-gold/80 mb-1" size={14} />
                      <span className="text-[9px] uppercase tracking-wide text-slate-500 font-medium">Views</span>
                      <span className="text-[10px] text-slate-300 font-sans tracking-wide mt-0.5 truncate max-w-full px-1">{room.view}</span>
                    </div>
                  </div>
                </div>

                {/* Reservation CTA Action */}
                <div className="flex items-center justify-between mt-2 pt-2">
                  <a
                    href="#contact"
                    onClick={handleBookRedirect}
                    className="flex items-center gap-2 text-xs uppercase tracking-luxury text-luxury-gold hover:text-white transition-colors duration-300 font-sans font-medium group/btn"
                  >
                    Reserve Residency
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
