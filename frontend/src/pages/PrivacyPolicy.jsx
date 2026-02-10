import { Phone, MessageCircle } from 'lucide-react';

const PHONE = '9873341450';
const WA_LINK = `https://wa.me/91${PHONE}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

export const PrivacyPolicy = () => {
  return (
    <main className="page-fade" data-testid="privacy-page">
      <section className="section-gap bg-[#1F1F1F]">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Outfit' }}>Privacy Policy</h1>
            <p className="text-lg text-[#999]">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      <section className="section-gap bg-[#181818]">
        <div className="container-main">
          <div className="max-w-3xl space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Introduction</h2>
              <p className="text-lg text-[#CCCCCC] leading-relaxed">
                City Medicos is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you interact with our pharmacy services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-[#CCCCCC]">
                <li>Name and contact information (phone, address)</li>
                <li>Prescription details for medicine orders</li>
                <li>Delivery address for home delivery</li>
                <li>Communication history for customer service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-[#CCCCCC]">
                <li>Process and fulfill medicine orders</li>
                <li>Provide home delivery services</li>
                <li>Respond to enquiries and support</li>
                <li>Verify prescriptions as required by law</li>
                <li>Improve our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Information Security</h2>
              <p className="text-lg text-[#CCCCCC] leading-relaxed">
                We take reasonable measures to protect your personal information from unauthorized access. All prescription details are kept strictly confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Your Rights</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-[#CCCCCC]">
                <li>Request access to your information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of promotional communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>Contact Us</h2>
              <p className="text-lg text-[#CCCCCC] mb-6">Questions about this policy? Contact us:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${PHONE}`} className="btn-call" data-testid="privacy-call">
                  <Phone size={20} strokeWidth={2.5} />
                  <span>Call: {PHONE}</span>
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" data-testid="privacy-wa">
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

export default PrivacyPolicy;
