"use client";
 

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white pb-32">

      {/* ✅ HERO */}
      <section className="text-center px-6 pt-24 pb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
          How we collect, use, protect, and respect your personal information.
        </p>
      </section>

      {/* ✅ CLEAN TEXT CONTENT */}
      <section className="max-w-7xl mx-auto px-6 space-y-12 text-[15px] md:text-[16px] text-gray-700 leading-relaxed">

        {/* TEMPLATE FOR EACH SECTION */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            1. Introduction
          </h2>
          <p>
            Welcome to Ocean, accessible at oceanprime.co, where our primary goal is to support responsible
            maritime practices and lower-emission operations. Protecting your personal data is a priority for us.
            This Privacy Policy explains how we collect, process, share, and safeguard the information you provide.
            By using our services, you agree to the practices described here, which we may update from time to time
            to reflect changes in law or operational needs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            2. Who We Are
          </h2>
          <p>
            We are Ocean Prime Industries Ltd trading as Ocean, Oceanprime and Boat Lab, focused on sustainable
            boat, yacht, ship and landside solutions around the world. Whether consulting, retailing maritime
            products, or selling advertising space, we respect your right to privacy and process personal data in
            line with the laws of the United Kingdom, the European Union, Canada, and the United States, among
            other regions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            3. Data We Collect
          </h2>
          <p>
            We collect information you choose to provide, such as your name, e-mail address, or phone number,
            when you complete a form or make a purchase. We also gather information automatically through website
            interactions, such as IP addresses, browser types, device IDs, and pages visited. This data helps us
            personalise your experience and improve our functionality.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            4. Advertising and Cookies
          </h2>
          <p>
            We use Google AdSense and similar partners to display advertisements. These partners may use cookies,
            web beacons, or similar technologies to collect information about your device and browsing activity.
            In regions such as the UK and EU/EEA, we require your explicit consent before deploying non-essential
            cookies. You may adjust your browser settings to block or delete cookies, but doing so may affect
            certain features of the site.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            5. How We Use Your Data
          </h2>
          <p>
            We use your personal data to fulfil orders, respond to enquiries, provide consultancy services,
            send marketing communications (with consent), improve our offerings, and prevent fraud. We only
            process your information for these stated purposes unless required by law.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            6. Data Sharing
          </h2>
          <p>
            We do not sell your personal data. We may share limited details with trusted service providers who
            assist with payment processing, analytics, advertising, and operational functions. These partners
            adhere to strict confidentiality and data protection standards. We may also disclose information if
            legally required or necessary to protect our rights.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            7. International Data Transfers
          </h2>
          <p>
            Because we operate across multiple countries, your data may be transferred internationally. We use
            approved mechanisms such as standard contractual clauses and adequacy decisions to ensure your
            information remains secure and compliant with applicable laws such as UK GDPR and EU GDPR.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            8. Data Retention
          </h2>
          <p>
            We retain personal information only for as long as necessary to fulfil the purposes described in this
            policy or to meet legal obligations. When data is no longer required, it is securely deleted or
            anonymised.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            9. Your Rights
          </h2>
          <p>
            Depending on your location, you may have the right to access, correct, delete, or restrict the use of
            your personal data, withdraw consent, or lodge complaints with regulators. To exercise any of these
            rights, please contact us through the details on our Contact page.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            10. Data Security
          </h2>
          <p>
            We use encryption, secure servers, and restricted access protocols to safeguard your information.
            Although we take every reasonable step, no method of transmission or storage is entirely secure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            11. Policy Updates
          </h2>
          <p>
            We may revise this Privacy Policy to reflect updates in the law or operational changes. The latest
            version will always appear on this page. Your continued use of our services constitutes acceptance of
            the updated terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            12. Contact Us
          </h2>
          <p>
            If you have any questions or wish to exercise your data protection rights, please reach out using the
            contact methods listed on our website. We appreciate your trust and will respond as soon as possible.
          </p>
        </div>

      </section>
      
    </main>
  );
}
