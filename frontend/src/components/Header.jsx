import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';

const PHONE_NUMBER = '9873341450';
const WHATSAPP_LINK = `https://wa.me/91${PHONE_NUMBER}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/store', label: 'Store' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky-header" data-testid="main-header">
      {/* Top bar with timing and location */}
      <div className="bg-brand-light border-b border-gray-200">
        <div className="container-custom py-2">
          <div className="flex flex-wrap items-center justify-between text-sm gap-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-[#1F1F1F]">
                <Clock size={14} className="text-brand-green" />
                <span>Mon-Sun: 8:00 AM - 10:00 PM</span>
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#1F1F1F]">
              <MapPin size={14} className="text-brand-orange" />
              <span>Shop No. 5, Main Market, New Delhi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col" data-testid="logo-link">
              <span className="text-2xl md:text-3xl font-black tracking-tight" style={{ fontFamily: 'Outfit, sans-serif', color: '#FF4A1C' }}>
                CITY MEDICOS
              </span>
              <span className="text-xs md:text-sm font-medium tracking-widest text-[#1BAA5E]">
                CHEMIST & DRUGGIST
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-brand-orange'
                      : 'text-[#1F1F1F] hover:text-brand-orange'
                  }`}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="btn-primary"
                data-testid="header-call-btn"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                data-testid="header-whatsapp-btn"
              >
                <MessageCircle size={20} />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4" data-testid="mobile-menu">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium py-2 ${
                      isActive(link.path)
                        ? 'text-brand-orange'
                        : 'text-[#1F1F1F]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="btn-primary"
                    data-testid="mobile-call-btn"
                  >
                    <Phone size={20} />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                    data-testid="mobile-whatsapp-btn"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
