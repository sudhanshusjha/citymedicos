import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, Plus } from 'lucide-react';

const PHONE = '9873341450';
const WA_LINK = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/store', label: 'Store' },
  { to: '/contact', label: 'Contact' },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="header-sticky" data-testid="header">
      {/* Top bar */}
      <div className="bg-[#181818] border-b border-[#333]">
        <div className="container-main py-2 flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[#FF6B00]" />
            <span className="text-white font-medium">Mon-Sun: 8 AM – 1:00 AM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#FF6B00]" />
            <span className="text-white font-medium">FB-012A, Fusion Market, Fusion Homes, Greater Noida West</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-[#1F1F1F]">
        <div className="container-main py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" data-testid="logo">
            <Plus size={28} className="text-[#1BAA5E] medical-cross" strokeWidth={3} />
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black tracking-tight text-[#FF6B00]" style={{ fontFamily: 'Outfit' }}>
                CITY MEDICOS
              </span>
              <span className="text-xs md:text-sm font-bold tracking-[0.15em] text-white uppercase">
                Chemist & Druggist
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`link-nav ${pathname === item.to ? 'active' : ''}`}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${PHONE}`} className="btn-call" data-testid="header-call">
              <Phone size={20} strokeWidth={2.5} />
              <span>Call Now</span>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" data-testid="header-whatsapp">
              <MessageCircle size={20} strokeWidth={2.5} />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2 text-white"
            aria-label="Menu"
            data-testid="mobile-menu-btn"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-[#333] bg-[#1F1F1F]" data-testid="mobile-menu">
            <div className="container-main py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`link-nav text-xl py-2 ${pathname === item.to ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-[#333]">
                <a href={`tel:${PHONE}`} className="btn-call" data-testid="mobile-call">
                  <Phone size={20} strokeWidth={2.5} />
                  <span>Call Now – {PHONE}</span>
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" data-testid="mobile-whatsapp">
                  <MessageCircle size={20} strokeWidth={2.5} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
