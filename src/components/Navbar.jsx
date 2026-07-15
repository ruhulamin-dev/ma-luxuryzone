import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shoesOpen, setShoesOpen] = useState(false);
  const [mobileShoes, setMobileShoes] = useState(false);
  const [clothingOpen, setClothingOpen] = useState(false);
  const [mobileClothing, setMobileClothing] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setShoesOpen(false);
    setMobileShoes(false);
    setClothingOpen(false);
    setMobileClothing(false);
  }, [location.pathname]);

  const goHome = () => {
    setMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isShoeActive = location.pathname.startsWith('/shoes');
  const isClothingActive = location.pathname.startsWith('/clothing');

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 left-0 right-0 z-[9999]"
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
              onClick={goHome}
              className="bg-transparent border-none cursor-pointer p-0 flex items-center gap-3"
            >
              <img
                src="/m.aluxuryzone.jpg"
                alt="M.A Luxury Zone"
                className={`object-cover rounded-full border border-yellow-500/50 transition-all duration-500 ${
                  scrolled ? 'h-12 w-12' : 'h-16 w-16'
                }`}
              />
              <div className="hidden sm:block text-left">
                <div className="font-cormorant text-gold/80 text-lg font-semibold tracking-[3px] uppercase leading-tight">
                  M.A Luxury Zone
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
              {/* Home */}
              <li>
                <Link
                  to="/"
                  className={
                    'relative block px-4 py-2 text-[11px] lg:text-[12px] tracking-[2.5px] uppercase font-semibold transition-all duration-300 no-underline group ' +
                    (location.pathname === '/'
                      ? 'text-gold'
                      : 'text-white/65 hover:text-gold/70')
                  }
                >
                  Home
                  <span
                    className={
                      'absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-yellow-400 transition-all duration-300 ' +
                      (location.pathname === '/'
                        ? 'w-3/4'
                        : 'w-0 group-hover:w-3/4')
                    }
                  />
                </Link>
              </li>

              {/* Perfumes */}
              <li>
                <Link
                  to="/perfumes"
                  className={
                    'relative block px-4 py-2 text-[11px] lg:text-[12px] tracking-[2.5px] uppercase font-semibold transition-all duration-300 no-underline group ' +
                    (location.pathname === '/perfumes'
                      ? 'text-gold'
                      : 'text-white/65 hover:text-gold/70')
                  }
                >
                  Perfumes
                  <span
                    className={
                      'absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-yellow-400 transition-all duration-300 ' +
                      (location.pathname === '/perfumes'
                        ? 'w-3/4'
                        : 'w-0 group-hover:w-3/4')
                    }
                  />
                </Link>
              </li>

              {/* Shoes with Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setShoesOpen(true)}
                onMouseLeave={() => setShoesOpen(false)}
              >
                <Link
                  to="/shoes"
                  className={
                    'relative flex items-center gap-1 px-4 py-2 text-[11px] lg:text-[12px] tracking-[2.5px] uppercase font-semibold transition-all duration-300 no-underline group ' +
                    (isShoeActive
                      ? 'text-gold'
                      : 'text-white/65 hover:text-gold/70')
                  }
                >
                  Shoes
                  <svg
                    className={
                      'w-3 h-3 transition-transform duration-300 ' +
                      (shoesOpen ? 'rotate-180' : '')
                    }
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  <span
                    className={
                      'absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-yellow-400 transition-all duration-300 ' +
                      (isShoeActive ? 'w-3/4' : 'w-0 group-hover:w-3/4')
                    }
                  />
                </Link>

                <AnimatePresence>
                  {shoesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 rounded-sm overflow-hidden"
                      style={{
                        background: 'rgba(8,8,8,0.98)',
                        border: '1px solid rgba(201,169,110,0.25)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                      }}
                    >
                      <Link
                        to="/shoes/mens"
                        className="flex items-center gap-3 px-5 py-3.5 text-[11px] tracking-[2px] uppercase font-semibold text-white/65 hover:text-gold hover:bg-gold/5 transition-all duration-200 no-underline border-b border-gold/10"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 18c0-2 1-3 3-3h1l4-5h2l5 4c1 1 3 1 3 3v1H3v-1z" />
                        </svg>
                        Men's
                      </Link>
                      <Link
                        to="/shoes/womens"
                        className="flex items-center gap-3 px-5 py-3.5 text-[11px] tracking-[2px] uppercase font-semibold text-white/65 hover:text-gold hover:bg-gold/5 transition-all duration-200 no-underline"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2a4 4 0 0 1 4 4c0 3-4 8-4 8s-4-5-4-8a4 4 0 0 1 4-4z" />
                          <line x1="12" y1="14" x2="12" y2="22" />
                          <line x1="9" y1="19" x2="15" y2="19" />
                        </svg>
                        Women's
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Clothing with Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setClothingOpen(true)}
                onMouseLeave={() => setClothingOpen(false)}
              >
                <Link
                  to="/clothing"
                  className={
                    'relative flex items-center gap-1 px-4 py-2 text-[11px] lg:text-[12px] tracking-[2.5px] uppercase font-semibold transition-all duration-300 no-underline group ' +
                    (isClothingActive
                      ? 'text-gold'
                      : 'text-white/65 hover:text-gold/70')
                  }
                >
                  Clothing
                  <svg
                    className={
                      'w-3 h-3 transition-transform duration-300 ' +
                      (clothingOpen ? 'rotate-180' : '')
                    }
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  <span
                    className={
                      'absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-yellow-400 transition-all duration-300 ' +
                      (isClothingActive ? 'w-3/4' : 'w-0 group-hover:w-3/4')
                    }
                  />
                </Link>

                <AnimatePresence>
                  {clothingOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 rounded-sm overflow-hidden"
                      style={{
                        background: 'rgba(8,8,8,0.98)',
                        border: '1px solid rgba(201,169,110,0.25)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                      }}
                    >
                      <Link
                        to="/clothing/shirts"
                        className="flex items-center gap-3 px-5 py-3.5 text-[11px] tracking-[2px] uppercase font-semibold text-white/65 hover:text-gold hover:bg-gold/5 transition-all duration-200 no-underline border-b border-gold/10"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4l4-1 4 3 4-3 4 1v4l-3 1v11H7V9L4 8z" />
                        </svg>
                        Shirts
                      </Link>
                      <Link
                        to="/clothing/pants"
                        className="flex items-center gap-3 px-5 py-3.5 text-[11px] tracking-[2px] uppercase font-semibold text-white/65 hover:text-gold hover:bg-gold/5 transition-all duration-200 no-underline"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 3h12l1 5-2 1-1 12h-4l-1-9-1 9H6L5 9l-2-1z" />
                        </svg>
                        Pants
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Contact */}
              <li>
                <Link
                  to="/contact"
                  className={
                    'relative block px-4 py-2 text-[11px] lg:text-[12px] tracking-[2.5px] uppercase font-semibold transition-all duration-300 no-underline group ' +
                    (location.pathname === '/contact'
                      ? 'text-gold'
                      : 'text-white/65 hover:text-gold/70')
                  }
                >
                  Contact
                  <span
                    className={
                      'absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-yellow-400 transition-all duration-300 ' +
                      (location.pathname === '/contact'
                        ? 'w-3/4'
                        : 'w-0 group-hover:w-3/4')
                    }
                  />
                </Link>
              </li>

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
                {/* Home */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 }}
                >
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className={
                      'flex items-center gap-3 py-3 text-[12px] tracking-[3px] uppercase font-semibold transition-colors duration-300 no-underline border-b border-yellow-500/[0.08] ' +
                      (location.pathname === '/'
                        ? 'text-yellow-400'
                        : 'text-white/70 hover:text-yellow-400')
                    }
                  >
                    <span className="text-yellow-500/40 text-[8px]">◆</span>
                    Home
                  </Link>
                </motion.li>

                {/* Perfumes */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 }}
                >
                  <Link
                    to="/perfumes"
                    onClick={() => setMenuOpen(false)}
                    className={
                      'flex items-center gap-3 py-3 text-[12px] tracking-[3px] uppercase font-semibold transition-colors duration-300 no-underline border-b border-yellow-500/[0.08] ' +
                      (location.pathname === '/perfumes'
                        ? 'text-yellow-400'
                        : 'text-white/70 hover:text-yellow-400')
                    }
                  >
                    <span className="text-yellow-500/40 text-[8px]">◆</span>
                    Perfumes
                  </Link>
                </motion.li>

                {/* Shoes — expandable */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 }}
                >
                  <button
                    onClick={() => setMobileShoes(!mobileShoes)}
                    className={
                      'w-full flex items-center justify-between py-3 text-[12px] tracking-[3px] uppercase font-semibold transition-colors duration-300 bg-transparent border-none border-b border-yellow-500/[0.08] cursor-pointer ' +
                      (isShoeActive ? 'text-yellow-400' : 'text-white/70')
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-yellow-500/40 text-[8px]">◆</span>
                      Shoes
                    </div>
                    <svg
                      className={
                        'w-3.5 h-3.5 text-gold/50 transition-transform duration-300 ' +
                        (mobileShoes ? 'rotate-180' : '')
                      }
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {mobileShoes && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="pl-8 py-2 flex flex-col gap-1"
                          style={{
                            borderLeft: '1px solid rgba(201,169,110,0.2)',
                          }}
                        >
                          <Link
                            to="/shoes/mens"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 py-2.5 text-[11px] tracking-[2px] uppercase font-semibold text-white/60 hover:text-yellow-400 transition-colors no-underline"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M3 18c0-2 1-3 3-3h1l4-5h2l5 4c1 1 3 1 3 3v1H3v-1z" />
                            </svg>
                            Men's Shoes
                          </Link>
                          <Link
                            to="/shoes/womens"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 py-2.5 text-[11px] tracking-[2px] uppercase font-semibold text-white/60 hover:text-yellow-400 transition-colors no-underline"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 2a4 4 0 0 1 4 4c0 3-4 8-4 8s-4-5-4-8a4 4 0 0 1 4-4z" />
                              <line x1="12" y1="14" x2="12" y2="22" />
                              <line x1="9" y1="19" x2="15" y2="19" />
                            </svg>
                            Women's Shoes
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>

                {/* Clothing — expandable */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 }}
                >
                  <button
                    onClick={() => setMobileClothing(!mobileClothing)}
                    className={
                      'w-full flex items-center justify-between py-3 text-[12px] tracking-[3px] uppercase font-semibold transition-colors duration-300 bg-transparent border-none border-b border-yellow-500/[0.08] cursor-pointer ' +
                      (isClothingActive ? 'text-yellow-400' : 'text-white/70')
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-yellow-500/40 text-[8px]">◆</span>
                      Clothing
                    </div>
                    <svg
                      className={
                        'w-3.5 h-3.5 text-gold/50 transition-transform duration-300 ' +
                        (mobileClothing ? 'rotate-180' : '')
                      }
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {mobileClothing && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="pl-8 py-2 flex flex-col gap-1"
                          style={{
                            borderLeft: '1px solid rgba(201,169,110,0.2)',
                          }}
                        >
                          <Link
                            to="/clothing/shirts"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 py-2.5 text-[11px] tracking-[2px] uppercase font-semibold text-white/60 hover:text-yellow-400 transition-colors no-underline"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M4 4l4-1 4 3 4-3 4 1v4l-3 1v11H7V9L4 8z" />
                            </svg>
                            Shirts
                          </Link>
                          <Link
                            to="/clothing/pants"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 py-2.5 text-[11px] tracking-[2px] uppercase font-semibold text-white/60 hover:text-yellow-400 transition-colors no-underline"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M6 3h12l1 5-2 1-1 12h-4l-1-9-1 9H6L5 9l-2-1z" />
                            </svg>
                            Pants
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>

                {/* Contact */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.24 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className={
                      'flex items-center gap-3 py-3 text-[12px] tracking-[3px] uppercase font-semibold transition-colors duration-300 no-underline border-b border-yellow-500/[0.08] ' +
                      (location.pathname === '/contact'
                        ? 'text-yellow-400'
                        : 'text-white/70 hover:text-yellow-400')
                    }
                  >
                    <span className="text-yellow-500/40 text-[8px]">◆</span>
                    Contact
                  </Link>
                </motion.li>

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
