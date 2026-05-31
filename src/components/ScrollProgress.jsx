import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.pageYOffset / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-luxury-dark/30 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-luxury-gold-dark via-luxury-gold to-luxury-gold-light transition-all duration-75 shadow-[0_0_10px_#C5A880]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
