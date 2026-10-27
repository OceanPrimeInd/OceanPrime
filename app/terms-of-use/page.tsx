"use client";

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white pb-32">

      {/* ✅ HERO */}
      <section className="text-center px-6 pt-24 pb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 tracking-tight">
          Terms of Use
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
          Please read these Terms carefully. Using this website means you agree to them.
        </p>
      </section>

      {/* ✅ CONTENT */}
      <section className="max-w-7xl mx-auto px-6 space-y-12 text-[15px] md:text-[16px] text-gray-700 leading-relaxed">

        {/* 1 */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            1. Acceptable Use
          </h2>
          <p>
            Your use of the Site must comply with all applicable laws and regulations. You agree not to engage 
            in activity that disrupts, damages, or limits the functionality of the Site or the networks connected 
            to it. Any attempt to gain unauthorised access to systems or data—including automated scraping, 
            hacking, or introducing malicious software—is strictly prohibited.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            2. Content Ownership and Intellectual Property
          </h2>
          <p>
            All text, images, trademarks, logos, and other content displayed on the Site are owned or licensed 
            by Ocean unless otherwise stated. You may not reproduce, distribute, or create derivative works 
            from this content without prior written permission. This includes using any content for the training 
            or tuning of Artificial Intelligence models (text, image, sound, or otherwise). All rights not expressly 
            granted are reserved.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            3. User Submitted Material
          </h2>
          <p>
            You may have the opportunity to submit content—such as comments, reviews, or suggestions. By doing so, 
            you grant Ocean a non-exclusive, worldwide, royalty-free licence to use, display, reproduce, and distribute 
            that content in connection with the Site. You warrant that any content you submit is accurate, lawful, and 
            does not infringe the rights of third parties.
          </p>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            4. Advertising and Third-Party Links
          </h2>
          <p>
            We may display advertisements via Google AdSense or other partners, and may sell advertising space 
            directly. These third parties may use cookies or similar technologies to track your activity. Your 
            interaction with third-party content is voluntary, and we are not responsible for the accuracy, 
            reliability, or practices of advertisers or external websites. Inclusion of a link does not imply 
            endorsement.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            5. Purchases and Payments
          </h2>
          <p>
            All purchases made through the Site are subject to availability and acceptance. We reserve the right 
            to refuse or cancel orders due to pricing errors, suspected fraud, or stock limitations. By submitting 
            payment information, you authorise us to charge the specified amount. Additional terms may apply to 
            specific products or services and will be provided at the point of purchase.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            6. Disclaimer of Warranties
          </h2>
          <p>
            All information, products, and services provided on the Site are offered on an “as is” and 
            “as available” basis. To the fullest extent permitted by law, we disclaim all warranties, express or 
            implied, including accuracy, completeness, fitness for a particular purpose, and uninterrupted 
            availability. We do not guarantee that the Site will be error-free or secure.
          </p>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Ocean and its affiliates shall not be liable for any direct, 
            indirect, incidental, consequential, or special damages arising from your use of—or inability to use—the 
            Site. This includes loss of profits, data, or goodwill. Where local laws restrict such limitations, 
            liability will be limited to the fullest extent permissible.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            8. Indemnification
          </h2>
          <p>
            You agree to indemnify Ocean, its affiliates, officers, employees, and agents against any claims, 
            damages, or legal fees resulting from your breach of these Terms or your misuse of the Site.
          </p>
        </div>

        {/* 9 */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            9. Changes to the Terms
          </h2>
          <p>
            We may revise these Terms of Use at any time to reflect changes in law or operational needs. The most 
            recent version will include an updated revision date. Continued use of the Site after changes take effect 
            means you accept the updated Terms.
          </p>
        </div>

        {/* 10 */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            10. Governing Law and Dispute Resolution
          </h2>
          <p>
            These Terms are governed by the laws of the jurisdiction where Ocean is registered. Any disputes 
            shall be resolved through negotiation or, if necessary, in the courts of that jurisdiction unless 
            otherwise required by local law.
          </p>
        </div>

        {/* 11 */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            11. Severability
          </h2>
          <p>
            If any part of these Terms is found invalid or unenforceable, the remaining sections will continue 
            in full force. The invalid portion shall be interpreted to best reflect the intent of the original terms.
          </p>
        </div>

        {/* 12 */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            12. Contact Us
          </h2>
          <p>
            If you have questions or concerns regarding these Terms, please contact us through the methods 
            listed on our Contact page. We welcome your feedback and are committed to transparency.
          </p>
        </div>

      </section>
    </main>
  );
}
