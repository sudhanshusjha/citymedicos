import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const PHONE = '9873341450';
const WA_LINK = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-dark" data-testid="footer">
      <div className="container-main section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-black text-[#FF4A1C]" style={{ fontFamily: 'Outfit' }}>CITY MEDICOS</span>
              <p className="text-xs font-bold tracking-[0.15em] text-[#1BAA5E] mt-1">CHEMIST & DRUGGIST</p>
            </div>
            <p className="text-[#999] mb-6 text-base">
              Your trusted neighborhood pharmacy. Quality medicines, genuine products, and caring service.
            </p>
            <div className="flex gap-3">
              <a href={`tel:${PHONE}`} className="w-11 h-11 rounded-full bg-[#FF4A1C] flex items-center justify-center hover:scale-105 transition-transform" aria-label="Call" data-testid="footer-call">
                <Phone size={18} className="text-white" />
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-105 transition-transform" aria-label="WhatsApp" data-testid="footer-whatsapp">
                <MessageCircle size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Quick Links</h4>
            <ul className="space-y-2">
              {[{ to: '/', label: 'Home' }, { to: '/about', label: 'About Us' }, { to: '/services', label: 'Services' }, { to: '/store', label: 'Store Details' }, { to: '/contact', label: 'Contact' }].map((l) => (
                <li key={l.to}><Link to={l.to} data-testid={`footer-${l.label.toLowerCase().replace(/\s/g, '-')}`}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" data-testid="footer-privacy">Privacy Policy</Link></li>
              <li><Link to="/terms" data-testid="footer-terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#FF4A1C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#999] text-sm">Call / WhatsApp</p>
                  <a href={`tel:${PHONE}`} className="text-white font-bold text-lg">{PHONE}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#FF4A1C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#999] text-sm">Address</p>
                  <p className="text-white">Shop No. 5, Main Market, New Delhi – 110001</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#FF4A1C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#999] text-sm">Hours</p>
                  <p className="text-white">Mon-Sun: 8 AM – 10 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#333] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#666]">
          <p>© {year} City Medicos. All rights reserved.</p>
          <p>Your Health, Our Priority</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
