import { useState } from 'react';
import {
  Phone, MessageCircle, Truck, Check,
  Pill, Leaf, Stethoscope, Sparkles, Baby, UserCheck,
  MapPin, Clock, Plus, Navigation, Star,
  Shield, Package, Heart, Activity, Scissors,
  ChevronRight, Send, Building2, Dumbbell, HeartPulse
} from 'lucide-react';

import HERO_IMG from '../assets/cityMedicos_Hero.png';
import ABOUT_IMG from '../assets/city_Medicos_about.png';

const PHONE = '9873341450';
const WA_LINK = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;
const WA_DELIVERY = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20would%20like%20to%20enquire%20about%20home%20delivery%20of%20medicines.%20Kindly%20let%20me%20know%20the%20process.`;

const STORE_LAT = 28.599230025986312;
const STORE_LNG = 77.4454443;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${STORE_LAT},${STORE_LNG}`;
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${STORE_LAT},${STORE_LNG}&z=16&output=embed`;

const PRODUCT_RANGE = [
  { icon: Pill, name: 'Prescription', desc: 'Rx medicines from trusted brands' },
  { icon: Package, name: 'OTC Drugs', desc: 'Over-the-counter essentials' },
  { icon: Leaf, name: 'Ayurveda & Herbal', desc: 'Natural remedies & supplements' },
  { icon: Sparkles, name: 'Personal Care', desc: 'Hygiene & grooming products' },
  { icon: Heart, name: 'Feminine Care', desc: 'Women\'s health essentials' },
  { icon: Baby, name: 'Baby Care', desc: 'Diapers, food & baby essentials' },
  { icon: HeartPulse, name: 'Wellness', desc: 'Vitamins & health supplements' },
  { icon: Scissors, name: 'Surgical & Disposables', desc: 'Medical supplies & first aid' },
  { icon: Activity, name: 'Medical Devices', desc: 'BP monitors, oximeters & more' },
  { icon: Dumbbell, name: 'Sports Nutrition', desc: 'Protein & fitness supplements' },
  { icon: Stethoscope, name: 'Cosmetics & Beauty', desc: 'Skincare & beauty products' },
  { icon: UserCheck, name: 'Doctor Support', desc: 'Expert health consultations' },
];

const PROMISES = [
  { icon: Shield, title: 'Genuine Medicines', desc: 'Only from authorized distributors' },
  { icon: UserCheck, title: 'Trained Pharmacist', desc: 'Expert guidance for every need' },
  { icon: Package, title: 'Exhaustive Product Range', desc: '12+ categories of healthcare' },
  { icon: Truck, title: 'Free Home Delivery', desc: 'Medicines delivered to your door' },
  { icon: Clock, title: 'Open 7 Days a Week', desc: '8 AM – 1:00 AM daily' },
  { icon: Check, title: 'Competitive Pricing', desc: 'Best prices, no hidden charges' },
];

const STORES = [
  {
    id: 1,
    name: 'City Medicos - Fusion Market',
    address: 'FB-012A, Fusion Market, Fusion Homes, Greater Noida West – 201306',
    phone: '9873341450',
    timing: '8 AM – 1:00 AM',
    lat: STORE_LAT,
    lng: STORE_LNG,
    active: true,
  },
  {
    id: 2,
    name: 'City Medicos - Store 2',
    address: 'New location coming soon',
    phone: '',
    timing: '',
    active: false,
  },
  {
    id: 3,
    name: 'City Medicos - Store 3',
    address: 'New location coming soon',
    phone: '',
    timing: '',
    active: false,
  },
];

export const Home = () => {
  const [feedbackForm, setFeedbackForm] = useState({ name: '', phone: '', message: '' });
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const [businessForm, setBusinessForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [businessSubmitted, setBusinessSubmitted] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const text = `Feedback from Website:%0AName: ${feedbackForm.name}%0APhone: ${feedbackForm.phone}%0ARating: ${feedbackRating}/5%0AMessage: ${feedbackForm.message}`;
    window.open(`https://wa.me/91${PHONE}?text=${text}`, '_blank');
    setFeedbackSubmitted(true);
    setFeedbackForm({ name: '', phone: '', message: '' });
    setFeedbackRating(0);
    setTimeout(() => setFeedbackSubmitted(false), 4000);
  };

  const handleBusinessSubmit = (e) => {
    e.preventDefault();
    const text = `Business Enquiry from Website:%0AName: ${businessForm.name}%0ACompany: ${businessForm.company}%0AEmail: ${businessForm.email}%0APhone: ${businessForm.phone}%0AMessage: ${businessForm.message}`;
    window.open(`https://wa.me/91${PHONE}?text=${text}`, '_blank');
    setBusinessSubmitted(true);
    setBusinessForm({ name: '', company: '', email: '', phone: '', message: '' });
    setTimeout(() => setBusinessSubmitted(false), 4000);
  };

  return (
    <main data-testid="home-page">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#1F1F1F]" data-testid="hero">
        <div className="container-main py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-delivery mb-6">
                <Truck size={18} strokeWidth={2.5} />
                <span>FREE HOME DELIVERY</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6" style={{ fontFamily: 'Outfit' }}>
                <span className="text-[#FF6B00]">City Medicos</span>
                <br />
                <span className="text-white text-3xl sm:text-4xl lg:text-5xl">Chemist & Druggist</span>
              </h1>
              <p className="text-lg md:text-xl text-[#CCCCCC] mb-8 leading-relaxed max-w-xl">
                Your trusted neighborhood pharmacy for medicines, Ayurveda, surgical supplies, cosmetics, baby care & expert health support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${PHONE}`} className="btn-call text-lg" data-testid="hero-call">
                  <Phone size={22} strokeWidth={2.5} />
                  <span>Call Now – {PHONE}</span>
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg" data-testid="hero-whatsapp">
                  <MessageCircle size={22} strokeWidth={2.5} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden border-2 border-[#333]">
                <img
                  src={HERO_IMG}
                  alt="City Medicos Pharmacy"
                  className="w-full h-[420px] object-cover"
                  data-testid="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT US  ── */}
     <section className="section-gap bg-[#181818]" data-testid="about-section">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border-2 border-[#333]">
              <img
                src={ABOUT_IMG}
                alt="City Medicos Store"
                className="w-full h-[350px] lg:h-[450px] object-cover"
                data-testid="about-image"
              />
            </div>
            <div>
              <span className="text-[#FF6B00] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">About Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit' }}>
                Your Friendly Neighbourhood Pharmacy
              </h2>
              <p className="text-lg text-[#CCCCCC] mb-4 leading-relaxed">
                <strong className="text-white">City Medicos</strong> is your trusted neighborhood pharmacy in Greater Noida West. We bring friendly and experienced service to your community with genuine medicines, an exhaustive range of products, and free home delivery.
              </p>
              <p className="text-lg text-[#CCCCCC] mb-6 leading-relaxed">
                With a commitment to healthcare excellence, we are proud to serve families with trained pharmacists, pleasant service, and competitive pricing. From prescriptions to Ayurvedic remedies, surgical supplies to wellness products – we stock everything your family needs.
              </p>
              <div className="bg-[#FF6B00] rounded-xl p-5 inline-block">
                <p className="text-white font-bold text-lg" style={{ fontFamily: 'Outfit' }}>
                  Your wellness is our priority.
                </p>
                <p className="text-white/90 text-sm mt-1">
                  We welcome you to experience your Friendly Neighbourhood Pharmacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT RANGE ── */}
      <section className="section-gap bg-[#1F1F1F]" data-testid="product-range">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-[#FF6B00] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Outfit' }}>
              Our Product Range
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {PRODUCT_RANGE.map((item, i) => (
              <div
                key={i}
                className="card-dark text-center py-6 px-4"
                data-testid={`product-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-14 h-14 rounded-full border-2 border-[#333] bg-[#1F1F1F] flex items-center justify-center mx-auto mb-3">
                  <item.icon size={26} className="text-[#FF6B00]" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-white mb-1" style={{ fontFamily: 'Outfit' }}>{item.name}</h3>
                <p className="text-xs text-[#999]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WE PROMISE YOU ── */}
      <section className="section-gap bg-[#181818]" data-testid="we-promise">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Plus size={20} className="text-[#1BAA5E]" strokeWidth={3} />
              <span className="text-[#1BAA5E] font-bold text-sm tracking-[0.15em] uppercase">Our Commitment</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Outfit' }}>
              We Promise You
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROMISES.map((item, i) => (
              <div key={i} className="card-dark flex items-start gap-4 p-6" data-testid={`promise-${i}`}>
                <div className="w-14 h-14 rounded-full bg-[#FF6B00] flex items-center justify-center flex-shrink-0">
                  <item.icon size={26} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Outfit' }}>{item.title}</h3>
                  <p className="text-sm text-[#999]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOME DELIVERY ── */}
      <section className="section-gap bg-[#1F1F1F]" data-testid="delivery">
        <div className="container-main">
          <div className="bg-[#FF6B00] rounded-2xl p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <Truck size={48} className="text-white mb-4" strokeWidth={1.5} />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>
                  Free Home Delivery
                </h2>
                <p className="text-lg text-white/90 mb-6">
                  Call or WhatsApp us with your prescription. We deliver medicines to your doorstep – absolutely FREE!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={WA_DELIVERY} target="_blank" rel="noopener noreferrer" className="bg-white text-[#FF6B00] px-6 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform" data-testid="delivery-wa">
                    <MessageCircle size={20} strokeWidth={2.5} />
                    <span>Order via WhatsApp</span>
                  </a>
                  <a href={`tel:${PHONE}`} className="bg-white/20 text-white border-2 border-white px-6 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 hover:bg-white/30 transition-colors" data-testid="delivery-call">
                    <Phone size={20} strokeWidth={2.5} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                {['Call or WhatsApp your prescription', 'Confirm order & delivery address', 'Get medicines at your doorstep', 'Pay via Cash or UPI'].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-full bg-white text-[#FF6B00] flex items-center justify-center font-black text-lg flex-shrink-0">{i + 1}</div>
                    <span className="text-white font-medium text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORE FINDER ── */}
      <section className="section-gap bg-[#181818]" data-testid="store-finder">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-[#FF6B00] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">Find Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Outfit' }}>
              Store Finder
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Map */}
            <div className="map-frame h-[350px] lg:h-[450px]">
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

            {/* Store Cards */}
            <div className="space-y-4">
              {STORES.map((store) => (
                <div
                  key={store.id}
                  className={`card-dark p-5 ${!store.active ? 'opacity-60' : ''}`}
                  data-testid={`store-card-${store.id}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${store.active ? 'bg-[#FF6B00]' : 'bg-[#555]'}`}>
                      <MapPin size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Outfit' }}>{store.name}</h3>
                      <p className="text-[#999] text-sm mb-2">{store.address}</p>
                      {store.active ? (
                        <>
                          <div className="flex items-center gap-4 text-sm text-[#CCCCCC] mb-2">
                            <span className="flex items-center gap-1"><Phone size={14} className="text-[#FF6B00]" /> {store.phone}</span>
                            <span className="flex items-center gap-1"><Clock size={14} className="text-[#FF6B00]" /> {store.timing}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="open-pulse" />
                            <span className="text-[#1BAA5E] font-bold text-xs">Open Now</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <a
                              href={DIRECTIONS_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 bg-[#FF6B00] text-white px-4 py-2 rounded-full text-sm font-bold hover:scale-[1.02] transition-transform"
                              data-testid="get-directions-btn"
                            >
                              <Navigation size={14} />
                              Get Directions
                            </a>
                            <a
                              href={`tel:${store.phone}`}
                              className="inline-flex items-center gap-1.5 bg-[#2A2A2A] border border-[#444] text-white px-4 py-2 rounded-full text-sm font-bold hover:border-[#FF6B00] transition-colors"
                              data-testid="store-call-btn"
                            >
                              <Phone size={14} />
                              Call Store
                            </a>
                          </div>
                        </>
                      ) : (
                        <div className="inline-flex items-center gap-2 bg-[#333] text-[#999] px-3 py-1.5 rounded-full text-xs font-bold mt-1">
                          <Clock size={12} />
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEEDBACK FORM ── */}
      <section className="section-gap bg-[#1F1F1F]" data-testid="feedback-section">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#FF6B00] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">Your Opinion Matters</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit' }}>
                Leave a Feedback
              </h2>
              <p className="text-lg text-[#CCCCCC] leading-relaxed">
                Share your experience with City Medicos. Your feedback helps us serve you better.
              </p>
            </div>
            <div className="bg-[#2A2A2A] border-2 border-[#333] rounded-2xl p-6 md:p-8">
              {feedbackSubmitted ? (
                <div className="text-center py-8" data-testid="feedback-success">
                  <div className="w-16 h-16 rounded-full bg-[#1BAA5E] flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-white" strokeWidth={3} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Outfit' }}>Thank You!</h3>
                  <p className="text-[#999]">Your feedback has been sent via WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} data-testid="feedback-form">
                  <div className="space-y-4">
                    <div>
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="Enter your name"
                        value={feedbackForm.name}
                        onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                        data-testid="feedback-name"
                      />
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        required
                        className="form-input"
                        placeholder="Enter your phone number"
                        value={feedbackForm.phone}
                        onChange={(e) => setFeedbackForm({ ...feedbackForm, phone: e.target.value })}
                        data-testid="feedback-phone"
                      />
                    </div>
                    <div>
                      <label className="form-label">Rating</label>
                      <div className="flex gap-1" data-testid="feedback-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setFeedbackRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 transition-transform hover:scale-110"
                            data-testid={`star-${star}`}
                          >
                            <Star
                              size={28}
                              className={`${(hoverRating || feedbackRating) >= star ? 'text-[#FF6B00] fill-[#FF6B00]' : 'text-[#555]'} transition-colors`}
                              strokeWidth={2}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Your Feedback</label>
                      <textarea
                        required
                        rows={3}
                        className="form-input resize-none"
                        placeholder="Share your experience..."
                        value={feedbackForm.message}
                        onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
                        data-testid="feedback-message"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-call w-full"
                      data-testid="feedback-submit"
                    >
                      <Send size={18} />
                      <span>Submit Feedback</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── BUSINESS ASSOCIATE FORM ── */}
      <section className="section-gap bg-[#181818]" data-testid="business-section">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-[#2A2A2A] border-2 border-[#333] rounded-2xl p-6 md:p-8 order-2 lg:order-1">
              {businessSubmitted ? (
                <div className="text-center py-8" data-testid="business-success">
                  <div className="w-16 h-16 rounded-full bg-[#1BAA5E] flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-white" strokeWidth={3} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Outfit' }}>Enquiry Sent!</h3>
                  <p className="text-[#999]">Your business enquiry has been sent via WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleBusinessSubmit} data-testid="business-form">
                  <div className="space-y-4">
                    <div>
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="Enter your name"
                        value={businessForm.name}
                        onChange={(e) => setBusinessForm({ ...businessForm, name: e.target.value })}
                        data-testid="business-name"
                      />
                    </div>
                    <div>
                      <label className="form-label">Company Name</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="Enter company name"
                        value={businessForm.company}
                        onChange={(e) => setBusinessForm({ ...businessForm, company: e.target.value })}
                        data-testid="business-company"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          required
                          className="form-input"
                          placeholder="Email address"
                          value={businessForm.email}
                          onChange={(e) => setBusinessForm({ ...businessForm, email: e.target.value })}
                          data-testid="business-email"
                        />
                      </div>
                      <div>
                        <label className="form-label">Phone</label>
                        <input
                          type="tel"
                          required
                          className="form-input"
                          placeholder="Phone number"
                          value={businessForm.phone}
                          onChange={(e) => setBusinessForm({ ...businessForm, phone: e.target.value })}
                          data-testid="business-phone"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Message</label>
                      <textarea
                        required
                        rows={3}
                        className="form-input resize-none"
                        placeholder="Tell us about your business enquiry..."
                        value={businessForm.message}
                        onChange={(e) => setBusinessForm({ ...businessForm, message: e.target.value })}
                        data-testid="business-message"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-call w-full"
                      data-testid="business-submit"
                    >
                      <Building2 size={18} />
                      <span>Submit Enquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#FF6B00] font-bold text-sm tracking-[0.15em] uppercase mb-4 block">Partner With Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit' }}>
                Associate with City Medicos
              </h2>
              <p className="text-lg text-[#CCCCCC] mb-4 leading-relaxed">
                Are you a vendor, distributor, or healthcare brand? Partner with City Medicos and grow your business with us.
              </p>
              <p className="text-lg text-[#CCCCCC] leading-relaxed">
                We are always looking for trusted partners to expand our product range and serve our community better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-block section-gap" data-testid="cta">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit' }}>
            Need Medicines? We Are Just a Call Away!
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call us now for enquiries, availability check, or to place a delivery order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${PHONE}`} className="bg-white text-[#FF6B00] px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform" data-testid="cta-call">
              <Phone size={24} strokeWidth={2.5} />
              <span>Call Now – {PHONE}</span>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform" data-testid="cta-whatsapp">
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
