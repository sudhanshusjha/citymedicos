import { Phone, MessageCircle, MapPin, Clock, Navigation, Truck } from 'lucide-react';

const PHONE = '9873341450';
const WA_LINK = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

export const Store = () => {
  return (
    <main className="page-fade" data-testid="store-page">
      {/* Hero */}
      <section className="section-gap bg-[#FAFAFA]">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-[#FF4A1C] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">Visit Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6" style={{ fontFamily: 'Outfit' }}>
              Store Location & Details
            </h1>
            <p className="text-xl md:text-2xl text-[#333] leading-relaxed">
              Find us easily or call for any medicine enquiries. We are here to serve you.
            </p>
          </div>
        </div>
      </section>

      {/* Store Info */}
      <section className="section-gap bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="card-base">
                <div className="info-card">
                  <div className="info-icon orange"><Phone size={26} className="text-white" /></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Outfit' }}>Phone / WhatsApp</h3>
                    <a href={`tel:${PHONE}`} className="text-3xl md:text-4xl font-black text-[#FF4A1C] hover:underline block" style={{ fontFamily: 'Outfit' }}>{PHONE}</a>
                    <p className="text-[#666] mt-2">Call for enquiries, availability, or delivery orders.</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="card-base">
                <div className="info-card">
                  <div className="info-icon green"><MapPin size={26} className="text-white" /></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Outfit' }}>Store Address</h3>
                    <p className="text-lg text-[#333]">Shop No. 5, Main Market,<br />New Delhi – 110001</p>
                    <a href="https://maps.google.com/?q=New+Delhi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FF4A1C] font-bold mt-3 hover:underline">
                      <Navigation size={16} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="card-base">
                <div className="info-card">
                  <div className="info-icon orange"><Clock size={26} className="text-white" /></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Outfit' }}>Store Timings</h3>
                    <p className="text-lg text-[#333]">Monday – Sunday<br />8:00 AM – 10:00 PM</p>
                    <div className="flex items-center gap-2 mt-3 text-[#1BAA5E] font-bold">
                      <div className="open-pulse"></div>
                      <span>Open Now – 7 Days a Week</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="card-base bg-[#F5F5F5] border-[#1BAA5E]">
                <div className="info-card">
                  <div className="info-icon green"><Truck size={26} className="text-white" /></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Outfit' }}>Free Home Delivery</h3>
                    <p className="text-[#666] mb-4">Cannot visit? We deliver for FREE!</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href={`tel:${PHONE}`} className="btn-call text-base px-5 py-3" data-testid="store-call">
                        <Phone size={18} strokeWidth={2.5} />
                        <span>Call Now</span>
                      </a>
                      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-5 py-3" data-testid="store-wa">
                        <MessageCircle size={18} strokeWidth={2.5} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="map-frame h-[450px] lg:h-full min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1707500000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="City Medicos Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-block section-gap">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Outfit' }}>Visit Us or Call for Delivery</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Open 7 days a week, 8 AM to 10 PM. Drop by or give us a call!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="bg-white text-[#FF4A1C] px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform" data-testid="store-cta-call">
              <Phone size={24} strokeWidth={2.5} />
              <span>Call Now – {PHONE}</span>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform" data-testid="store-cta-wa">
              <MessageCircle size={24} strokeWidth={2.5} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Store;
