import { Phone, MessageCircle, Pill, Leaf, Stethoscope, Sparkles, Baby, UserCheck, Truck, Clock, Check } from 'lucide-react';

const PHONE_NUMBER = '9873341450';
const WHATSAPP_LINK = `https://wa.me/91${PHONE_NUMBER}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;
const DELIVERY_WHATSAPP = `https://wa.me/91${PHONE_NUMBER}?text=Hello%20City%20Medicos,%20I%20would%20like%20to%20enquire%20about%20home%20delivery%20of%20medicines.%20Kindly%20let%20me%20know%20the%20process.`;

const services = [
  {
    icon: Pill,
    title: 'Prescription Medicines',
    description: 'Full range of prescription and over-the-counter medicines from trusted pharmaceutical brands.',
    features: ['Genuine medicines only', 'All major brands available', 'Generic alternatives', 'Prescription verification']
  },
  {
    icon: Leaf,
    title: 'Ayurveda & Herbal',
    description: 'Natural and herbal remedies from trusted Ayurvedic brands for holistic wellness.',
    features: ['Patanjali products', 'Himalaya range', 'Dabur medicines', 'Organic supplements']
  },
  {
    icon: Stethoscope,
    title: 'Surgical Supplies',
    description: 'Medical equipment, surgical supplies, and healthcare accessories for home care.',
    features: ['Bandages & dressings', 'Medical devices', 'First aid supplies', 'Orthopedic aids']
  },
  {
    icon: Sparkles,
    title: 'Cosmetics & Skincare',
    description: 'Dermatologist-recommended skincare, personal care, and beauty products.',
    features: ['Sunscreens', 'Moisturizers', 'Face washes', 'Hair care products']
  },
  {
    icon: Baby,
    title: 'Baby Products',
    description: 'Complete range of baby care essentials from diapers to nutrition supplements.',
    features: ['Diapers & wipes', 'Baby food', 'Feeding accessories', 'Baby skincare']
  },
  {
    icon: UserCheck,
    title: 'Doctor Support',
    description: 'Health consultations and guidance from our experienced pharmacist team.',
    features: ['Medicine guidance', 'Dosage information', 'Drug interactions', 'Health advice']
  }
];

export const Services = () => {
  return (
    <main data-testid="services-page">
      {/* Hero Section */}
      <section className="section-padding bg-brand-light medical-pattern">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Complete Healthcare Solutions Under One Roof
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              From prescription medicines to daily wellness products - we stock everything your family needs for complete healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card-custom" data-testid={`service-${service.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6">
                    <Icon size={32} className="text-brand-orange" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-brand-green" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Home Delivery Service */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-green text-white px-4 py-2 rounded-full mb-6">
                <Truck size={18} />
                <span className="font-bold text-sm">FREE SERVICE</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Free Home Delivery
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Cannot visit the store? No problem! We offer free home delivery for all your medicine needs. Simply call or WhatsApp us with your requirements.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm">1</div>
                  <span>Call us or send your prescription via WhatsApp</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm">2</div>
                  <span>Confirm your order and delivery address</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm">3</div>
                  <span>Receive medicines at your doorstep</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={DELIVERY_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                  data-testid="service-delivery-whatsapp"
                >
                  <MessageCircle size={22} />
                  <span>Order via WhatsApp</span>
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="btn-primary text-center"
                  data-testid="service-delivery-call"
                >
                  <Phone size={22} />
                  <span>Call to Order</span>
                </a>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Delivery Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Truck size={24} className="text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Delivery Area</h4>
                    <p className="text-gray-600">All areas within the locality and nearby neighborhoods</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Delivery Time</h4>
                    <p className="text-gray-600">Same day delivery for orders placed before 6 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Check size={24} className="text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Payment Options</h4>
                    <p className="text-gray-600">Cash on delivery or UPI payment accepted</p>
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
            Need Any Medicine or Healthcare Product?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Call us now to check availability or place an order. Our team is ready to assist you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-white text-brand-orange px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform"
              data-testid="services-cta-call"
            >
              <Phone size={24} />
              <span>Call Now - {PHONE_NUMBER}</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform"
              data-testid="services-cta-whatsapp"
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

export default Services;
