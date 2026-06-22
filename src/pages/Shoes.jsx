import ProductCard from '../components/ProductCard';
import shoes from '../data/shoes';

const WHATSAPP_NUMBER = '8801302630223';

export default function Shoes() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-[#111111] min-h-screen pt-[150px] lg:pt-[170px]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4 justify-center">
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
          <span className="text-[10px] tracking-[3px] uppercase text-gold">
            Our Collection
          </span>
          <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
        </div>

        <h2 className="font-cormorant font-light text-3xl sm:text-4xl lg:text-6xl text-center text-white mb-10 sm:mb-14 lg:mb-16">
          Premium Footwear Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {shoes.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              whatsappNumber={WHATSAPP_NUMBER}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
