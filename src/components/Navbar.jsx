import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home', id: 'home', href: '/#home' },
  { label: 'Products', id: 'products', href: '/#products' },
  { label: 'About', id: 'about', href: '/#about' },
  { label: 'Contact', id: 'contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = id => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    setMenuOpen(false);
  };

  const navClass = scrolled
    ? 'bg-black/95 backdrop-blur-xl border-b border-gold/20'
    : 'bg-transparent';

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={
        'fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ' +
        navClass
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="bg-transparent border-none cursor-pointer p-0"
        >
          <img
            src="/logo.png"
            alt="MA Fragrance"
            className="h-16 w-16 object-cover rounded-full border-2 border-gold/40 mt-1"
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 list-none m-0 p-0">
          {links.map(link => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                onClick={e => {
                  e.preventDefault();
                  scrollTo(link.id);
                }}
                className="text-white/70 hover:text-gold text-[11px] tracking-[2px] uppercase font-medium transition-colors duration-300 no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={
              'block w-6 h-[1px] bg-gold transition-all duration-300 ' +
              (menuOpen ? 'rotate-45 translate-y-[6px]' : '')
            }
          />
          <span
            className={
              'block w-6 h-[1px] bg-gold transition-all duration-300 ' +
              (menuOpen ? 'opacity-0' : '')
            }
          />
          <span
            className={
              'block w-6 h-[1px] bg-gold transition-all duration-300 ' +
              (menuOpen ? '-rotate-45 -translate-y-[6px]' : '')
            }
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-t border-gold/10"
          >
            <ul className="list-none py-6 px-8 flex flex-col gap-5 m-0">
              {links.map(link => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={e => {
                      e.preventDefault();
                      scrollTo(link.id);
                    }}
                    className="text-white/70 hover:text-gold text-[12px] tracking-[2px] uppercase font-medium transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
