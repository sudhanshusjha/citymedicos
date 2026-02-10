import { Phone, MessageCircle, Truck, MapPin, Clock } from 'lucide-react';

const PHONE_NUMBER = '9873341450';
const WHATSAPP_LINK = `https://wa.me/91${PHONE_NUMBER}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;
const DELIVERY_WHATSAPP = `https://wa.me/91${PHONE_NUMBER}?text=Hello%20City%20Medicos,%20I%20would%20like%20to%20enquire%20about%20home%20delivery%20of%20medicines.%20Kindly%20let%20me%20know%20the%20process.`;

export const Contact = () => {
  return (
    <main data-testid="contact-page">
      {/* Hero Section */}
      <section className="section-padding bg-brand-light medical-pattern">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Get in Touch With Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Have questions about medicine availability? Need home delivery? We are just a call or message away. Reach out to us anytime!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Important Notice */}
            <div className="bg-brand-light border-2 border-gray-200 rounded-2xl p-6 md:p-8 mb-12 text-center">
              <p className="text-lg text-gray-700">
                <strong>Please Note:</strong> For faster service, we recommend calling or messaging us directly. Our team responds immediately during store hours.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Call Now */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="card-custom text-center group hover:border-brand-orange"
                data-testid="contact-call-card"
              >
                <div className="w-20 h-20 rounded-full bg-brand-orange flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Phone size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Call Now
                </h3>
                <p className="text-3xl font-black text-brand-orange mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {PHONE_NUMBER}
                </p>
                <p className="text-gray-600">
                  Tap to call us directly for immediate assistance
                </p>
              </a>

              {/* WhatsApp Us */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="card-custom text-center group hover:border-[#25D366]"
                data-testid="contact-whatsapp-card"
              >
                <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <MessageCircle size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  WhatsApp Us
                </h3>
                <p className="text-xl font-bold text-[#25D366] mb-3">
                  Send Message
                </p>
                <p className="text-gray-600">
                  Chat with us for enquiries and prescriptions
                </p>
              </a>

              {/* Home Delivery */}
              <a
                href={DELIVERY_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="card-custom text-center group hover:border-brand-green"
                data-testid="contact-delivery-card"
              >
                <div className="w-20 h-20 rounded-full bg-brand-green flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <Truck size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Home Delivery
                </h3>
                <p className="text-xl font-bold text-brand-green mb-3">
                  FREE Delivery
                </p>
                <p className="text-gray-600">
                  Request medicine delivery to your doorstep
                </p>
              </a>
            </div>

            {/* Store Info */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Address */}
              <div className="card-custom">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Store Address
                    </h3>
                    <p className="text-gray-600">
                      Shop No. 5, Main Market,<br />
                      New Delhi - 110001
                    </p>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="card-custom">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Store Timings
                    </h3>
                    <p className="text-gray-600">
                      Monday - Sunday<br />
                      8:00 AM - 10:00 PM
                    </p>
                    <span className="inline-flex items-center gap-2 mt-2 text-brand-green font-bold text-sm">
                      <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                      Open Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-orange section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            We Are Ready to Help You!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Do not hesitate to reach out. Whether it is a quick medicine enquiry or a home delivery request - we are here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-white text-brand-orange px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform"
              data-testid="contact-cta-call"
            >
              <Phone size={24} />
              <span>Call Now - {PHONE_NUMBER}</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform"
              data-testid="contact-cta-whatsapp"
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

export default Contact;
