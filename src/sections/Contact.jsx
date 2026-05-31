import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiCompass, FiCalendar, FiUser, FiSliders } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { resortInfo, signatureRooms } from "../data/resortData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    suite: "deluxe-suite",
    guests: "2",
    requests: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.checkIn && formData.checkOut) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-luxury-dark border-b border-luxury-dark-border px-6 md:px-12 select-none"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Residency Request"
          title="Secure Your Secluded Sanctuary"
          description="Submit a residency request. Our elite greeters will coordinate your private flight logistics and design custom culinary programs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          
          {/* LEFT COLUMN: Contact Details & Map Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-luxury-dark-accent rounded-sm border border-luxury-dark-border p-8 space-y-6 shadow-md">
              <h3 className="font-serif text-2xl font-light text-white mb-4">
                The Estate Office
              </h3>
              
              <div className="space-y-4 font-sans text-xs md:text-sm font-light text-slate-300">
                <div className="flex items-start gap-4">
                  <FiMapPin className="text-luxury-gold mt-1 shrink-0" size={18} />
                  <div>
                    <span className="font-semibold block text-slate-400 mb-0.5">Location</span>
                    <span>{resortInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-luxury-dark-border/40 pt-4">
                  <FiCompass className="text-luxury-gold mt-1 shrink-0" size={18} />
                  <div>
                    <span className="font-semibold block text-slate-400 mb-0.5">Helipad Coordinates</span>
                    <span className="font-mono tracking-wider">{resortInfo.coordinates}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-luxury-dark-border/40 pt-4">
                  <FiPhone className="text-luxury-gold mt-1 shrink-0" size={18} />
                  <div>
                    <span className="font-semibold block text-slate-400 mb-0.5">Exclusive Bookings Office</span>
                    <span>{resortInfo.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-luxury-dark-border/40 pt-4">
                  <FiMail className="text-luxury-gold mt-1 shrink-0" size={18} />
                  <div>
                    <span className="font-semibold block text-slate-400 mb-0.5">Email Communications</span>
                    <span>{resortInfo.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Luxury Map Placeholder */}
            <div className="relative h-[250px] w-full rounded-sm border border-luxury-dark-border bg-luxury-dark-accent overflow-hidden shadow-inner flex flex-col items-center justify-center p-6 text-center group">
              {/* Slate Map Backdrop Pattern */}
              <div className="absolute inset-0 dotted-pattern opacity-20 pointer-events-none" />
              
              {/* Graphic Rings representing coordinate target */}
              <div className="absolute w-40 h-40 border border-luxury-gold/5 rounded-full flex items-center justify-center pointer-events-none group-hover:border-luxury-gold/15 transition-colors duration-500">
                <div className="w-24 h-24 border border-luxury-gold/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 border border-luxury-gold/15 rounded-full animate-ping duration-[3s]" />
                </div>
              </div>

              {/* Graphic central target point */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-luxury-gold border-2 border-luxury-dark shadow-[0_0_10px_#C5A880] mb-2" />
                <span className="font-serif text-sm tracking-luxury uppercase text-white font-medium">Aethelgard Estate</span>
                <span className="text-[10px] text-slate-500 font-sans tracking-wide mt-1">Satellite Navigation Overlay Active</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Reservation Form with submit modal */}
          <div className="lg:col-span-7 bg-luxury-dark-accent rounded-sm border border-luxury-dark-border p-8 md:p-10 shadow-xl relative min-h-[500px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-serif text-2xl font-light text-white border-b border-luxury-dark-border/40 pb-4 mb-6">
                    Request Residency
                  </h3>

                  {/* Grid fields name / email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-luxury text-slate-400 font-sans font-medium flex items-center gap-1.5">
                        <FiUser size={12} /> Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Alexandra Sterling"
                        className="w-full bg-luxury-dark border border-luxury-dark-border rounded-sm px-4 py-3 text-xs md:text-sm text-white font-sans font-light focus:outline-none focus:border-luxury-gold transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-luxury text-slate-400 font-sans font-medium flex items-center gap-1.5">
                        <FiMail size={12} /> Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="sterling@luxury.com"
                        className="w-full bg-luxury-dark border border-luxury-dark-border rounded-sm px-4 py-3 text-xs md:text-sm text-white font-sans font-light focus:outline-none focus:border-luxury-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Grid fields dates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-luxury text-slate-400 font-sans font-medium flex items-center gap-1.5">
                        <FiCalendar size={12} /> Check-In Date
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        required
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        className="w-full bg-luxury-dark border border-luxury-dark-border rounded-sm px-4 py-3 text-xs md:text-sm text-white font-sans font-light focus:outline-none focus:border-luxury-gold transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-luxury text-slate-400 font-sans font-medium flex items-center gap-1.5">
                        <FiCalendar size={12} /> Check-Out Date
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        required
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        className="w-full bg-luxury-dark border border-luxury-dark-border rounded-sm px-4 py-3 text-xs md:text-sm text-white font-sans font-light focus:outline-none focus:border-luxury-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Dropdowns Suite / Guests */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-luxury text-slate-400 font-sans font-medium flex items-center gap-1.5">
                        <FiSliders size={12} /> Requested Residence
                      </label>
                      <select
                        name="suite"
                        value={formData.suite}
                        onChange={handleInputChange}
                        className="w-full bg-luxury-dark border border-luxury-dark-border rounded-sm px-4 py-3 text-xs md:text-sm text-white font-sans font-light focus:outline-none focus:border-luxury-gold transition-colors cursor-pointer"
                      >
                        {signatureRooms.map((room) => (
                          <option key={room.id} value={room.id} className="bg-luxury-dark text-white">
                            {room.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-luxury text-slate-400 font-sans font-medium flex items-center gap-1.5">
                        <FiUser size={12} /> Guests Count
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full bg-luxury-dark border border-luxury-dark-border rounded-sm px-4 py-3 text-xs md:text-sm text-white font-sans font-light focus:outline-none focus:border-luxury-gold transition-colors cursor-pointer"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="6">6 Guests (Sanctuary)</option>
                        <option value="8">8 Guests (Villa)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-luxury text-slate-400 font-sans font-medium">
                      Bespoke Requests & Airport Flights
                    </label>
                    <textarea
                      name="requests"
                      rows={3}
                      value={formData.requests}
                      onChange={handleInputChange}
                      placeholder="E.g., Private yacht pick-up at Naples, gluten-free chef requirements, helicopter transfer arrangements..."
                      className="w-full bg-luxury-dark border border-luxury-dark-border rounded-sm px-4 py-3 text-xs md:text-sm text-white font-sans font-light focus:outline-none focus:border-luxury-gold transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-luxury-gold text-luxury-dark font-sans font-semibold text-xs md:text-sm uppercase tracking-luxury shadow-lg hover:bg-white transition-all duration-300 rounded-sm mt-4 select-none cursor-pointer"
                  >
                    Submit Residency Request
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center py-12 flex flex-col items-center justify-center"
                >
                  {/* Glowing success circle target */}
                  <div className="w-20 h-20 rounded-full border border-luxury-gold flex items-center justify-center shadow-[0_0_20px_#C5A880] mb-8 animate-pulse">
                    <FiCompass className="text-luxury-gold" size={36} />
                  </div>

                  <h3 className="font-serif text-3xl font-light text-white mb-4">
                    Residency Request Logged
                  </h3>
                  
                  <p className="font-sans text-slate-400 font-light text-xs md:text-sm leading-relaxed max-w-md mb-8">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. A luxury travel coordinator has been assigned to your profile. We will email you at <span className="text-white font-medium">{formData.email}</span> within 2 hours to finalize your yacht connections and check-in timeline.
                  </p>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        checkIn: "",
                        checkOut: "",
                        suite: "deluxe-suite",
                        guests: "2",
                        requests: "",
                      });
                    }}
                    className="px-6 py-2.5 border border-luxury-gold/50 text-luxury-gold hover:border-luxury-gold hover:bg-luxury-gold/5 text-xs uppercase tracking-luxury font-sans font-medium rounded-sm transition-all duration-300"
                  >
                    Modify Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
