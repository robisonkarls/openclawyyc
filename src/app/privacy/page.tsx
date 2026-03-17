import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | OpenClawYYC",
  description: "Privacy Policy for OpenClawYYC services and website.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen oc-page">
      <section className="oc-section py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm uppercase tracking-wide oc-accent">Effective Date: March 17, 2026</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 oc-text-secondary">
            This Privacy Policy explains how OpenClawYYC (“OpenClawYYC”, “we”, “us”, or “our”) collects, uses, and protects information when you use
            <span className="font-semibold"> openclawyyc.ca</span> and our deployment/setup services.
          </p>
        </div>
      </section>

      <section className="oc-section py-14">
        <div className="mx-auto max-w-4xl space-y-8 px-6">
          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">1. Information We Collect</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 oc-text-secondary">
              <li>
                <span className="font-semibold">Booking information:</span> Name, email, phone number, and scheduling preferences provided when you book a call.
              </li>
              <li>
                <span className="font-semibold">Payment information:</span> Payments are processed by Stripe. We do not store your full credit card details on our servers.
              </li>
              <li>
                <span className="font-semibold">Setup information:</span> Device, integration, and account-access details required to perform setup and support.
              </li>
              <li>
                <span className="font-semibold">Website analytics:</span> Aggregated website usage data to improve performance and user experience.
              </li>
              <li>
                <span className="font-semibold">Communications:</span> Messages sent through email or support channels.
              </li>
            </ul>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">2. How We Use Your Information</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 oc-text-secondary">
              <li>To schedule and deliver setup services.</li>
              <li>To process payments and invoices.</li>
              <li>To provide post-setup support and service communications.</li>
              <li>To improve our website, operations, and service quality.</li>
            </ul>
            <p className="mt-4 font-semibold">We do not sell or rent your personal information.</p>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">3. Third-Party Services</h2>
            <p className="mt-4 oc-text-secondary">We use trusted third-party providers for specific functions:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 oc-text-secondary">
              <li>
                Stripe (payments):{" "}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="oc-accent underline">
                  stripe.com/privacy
                </a>
              </li>
              <li>
                Cal.com (scheduling):{" "}
                <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="oc-accent underline">
                  cal.com/privacy
                </a>
              </li>
              <li>Hosting/analytics providers for secure delivery and aggregate metrics.</li>
            </ul>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">4. Data Handling During Setup</h2>
            <p className="mt-4 oc-text-secondary">When setup access is required, we only access what is necessary to complete the agreed scope.</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 oc-text-secondary">
              <li>We do not retain personal files or unnecessary credentials after service delivery.</li>
              <li>We do not install software beyond the agreed deployment scope.</li>
              <li>We recommend rotating any shared credentials after completion.</li>
            </ul>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">5. Data Retention & Security</h2>
            <p className="mt-4 oc-text-secondary">
              We keep service records only as long as needed for support, legal, and accounting obligations. We use reasonable safeguards, but no method of
              transmission/storage is 100% secure.
            </p>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">6. Your Rights</h2>
            <p className="mt-4 oc-text-secondary">Depending on applicable law, you may request access, correction, restriction, or deletion of your personal data.</p>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">7. Jurisdiction</h2>
            <p className="mt-4 oc-text-secondary">This policy is governed by the laws of Alberta, Canada.</p>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">8. Contact</h2>
            <p className="mt-4 oc-text-secondary">
              OpenClawYYC<br />
              Cochrane, Alberta<br />
              Email: <a href="mailto:contact@openclawyyc.ca" className="oc-accent underline">contact@openclawyyc.ca</a>
            </p>
            <p className="mt-4 text-sm oc-text-muted">If you have privacy questions or requests, contact us and we’ll respond as quickly as possible.</p>
          </article>

          <div className="pt-2">
            <Link href="/" className="text-sm font-semibold oc-accent underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
