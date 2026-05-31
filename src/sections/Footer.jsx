import { useState } from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiArrowRight } from "react-icons/fi";
import { navigationLinks, resortInfo } from "../data/resortData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    <footer className="bg-luxury-dark text-white border-t border-luxury-dark-border py-16 px-6 md:px-12 select-none font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
        
        {/* COLUMN 1: BRANDING & DETAILS */}
        <div className="lg:col-span-4 flex flex-col space-y-6">
          <div>
            <span className="font-serif text-2xl md:text-3xl font-light tracking-luxury-widest text-white block">
              {resortInfo.name.toUpperCase()}
            </span>
            <span className="text-[10px] uppercase tracking-luxury text-luxury-gold font-light mt-0.5 block">
              RESORTS & VILLAS
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-400 font-light leading-relaxed max-w-sm">
            Suspended between clifftop elevations and azure depths. Aethelgard represents a timeless architectural monument dedicated to restorative quietude and bespoke global hospitality.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-luxury-dark-border hover:border-luxury-gold/50 text-slate-400 hover:text-luxury-gold flex items-center justify-center transition-all duration-300 bg-luxury-dark-accent/30"
              aria-label="Instagram Profile"
            >
              <FiInstagram size={14} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-luxury-dark-border hover:border-luxury-gold/50 text-slate-400 hover:text-luxury-gold flex items-center justify-center transition-all duration-300 bg-luxury-dark-accent/30"
              aria-label="Facebook Profile"
            >
              <FiFacebook size={14} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-luxury-dark-border hover:border-luxury-gold/50 text-slate-400 hover:text-luxury-gold flex items-center justify-center transition-all duration-300 bg-luxury-dark-accent/30"
              aria-label="Twitter Profile"
            >
              <FiTwitter size={14} />
            </a>
          </div>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          <h4 className="text-[10px] uppercase tracking-luxury text-luxury-gold font-medium">
            Explore
          </h4>
          <div className="flex flex-col space-y-2.5">
            {navigationLinks.slice(0, 5).map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-[11px] sm:text-xs text-slate-400 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col space-y-4">
          <h4 className="text-[10px] uppercase tracking-luxury text-luxury-gold font-medium">
            Discover
          </h4>
          <div className="flex flex-col space-y-2.5">
            {navigationLinks.slice(5).map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-[11px] sm:text-xs text-slate-400 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 3: CONTACT INFORMATION */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <h4 className="text-[10px] uppercase tracking-luxury text-luxury-gold font-medium">
            Residency Newsletter
          </h4>
          
          <p className="text-[11px] sm:text-xs text-slate-400 font-light leading-relaxed mb-1">
            Subscribe to receive exclusive access to early reservation drops, private yacht charter seasonal dates, and culinary announcements.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex items-center border border-luxury-dark-border bg-luxury-dark-accent rounded-sm overflow-hidden p-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sterling@luxury.com"
                className="w-full bg-transparent px-3 py-2 text-xs text-white font-sans font-light focus:outline-none placeholder-slate-600"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-sm bg-luxury-gold text-luxury-dark hover:bg-white flex items-center justify-center shadow-md transition-all duration-300 shrink-0 cursor-pointer"
                aria-label="Subscribe"
              >
                <FiArrowRight size={14} />
              </button>
            </form>
          ) : (
            <div className="py-2.5 px-4 bg-luxury-dark border border-luxury-gold/20 rounded-sm text-center text-xs text-luxury-gold font-sans tracking-wide">
              Welcome to the Aethelgard Circle.
            </div>
          )}
        </div>

      </div>

      {/* COPYRIGHT & CREDITS BOTTOM */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-luxury-dark-border/40 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 gap-4">
        <div>
          &copy; {new Date().getFullYear()} AETHELGARD RESORTS. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Residency</a>
          <a href="#credits" className="hover:text-slate-300 transition-colors">Cookie Controls</a>
        </div>
      </div>
    </footer>
  );
}
