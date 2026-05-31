import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import SignatureRooms from "./sections/SignatureRooms";
import Amenities from "./sections/Amenities";
import Gallery from "./sections/Gallery";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";
import Timeline from "./sections/Timeline";
import SpecialOffers from "./sections/SpecialOffers";
import Faq from "./sections/Faq";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="bg-luxury-dark text-white min-h-screen relative font-sans overflow-x-hidden selection:bg-luxury-gold selection:text-luxury-dark">
      {/* Premium Scroll Progress Tracker */}
      <ScrollProgress />

      {/* Luxury Sticky Navbar */}
      <Navbar />

      {/* Main Storytelling Experience Sections */}
      <Hero />
      <About />
      <SignatureRooms />
      <Amenities />
      <Gallery />
      <Stats />
      <Testimonials />
      <Timeline />
      <SpecialOffers />
      <Faq />
      <Contact />
      
      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}

export default App;
