import { motion } from "framer-motion";

export default function SectionTitle({ subtitle, title, description, align = "center", dark = false }) {
  const isLeft = align === "left";
  
  return (
    <div className={`mb-12 md:mb-16 flex flex-col ${isLeft ? "items-start text-left" : "items-center text-center"}`}>
      {/* Subtitle */}
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-luxury-gold tracking-luxury-widest text-xs md:text-sm font-sans font-medium uppercase mb-3 flex items-center gap-3"
        >
          {!isLeft && <span className="h-[1px] w-6 bg-luxury-gold/40"></span>}
          {subtitle}
          <span className="h-[1px] w-6 bg-luxury-gold/40"></span>
        </motion.span>
      )}

      {/* Main Title */}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-3xl md:text-5xl lg:text-6xl font-light font-serif tracking-normal leading-tight ${
            dark ? "text-luxury-dark" : "text-white"
          }`}
        >
          {title}
        </motion.h2>
      )}

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="h-[1px] bg-luxury-gold mt-6 mb-4"
      />

      {/* Optional Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`max-w-2xl font-sans text-sm md:text-base font-light leading-relaxed mt-2 ${
            dark ? "text-slate-600" : "text-slate-400"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
