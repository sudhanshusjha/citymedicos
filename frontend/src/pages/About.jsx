import { Phone, MessageCircle, Check, Heart, Shield, Users, Award } from 'lucide-react';

const PHONE = '9873341450';
const WA_LINK = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

const VALUES = [
  { icon: Heart, title: 'Care & Compassion', desc: 'We treat every customer like family.' },
  { icon: Shield, title: 'Trust & Integrity', desc: 'Only genuine medicines from authorized sources.' },
  { icon: Users, title: 'Community Focus', desc: 'Serving our neighborhood with dedication.' },
  { icon: Award, title: 'Expert Guidance', desc: 'Experienced pharmacists ready to help.' },
];

const COMMITMENTS = [
  '100% genuine medicines from authorized distributors',
  'Transparent pricing with no hidden charges',
  'Expert pharmacist consultation available',
  'Emergency medicine availability',
  'Free home delivery service',
  'Prescription verification for safety',
  'Wide range of healthcare products',
  'Personalized customer service',
];

export const About = () => {
  return (
    <main className="page-fade" data-testid="about-page">
      {/* Hero */}
      <section className="section-gap bg-[#FAFAFA]">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-[#FF4A1C] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6" style={{ fontFamily: 'Outfit' }}>
              Your Trusted Neighborhood Pharmacy
            </h1>
            <p className="text-xl md:text-2xl text-[#333] leading-relaxed">
              City Medicos is more than a pharmacy – we are your healthcare partner. Genuine medicines, expert guidance, and caring service.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-gap bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#1BAA5E] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Outfit' }}>Built on Trust, Driven by Care</h2>
              <p className="text-lg text-[#333] mb-4 leading-relaxed">
                City Medicos was founded with a simple mission – provide quality healthcare products at fair prices. We believe good health should be accessible to everyone.
              </p>
              <p className="text-lg text-[#333] leading-relaxed">
                Today, we offer prescription medicines, Ayurvedic remedies, surgical supplies, cosmetics, baby products, and more. Our experienced pharmacists are always ready to assist.
              </p>
            </div>
            <div className="bg-[#FF4A1C] text-white rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Outfit', color: 'white' }}>Our Mission</h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                To be the most trusted neighborhood pharmacy – providing genuine healthcare products with personalized service.
              </p>
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-xl font-bold mb-3" style={{ color: 'white' }}>Our Vision</h4>
                <p className="opacity-90 leading-relaxed">
                  Building lasting relationships based on trust, care, and exceptional service – one prescription at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-gap bg-[#F5F5F5]">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-[#FF4A1C] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Outfit' }}>Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="card-base text-center">
                <div className="w-14 h-14 rounded-full bg-[#FF4A1C]/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={28} className="text-[#FF4A1C]" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Outfit' }}>{v.title}</h3>
                <p className="text-[#666] text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-gap bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#1BAA5E] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">Our Promise</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Outfit' }}>Our Commitment to You</h2>
              <p className="text-lg text-[#333] leading-relaxed">
                At City Medicos, we are committed to providing the best healthcare experience. Here is what you can always expect.
              </p>
            </div>
            <div className="bg-[#FAFAFA] border-2 border-[#E5E5E5] rounded-2xl p-6 md:p-8">
              <ul className="space-y-3">
                {COMMITMENTS.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-base md:text-lg">
                    <div className="trust-check mt-0.5"><Check size={14} className="text-white" strokeWidth={3} /></div>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-block section-gap">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Outfit' }}>Experience the City Medicos Difference</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Visit us today or call for any medicine enquiries. We are here to serve you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="bg-white text-[#FF4A1C] px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform" data-testid="about-cta-call">
              <Phone size={24} strokeWidth={2.5} />
              <span>Call Now</span>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform" data-testid="about-cta-whatsapp">
              <MessageCircle size={24} strokeWidth={2.5} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
