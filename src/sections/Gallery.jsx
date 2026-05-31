import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import Lightbox from "../components/Lightbox";
import { galleryItems } from "../data/resortData";

const categories = ["All", "Suites", "Wellness", "Dining", "Beach"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter items
  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-luxury-dark-accent border-b border-luxury-dark-border px-6 md:px-12 select-none"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Visual Sanctuary"
          title="Captured Moments of Silence"
          description="A glimpse into the architectural masterwork, the pristine coastal horizons, and the hand-sculpted details that shape the Aethelgard story."
        />

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 text-xs uppercase tracking-luxury transition-all duration-300 rounded-sm font-sans font-medium focus:outline-none ${
                selectedCategory === cat
                  ? "bg-luxury-gold text-luxury-dark shadow-md"
                  : "border border-luxury-dark-border text-slate-400 hover:text-white hover:border-luxury-gold/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Columns Layout */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid relative overflow-hidden rounded-sm border border-luxury-dark-border group cursor-pointer shadow-lg"
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-95 group-hover:brightness-90"
                  loading="lazy"
                />

                {/* Subtle Hover Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-luxury-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[9px] uppercase tracking-luxury text-luxury-gold font-sans font-medium mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg text-white font-light">
                    {item.title}
                  </h4>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans mt-3 border-t border-white/10 pt-2 block w-max">
                    View Fullscreen
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* IMMERSIVE LIGHTBOX POPUP */}
      <Lightbox
        isOpen={lightboxOpen}
        images={filteredItems}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
