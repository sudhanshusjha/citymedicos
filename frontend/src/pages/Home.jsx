import { Phone, MessageCircle, Truck, Check, Pill, Leaf, Stethoscope, Sparkles, Baby, UserCheck, MapPin, Clock } from 'lucide-react';

const PHONE_NUMBER = '9873341450';
const WHATSAPP_LINK = `https://wa.me/91${PHONE_NUMBER}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;
const DELIVERY_WHATSAPP = `https://wa.me/91${PHONE_NUMBER}?text=Hello%20City%20Medicos,%20I%20would%20like%20to%20enquire%20about%20home%20delivery%20of%20medicines.%20Kindly%20let%20me%20know%20the%20process.`;

const categories = [
  { icon: Pill, label: 'Medicine', description: 'Prescription & OTC medicines' },
  { icon: Leaf, label: 'Ayurveda', description: 'Natural herbal remedies' },
  { icon: Stethoscope, label: 'Surgical', description: 'Medical equipment & supplies' },
  { icon: Sparkles, label: 'Cosmetics', description: 'Skincare & beauty products' },
  { icon: Baby, label: 'Baby Products', description: 'Baby care essentials' },
  { icon: UserCheck, label: 'Doctor Support', description: 'Health consultations' },
];

const trustPoints = [
  'Genuine medicines from authorized distributors',
  'Competitive prices with no hidden charges',
  'FREE home delivery across the locality',
  'Expert pharmacist guidance available',
  'All major brands and generics in stock',
  'Emergency medicines available round the clock',
  'Trusted by families for generations',
  'Prescription verification for your safety',
];

export const Home = () => {
  return (
    <main data-testid="home-page">
      {/* Hero Section */}
      <section className="hero-bg medical-pattern section-padding" data-testid="hero-section">
        <div className="container-custom">
          <div className="max-w-4xl">
            {/* Free Delivery Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-green text-white px-4 py-2 rounded-full mb-6">
              <Truck size={18} />
              <span className="font-bold text-sm">FREE HOME DELIVERY</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <span className="text-brand-orange">CITY MEDICOS</span>
              <br />
              <span className="text-[#1F1F1F]">Chemist & Druggist</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Your trusted neighborhood pharmacy for medicines, Ayurveda, surgical supplies, cosmetics, baby products, and expert health support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="btn-primary text-center"
                data-testid="hero-call-btn"
              >
                <Phone size={22} />
                <span>Call Now - {PHONE_NUMBER}</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn text-center"
                data-testid="hero-whatsapp-btn"
              >
                <MessageCircle size={22} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white" data-testid="about-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">
                About City Medicos
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Your Neighborhood Pharmacy You Can Trust
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                City Medicos has been serving our community with dedication and care. We believe in providing not just medicines, but complete healthcare solutions with a personal touch that only a neighborhood pharmacy can offer.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From prescription medicines to Ayurvedic remedies, surgical supplies to daily wellness products - we stock everything your family needs. Our experienced pharmacists are always ready to help with your health queries.
              </p>
            </div>
            <div className="bg-brand-light p-8 md:p-12 rounded-2xl border-2 border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-black text-brand-orange mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    6+
                  </div>
                  <p className="text-gray-600 font-medium">Product Categories</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-black text-brand-green mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    FREE
                  </div>
                  <p className="text-gray-600 font-medium">Home Delivery</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-black text-brand-orange mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    14+
                  </div>
                  <p className="text-gray-600 font-medium">Hours Daily</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl md:text-5xl font-black text-brand-green mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    100%
                  </div>
                  <p className="text-gray-600 font-medium">Genuine Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-brand-light" data-testid="categories-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our Product Categories
            </h2>
          </div>

          <div className="bento-grid">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="card-custom text-center"
                  data-testid={`category-${category.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  <div className="category-icon mx-auto mb-4">
                    <Icon size={36} className="text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {category.label}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Home Delivery Section */}
      <section className="section-padding bg-white" data-testid="delivery-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-brand-orange text-white p-8 md:p-12 rounded-2xl">
                <Truck size={64} className="mb-6" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'white' }}>
                  Home Delivery on Call
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  Simply call or WhatsApp us with your prescription or medicine list. We will deliver your medicines right to your doorstep - FREE of cost!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={DELIVERY_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-brand-orange px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 hover:scale-102 transition-transform"
                    data-testid="delivery-whatsapp-btn"
                  >
                    <MessageCircle size={22} />
                    <span>Home Delivery on Call</span>
                  </a>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 hover:bg-white/30 transition-colors"
                    data-testid="delivery-call-btn"
                  >
                    <Phone size={22} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">
                Free Delivery
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Get Medicines Delivered to Your Doorstep
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                No need to step out. Just call us at <strong>{PHONE_NUMBER}</strong> or send us a WhatsApp message with your prescription or medicine list.
              </p>
              <ul className="space-y-3">
                {['Call or WhatsApp your order', 'Share prescription if required', 'Confirm order and address', 'Receive medicines at home'].map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-brand-light" data-testid="trust-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Why Customers Trust City Medicos
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have built our reputation on trust, quality, and service. Here is why thousands of families choose City Medicos for their healthcare needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-100">
              <ul className="trust-list space-y-2">
                {trustPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg">
                    <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={14} className="text-white" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Store Details & Map Section */}
      <section className="section-padding bg-white" data-testid="store-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">
              Visit Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Store Location & Details
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Store Info */}
            <div className="space-y-6">
              <div className="card-custom">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Phone / WhatsApp
                    </h3>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-2xl font-bold text-brand-orange hover:underline">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-custom">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Store Address
                    </h3>
                    <p className="text-lg text-gray-600">
                      Shop No. 5, Main Market,<br />
                      New Delhi - 110001
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-custom">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Store Timings
                    </h3>
                    <p className="text-lg text-gray-600">
                      Monday - Sunday<br />
                      8:00 AM - 10:00 PM
                    </p>
                    <span className="inline-flex items-center gap-2 mt-2 text-brand-green font-bold">
                      <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                      Open Now
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="map-container h-[400px] lg:h-full min-h-[400px]">
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

      {/* Final CTA Section */}
      <section className="cta-orange section-padding" data-testid="cta-section">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Need Medicines? We Are Just a Call Away!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Call us now for medicine enquiries, availability check, or to place a home delivery order. We are here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-white text-brand-orange px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform"
              data-testid="cta-call-btn"
            >
              <Phone size={24} />
              <span>Call Now - {PHONE_NUMBER}</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform"
              data-testid="cta-whatsapp-btn"
            >
              <MessageCircle size={24} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
