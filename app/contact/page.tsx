import { Navigation } from "@/components/navigation"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactConsultation } from "@/components/contact-consultation"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-8">
          <ContactForm />
          <ContactConsultation />
        </div>
        <ContactInfo />
      </div>
      <Footer />
    </main>
  )
}
