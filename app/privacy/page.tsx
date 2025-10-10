import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Youu Media",
  description:
    "Learn how Youu Media collects, uses, and protects your personal information. Read our Privacy Policy for details on cookies, data rights, and security.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: 23 September 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              This Privacy Policy explains how Youu Media ("we", "us", "our") collects, uses, and protects your
              information when you visit our website, make an enquiry, or work with us. By using our services, you
              agree to the practices described here.
            </p>

            <h2>1. Who we are</h2>
            <p>
              Youu Media is a creative production company based in the United Kingdom. If you have questions about this
              policy or your data, contact us at <a href="mailto:Contact@youumedia.com">Contact@youumedia.com</a>.
            </p>

            <h2>2. The information we collect</h2>
            <p>We collect information in the following ways:</p>
            <ul>
              <li>
                <strong>Information you provide</strong>: details submitted via forms (e.g., name, email, phone,
                project information), job applications, and communications.
              </li>
              <li>
                <strong>Automatic data</strong>: device and usage information such as IP address, browser type,
                pages viewed, and interactions, collected via cookies or similar technologies.
              </li>
              <li>
                <strong>Third-party sources</strong>: analytics platforms or social networks, where permitted.
              </li>
            </ul>

            <h2>3. How we use your information</h2>
            <ul>
              <li>Respond to enquiries and provide our services</li>
              <li>Operate, maintain, and improve our website and offerings</li>
              <li>Process applications and manage freelancer/vendor relationships</li>
              <li>Send service-related communications and, with consent where required, marketing updates</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>

            <h2>4. Legal bases for processing (UK/EU)</h2>
            <p>Where applicable, we rely on one or more of the following legal bases:</p>
            <ul>
              <li>Performance of a contract or to take steps at your request prior to entering one</li>
              <li>Legitimate interests, such as improving our services and securing our website</li>
              <li>Your consent, which you can withdraw at any time</li>
              <li>Compliance with legal obligations</li>
            </ul>

            <h2>5. Cookies and similar technologies</h2>
            <p>
              We may use cookies and similar technologies to understand site usage and improve performance. You can
              control cookies through your browser settings. Some features may not function correctly without cookies.
            </p>

            <h2>6. Sharing your information</h2>
            <p>
              We may share data with trusted providers who help us operate our website and deliver services (e.g.,
              hosting, analytics, communications). These parties are bound by confidentiality and data protection
              obligations. We do not sell your personal data.
            </p>

            <h2>7. International transfers</h2>
            <p>
              If we transfer your information outside the UK/EEA, we implement appropriate safeguards such as
              Standard Contractual Clauses or equivalent mechanisms.
            </p>

            <h2>8. Data retention</h2>
            <p>
              We keep personal data only as long as necessary for the purposes outlined above and to comply with legal
              requirements. When no longer needed, we securely delete or anonymise it.
            </p>

            <h2>9. Your rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, restrict or object to
              processing, and to data portability. You can also object to direct marketing at any time. To exercise any
              rights, contact <a href="mailto:Contact@youumedia.com">Contact@youumedia.com</a>.
            </p>

            <h2>10. Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect your information. However, no method
              of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2>11. Third-party links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for their privacy practices or
              content. We encourage you to review their policies.
            </p>

            <h2>12. Contact</h2>
            <p>
              For questions, concerns, or requests about this policy or your data, email us at
              <a href="mailto:Contact@youumedia.com"> Contact@youumedia.com</a>.
            </p>

            <h2>13. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will update the "Last updated" date above and, if
              changes are material, provide additional notice where appropriate.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


