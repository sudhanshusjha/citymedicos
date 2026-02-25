import { Phone, MessageCircle, Pill, Leaf, Stethoscope, Sparkles, Baby, UserCheck, Truck, Clock, Check, Plus } from 'lucide-react';

const PHONE = '9873341450';
const WA_LINK = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;
const WA_DELIVERY = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20would%20like%20to%20enquire%20about%20home%20delivery%20of%20medicines.%20Kindly%20let%20me%20know%20the%20process.`;

const SERVICES = [
  { icon: Pill, title: 'Prescription Medicines', desc: 'Full range of prescription and OTC medicines from trusted brands.', features: ['Genuine medicines', 'All major brands', 'Generic alternatives', 'Prescription check'] },
  { icon: Leaf, title: 'Ayurveda & Herbal', desc: 'Natural remedies from trusted Ayurvedic brands.', features: ['Patanjali', 'Himalaya', 'Dabur', 'Organic supplements'] },
  { icon: Stethoscope, title: 'Surgical Supplies', desc: 'Medical equipment and supplies for home care.', features: ['Bandages', 'Medical devices', 'First aid', 'Orthopedic aids'] },
  { icon: Sparkles, title: 'Cosmetics & Skincare', desc: 'Dermatologist-recommended skincare and beauty products.', features: ['Sunscreens', 'Moisturizers', 'Face washes', 'Hair care'] },
  { icon: Baby, title: 'Baby Products', desc: 'Complete baby care essentials.', features: ['Diapers & wipes', 'Baby food', 'Feeding items', 'Baby skincare'] },
  { icon: UserCheck, title: 'Doctor Support', desc: 'Health consultations from experienced Physician.', features: ['Medicine guidance', 'Dosage info', 'Drug interactions', 'Health advice'] },
];

export const Services = () => {
  return (
    <main className="page-fade" data-testid="services-page">
      {/* Hero */}
      <section className="section-gap bg-[#1F1F1F]">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-[#FF6B00] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Outfit' }}>
              Complete Healthcare Under One Roof
            </h1>
            <p className="text-xl md:text-2xl text-[#CCCCCC] leading-relaxed">
              From prescriptions to wellness products – we stock everything your family needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-gap bg-[#181818]">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="card-dark" data-testid={`service-${s.title.toLowerCase().replace(/\s/g, '-')}`}>
                <div className="w-14 h-14 rounded-full bg-[#FF6B00] flex items-center justify-center mb-5">
                  <s.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Outfit' }}>{s.title}</h3>
                <p className="text-[#999] mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#CCCCCC]">
                      <Plus size={14} className="text-[#1BAA5E]" strokeWidth={3} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Delivery */}
      <section className="section-gap bg-[#1F1F1F]">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-delivery mb-6">
                <Truck size={18} strokeWidth={2.5} />
                <span>FREE SERVICE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit' }}>Free Home Delivery</h2>
              <p className="text-lg text-[#CCCCCC] mb-6 leading-relaxed">
                Cannot visit? We deliver medicines to your doorstep for FREE. Just call or WhatsApp us.
              </p>
              <ul className="space-y-4 mb-8">
                {['Call or send prescription via WhatsApp', 'Confirm order and address', 'Receive at your doorstep'].map((s, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-white">
                    <div className="w-8 h-8 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-bold text-sm">{i + 1}</div>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WA_DELIVERY} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" data-testid="services-wa">
                  <MessageCircle size={20} strokeWidth={2.5} />
                  <span>Order via WhatsApp</span>
                </a>
                <a href={`tel:${PHONE}`} className="btn-call" data-testid="services-call">
                  <Phone size={20} strokeWidth={2.5} />
                  <span>Call to Order</span>
                </a>
              </div>
            </div>
            <div className="bg-[#2A2A2A] border-2 border-[#333] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit' }}>Delivery Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center flex-shrink-0">
                    <Truck size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Delivery Area</h4>
                    <p className="text-[#999]">All areas within the locality</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Delivery Time</h4>
                    <p className="text-[#999]">Same day for orders before 9 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center flex-shrink-0">
                    <Check size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Payment</h4>
                    <p className="text-[#999]">Cash on delivery or UPI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black" data-testid="cta">
       <div className="max-w-4xl mx-auto bg-[#FF6B00] rounded-3xl py-10 px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit' }}>Need Any Medicine?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call us now to check availability or place an order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="bg-white text-[#FF6B00] px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform" data-testid="services-cta-call">
              <Phone size={24} strokeWidth={2.5} />
              <span>Call Now – {PHONE}</span>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-102 transition-transform" data-testid="services-cta-wa">
              <MessageCircle size={24} strokeWidth={2.5} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
