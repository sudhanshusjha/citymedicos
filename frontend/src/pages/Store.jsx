import { Phone, MessageCircle, MapPin, Clock, Navigation, Truck } from 'lucide-react';

const PHONE = '9873341450';
const WA_LINK = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

const STORE_LAT = 28.599230025986312;
const STORE_LNG = 77.4454443;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${STORE_LAT},${STORE_LNG}`;
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${STORE_LAT},${STORE_LNG}&z=16&output=embed`;

export const Store = () => {
  return (
    <main data-testid="store-page">
      {/* Hero */}
      <section className="section-gap bg-[#1F1F1F]">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-[#FF6B00] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">Visit Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Outfit' }}>
              Store Location & Details
            </h1>
            <p className="text-lg md:text-xl text-[#CCCCCC] leading-relaxed">
              Find us easily or call for any medicine enquiries. We are here to serve you.
            </p>
          </div>
        </div>
      </section>

      {/* Store Info */}
      <section className="section-gap bg-[#181818]">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cards */}
            <div className="space-y-4">
              <div className="card-dark">
                <div className="flex items-start gap-4">
                  <div className="info-icon orange"><Phone size={26} className="text-white" /></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white mb-1" style={{ fontFamily: 'Outfit' }}>Phone / WhatsApp</h3>
                    <a href={`tel:${PHONE}`} className="text-3xl md:text-4xl font-black text-[#FF6B00] hover:underline block" style={{ fontFamily: 'Outfit' }} data-testid="store-phone">{PHONE}</a>
                    <p className="text-[#999] mt-2 text-sm">Call for enquiries, availability, or delivery orders.</p>
                  </div>
                </div>
              </div>

              <div className="card-dark">
                <div className="flex items-start gap-4">
                  <div className="info-icon orange"><MapPin size={26} className="text-white" /></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white mb-1" style={{ fontFamily: 'Outfit' }}>Store Address</h3>
                    <p className="text-lg text-[#CCCCCC]">FB-012A, Fusion Market, Fusion Homes, <br />Greater Noida West – 201306</p>
                    <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FF6B00] font-bold mt-3 hover:underline text-sm" data-testid="store-directions">
                      <Navigation size={16} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-dark">
                <div className="flex items-start gap-4">
                  <div className="info-icon orange"><Clock size={26} className="text-white" /></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white mb-1" style={{ fontFamily: 'Outfit' }}>Store Timings</h3>
                    <p className="text-lg text-[#CCCCCC]">Monday – Sunday<br />8:00 AM – 1:00 AM</p>
                    <div className="flex items-center gap-2 mt-3 text-[#1BAA5E] font-bold text-sm">
                      <div className="open-pulse" />
                      <span>Open Now – 7 Days a Week</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-dark border-[#1BAA5E]">
                <div className="flex items-start gap-4">
                  <div className="info-icon green"><Truck size={26} className="text-white" /></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white mb-1" style={{ fontFamily: 'Outfit' }}>Free Home Delivery</h3>
                    <p className="text-[#999] mb-4 text-sm">Cannot visit? We deliver for FREE!</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href={`tel:${PHONE}`} className="btn-call text-sm px-5 py-3" data-testid="store-call">
                        <Phone size={16} strokeWidth={2.5} />
                        <span>Call Now</span>
                      </a>
                      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm px-5 py-3" data-testid="store-wa">
                        <MessageCircle size={16} strokeWidth={2.5} />
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
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="City Medicos Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-block section-gap">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit' }}>Visit Us or Call for Delivery</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Open 7 days a week, 8 AM to 1:00 AM. Drop by or give us a call!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="bg-white text-[#FF6B00] px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform" data-testid="store-cta-call">
              <Phone size={24} strokeWidth={2.5} />
              <span>Call Now – {PHONE}</span>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform" data-testid="store-cta-wa">
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
