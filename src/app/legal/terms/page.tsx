
export const metadata = {
  title: "Terms of Service | Lakshya Library",
  description: "Terms of service for using Lakshya Library website and study space.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-36">
      <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>

      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        Last updated: Feb 2026
      </p>

      <section className="space-y-4 text-neutral-700 dark:text-neutral-300">
        <p>
          By accessing or using Lakshya Library’s services or physical study space,
          you agree to these Terms of Service.
        </p>

        <h2 className="mt-6 text-xl font-semibold">1. Use of Services</h2>
        <p>
          Our services are provided for personal, non-commercial use only. Users
          must follow all rules and guidelines while using the space.
        </p>

        <h2 className="mt-6 text-xl font-semibold">2. User Conduct</h2>
        <p>
          Users must maintain a peaceful environment and avoid disturbing
          others. Any misuse may lead to denial of access.
          <li className="ml-8">Maintain silence and avoid disturbing others</li>
          <li className="ml-8">Respect library property and other users</li>
          <li className="ml-8">Follow staff instructions and posted rules</li>
          <li className="ml-8">Not engage in any unlawful, harmful, or disruptive behavior</li>
          We reserve the right to deny access or remove any user who violates these rules.
        </p>

        <h2 className="mt-6 text-xl font-semibold">3. Memberships & Payments</h2>
        <p>
          All passes and memberships are subject to the terms displayed at the time of purchase. Fees are non-refundable unless explicitly stated otherwise. 
          Lakshya Library may update pricing or plans at any time.
        </p>

        <h2 className="mt-6 text-xl font-semibold">4. Limitation of Liability</h2>
        <p>
          Lakshya Library is not responsible for loss or damage of personal
          belongings inside the premises.
        </p>

        <h2 className="mt-6 text-xl font-semibold">5. Service Availability</h2>
        <p>
          We strive to provide uninterrupted services, but we do not guarantee continuous availability of Wi-Fi, power, or seating. 
          Temporary outages or maintenance may occur. 
        </p>
        
        <h2 className="mt-6 text-xl font-semibold">6. Changes to Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Continued use of our services after changes means you accept the updated terms.
        </p>
        <h2 className="mt-6 text-xl font-semibold">7. Termination</h2>
        <p>
          WWe reserve the right to suspend or terminate access to our services if a user violates these terms or disrupts the environment for others.
        </p>

        <h2 className="mt-6 text-xl font-semibold">8. Contact</h2>
        <p>
          For questions regarding these terms, Phone no:{" "}
          <span className="font-medium">+91 96800 28230</span>.
        </p>
      </section>
    </main>
  );
}
