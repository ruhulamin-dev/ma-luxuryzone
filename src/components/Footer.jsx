export default function Footer() {
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060606] pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-10 border-t border-gold/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 mb-10 sm:mb-12">
        {/* Brand */}
        <div>
          <button
            onClick={() => scrollTo('home')}
            className="bg-transparent border-none cursor-pointer p-0"
          >
            <img
              src="/logo.png"
              alt="MA Fragrance"
              className="h-16 w-16 object-cover rounded-full border-2 border-gold/40 mt-1"
            />
          </button>
          <p className="text-[12px] text-white/35 leading-[1.9] max-w-[280px] mb-6">
            Premium Dubai fragrances delivered to your door across Bangladesh.
            Elegance, confidence, authenticity.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61589841419988"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
              className="w-10 h-10 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center transition-all duration-300 hover:bg-[#1877F2]/20 hover:border-[#1877F2]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/mafragrance"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="w-10 h-10 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center transition-all duration-300 hover:bg-pink-500/20 hover:border-pink-500"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="url(#igGrad2)"
              >
                <defs>
                  <linearGradient
                    id="igGrad2"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#F58529" />
                    <stop offset="50%" stopColor="#DD2A7B" />
                    <stop offset="100%" stopColor="#8134AF" />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@mafragrance"
              target="_blank"
              rel="noreferrer"
              title="TikTok"
              className="w-10 h-10 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/40"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-[11px] tracking-[2px] uppercase text-gold mb-5">
            Quick Links
          </div>
          <ul className="list-none space-y-3 p-0 m-0">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Products', id: 'products' },
              { label: 'About', id: 'about' },
              { label: 'Contact', id: 'contact' },
            ].map(link => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-[12px] text-white/40 hover:text-gold transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-[11px] tracking-[2px] uppercase text-gold mb-5">
            Contact Us
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <svg
                className="w-4 h-4 flex-shrink-0 mt-[2px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A96E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-[12px] text-white/50 leading-relaxed">
                Sylhet Sadar, 3100
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <svg
                className="w-4 h-4 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A96E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.13 6.13l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a
                href="tel:+8801302630223"
                className="text-[12px] text-white/50 hover:text-gold transition-colors no-underline"
              >
                +880 1302 630 223
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <svg
                className="w-4 h-4 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A96E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a
                href="mailto:mafragrance80@gmail.com"
                className="text-[12px] text-white/50 hover:text-gold transition-colors no-underline break-all"
              >
                mafragrance80@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-gold/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/20 text-center">
        <div>
          © 2025 <span className="text-gold">MA Fragrance</span>. All rights
          reserved.
        </div>
        <div>Sylhet Sadar, 3100, Bangladesh</div>
      </div>
    </footer>
  );
}
