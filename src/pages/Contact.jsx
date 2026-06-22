import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="min-h-screen pt-[150px] lg:pt-[170px] pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-10 bg-[#0A0A0A] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(201,169,110,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-5 justify-center">
            <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
            <span className="text-[10px] tracking-[3px] uppercase text-gold">
              Get In Touch
            </span>
            <div className="flex-1 h-px bg-gold/20 max-w-[60px]" />
          </div>

          <h2 className="font-cormorant font-light text-3xl sm:text-4xl lg:text-6xl text-white mb-4">
            Let's Start a Conversation
          </h2>

          <p className="text-[12px] sm:text-[13px] text-white/40 max-w-md mx-auto leading-relaxed">
            Questions about a fragrance or a custom order? We typically respond
            within minutes on WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Left Column — Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Primary WhatsApp Card */}
            <a
              href="https://wa.me/8801302630223"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-sm p-6 sm:p-7 no-underline transition-all duration-300 hover:-translate-y-1"
              style={{
                background:
                  'linear-gradient(135deg, rgba(201,169,110,0.12), rgba(139,105,20,0.08))',
                border: '1px solid rgba(201,169,110,0.35)',
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #C9A96E, #8B6914)',
                  }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.135.562 4.136 1.543 5.868L0 24l6.318-1.529A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.669-.522-5.186-1.43l-.374-.221-3.748.907.945-3.644-.244-.386A9.945 9.945 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                </div>
                <svg
                  className="w-5 h-5 text-gold/40 transition-all duration-300 group-hover:text-gold group-hover:translate-x-1"
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

              <div className="text-[10px] tracking-[2px] uppercase text-gold/70 mb-1">
                Fastest Response
              </div>
              <div className="text-white text-lg font-medium mb-1">
                Chat on WhatsApp
              </div>
              <div className="text-white/40 text-[12px]"></div>
            </a>

            {/* Address + Phone + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              <div className="flex items-center gap-4 bg-white/[0.03] border border-gold/15 rounded-sm p-5 hover:border-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
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
                </div>
                <div>
                  <div className="text-[9px] tracking-[2px] uppercase text-gold/60 mb-0.5">
                    Address
                  </div>
                  <div className="text-[13px] text-white/75">
                    Bolaura, Bolaurabazar, Sylhet, Bangladesh, 3100
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/[0.03] border border-gold/15 rounded-sm p-5 hover:border-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A96E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.13 6.13l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] tracking-[2px] uppercase text-gold/60 mb-0.5">
                    Phone
                  </div>
                  <a
                    href="tel:+8801302630223"
                    className="text-[13px] text-white/75 hover:text-gold transition-colors no-underline"
                  >
                    +880 1302 630 223
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/[0.03] border border-gold/15 rounded-sm p-5 hover:border-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
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
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] tracking-[2px] uppercase text-gold/60 mb-0.5">
                    Email
                  </div>
                  <a
                    href="mailto:maluxuryzone@gmail.com
"
                    className="text-[13px] text-white/75 hover:text-gold transition-colors no-underline break-all"
                  >
                    maluxuryzone@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/[0.03] border border-gold/20 rounded-sm p-6 sm:p-8 lg:p-10 h-full">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A96E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-2xl sm:text-3xl text-white">
                  Send a Message
                </h3>
              </div>
              <p className="text-[12px] text-white/35 mb-7 ml-12">
                Your message opens directly in WhatsApp, ready to send.
              </p>

              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const text = `আসসালামু আলাইকুম। আমার নাম: ${name}\nফোন: ${phone}\nবার্তা: ${message}`;
    const url = `https://wa.me/8801302630223?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] tracking-[2px] uppercase text-gold/70 mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full bg-transparent border-0 border-b border-gold/25 focus:border-gold outline-none px-0 py-3 text-[14px] text-white transition-all duration-300 placeholder:text-white/20"
          />
        </div>

        <div>
          <label className="block text-[10px] tracking-[2px] uppercase text-gold/70 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="01XXXXXXXXX"
            className="w-full bg-transparent border-0 border-b border-gold/25 focus:border-gold outline-none px-0 py-3 text-[14px] text-white transition-all duration-300 placeholder:text-white/20"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] tracking-[2px] uppercase text-gold/70 mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows="5"
          placeholder="Tell us what you're looking for..."
          className="w-full bg-transparent border-0 border-b border-gold/25 focus:border-gold outline-none px-0 py-3 text-[14px] text-white transition-all duration-300 placeholder:text-white/20 resize-none"
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-center gap-2 py-4 text-[11px] tracking-[2.5px] uppercase font-semibold transition-all duration-300 border-none cursor-pointer mt-3"
        style={{
          background: 'linear-gradient(135deg, #C9A96E, #8B6914)',
          color: '#000',
          clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
        }}
      >
        Send Message
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </motion.button>
    </form>
  );
}
