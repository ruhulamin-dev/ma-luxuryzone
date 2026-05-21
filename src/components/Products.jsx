import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Qaed Al Fursan',
    images: ['/product1-img1.jpg', '/product1-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳250' },
      { label: '10ML', price: '৳400' },
      { label: '15ML', price: '৳600' },
    ],
  },
  {
    id: 2,
    name: 'Cullinan Diamond Iris',
    images: ['/product2-img1.jpg', '/product2-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳250' },
      { label: '10ML', price: '৳450' },
      { label: '15ML', price: '৳650' },
    ],
  },
  {
    id: 3,
    name: 'Rassasi Hawas Ice',
    images: ['/product3-img1.jpg', '/product3-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳320' },
      { label: '10ML', price: '৳550' },
      { label: '15ML', price: '৳750' },
    ],
  },
  {
    id: 4,
    name: 'Nude Coral Diamond',
    images: ['/product4-img1.jpg', '/product4-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳300' },
      { label: '10ML', price: '৳550' },
      { label: '15ML', price: '৳750' },
    ],
  },
  {
    id: 5,
    name: 'Kaaf Ahmed Al Magribi',
    images: ['/product5-img1.jpg', '/product5-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳350' },
      { label: '10ML', price: '৳480' },
      { label: '15ML', price: '৳750' },
    ],
  },
  {
    id: 6,
    name: 'Ana Abiyedh Rouge Lattafa',
    images: ['/product6-img1.jpg', '/product6-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳350' },
      { label: '10ML', price: '৳550' },
      { label: '15ML', price: '৳750' },
    ],
  },
  {
    id: 7,
    name: 'Art Of Universe Lattafa Perfumes',
    images: ['/product7-img1.jpg', '/product7-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳430' },
      { label: '10ML', price: '৳650' },
      { label: '15ML', price: '৳900' },
    ],
  },
  {
    id: 8,
    name: 'Khamrah Qahwa Lattafa',
    images: ['/product8-img1.jpg', '/product8-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳320' },
      { label: '10ML', price: '৳500' },
      { label: '15ML', price: '৳780' },
    ],
  },
  {
    id: 9,
    name: 'Ahmed Al Magribi Marj',
    images: ['/product9-img1.jpg', '/product9-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳700' },
      { label: '10ML', price: '৳1200' },
      { label: '15ML', price: '৳1650' },
    ],
  },
  {
    id: 10,
    name: 'Liquid Brun French Avenue',
    images: ['/product10-img1.jpg', '/product10-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳350' },
      { label: '10ML', price: '৳550' },
      { label: '15ML', price: '৳820' },
    ],
  },
  {
    id: 11,
    name: 'Atlantis Extrait French Avenue',
    images: ['/product11-img1.jpg', '/product11-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳350' },
      { label: '10ML', price: '৳550' },
      { label: '15ML', price: '৳800' },
    ],
  },
  {
    id: 12,
    name: 'Club De Nuit Intense Man Armaf',
    images: ['/product12-img1.jpg', '/product12-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳330' },
      { label: '10ML', price: '৳500' },
      { label: '15ML', price: '৳780' },
    ],
  },
  {
    id: 13,
    name: 'Club De Nuit Untold Armaf',
    images: ['/product13-img1.jpg', '/product13-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳330' },
      { label: '10ML', price: '৳520' },
      { label: '15ML', price: '৳800' },
    ],
  },
  {
    id: 14,
    name: 'Supremacy Collector Edition',
    images: ['/product14-img1.jpg', '/product14-img2.jpg'],
    sizes: [
      { label: '6ML', price: '৳450' },
      { label: '10ML', price: '৳700' },
      { label: '15ML', price: '৳950' },
    ],
  },
];

function ProductCard({ product }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const prevImg = () => {
    setImgIndex(prev => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const nextImg = () => {
    setImgIndex(prev => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#1A1A1A] border border-gold/20 overflow-hidden rounded-sm hover:border-gold/50 transition-all duration-300"
        style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
      >
        {/* Image Slider */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-[#111]">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIndex}
              src={product.images[imgIndex]}
              alt={product.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover cursor-zoom-in"
              onClick={() => setLightbox(product.images[imgIndex])}
            />
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prevImg}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center border border-gold/30 bg-black/60 text-gold hover:bg-gold hover:text-black transition-all duration-300 z-10"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={nextImg}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center border border-gold/30 bg-black/60 text-gold hover:bg-gold hover:text-black transition-all duration-300 z-10"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={
                  'w-1.5 h-1.5 rounded-full transition-all duration-300 border-none cursor-pointer ' +
                  (i === imgIndex ? 'bg-gold w-4' : 'bg-white/40')
                }
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="p-4 sm:p-5">
          <h3 className="font-cormorant text-lg sm:text-xl text-white mb-1">
            {product.name}
          </h3>
          <p className="text-[11px] text-white/40 leading-relaxed mb-4">
            {product.desc}
          </p>

          {/* Size Selector */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {product.sizes.map((size, i) => (
              <button
                key={i}
                onClick={() => setSelectedSize(i)}
                className={
                  'rounded-sm py-2.5 text-center transition-all duration-300 border cursor-pointer ' +
                  (selectedSize === i
                    ? 'border-gold bg-gold text-black'
                    : 'border-gold/25 bg-transparent hover:border-gold/50')
                }
              >
                <div
                  className={
                    'text-[11px] font-semibold tracking-wide ' +
                    (selectedSize === i ? 'text-black' : 'text-white/80')
                  }
                >
                  {size.label}
                </div>
                <div
                  className={
                    'text-[10px] mt-0.5 ' +
                    (selectedSize === i ? 'text-black/70' : 'text-white/40')
                  }
                >
                  {size.price}
                </div>
              </button>
            ))}
          </div>

          {/* Price + Order */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] text-white/30 uppercase tracking-wider mb-0.5">
                Price
              </div>
              <div className="text-lg font-semibold text-gold">
                {product.sizes[selectedSize].price}
              </div>
            </div>
            <motion.a
              href={`https://wa.me/8801302630223?text=আসসালামু আলাইকুম। আমি ${product.name} (${product.sizes[selectedSize].label}) ৳ ${product.sizes[selectedSize].price} অর্ডার করতে চাই। ধন্যবাদ!`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 text-[10px] tracking-[1.5px] uppercase font-medium no-underline transition-all duration-300 rounded-sm"
              style={{
                background: 'linear-gradient(135deg, #C9A96E, #8B6914)',
                color: '#000',
              }}
            >
              <svg
                className="w-3.5 h-3.5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.135.562 4.136 1.543 5.868L0 24l6.318-1.529A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.669-.522-5.186-1.43l-.374-.221-3.748.907.945-3.644-.244-.386A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Order Now
            </motion.a>
          </div>
        </div>
      </motion.div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={lightbox}
            alt="full view"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '4px',
            }}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed',
              top: '16px',
              right: '16px',
              zIndex: 10000,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.8)',
              border: '1px solid #C9A96E',
              color: '#C9A96E',
              fontSize: '22px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
