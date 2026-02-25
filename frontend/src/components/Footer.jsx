import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock, Plus } from 'lucide-react';

const PHONE = '9873341450';
const WA_LINK = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-main" data-testid="footer">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Plus size={24} className="text-[#1BAA5E]" strokeWidth={3} />
              <div>
                <span className="text-2xl font-black text-[#FF6B00]" style={{ fontFamily: 'Outfit' }}>CITY MEDICOS</span>
                <p className="text-xs font-bold tracking-[0.1em] text-white">CHEMIST & DRUGGIST</p>
              </div>
            </Link>
            <p className="text-[#999] mb-5 text-sm leading-relaxed">
              Your trusted neighborhood pharmacy. Genuine medicines, expert guidance, and caring service since day one.
            </p>
            <div className="flex gap-3">
              <a href={`tel:${PHONE}`} className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center hover:scale-105 transition-transform" aria-label="Call" data-testid="footer-call-icon">
                <Phone size={16} className="text-white" />
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-105 transition-transform" aria-label="WhatsApp" data-testid="footer-whatsapp-icon">
                <MessageCircle size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/store', label: 'Store Details' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} data-testid={`footer-link-${l.label.toLowerCase().replace(/\s/g, '-')}`}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={14} className="text-[#FF6B00] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#999] text-xs">Call / WhatsApp</p>
                  <a href={`tel:${PHONE}`} className="text-white font-bold">{PHONE}</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#FF6B00] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#999] text-xs">Address</p>
                  <p className="text-white">Shop No. 5, Fusion Market, Greater Noida West – 201306</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-[#FF6B00] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#999] text-xs">Hours</p>
                  <p className="text-white">Mon-Sun: 8 AM – 1:00 AM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-base font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" data-testid="footer-privacy">Privacy Policy</Link></li>
              <li><Link to="/terms" data-testid="footer-terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#333] mt-10 pt-6 text-center text-sm text-[#666]">
          <p>&copy; {year} City Medicos. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
