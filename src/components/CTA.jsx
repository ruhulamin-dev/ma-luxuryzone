import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A0A0A, #1a1208, #0A0A0A)',
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-4 justify-center">
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
          <span className="text-[10px] tracking-[3px] uppercase text-gold">
            Order Now
          </span>
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
        </div>

        <h2 className="font-cormorant font-light text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4">
          Order Your <em className="text-gold not-italic">Signature Scent</em>{' '}
          Today
        </h2>

        <p className="text-[12px] sm:text-[13px] text-white/45 mb-10 tracking-[0.5px]">
          Connect with us on WhatsApp for instant ordering and consultation
        </p>

        <div
          className="w-20 h-px mx-auto mb-10"
          style={{
            background:
              'linear-gradient(90deg, transparent, #C9A96E, transparent)',
          }}
        />

        <motion.a
          href="https://wa.me/8801302630223"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            background: 'rgba(255,255,255,0.05)',
            borderColor: '#C9A96E',
          }}
          className="inline-flex items-center gap-3 px-6 sm:px-10 py-3 sm:py-4 border border-gold/25 text-gold text-[10px] sm:text-[11px] tracking-[2px] uppercase font-medium transition-all duration-300 no-underline"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.135.562 4.136 1.543 5.868L0 24l6.318-1.529A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.669-.522-5.186-1.43l-.374-.221-3.748.907.945-3.644-.244-.386A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
          </svg>
          Chat on WhatsApp — +880 1302 630 223
        </motion.a>
      </motion.div>
    </section>
  );
}
