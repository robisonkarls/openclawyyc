import Link from "next/link";

export const metadata = {
  title: "Terms of Service | OpenClawYYC",
  description: "Terms of Service for OpenClawYYC setup and managed services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen oc-page">
      <section className="oc-section py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm uppercase tracking-wide oc-accent">Last updated: March 17, 2026</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Terms of Service</h1>
          <p className="mt-4 oc-text-secondary">
            These Terms of Service (“Terms”) govern your use of services provided by OpenClawYYC (“OpenClawYYC”, “we”, “us”, or “our”), including deployment,
            configuration, and support services.
          </p>
        </div>
      </section>

      <section className="oc-section py-14">
        <div className="mx-auto max-w-4xl space-y-8 px-6">
          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">1. Services Provided</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 oc-text-secondary">
              <li>Hosted OpenClaw deployment and configuration.</li>
              <li>Mac Mini setup (remote) including supported local integrations.</li>
              <li>Mac Mini in-person setup (Calgary area only).</li>
              <li>Security hardening, workflow setup, and post-deployment hypercare.</li>
              <li>Optional ongoing managed support where applicable.</li>
            </ul>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">2. Payments & Refunds</h2>
            <p className="mt-4 oc-text-secondary">
              Service fees are charged according to the selected package. Unless otherwise agreed in writing, implementation/setup fees are non-refundable after
              service delivery has started. Cancellation terms for ongoing support plans are defined in the relevant service agreement.
            </p>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">3. Customer Responsibilities</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 oc-text-secondary">
              <li>You are responsible for backing up your systems before setup work begins.</li>
              <li>You must provide accurate access details and required credentials in a timely manner.</li>
              <li>You are responsible for legal/compliance use of connected tools and integrations.</li>
            </ul>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">4. Third-Party Software & Hardware</h2>
            <p className="mt-4 oc-text-secondary">
              OpenClaw and connected integrations are third-party technologies. We do not control their roadmap, uptime, or behavior changes. Hardware used for
              deployments is subject to manufacturer limitations and warranties.
            </p>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">5. Limitation of Liability</h2>
            <p className="mt-4 oc-text-secondary">
              To the maximum extent permitted by law, OpenClawYYC is not liable for indirect, incidental, consequential, special, or punitive damages, including
              loss of data, revenue, profits, or business interruption. Aggregate liability is limited to the amount paid for the service directly related to the
              claim.
            </p>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">6. No Warranty</h2>
            <p className="mt-4 oc-text-secondary">
              Services are provided on an “as is” and “as available” basis. We do not guarantee uninterrupted, error-free operation of third-party software,
              models, APIs, channels, or infrastructure outside our control.
            </p>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">7. Data & Security</h2>
            <p className="mt-4 oc-text-secondary">
              During setup/support, temporary access may be required to complete agreed tasks. You should rotate any credentials shared during implementation after
              completion. For data handling details, see our{" "}
              <Link href="/privacy" className="oc-accent underline">
                Privacy Policy
              </Link>
              .
            </p>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">8. Post-Setup Support</h2>
            <p className="mt-4 oc-text-secondary">
              Hypercare covers issues directly related to initial setup delivery. New features, third-party outages, hardware failures, or post-delivery changes
              may require separate scoped support.
            </p>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">9. Governing Law & Disputes</h2>
            <p className="mt-4 oc-text-secondary">
              These Terms are governed by the laws of Alberta, Canada. Disputes will first be addressed in good faith through direct discussion.
            </p>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">10. Changes to These Terms</h2>
            <p className="mt-4 oc-text-secondary">
              We may update these Terms from time to time. Updates will be posted on this page with a revised effective date.
            </p>
          </article>

          <article className="rounded-2xl oc-surface p-6">
            <h2 className="text-xl font-bold">11. Contact</h2>
            <p className="mt-4 oc-text-secondary">
              OpenClawYYC<br />
              Cochrane, Alberta, Canada<br />
              Email: <a href="mailto:contact@openclawyyc.ca" className="oc-accent underline">contact@openclawyyc.ca</a>
            </p>
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
