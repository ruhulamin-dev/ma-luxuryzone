import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Arif Hossain',
    loc: 'Dhaka',
    initials: 'AH',
    product: 'Qaed Al Fursan',
    text: '"I ordered Qaed Al Fursan from MA Fragrance and I am absolutely blown away. The scent lasts the entire day and the packaging was perfect. MA Fragrance is the best place to buy authentic Dubai perfumes in Bangladesh!"',
  },
  {
    name: 'Mahima Begum',
    loc: 'Sylhet',
    initials: 'NJ',
    product: 'Nude Coral Diamond',
    text: '"Nude Coral Diamond from MA Fragrance is simply gorgeous. So feminine and elegant. I got so many compliments. MA Fragrance delivers 100% authentic products at an amazing price. Will definitely order again!"',
  },
  {
    name: 'Sabbir Ahmed',
    loc: 'Chittagong',
    initials: 'SA',
    product: 'Club De Nuit Intense Man',
    text: '"Club De Nuit Intense Man from MA Fragrance smells just like Creed Aventus but at a fraction of the price. Fast delivery, genuine product. MA Fragrance is my go-to store for premium fragrances!"',
  },
  {
    name: 'Fatema Begum',
    loc: 'Rajshahi',
    initials: 'FB',
    product: 'Khamrah Qahwa Lattafa',
    text: '"Ordered Khamrah Qahwa Lattafa from MA Fragrance. Rich, warm and long-lasting — perfect for winter. MA Fragrance always delivers authentic Dubai fragrances with great customer service. Highly recommended!"',
  },
  {
    name: 'Anam Ahmed',
    loc: 'Sylhet',
    initials: 'RK',
    product: 'Rassasi Hawas Ice',
    text: '"Rassasi Hawas Ice from MA Fragrance is the best summer fragrance I have ever tried. So fresh and long-lasting. MA Fragrance is the most trusted perfume shop in Bangladesh. 5 stars without a doubt!"',
  },
  {
    name: 'Nurul Alam',
    loc: 'Mymensingh',
    initials: 'MA',
    product: 'Ana Abiyedh Rouge Lattafa',
    text: '"Ana Abiyedh Rouge Lattafa from MA Fragrance is absolutely beautiful. Floral, sweet and it lasts all day. MA Fragrance provides 100% original Dubai perfumes at affordable prices. I trust no other shop!"',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#1A1A1A] border border-gold/20 p-5 sm:p-6 transition-all duration-300 hover:border-gold/40 rounded-sm"
            >
              {/* Stars */}
              <div className="text-gold text-sm tracking-[2px] mb-3">★★★★★</div>

              {/* Product Badge */}
              <div className="inline-block bg-gold/10 border border-gold/20 text-gold text-[9px] tracking-[1.5px] uppercase px-2.5 py-1 rounded-full mb-3">
                {r.product}
              </div>

              {/* Review Text */}
              <p className="text-[12px] sm:text-[13px] text-white/60 leading-[1.9] mb-5 italic">
                {r.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gold/10">
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
