import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'Products', id: 'products' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollTo = id => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = 100;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 left-0 right-0 z-[999]"
      >
        {/* Top gold line */}
        <div
          className="w-full h-[3px]"
          style={{
            background:
              'linear-gradient(90deg, #8B6914, #C9A96E, #E8D5A3, #C9A96E, #8B6914)',
          }}
        />

        {/* Main Navbar */}
        <div
          className={`transition-all duration-500 ${
            scrolled ? 'py-2' : 'py-4'
          }`}
          style={{
            background: 'rgba(8,8,8,0.96)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="bg-transparent border-none cursor-pointer p-0 flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="MA Fragrance"
                className={`object-cover rounded-full border border-yellow-500/50 transition-all duration-500 ${
                  scrolled ? 'h-12 w-12' : 'h-16 w-16'
                }`}
              />

              <div className="hidden sm:block text-right">
                <div className="font-cormorant text-gold/80 text-lg font-semibold tracking-[3px] uppercase leading-tight">
                  MA Fragrance
                </div>
              </div>
            </button>

            {/* Decorative line */}
            <div className="hidden lg:flex flex-1 items-center mx-10">
              <div
                className="flex-1 h-[1px]"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(201,169,110,0.3))',
                }}
              />

              <div className="mx-3 text-yellow-500/30 text-[8px] tracking-[4px]">
                ◆
              </div>

              <div
                className="flex-1 h-[1px]"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(201,169,110,0.3), transparent)',
                }}
              />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
              {links.map(link => (
                <li key={link.id}>
                  <a
                    href={`/#${link.id}`}
                    onClick={e => {
                      e.preventDefault();
                      scrollTo(link.id);
                    }}
                    className="relative block px-4 py-2 text-[11px] lg:text-[12px] tracking-[2.5px] uppercase font-semibold text-white/65 hover:text-gold/70 transition-all duration-300 no-underline group"
                  >
                    {link.label}

                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-yellow-400 group-hover:w-3/4 transition-all duration-300" />
                  </a>
                </li>
              ))}

              {/* WhatsApp Button */}
              <li className="ml-4">
                <a
                  href="https://wa.me/8801302630223"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-[10px] tracking-[2px] uppercase font-semibold no-underline transition-all duration-300 hover:opacity-80 rounded-md"
                  style={{
                    background: 'linear-gradient(135deg, #C9A96E, #8B6914)',
                    color: '#000',
                  }}
                >
                  <svg
                    className="w-3 h-3 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                  Order
                </a>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
              aria-label="menu"
            >
              <span
                className={`block h-[1.5px] bg-yellow-400 transition-all duration-300 ${
                  menuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'
                }`}
              />

              <span
                className={`block w-6 h-[1.5px] bg-yellow-400 transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />

              <span
                className={`block h-[1.5px] bg-yellow-400 transition-all duration-300 ${
                  menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="w-full h-[1px]"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(201,169,110,0.5), rgba(201,169,110,0.8), rgba(201,169,110,0.5), transparent)',
          }}
        />

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(8,8,8,0.99)',
                borderTop: '1px solid rgba(201,169,110,0.15)',
              }}
            >
              <ul className="list-none m-0 px-6 py-6 flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <a
                      href={`/#${link.id}`}
                      onClick={e => {
                        e.preventDefault();
                        scrollTo(link.id);
                      }}
                      className="flex items-center gap-3 py-3 text-[12px] tracking-[3px] uppercase font-semibold text-white/70 hover:text-yellow-400 transition-colors duration-300 no-underline border-b border-yellow-500/[0.08]"
                    >
                      <span className="text-yellow-500/40 text-[8px]">◆</span>

                      {link.label}
                    </a>
                  </motion.li>
                ))}

                {/* Mobile WhatsApp */}
                <li className="pt-4">
                  <a
                    href="https://wa.me/8801302630223"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 text-[11px] tracking-[2px] uppercase font-semibold no-underline rounded-md"
                    style={{
                      background: 'linear-gradient(135deg, #C9A96E, #8B6914)',
                      color: '#000',
                    }}
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    Order on WhatsApp
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
