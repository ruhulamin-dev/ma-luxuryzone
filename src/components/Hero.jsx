import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToCategories = () => {
    const el = document.getElementById('categories');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-[120px] sm:pt-[130px] px-4 sm:px-6 lg:px-10 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0A0A0A 0%, #1a1208 40%, #0f0d06 70%, #0A0A0A 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(201,169,110,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 lg:py-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-gold/20 px-4 py-2 rounded-full text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase text-gold mb-6 sm:mb-8">
            <span className="text-[6px]">◆</span>
            Perfumes & Footwear Collection
          </div>

          <h1 className="font-cormorant font-light text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white mb-4 sm:mb-6">
            Discover Premium
            <br />
            Dubai Fragrances & Footwear
          </h1>

          <p className="text-xs sm:text-sm text-white/50 leading-[1.9] max-w-md mb-8 sm:mb-10 tracking-[0.5px] mx-auto lg:mx-0">
            Authentic Dubai perfumes and premium footwear crafted for elegance
            and confidence. Experience luxury, delivered to your door across
            Bangladesh.
          </p>

          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
            <motion.button
              onClick={scrollToCategories}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="text-black px-6 sm:px-9 py-3 sm:py-4 text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[2.5px] uppercase font-semibold cursor-pointer border-none"
              style={{
                background: 'linear-gradient(135deg, #C9A96E 0%, #8B6914 100%)',
                clipPath:
                  'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
            >
              Shop Now
            </motion.button>

            <motion.a
              href="https://wa.me/8801302630223"
              target="_blank"
              rel="noreferrer"
              whileHover={{ background: 'rgba(255,255,255,0.05)' }}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-gold/25 text-gold text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[2.5px] uppercase font-medium cursor-pointer transition-all no-underline"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.135.562 4.136 1.543 5.868L0 24l6.318-1.529A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.669-.522-5.186-1.43l-.374-.221-3.748.907.945-3.644-.244-.386A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* Right - Brand Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[520px] order-1 lg:order-2"
        >
          {/* Orbit rings */}
          <div className="absolute w-[280px] sm:w-[380px] lg:w-[440px] h-[280px] sm:h-[380px] lg:h-[440px] border border-gold/[0.08] rounded-full animate-orbit">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gold rounded-full"
              style={{ boxShadow: '0 0 10px #C9A96E' }}
            />
          </div>
          <div className="absolute w-[200px] sm:w-[280px] lg:w-[320px] h-[200px] sm:h-[280px] lg:h-[320px] border border-dashed border-gold/[0.05] rounded-full animate-orbit-reverse" />
          <div
            className="absolute w-[220px] h-[220px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%)',
            }}
          />

          {/* Brand Emblem Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 flex flex-col items-center justify-center w-[160px] sm:w-[220px] lg:w-[260px] h-[190px] sm:h-[260px] lg:h-[300px] px-4"
            style={{
              background:
                'linear-gradient(135deg, rgba(201,169,110,0.1) 0%, rgba(20,16,8,0.92) 45%, rgba(201,169,110,0.05) 75%, rgba(201,169,110,0.15) 100%)',
              border: '1px solid rgba(201,169,110,0.4)',
              boxShadow:
                '0 25px 70px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 50px rgba(201,169,110,0.1)',
            }}
          >
            {/* Top ornament */}
            <div className="text-gold/50 text-[8px] sm:text-[9px] tracking-[4px] sm:tracking-[6px] mb-2 sm:mb-3">
              ◆ ◆ ◆
            </div>

            {/* Initials */}
            <div className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-gold tracking-[2px] mb-2 sm:mb-3">
              M.A
            </div>

            <div className="w-10 sm:w-14 h-px bg-gold/30 mb-2 sm:mb-3" />

            {/* Brand name */}
            <div className="text-white text-[10px] sm:text-[12px] lg:text-[13px] tracking-[2px] sm:tracking-[3px] uppercase font-medium mb-1 text-center">
              Luxury Zone
            </div>

            <div className="text-gold/50 text-[7px] sm:text-[8px] tracking-[1.5px] uppercase text-center mb-4 sm:mb-5">
              Est. Bangladesh
            </div>

            {/* Category tags */}
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1 flex-wrap justify-center">
              <div className="flex items-center gap-1 border border-gold/25 rounded-full px-2 sm:px-2.5 py-1">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A96E"
                  strokeWidth="2"
                >
                  <path d="M9 3v2m6-2v2M6 9h12l-1 11H7L6 9z" />
                </svg>
                <span className="text-gold/70 text-[7px] sm:text-[8px] tracking-[0.5px] uppercase">
                  Perfumes
                </span>
              </div>
              <div className="flex items-center gap-1 border border-gold/25 rounded-full px-2 sm:px-2.5 py-1">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A96E"
                  strokeWidth="2"
                >
                  <path d="M3 18c0-2 1-3 3-3h1l4-5h2l5 4c1 1 3 1 3 3v2H3v-1z" />
                </svg>
                <span className="text-gold/70 text-[7px] sm:text-[8px] tracking-[0.5px] uppercase">
                  Footwear
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
