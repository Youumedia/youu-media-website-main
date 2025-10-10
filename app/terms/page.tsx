import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Last updated: January 10, 2025
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By accessing and using Youu Media's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Youu Media provides professional videography, photography, video editing, and creative production services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Event videography and photography</li>
                    <li>Brand photography and commercial content</li>
                    <li>Video editing and post-production services</li>
                    <li>Audio production and sound design</li>
                    <li>Aerial cinematography and drone services</li>
                    <li>Creative direction and project management</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Client Responsibilities</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">As a client, you agree to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Provide accurate and complete information about your project requirements</li>
                    <li>Ensure all necessary permissions and releases are obtained for filming locations and subjects</li>
                    <li>Make payments according to the agreed schedule</li>
                    <li>Provide timely feedback during the review process</li>
                    <li>Respect the creative process and professional expertise of our team</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Deposit:</strong> A 50% deposit is required to secure your booking and begin project planning.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Final Payment:</strong> The remaining 50% is due upon delivery of final content or as specified in your project agreement.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Late Payments:</strong> Payments overdue by more than 30 days may incur a late fee of 5% per month.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Refunds:</strong> Deposits are non-refundable. Partial refunds may be considered on a case-by-case basis for work not yet commenced.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Client Content:</strong> Upon full payment, clients receive full usage rights to the final delivered content for their intended purposes.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Raw Footage:</strong> Raw footage and unedited materials remain the property of Youu Media unless specifically agreed otherwise in writing.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Portfolio Use:</strong> Youu Media retains the right to use completed projects for portfolio, marketing, and promotional purposes unless otherwise agreed in writing.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Third-Party Materials:</strong> Clients are responsible for securing rights to any third-party content, music, or materials used in their projects.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cancellation and Rescheduling</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Client Cancellation:</strong> Cancellations made more than 48 hours before the scheduled date may receive a 75% refund of the deposit. Cancellations within 48 hours forfeit the full deposit.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Weather/Force Majeure:</strong> Events cancelled due to weather or circumstances beyond either party's control may be rescheduled without penalty.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Rescheduling:</strong> One free reschedule is allowed per project. Additional reschedules may incur a 25% fee.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Delivery and Revision Policy</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Delivery Timeline:</strong> Standard delivery is 2-4 weeks after the event or final content submission, unless otherwise agreed.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Revisions:</strong> Two rounds of revisions are included in standard packages. Additional revisions may incur additional fees.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>File Formats:</strong> Content is delivered in standard formats (MP4, MOV, etc.). Custom formats may incur additional charges.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Storage:</strong> Final content is stored for 6 months. Extended storage or re-delivery may incur fees.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Liability and Insurance</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Youu Media maintains professional liability insurance. However, our liability is limited to the total amount paid for the specific project.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Clients are responsible for ensuring adequate insurance coverage for their events and venues.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Youu Media is not responsible for delays caused by client actions, venue restrictions, or circumstances beyond our control.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy and Data Protection</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We are committed to protecting your privacy and personal data in accordance with GDPR and UK data protection laws. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your information.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Freelancer Network Terms</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Freelancers in our network must maintain professional standards and adhere to our code of conduct.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      All freelancers are required to have appropriate insurance and equipment for their services.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Payment to freelancers is processed within 30 days of project completion and client approval.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Dispute Resolution</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Any disputes arising from our services will first be addressed through direct communication. If resolution cannot be reached, disputes will be subject to the jurisdiction of English courts and governed by English law.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modifications to Terms</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Youu Media reserves the right to modify these terms at any time. Changes will be posted on our website with an updated "Last modified" date. Continued use of our services after changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                  <div className="bg-gradient-to-r from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-lg p-6 border border-[#70BFFF]/20">
                    <p className="text-gray-700 leading-relaxed mb-2">
                      For questions about these Terms of Service, please contact us:
                    </p>
                    <ul className="text-gray-700 space-y-1">
                      <li><strong>Email:</strong> Contact@youumedia.com</li>
                      <li><strong>Phone:</strong> +447958189989</li>
                      <li><strong>Address:</strong> London, United Kingdom</li>
                    </ul>
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
