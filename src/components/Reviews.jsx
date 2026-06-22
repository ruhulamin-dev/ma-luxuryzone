import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 1,
    image: '/review1.jpg',
  },
  {
    id: 2,
    image: '/review2.jpg',
  },
  {
    id: 3,
    image: '/review3.jpg',
  },
  {
    id: 4,
    image: '/review4.jpg',
  },
  // {
  //   id: 5,
  //   image: '/review5.jpg',
  // },
  // {
  //   id: 6,
  //   image: '/review6.jpg',
  // },
];

function ReviewModal({ src, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.95)' }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-sm"
      >
        <img
          src={src}
          alt="Customer Review"
          className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
          style={{ boxShadow: '0 0 60px rgba(201,169,110,0.2)' }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all duration-300"
          style={{ background: 'rgba(0,0,0,0.9)' }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="text-center mt-4 text-[11px] text-white/40 tracking-[2px] uppercase">
          Click outside to close
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Reviews() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4 justify-center">
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
          <span className="text-[10px] tracking-[3px] uppercase text-gold">
            Testimonials
          </span>
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
        </div>

        <h2 className="font-cormorant font-light text-3xl sm:text-4xl lg:text-6xl text-center text-white mb-4">
          What Our Customers Say
        </h2>

        <p className="text-center text-[12px] text-white/35 tracking-[1px] mb-10 sm:mb-14">
          Real reviews from our verified customers
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setModalImg(review.image)}
              className="relative cursor-zoom-in overflow-hidden rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300 group"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
            >
              <img
                src={review.image}
                alt={'Customer Review ' + review.id}
                className="w-full h-auto object-cover"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 border border-gold/40 rounded-full px-3 py-2 flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A96E"
                    strokeWidth="2.5"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <span className="text-[10px] text-gold tracking-wider">
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalImg && (
          <ReviewModal src={modalImg} onClose={() => setModalImg(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
