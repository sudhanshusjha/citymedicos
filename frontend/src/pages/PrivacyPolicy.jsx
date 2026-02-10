import { Phone, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '9873341450';
const WHATSAPP_LINK = `https://wa.me/91${PHONE_NUMBER}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

export const PrivacyPolicy = () => {
  return (
    <main data-testid="privacy-policy-page">
      {/* Hero Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Introduction
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  City Medicos (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our pharmacy services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Information We Collect
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  We may collect the following information when you contact us or use our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  <li>Name and contact information (phone number, address)</li>
                  <li>Prescription details for medicine orders</li>
                  <li>Delivery address for home delivery services</li>
                  <li>Communication history for customer service purposes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  How We Use Your Information
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  <li>To process and fulfill your medicine orders</li>
                  <li>To provide home delivery services</li>
                  <li>To respond to your enquiries and provide customer support</li>
                  <li>To verify prescriptions as required by law</li>
                  <li>To improve our services and customer experience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Information Security
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the phone or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Information Sharing
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information only when required by law or to protect our rights, property, or safety.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Prescription Confidentiality
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We understand the sensitive nature of prescription information. All prescription details shared with us are kept strictly confidential and are used solely for the purpose of fulfilling your medicine orders.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Your Rights
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  <li>Request access to your personal information</li>
                  <li>Request correction of any inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of any promotional communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Changes to This Policy
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Contact Us
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our practices, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="btn-primary"
                    data-testid="privacy-call-btn"
                  >
                    <Phone size={20} />
                    <span>Call: {PHONE_NUMBER}</span>
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                    data-testid="privacy-whatsapp-btn"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
