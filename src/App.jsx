import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <WhyChooseUs />
      <Reviews />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
