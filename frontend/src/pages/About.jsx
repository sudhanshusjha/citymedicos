import { Phone, MessageCircle, Check, Heart, Shield, Users, Award } from 'lucide-react';

const PHONE_NUMBER = '9873341450';
const WHATSAPP_LINK = `https://wa.me/91${PHONE_NUMBER}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

const values = [
  {
    icon: Heart,
    title: 'Care & Compassion',
    description: 'We treat every customer like family. Your health concerns are our priority.'
  },
  {
    icon: Shield,
    title: 'Trust & Integrity',
    description: 'Only genuine medicines from authorized distributors. No compromises on quality.'
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Serving our neighborhood with dedication. We know you by name, not just prescription.'
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Our experienced pharmacists are always ready to help with your health queries.'
  }
];

const commitments = [
  '100% genuine medicines from authorized distributors',
  'Transparent pricing with no hidden charges',
  'Expert pharmacist consultation available',
  'Emergency medicine availability',
  'Free home delivery service',
  'Prescription verification for safety',
  'Wide range of healthcare products',
  'Personalized customer service'
];

export const About = () => {
  return (
    <main data-testid="about-page">
      {/* Hero Section */}
      <section className="section-padding bg-brand-light medical-pattern">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Your Trusted Neighborhood Pharmacy
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              City Medicos is more than just a pharmacy - we are your healthcare partner. Serving the community with genuine medicines, expert guidance, and caring service.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Built on Trust, Driven by Care
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                City Medicos was founded with a simple mission - to provide quality healthcare products and services to our community at fair prices. We believe that good health should be accessible to everyone.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we have grown from a small neighborhood pharmacy to a trusted healthcare destination. But one thing has remained constant - our commitment to our customers and their wellbeing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we offer a comprehensive range of products including prescription medicines, Ayurvedic remedies, surgical supplies, cosmetics, baby products, and more. Our team of experienced pharmacists is always ready to assist you with your health needs.
              </p>
            </div>
            <div className="bg-brand-orange text-white p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif', color: 'white' }}>
                Our Mission
              </h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                To be the most trusted neighborhood pharmacy, providing genuine healthcare products with personalized service and expert guidance - making quality healthcare accessible to every family in our community.
              </p>
              <div className="border-t border-white/20 pt-6 mt-6">
                <h4 className="text-xl font-bold mb-4" style={{ color: 'white' }}>Our Vision</h4>
                <p className="opacity-90 leading-relaxed">
                  To build lasting relationships with our customers based on trust, care, and exceptional service - one prescription at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card-custom text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Our Commitment to You
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At City Medicos, we are committed to providing you with the best possible healthcare experience. Here is what you can always expect from us.
              </p>
            </div>
            <div className="bg-brand-light p-8 rounded-2xl border-2 border-gray-100">
              <ul className="space-y-4">
                {commitments.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg">
                    <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={14} className="text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-orange section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Experience the City Medicos Difference
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Visit us today or call us for any medicine enquiries. We are here to serve you with care!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-white text-brand-orange px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform"
              data-testid="about-call-btn"
            >
              <Phone size={24} />
              <span>Call Now</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform"
              data-testid="about-whatsapp-btn"
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

export default About;
