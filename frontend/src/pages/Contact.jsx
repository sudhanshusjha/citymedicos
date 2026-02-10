import { Phone, MessageCircle, Truck, MapPin, Clock } from 'lucide-react';

const PHONE = '9873341450';
const WA_LINK = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;
const WA_DELIVERY = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20would%20like%20to%20enquire%20about%20home%20delivery%20of%20medicines.%20Kindly%20let%20me%20know%20the%20process.`;

export const Contact = () => {
  return (
    <main className="page-fade" data-testid="contact-page">
      {/* Hero */}
      <section className="section-gap bg-[#1F1F1F]">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-[#FF6B00] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Outfit' }}>
              Get in Touch With Us
            </h1>
            <p className="text-xl md:text-2xl text-[#CCCCCC] leading-relaxed">
              Questions about medicine availability? Need home delivery? We are just a call or message away!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-gap bg-[#181818]">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            {/* Notice */}
            <div className="bg-[#2A2A2A] border-2 border-[#333] rounded-2xl p-6 mb-12 text-center">
              <p className="text-lg text-white">
                <strong className="text-[#FF6B00]">For fastest service</strong>, call or message us directly. We respond immediately during store hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Call */}
              <a href={`tel:${PHONE}`} className="card-dark text-center group" data-testid="contact-call-card">
                <div className="w-20 h-20 rounded-full bg-[#FF6B00] flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
                  <Phone size={36} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Outfit' }}>Call Now</h3>
                <p className="text-2xl font-black text-[#FF6B00] mb-2" style={{ fontFamily: 'Outfit' }}>{PHONE}</p>
                <p className="text-[#999] text-sm">Tap to call directly</p>
              </a>

              {/* WhatsApp */}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="card-dark text-center group hover:border-[#25D366]" data-testid="contact-wa-card">
                <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
                  <MessageCircle size={36} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Outfit' }}>WhatsApp Us</h3>
                <p className="text-xl font-bold text-[#25D366] mb-2">Send Message</p>
                <p className="text-[#999] text-sm">Chat for enquiries</p>
              </a>

              {/* Delivery */}
              <a href={WA_DELIVERY} target="_blank" rel="noopener noreferrer" className="card-dark text-center group hover:border-[#1BAA5E]" data-testid="contact-delivery-card">
                <div className="w-20 h-20 rounded-full bg-[#1BAA5E] flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
                  <Truck size={36} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Outfit' }}>Home Delivery</h3>
                <p className="text-xl font-bold text-[#1BAA5E] mb-2">FREE Delivery</p>
                <p className="text-[#999] text-sm">Order via WhatsApp</p>
              </a>
            </div>

            {/* Store Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-dark">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1" style={{ fontFamily: 'Outfit' }}>Store Address</h3>
                    <p className="text-[#999]">Shop No. 5, Fusion Market,<br />Greater Noida West – 201306</p>
                  </div>
                </div>
              </div>
              <div className="card-dark">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1" style={{ fontFamily: 'Outfit' }}>Store Timings</h3>
                    <p className="text-[#999]">Monday – Sunday<br />8:00 AM – 11:30 PM</p>
                    <div className="flex items-center gap-2 mt-2 text-[#1BAA5E] font-bold text-sm">
                      <div className="open-pulse"></div>
                      <span>Open Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-block section-gap">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit' }}>We Are Ready to Help!</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Medicine enquiry or home delivery – we are here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="bg-white text-[#FF6B00] px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform" data-testid="contact-cta-call">
              <Phone size={24} strokeWidth={2.5} />
              <span>Call Now – {PHONE}</span>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform" data-testid="contact-cta-wa">
              <MessageCircle size={24} strokeWidth={2.5} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
