import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import Perfumes from './pages/Perfumes';
import Shoes from './pages/Shoes';
import MensShoes from './pages/MensShoes';
import WomensShoes from './pages/WomensShoes';
import Clothing from './pages/Clothing';
import Shirts from './pages/Shirts';
import Pants from './pages/Pants';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="bg-[#0A0A0A] text-white overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/shoes/mens" element={<MensShoes />} />
        <Route path="/shoes/womens" element={<WomensShoes />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/clothing/shirts" element={<Shirts />} />
        <Route path="/clothing/pants" element={<Pants />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
