import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | Youu Media",
  description:
    "Learn how Youu Media collects, uses, and protects your personal information. Read our Privacy Policy for details on cookies, data rights, and security.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Last updated: January 10, 2025
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
              This Privacy Policy explains how Youu Media ("we", "us", "our") collects, uses, and protects your
              information when you visit our website, make an enquiry, or work with us. By using our services, you
              agree to the practices described here.
            </p>
                  <p className="text-gray-700 leading-relaxed">
                    We are committed to protecting your privacy and personal data in accordance with the UK GDPR and Data Protection Act 2018.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Who We Are</h2>
                  <div className="bg-gradient-to-r from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-lg p-6 border border-[#70BFFF]/20">
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Company:</strong> Youu Media
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Location:</strong> London, United Kingdom
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Services:</strong> Professional videography, photography, and creative production
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Contact:</strong> <a href="mailto:Contact@youumedia.com" className="text-[#70BFFF] hover:text-[#BE55FF] transition-colors">Contact@youumedia.com</a>
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information You Provide</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Contact details (name, email, phone number, address)</li>
                        <li>Project requirements and specifications</li>
                        <li>Event details and venue information</li>
                        <li>Payment and billing information</li>
                        <li>Job application materials and portfolio content</li>
                        <li>Communications and correspondence with us</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>IP address and device information</li>
                        <li>Browser type and version</li>
                        <li>Pages visited and time spent on our website</li>
                        <li>Referring website and search terms</li>
                        <li>Cookies and similar tracking technologies</li>
                        <li>Location data (if permitted)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Information</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Delivery</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Respond to enquiries and provide quotes</li>
                        <li>Plan and execute videography and photography projects</li>
                        <li>Process payments and manage billing</li>
                        <li>Deliver final content and handle revisions</li>
            </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Operations</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Improve our website and services</li>
                        <li>Manage freelancer applications and relationships</li>
                        <li>Send service-related communications</li>
                        <li>Analyze website usage and performance</li>
            </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing (with consent)</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Send newsletters and promotional content</li>
                        <li>Share portfolio updates and case studies</li>
                        <li>Invite you to events and workshops</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Legal Basis for Processing (UK GDPR)</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      We process your personal data under the following legal bases:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li><strong>Contract Performance:</strong> To fulfill our services and contractual obligations</li>
                      <li><strong>Legitimate Interests:</strong> To improve our services, secure our website, and manage our business</li>
                      <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
                      <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                      <li><strong>Vital Interests:</strong> To protect health and safety in emergency situations</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      We use cookies and similar technologies to enhance your experience and analyze website performance.
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Types of Cookies We Use</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
                        <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Information Sharing and Disclosure</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li><strong>Service Providers:</strong> Trusted partners who assist in delivering our services (hosting, payment processing, analytics)</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                      <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                      <li><strong>Consent:</strong> When you explicitly consent to sharing your information</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      All third parties are bound by confidentiality agreements and data protection obligations.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Some of our service providers may be located outside the UK/EEA. When we transfer your data internationally, we ensure appropriate safeguards are in place:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Standard Contractual Clauses approved by the European Commission</li>
                      <li>Adequacy decisions by the European Commission</li>
                      <li>Binding Corporate Rules for multinational companies</li>
                      <li>Certification schemes and codes of conduct</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Retention</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      We retain your personal data only as long as necessary for the purposes outlined in this policy:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li><strong>Client Data:</strong> 7 years after project completion for legal and accounting purposes</li>
                      <li><strong>Marketing Data:</strong> Until you withdraw consent or opt out</li>
                      <li><strong>Website Analytics:</strong> 26 months maximum</li>
                      <li><strong>Job Applications:</strong> 2 years for unsuccessful applications</li>
                      <li><strong>Legal Requirements:</strong> As required by applicable laws and regulations</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      When data is no longer needed, we securely delete or anonymize it.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Your Data Protection Rights</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Under UK GDPR, you have the following rights regarding your personal data:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-[#70BFFF]/5 to-[#BE55FF]/5 rounded-lg p-4 border border-[#70BFFF]/20">
                        <h3 className="font-semibold text-gray-900 mb-2">Access & Portability</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Right to access your data</li>
                          <li>• Right to data portability</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-[#70BFFF]/5 to-[#BE55FF]/5 rounded-lg p-4 border border-[#70BFFF]/20">
                        <h3 className="font-semibold text-gray-900 mb-2">Correction & Deletion</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Right to rectification</li>
                          <li>• Right to erasure ("right to be forgotten")</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-[#70BFFF]/5 to-[#BE55FF]/5 rounded-lg p-4 border border-[#70BFFF]/20">
                        <h3 className="font-semibold text-gray-900 mb-2">Control & Objection</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Right to restrict processing</li>
                          <li>• Right to object to processing</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-[#70BFFF]/5 to-[#BE55FF]/5 rounded-lg p-4 border border-[#70BFFF]/20">
                        <h3 className="font-semibold text-gray-900 mb-2">Consent & Marketing</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Right to withdraw consent</li>
                          <li>• Right to opt out of marketing</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      To exercise any of these rights, contact us at <a href="mailto:Contact@youumedia.com" className="text-[#70BFFF] hover:text-[#BE55FF] transition-colors">Contact@youumedia.com</a>. We will respond within one month.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Data Security</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal data:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure servers and databases</li>
                      <li>Regular security updates and monitoring</li>
                      <li>Access controls and authentication</li>
                      <li>Staff training on data protection</li>
                      <li>Regular backups and disaster recovery procedures</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but are committed to maintaining industry-standard protections.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Third-Party Links and Services</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our website may contain links to third-party websites, social media platforms, or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Children's Privacy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately so we can delete such information.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to This Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Update the "Last updated" date at the top of this policy</li>
                    <li>Notify you of material changes via email or website notice</li>
                    <li>Obtain your consent for any changes that require it</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Your continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
                  <div className="bg-gradient-to-r from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-lg p-6 border border-[#70BFFF]/20">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      For questions, concerns, or requests about this Privacy Policy or your personal data, please contact us:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-2">
                          <strong>Email:</strong> <a href="mailto:Contact@youumedia.com" className="text-[#70BFFF] hover:text-[#BE55FF] transition-colors">Contact@youumedia.com</a>
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-2">
                          <strong>Phone:</strong> +447958189989
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-2">
                          <strong>Address:</strong> London, United Kingdom
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          <strong>Response Time:</strong> Within 30 days
            </p>
          </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mt-4 text-sm">
                      You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe we have not handled your data appropriately.
                    </p>
        </div>
      </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}


