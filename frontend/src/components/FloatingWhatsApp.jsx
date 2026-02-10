import { MessageCircle } from 'lucide-react';

const PHONE = '9873341450';
const WA_LINK = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

export const FloatingWhatsApp = () => {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 group"
      aria-label="Chat on WhatsApp"
      data-testid="floating-whatsapp"
    >
      <MessageCircle size={32} className="text-white" strokeWidth={2} />
      <span className="absolute right-full mr-3 bg-[#1F1F1F] text-white text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
