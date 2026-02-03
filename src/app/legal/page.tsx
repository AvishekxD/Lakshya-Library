import Link from "next/link";

export const metadata = {
  title: "Legal | Lakshya Library",
  description: "Legal information for Lakshya Library including Terms of Service and Privacy Policy.",
};

export default function LegalIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-36">
      <h1 className="mb-4 text-3xl font-bold">Legal</h1>

      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Find our legal policies and information below. These documents explain
        how Lakshya Library operates and how your data is handled.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/legal/privacy-policy"
          className="rounded-xl shadow shadow-neutral-700 p-5 transition hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          <h2 className="mb-1 text-lg font-semibold">Privacy Policy</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Learn how we collect, use, and protect your personal data.
          </p>
        </Link>

        <Link
          href="/legal/terms"
          className="rounded-xl shadow shadow-neutral-700 p-5 transition hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          <h2 className="mb-1 text-lg font-semibold">Terms of Service</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Understand the rules and conditions for using Lakshya Library.
          </p>
        </Link>
      </div>
    </main>
  );
}
