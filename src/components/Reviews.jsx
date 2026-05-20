import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Rafiq Khan',
    loc: 'Dhaka',
    initials: 'RK',
    text: '"The Royal Oud Gold is absolutely divine. I\'ve never gotten so many compliments. Worth every taka!"',
  },
  {
    name: 'Sabrina Ahmed',
    loc: 'Sylhet',
    initials: 'SA',
    text: '"Finally a shop with authentic Dubai fragrances in Bangladesh. Fast delivery and beautiful packaging."',
  },
  {
    name: 'Tanvir Hossain',
    loc: 'Chittagong',
    initials: 'TH',
    text: '"Blue Sapphire is my signature scent now. So fresh and long-lasting. Highly recommend MA Fragrance!"',
  },
];

export default function Reviews() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4 justify-center">
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
          <span className="text-[10px] tracking-[3px] uppercase text-gold">
            Testimonials
          </span>
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
        </div>

        <h2 className="font-cormorant font-light text-3xl sm:text-4xl lg:text-6xl text-center text-white mb-10 sm:mb-14 lg:mb-16">
          What Our <em className="text-gold not-italic">Customers Say</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-[#1A1A1A] border border-gold/20 p-6 sm:p-8 transition-all duration-400 hover:border-gold/40"
            >
              <div className="text-gold text-sm tracking-[2px] mb-4">★★★★★</div>
              <p className="text-[12px] sm:text-[13px] text-white/60 leading-[1.9] mb-6 italic">
                {r.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-black flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #8B6914, #C9A96E)',
                  }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="text-[13px] font-medium text-white">
                    {r.name}
                  </div>
                  <div className="text-[10px] text-white/30 tracking-[1px]">
                    {r.loc}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
