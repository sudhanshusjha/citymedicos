import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const PHONE_NUMBER = '9873341450';
const WHATSAPP_LINK = `https://wa.me/91${PHONE_NUMBER}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/store', label: 'Store Details' },
    { path: '/contact', label: 'Contact' },
  ];

  const legalLinks = [
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms & Conditions' },
  ];

  return (
    <footer className="footer" data-testid="main-footer">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-black tracking-tight text-brand-orange" style={{ fontFamily: 'Outfit, sans-serif' }}>
                CITY MEDICOS
              </span>
              <p className="text-sm font-medium tracking-widest text-[#1BAA5E] mt-1">
                CHEMIST & DRUGGIST
              </p>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted neighborhood pharmacy for all healthcare needs. Quality medicines, genuine products, and caring service since generations.
            </p>
            <div className="flex gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="Call us"
                data-testid="footer-call-icon"
              >
                <Phone size={18} className="text-white" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="WhatsApp us"
                data-testid="footer-whatsapp-icon"
              >
                <MessageCircle size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-brand-orange transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-brand-orange transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Call / WhatsApp</p>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-white font-bold text-lg hover:text-brand-orange transition-colors">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-white">Shop No. 5, Main Market, New Delhi - 110001</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Store Timings</p>
                  <p className="text-white">Mon-Sun: 8:00 AM - 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              {currentYear} City Medicos. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Your Health, Our Priority
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
