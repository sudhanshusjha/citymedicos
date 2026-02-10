import { Phone, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '9873341450';
const WHATSAPP_LINK = `https://wa.me/91${PHONE_NUMBER}?text=Hello%20City%20Medicos,%20I%20need%20help%20with%20medicine%20availability%20and%20home%20delivery.%20Please%20guide%20me.`;

export const Terms = () => {
  return (
    <main data-testid="terms-page">
      {/* Hero Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Terms & Conditions
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
                  Acceptance of Terms
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  By using the services of City Medicos, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Services Offered
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  City Medicos provides the following services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  <li>Retail sale of prescription and over-the-counter medicines</li>
                  <li>Ayurvedic and herbal products</li>
                  <li>Surgical supplies and medical equipment</li>
                  <li>Cosmetics and personal care products</li>
                  <li>Baby care products</li>
                  <li>Free home delivery services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Prescription Requirements
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Certain medicines require a valid prescription from a licensed medical practitioner. We reserve the right to refuse sale of prescription medicines without a valid prescription. This is in compliance with applicable pharmaceutical regulations and for your safety.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Product Availability
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  While we strive to maintain stock of all commonly required medicines and products, availability is subject to supply from distributors. We recommend calling us to confirm availability before visiting the store or placing a delivery order.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Home Delivery Terms
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Our free home delivery service is subject to the following conditions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  <li>Delivery is available within our serviceable area</li>
                  <li>Valid prescription must be provided for prescription medicines</li>
                  <li>Delivery times may vary based on order time and availability</li>
                  <li>Payment can be made via cash on delivery or UPI</li>
                  <li>We reserve the right to refuse delivery in certain circumstances</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Pricing
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  All prices are as per the Maximum Retail Price (MRP) printed on the product packaging. We may offer discounts on certain products at our discretion. Prices are subject to change without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Returns and Refunds
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Due to the nature of pharmaceutical products:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  <li>Medicines once sold cannot be returned or exchanged</li>
                  <li>Returns are only accepted for damaged or incorrect products</li>
                  <li>Any issues must be reported within 24 hours of purchase/delivery</li>
                  <li>Refunds, if applicable, will be processed after verification</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Limitation of Liability
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  City Medicos shall not be liable for any adverse effects arising from the use of products purchased from us, provided the products are genuine and used as directed. We recommend consulting a healthcare professional before using any medication.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Disclaimer
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The information provided by our staff is for general guidance only and should not be considered as medical advice. Always consult a qualified healthcare professional for medical concerns and before starting any new medication.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Changes to Terms
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Contact Us
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="btn-primary"
                    data-testid="terms-call-btn"
                  >
                    <Phone size={20} />
                    <span>Call: {PHONE_NUMBER}</span>
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                    data-testid="terms-whatsapp-btn"
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

export default Terms;
