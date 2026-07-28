import { useState, useMemo, useRef, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import shirts from '../data/shirts';
import pants from '../data/pants';
import caps from '../data/caps';

const WHATSAPP_NUMBER = '8801302630223';

const allClothing = [
  ...shirts.map(item => ({ ...item, id: 'shirt-' + item.id })),
  ...pants.map(item => ({ ...item, id: 'pant-' + item.id })),
  ...caps.map(item => ({ ...item, id: 'cap-' + item.id })),
];

const getBasePrice = product => {
  if (product.sizes && product.sizes.length > 0) {
    const prices = product.sizes.map(size =>
      Number(String(size.price).replace(/[^0-9.]/g, '')),
    );
    return Math.min(...prices);
  }
  if (product.price !== undefined) {
    return Number(String(product.price).replace(/[^0-9.]/g, ''));
  }
  return 0;
};

const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'low-to-high', label: 'Price: Low to High' },
  { value: 'high-to-low', label: 'Price: High to Low' },
];

export default function Clothing() {
  const [sortOrder, setSortOrder] = useState('default');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortedClothing = useMemo(() => {
    const list = [...allClothing];
    if (sortOrder === 'low-to-high') {
      list.sort((a, b) => getBasePrice(a) - getBasePrice(b));
    } else if (sortOrder === 'high-to-low') {
      list.sort((a, b) => getBasePrice(b) - getBasePrice(a));
    }
    return list;
  }, [sortOrder]);

  const currentLabel = SORT_OPTIONS.find(opt => opt.value === sortOrder)?.label;

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
          Premium Clothing
        </h2>

        <div className="flex justify-end mb-6">
          <div className="inline-block" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#1a1a1a] text-white border border-gold/30 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-gold cursor-pointer flex items-center justify-between gap-3 w-[180px]"
            >
              <span>{currentLabel}</span>
              <span
                className={`text-gold text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}
              >
                ▼
              </span>
            </button>

            {isOpen && (
              <div className="w-[180px] mt-2 bg-[#1a1a1a] border border-gold/30 rounded-md overflow-hidden">
                {SORT_OPTIONS.map(opt => (
                  <div
                    key={opt.value}
                    onClick={() => {
                      setSortOrder(opt.value);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                      sortOrder === opt.value
                        ? 'bg-gold/20 text-gold'
                        : 'text-white hover:bg-gold/10'
                    }`}
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {sortedClothing.map(product => (
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
