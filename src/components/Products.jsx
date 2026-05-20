import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Royal Oud Gold',
    desc: 'A regal blend of Arabian oud with amber and musk. The scent of royalty.',
    price: '৳ 1,850',
    accent: '#C9A96E',
    label: 'OUD',
    bg: 'linear-gradient(135deg, #1a1208, #0f0a02)',
  },
  {
    id: 2,
    name: 'Blue Sapphire',
    desc: 'Ocean breeze meets midnight rose. Fresh, mysterious, unforgettable.',
    price: '৳ 1,650',
    accent: '#6eaac9',
    label: 'SEA',
    bg: 'linear-gradient(135deg, #0a0f1a, #060a12)',
  },
  {
    id: 3,
    name: 'Velvet Noir',
    desc: 'Dark florals, rich woods, and a velvety finish that lasts all night.',
    price: '৳ 2,100',
    accent: '#a96ec9',
    label: 'NOIR',
    bg: 'linear-gradient(135deg, #120a1a, #0a0612)',
  },
  {
    id: 4,
    name: 'Rose Al Dubai',
    desc: 'Bulgarian rose meets the warm sands of Arabia. A timeless classic.',
    price: '৳ 1,950',
    accent: '#c96e8a',
    label: 'ROSE',
    bg: 'linear-gradient(135deg, #1a0a10, #120608)',
  },
  {
    id: 5,
    name: 'Amber Musk',
    desc: 'Warm amber resins with sensual white musk. Sophisticated and addictive.',
    price: '৳ 1,750',
    accent: '#c9a46e',
    label: 'AMBER',
    bg: 'linear-gradient(135deg, #1a1208, #12090a)',
  },
  {
    id: 6,
    name: 'Oud Al Shams',
    desc: 'The scent of sunlit oud — bright, warm, and deeply Arabian.',
    price: '৳ 2,200',
    accent: '#C9A96E',
    label: 'SHAMS',
    bg: 'linear-gradient(135deg, #1a1005, #100a02)',
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-[#111111]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4 justify-center">
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
          <span className="text-[10px] tracking-[3px] uppercase text-gold">
            Our Collection
          </span>
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
        </div>

        <h2 className="font-cormorant font-light text-3xl sm:text-4xl lg:text-6xl text-center text-white mb-10 sm:mb-14 lg:mb-16">
          Featured <em className="text-gold not-italic">Fragrances</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#1A1A1A] border border-gold/20 overflow-hidden cursor-pointer group transition-all duration-400 hover:border-gold/50"
            >
              <div
                className="h-44 sm:h-52 flex items-center justify-center relative overflow-hidden"
                style={{ background: p.bg }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse at 50% 80%, ${p.accent}18 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="flex flex-col items-center animate-float"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <div
                    className="w-3.5 h-4 rounded-t-sm"
                    style={{
                      background: `linear-gradient(135deg, ${p.accent}, ${p.accent}80)`,
                    }}
                  />
                  <div
                    className="w-2.5 h-2.5 bg-[#1a1a1a]"
                    style={{ border: `1px solid ${p.accent}50` }}
                  />
                  <div
                    className="w-11 h-24 flex items-center justify-center rounded-sm"
                    style={{ border: `1px solid ${p.accent}40` }}
                  >
                    <span
                      className="font-cormorant text-[10px] tracking-wider"
                      style={{ color: p.accent, writingMode: 'vertical-lr' }}
                    >
                      {p.label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="font-cormorant text-lg sm:text-xl text-white mb-2">
                  {p.name}
                </h3>
                <p className="text-[11px] text-white/45 leading-[1.8] mb-4 sm:mb-5">
                  {p.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-semibold text-gold">
                    {p.price}
                  </span>
                  <motion.a
                    href={
                      'https://wa.me/8801302630223?text=আমি ' +
                      p.name +
                      ' অর্ডার করতে চাই'
                    }
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ background: p.accent, color: '#000' }}
                    className="border border-gold/25 text-gold px-3 sm:px-4 py-2 text-[9px] tracking-[2px] uppercase transition-all duration-300 no-underline"
                  >
                    Order
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
