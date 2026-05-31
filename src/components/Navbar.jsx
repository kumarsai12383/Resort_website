import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navigationLinks, resortInfo } from "../data/resortData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via Intersection Observer
  useEffect(() => {
    const sections = navigationLinks.map((link) => document.getElementById(link.id));
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // triggers when section takes up the middle part of screen
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-sans ${
          isScrolled
            ? "bg-luxury-dark/85 backdrop-blur-xl border-b border-luxury-dark-border py-4 shadow-xl"
            : "bg-gradient-to-b from-luxury-dark/80 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-6 xl:px-12 flex items-center justify-between">
          
          {/* Logo Branding */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex flex-col items-start select-none whitespace-nowrap"
          >
            <span className="font-serif text-xl md:text-2xl font-light tracking-luxury-widest text-white hover:text-luxury-gold transition-colors duration-300 whitespace-nowrap">
              {resortInfo.name.toUpperCase()}
            </span>
            <span className="text-[9px] uppercase tracking-luxury text-luxury-gold font-light -mt-1 whitespace-nowrap">
              RESORTS & SPA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center lg:space-x-3 xl:space-x-5 2xl:space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative text-[10px] xl:text-[11px] 2xl:text-xs uppercase tracking-luxury font-light py-2 transition-all duration-300 hover:text-luxury-gold whitespace-nowrap ${
                  activeSection === link.id ? "text-luxury-gold font-medium" : "text-slate-300"
                }`}
              >
                {link.label}
                {/* Underline for active state */}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold shadow-[0_0_8px_#C5A880]" />
                )}
              </a>
            ))}
          </div>

          {/* Quick Reserve CTA button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="px-4 py-1.5 xl:px-5 xl:py-2 2xl:px-6 2xl:py-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark text-[10px] xl:text-[11px] 2xl:text-xs uppercase tracking-luxury transition-all duration-500 font-medium rounded-sm backdrop-blur-sm shadow-[0_0_15px_rgba(197,168,128,0.1)] whitespace-nowrap"
            >
              Book Residency
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-luxury-gold transition-colors p-2 z-50 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 w-full h-full bg-[#0B0D11] z-40 lg:hidden flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 text-center w-full px-6 max-w-sm">
          <span className="font-serif text-3xl font-light tracking-luxury-widest text-luxury-gold mb-6 select-none">
            {resortInfo.name.toUpperCase()}
          </span>

          {navigationLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`w-full py-3 text-sm uppercase tracking-luxury-wide font-light transition-all duration-300 rounded-sm border backdrop-blur-sm shadow-md select-none ${
                activeSection === link.id
                  ? "bg-black/90 border-luxury-gold text-luxury-gold font-medium scale-105 shadow-[0_0_15px_rgba(197,168,128,0.15)]"
                  : "bg-black/40 border-luxury-dark-border text-slate-300 hover:text-luxury-gold hover:border-luxury-gold/50 hover:bg-black/70"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="mt-6 w-full py-3 border border-luxury-gold bg-luxury-gold text-luxury-dark hover:bg-white hover:text-luxury-dark text-sm uppercase tracking-luxury font-semibold transition-all duration-500 rounded-sm shadow-lg select-none"
          >
            Book Residency
          </a>
        </div>
      </div>
    </>
  );
}
