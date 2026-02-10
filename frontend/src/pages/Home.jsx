import { Phone, MessageCircle, Truck, Check, Pill, Leaf, Stethoscope, Sparkles, Baby, UserCheck, MapPin, Clock, Plus } from 'lucide-react';

const PHONE = '9873341450';
const WA_LINK = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;
const WA_DELIVERY = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20would%20like%20to%20enquire%20about%20home%20delivery%20of%20medicines.%20Kindly%20let%20me%20know%20the%20process.`;

const CATEGORIES = [
  { icon: Pill, name: 'Medicine', desc: 'Prescription & OTC' },
  { icon: Leaf, name: 'Ayurveda', desc: 'Herbal remedies' },
  { icon: Stethoscope, name: 'Surgical', desc: 'Medical supplies' },
  { icon: Sparkles, name: 'Cosmetics', desc: 'Skincare & beauty' },
  { icon: Baby, name: 'Baby Products', desc: 'Baby essentials' },
  { icon: UserCheck, name: 'Doctor Support', desc: 'Health guidance' },
];

const TRUST_POINTS = [
  'Genuine medicines from authorized distributors',
  'Competitive pricing with no hidden charges',
  'FREE home delivery across the locality',
  'Expert physician guidance available',
  'All major brands and generics in stock',
  'Emergency medicines available',
  'Trusted by families for generations',
  'Prescription verification for safety',
];

export const Home = () => {
  return (
    <main className="page-fade" data-testid="home-page">
      {/* HERO */}
      <section className="section-gap bg-[#1F1F1F] relative" data-testid="hero">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="badge-delivery mb-6">
              <Truck size={18} strokeWidth={2.5} />
              <span>FREE HOME DELIVERY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6" style={{ fontFamily: 'Outfit' }}>
              <span className="text-[#FF6B00]">CITY MEDICOS</span>
              <br />
              <span className="text-white">Chemist & Druggist</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#CCCCCC] mb-8 leading-relaxed max-w-2xl">
              Your trusted neighborhood pharmacy for medicines, Ayurveda, surgical supplies, cosmetics, baby care & expert health support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${PHONE}`} className="btn-call text-xl" data-testid="hero-call">
                <Phone size={24} strokeWidth={2.5} />
                <span>Call Now – {PHONE}</span>
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-xl" data-testid="hero-whatsapp">
                <MessageCircle size={24} strokeWidth={2.5} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-gap bg-[#181818]" data-testid="about-preview">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#FF6B00] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">About Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit' }}>
                Your Neighborhood Pharmacy You Can Trust
              </h2>
              <p className="text-lg text-[#CCCCCC] mb-4 leading-relaxed">
                City Medicos has been serving our community with dedication. We provide not just medicines, but complete healthcare solutions with a personal touch.
              </p>
              <p className="text-lg text-[#CCCCCC] leading-relaxed">
                From prescriptions to Ayurvedic remedies, surgical supplies to wellness products – we stock everything your family needs.
              </p>
            </div>
            <div className="bg-[#2A2A2A] border-2 border-[#333] rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-black text-[#FF6B00] mb-2" style={{ fontFamily: 'Outfit' }}>6+</div>
                  <p className="text-[#999] font-medium">Product Categories</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-black text-[#FF6B00] mb-2" style={{ fontFamily: 'Outfit' }}>FREE</div>
                  <p className="text-[#999] font-medium">Home Delivery</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-black text-[#FF6B00] mb-2" style={{ fontFamily: 'Outfit' }}>15+</div>
                  <p className="text-[#999] font-medium">Hours Daily</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-black text-[#FF6B00] mb-2" style={{ fontFamily: 'Outfit' }}>100%</div>
                  <p className="text-[#999] font-medium">Genuine Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section-gap bg-[#1F1F1F]" data-testid="categories">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-[#FF6B00] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Outfit' }}>Our Product Categories</h2>
          </div>
          <div className="bento-categories">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="card-dark text-center" data-testid={`category-${cat.name.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="w-16 h-16 rounded-full border-2 border-[#333] bg-[#1F1F1F] flex items-center justify-center mx-auto mb-4">
                  <cat.icon size={28} className="text-[#FF6B00]" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Outfit' }}>{cat.name}</h3>
                <p className="text-sm text-[#999]">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME DELIVERY */}
      <section className="section-gap bg-[#181818]" data-testid="delivery">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#FF6B00] rounded-2xl p-8 md:p-12">
                <Truck size={56} className="text-white mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>
                  Home Delivery on Call
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Call or WhatsApp us with your prescription. We deliver medicines to your doorstep – FREE!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={WA_DELIVERY} target="_blank" rel="noopener noreferrer" className="bg-white text-[#FF6B00] px-6 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 hover:scale-102 transition-transform" data-testid="delivery-wa">
                    <MessageCircle size={20} strokeWidth={2.5} />
                    <span>Order via WhatsApp</span>
                  </a>
                  <a href={`tel:${PHONE}`} className="bg-white/20 text-white border-2 border-white px-6 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 hover:bg-white/30 transition-colors" data-testid="delivery-call">
                    <Phone size={20} strokeWidth={2.5} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#FF6B00] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">Free Service</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit' }}>
                Get Medicines Delivered to Your Door
              </h2>
              <p className="text-lg text-[#CCCCCC] mb-6 leading-relaxed">
                No need to step out. Call <strong className="text-white">{PHONE}</strong> or WhatsApp your prescription.
              </p>
              <ul className="space-y-4">
                {['Call or WhatsApp your order', 'Share prescription if needed', 'Confirm order & address', 'Receive at your doorstep'].map((s, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-white">
                    <div className="w-8 h-8 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-sm">{i + 1}</div>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-gap bg-[#1F1F1F]" data-testid="trust">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Plus size={20} className="text-[#1BAA5E]" strokeWidth={3} />
                <span className="text-[#1BAA5E] font-bold text-sm tracking-[0.15em] uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit' }}>
                Why Customers Trust City Medicos
              </h2>
              <p className="text-lg text-[#CCCCCC] leading-relaxed">
                We have built our reputation on trust, quality, and service. Here is why families choose City Medicos.
              </p>
            </div>
            <div className="bg-[#2A2A2A] border-2 border-[#333] rounded-2xl p-6 md:p-8">
              <ul className="space-y-3">
                {TRUST_POINTS.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-base md:text-lg text-white">
                    <div className="trust-check mt-0.5"><Check size={14} className="text-white" strokeWidth={3} /></div>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STORE DETAILS */}
      <section className="section-gap bg-[#181818]" data-testid="store-preview">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-[#FF6B00] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">Visit Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Outfit' }}>Store Location</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="card-dark">
                <div className="info-card">
                  <div className="info-icon orange"><Phone size={24} className="text-white" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1" style={{ fontFamily: 'Outfit' }}>Phone / WhatsApp</h4>
                    <a href={`tel:${PHONE}`} className="text-2xl font-black text-[#FF6B00] hover:underline" style={{ fontFamily: 'Outfit' }}>{PHONE}</a>
                  </div>
                </div>
              </div>
              <div className="card-dark">
                <div className="info-card">
                  <div className="info-icon orange"><MapPin size={24} className="text-white" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1" style={{ fontFamily: 'Outfit' }}>Address</h4>
                    <p className="text-[#CCCCCC]">Shop No. 5, Fusion Market,<br />Greater Noida West – 201306</p>
                  </div>
                </div>
              </div>
              <div className="card-dark">
                <div className="info-card">
                  <div className="info-icon orange"><Clock size={24} className="text-white" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1" style={{ fontFamily: 'Outfit' }}>Store Timings</h4>
                    <p className="text-[#CCCCCC]">Monday – Sunday<br />8:00 AM – 11:30 PM</p>
                    <div className="flex items-center gap-2 mt-2 text-[#1BAA5E] font-bold text-sm">
                      <div className="open-pulse"></div>
                      <span>Open Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-frame h-[350px] lg:h-full min-h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56045.54471979774!2d77.3910572!3d28.5706976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sGreater%20Noida%20West!5e0!3m2!1sen!2sin!4v1707500000000!5m2!1sen!2sin"
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
      <section className="cta-block section-gap" data-testid="cta">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit' }}>
            Need Medicines? We Are Just a Call Away!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call us now for enquiries, availability check, or to place a delivery order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="bg-white text-[#FF6B00] px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform" data-testid="cta-call">
              <Phone size={24} strokeWidth={2.5} />
              <span>Call Now – {PHONE}</span>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform" data-testid="cta-whatsapp">
              <MessageCircle size={24} strokeWidth={2.5} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
