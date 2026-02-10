import { Phone, MessageCircle } from 'lucide-react';

const PHONE = '9873341450';
const WA_LINK = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

export const Terms = () => {
  return (
    <main className="page-fade" data-testid="terms-page">
      <section className="section-gap bg-[#1F1F1F]">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Outfit' }}>Terms & Conditions</h1>
            <p className="text-lg text-[#999]">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      <section className="section-gap bg-[#181818]">
        <div className="container-main">
          <div className="max-w-3xl space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Acceptance of Terms</h2>
              <p className="text-lg text-[#CCCCCC] leading-relaxed">
                By using City Medicos services, you agree to these Terms and Conditions. If you do not agree, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Services Offered</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-[#CCCCCC]">
                <li>Prescription and over-the-counter medicines</li>
                <li>Ayurvedic and herbal products</li>
                <li>Surgical supplies and medical equipment</li>
                <li>Cosmetics and personal care</li>
                <li>Baby care products</li>
                <li>Free home delivery services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Prescription Requirements</h2>
              <p className="text-lg text-[#CCCCCC] leading-relaxed">
                Certain medicines require a valid prescription from a licensed medical practitioner. We reserve the right to refuse sale without valid prescription, in compliance with regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Home Delivery Terms</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-[#CCCCCC]">
                <li>Delivery within our serviceable area</li>
                <li>Valid prescription required for prescription medicines</li>
                <li>Delivery times may vary based on order time</li>
                <li>Cash on delivery or UPI payment accepted</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Returns and Refunds</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-[#CCCCCC]">
                <li>Medicines once sold cannot be returned</li>
                <li>Returns only for damaged or incorrect products</li>
                <li>Issues must be reported within 24 hours</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Disclaimer</h2>
              <p className="text-lg text-[#CCCCCC] leading-relaxed">
                Information from our staff is for general guidance only. Always consult a qualified healthcare professional for medical concerns.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Contact Us</h2>
              <p className="text-lg text-[#CCCCCC] mb-6">Questions about these terms? Contact us:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${PHONE}`} className="btn-call" data-testid="terms-call">
                  <Phone size={20} strokeWidth={2.5} />
                  <span>Call: {PHONE}</span>
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" data-testid="terms-wa">
                  <MessageCircle size={20} strokeWidth={2.5} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;
