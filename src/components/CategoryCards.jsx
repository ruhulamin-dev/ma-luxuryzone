import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Perfumes',
    subtitle: 'Authentic Dubai Fragrances',
    desc: 'Authentic Dubai perfumes — long-lasting, affordable luxury.',
    link: '/perfumes',
    image: '/category-perfume.jpg',
  },
  {
    title: 'Shoes',
    subtitle: 'Premium Footwear Collection',
    desc: 'Step into luxury with our handpicked shoe collection.',
    link: '/shoes',
    image: '/category-shoe.jpg',
  },
  {
    title: 'Clothing',
    subtitle: 'Shirts & Pants Collection',
    desc: 'Premium shirts and pants for every occasion.',
    link: '/clothing',
    image: '/category-clothing.jpg',
  },
];

export default function CategoryCards() {
  return (
    <section
      id="categories"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-[#0A0A0A]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4 justify-center">
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
          <span className="text-[10px] tracking-[3px] uppercase text-gold">
            Shop By Category
          </span>
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
        </div>

        <h2 className="font-cormorant font-light text-3xl sm:text-4xl lg:text-6xl text-center text-white mb-10 sm:mb-14 lg:mb-16">
          Shop Perfumes & Footwear Online in Bangladesh
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link to={cat.link} className="block no-underline">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative h-72 sm:h-80 lg:h-96 overflow-hidden rounded-sm border border-gold/20 hover:border-gold/50 transition-all duration-400 cursor-pointer group"
                  style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}
                >
                  {/* Background image */}
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.85) 100%)',
                    }}
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="text-[10px] tracking-[3px] uppercase text-gold mb-2">
                      {cat.subtitle}
                    </div>
                    <h3 className="font-cormorant text-3xl sm:text-4xl text-white mb-3">
                      {cat.title}
                    </h3>
                    <p className="text-[12px] text-white/60 leading-relaxed mb-5 max-w-xs">
                      {cat.desc}
                    </p>

                    <div className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[2px] uppercase font-medium">
                      Shop Now
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
