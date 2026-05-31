import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { faqs } from "../data/resortData";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-luxury-dark-accent border-b border-luxury-dark-border px-6 md:px-12 select-none"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          subtitle="Guest Inquiries"
          title="Common Questions & Sanctuary Policies"
        />

        {/* Accordions Stack */}
        <div className="space-y-4 mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-luxury-dark rounded-sm border border-luxury-dark-border overflow-hidden transition-all duration-300 shadow-md"
              >
                {/* Header Accordion Button */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none select-none group"
                >
                  <span className="font-serif text-base sm:text-lg font-light text-slate-200 group-hover:text-luxury-gold transition-colors duration-300 pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Glowing gold sign */}
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "border-luxury-gold text-luxury-gold" : "border-luxury-dark-border text-slate-500 group-hover:text-slate-300 group-hover:border-slate-700"
                  }`}>
                    {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </div>
                </button>

                {/* Animated Body Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-luxury-dark-border/20 text-slate-400 font-sans font-light text-xs sm:text-sm leading-relaxed max-w-3xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
