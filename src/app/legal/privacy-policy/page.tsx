
export const metadata = {
  title: "Privacy Policy | Lakshya Library",
  description: "Privacy policy for Lakshya Library website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-36">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>

      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        Last updated: Feb 2026
      </p>

      <section className="space-y-4 text-neutral-700 dark:text-neutral-300">
        <p>
          Lakshya Library values your privacy. This Privacy Policy explains how we
          collect, use, and protect your personal information when you use our
          website and services.
        </p>

        <h2 className="mt-6 text-xl font-semibold">1. Information We Collect</h2>
        <p>
          We may collect basic information such as:
          <li className="ml-8">Name</li>
          <li className="ml-8">Email address</li>
          <li className="ml-8">Phone number</li>
          <li className="ml-8">Any information you provide through forms or contact requests</li>
        </p>

        <h2 className="mt-6 text-xl font-semibold">2. How We Use Your Information</h2>
        <p>
          We use your information to:
          <li className="ml-8">Respond to inquiries and support requests</li>
          <li className="ml-8">Manage memberships or bookings</li>
          <li className="ml-8">Improve our services and user experience</li>
          <li className="ml-8">Send important updates related to Lakshya Library</li>
        </p>

        <h2 className="mt-6 text-xl font-semibold">3. Data Protection</h2>
        <p>
          We take reasonable steps to protect your data. However, no online
          system can be guaranteed to be 100% secure.
        </p>

        <h2 className="mt-6 text-xl font-semibold">4. Sharing of Information</h2>
        <p>
          We do not sell or rent your personal information to third parties. 
          Your data is only shared when required by law or to provide our services (e.g., trusted service providers).
        </p>

        <h2 className="mt-6 text-xl font-semibold">5. Cookies & Website Analytics</h2>
        <p>
          Our website may use cookies or basic analytics to understand how visitors use our site and to improve performance.
          You can control cookies through your browser settings.
        </p>

        <h2 className="mt-6 text-xl font-semibold">6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. 
          We are not responsible for the privacy practices of those external sites.
        </p>

        <h2 className="mt-6 text-xl font-semibold">7. Your Rights</h2>
        <p>
          You have the right to:
          <li className="ml-8">Request access to your personal data</li>
          <li className="ml-8">Ask for corrections or deletion of your data</li>
          <li className="ml-8">Withdraw consent where applicable</li>
          To make such requests, contact us.
        </p>

        <h2 className="mt-6 text-xl font-semibold">8. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. 
          Changes will be posted on this page with an updated date.
        </p>

        <h2 className="mt-6 text-xl font-semibold">9. Contact</h2>
        <p>
          For questions regarding these terms, Phone no:{" "}
          <span className="font-medium"> +91 96800 28230.</span>.
        </p>
      </section>
    </main>
  );
}
