import { Phone, MessageCircle, MapPin, Clock, Navigation, Truck } from 'lucide-react';

const PHONE_NUMBER = '9873341450';
const WHATSAPP_LINK = `https://wa.me/91${PHONE_NUMBER}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

export const Store = () => {
  return (
    <main data-testid="store-page">
      {/* Hero Section */}
      <section className="section-padding bg-brand-light medical-pattern">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">
              Visit Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Store Location & Contact Details
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Find us easily or call us for any medicine enquiries. We are here to serve you with care and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Store Details Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone Card */}
              <div className="card-custom">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                    <Phone size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Phone / WhatsApp
                    </h3>
                    <a 
                      href={`tel:${PHONE_NUMBER}`} 
                      className="text-3xl md:text-4xl font-black text-brand-orange hover:underline block mb-3"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {PHONE_NUMBER}
                    </a>
                    <p className="text-gray-600">
                      Call us for medicine enquiries, availability check, or to place a delivery order.
                    </p>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="card-custom">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <MapPin size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Store Address
                    </h3>
                    <p className="text-xl text-gray-800 mb-3">
                      Shop No. 5, Main Market,<br />
                      New Delhi - 110001
                    </p>
                    <a 
                      href="https://maps.google.com/?q=New+Delhi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brand-orange font-bold hover:underline"
                    >
                      <Navigation size={18} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Timings Card */}
              <div className="card-custom">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                    <Clock size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Store Timings
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Monday - Sunday</span>
                        <span className="font-bold">8:00 AM - 10:00 PM</span>
                      </div>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 text-brand-green font-bold">
                      <span className="w-3 h-3 rounded-full bg-brand-green animate-pulse"></span>
                      Open Now - 7 Days a Week
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Card */}
              <div className="card-custom bg-brand-light border-brand-green">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <Truck size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Free Home Delivery
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Cannot visit? We deliver medicines to your doorstep for FREE. Just call or WhatsApp us!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="btn-primary text-center text-base px-6 py-3"
                        data-testid="store-call-btn"
                      >
                        <Phone size={18} />
                        <span>Call Now</span>
                      </a>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn text-center text-base px-6 py-3"
                        data-testid="store-whatsapp-btn"
                      >
                        <MessageCircle size={18} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="map-container h-[500px] lg:h-full min-h-[500px]">
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

      {/* CTA Section */}
      <section className="cta-orange section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Visit Us Today or Call for Home Delivery
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We are open 7 days a week, 8 AM to 10 PM. Drop by or give us a call - we are here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-white text-brand-orange px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform"
              data-testid="store-cta-call"
            >
              <Phone size={24} />
              <span>Call Now - {PHONE_NUMBER}</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform"
              data-testid="store-cta-whatsapp"
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

export default Store;
