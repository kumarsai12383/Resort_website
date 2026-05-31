import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Lightbox({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 w-full h-full bg-luxury-dark/95 z-[100] backdrop-blur-md flex items-center justify-center p-4 select-none"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-luxury-gold transition-colors duration-300 p-2 z-50 focus:outline-none"
            aria-label="Close Lightbox"
          >
            <FiX size={32} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 md:left-8 text-white/60 hover:text-luxury-gold transition-colors duration-300 p-3 rounded-full border border-white/10 hover:border-luxury-gold/50 bg-luxury-dark/50 backdrop-blur-sm z-50 focus:outline-none"
            aria-label="Previous Image"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Image Container with smooth scale and slide */}
          <div className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center p-2">
            <motion.img
              key={currentImage.image}
              src={currentImage.image}
              alt={currentImage.title}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-full max-h-[75vh] object-contain rounded-sm border border-luxury-dark-border shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              loading="lazy"
            />
            
            {/* Meta Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-center text-white w-full max-w-lg"
            >
              <span className="text-[10px] tracking-luxury-widest uppercase text-luxury-gold font-sans font-medium mb-1 block">
                {currentImage.category}
              </span>
              <h3 className="font-serif text-lg md:text-xl font-light">
                {currentImage.title}
              </h3>
              <p className="text-[11px] text-slate-500 font-sans tracking-wide mt-2">
                {currentIndex + 1} of {images.length}
              </p>
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 md:right-8 text-white/60 hover:text-luxury-gold transition-colors duration-300 p-3 rounded-full border border-white/10 hover:border-luxury-gold/50 bg-luxury-dark/50 backdrop-blur-sm z-50 focus:outline-none"
            aria-label="Next Image"
          >
            <FiChevronRight size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
