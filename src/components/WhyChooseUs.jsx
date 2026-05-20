import { motion } from 'framer-motion';

const reasons = [
  {
    icon: '🕌',
    title: 'Authentic Dubai',
    text: "100% genuine imported fragrances directly sourced from Dubai's finest houses.",
  },
  {
    icon: '⏳',
    title: 'Long-lasting',
    text: 'Premium concentration ensures your fragrance stays vibrant all day long.',
  },
  {
    icon: '💎',
    title: 'Affordable Luxury',
    text: "Experience the world's finest scents at prices accessible to everyone.",
  },
  {
    icon: '🚀',
    title: 'Fast Delivery',
    text: 'Quick and safe delivery across Bangladesh with careful packaging.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-[#0A0A0A]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4 justify-center">
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
          <span className="text-[10px] tracking-[3px] uppercase text-gold">
            Why Choose Us
          </span>
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
        </div>

        <h2 className="font-cormorant font-light text-3xl sm:text-4xl lg:text-6xl text-center text-white mb-10 sm:mb-14 lg:mb-16">
          The MA <em className="text-gold not-italic">Difference</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-gold/20 p-6 sm:p-8 lg:p-9 text-center relative overflow-hidden group transition-all duration-400 hover:border-gold/40"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20 flex items-center justify-center mx-auto mb-4 sm:mb-5 text-xl sm:text-2xl">
                {r.icon}
              </div>
              <h3 className="font-cormorant text-lg sm:text-xl text-white mb-2 sm:mb-3">
                {r.title}
              </h3>
              <p className="text-[11px] text-white/45 leading-[1.9]">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
