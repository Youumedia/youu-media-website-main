import { Navigation } from "@/components/navigation"
import { PortfolioHero } from "@/components/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { ClientTestimonials } from "@/components/client-testimonials"
import { PortfolioCTA } from "@/components/portfolio-cta"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PortfolioHero />
      <PortfolioGrid />
      <ClientTestimonials />
      <PortfolioCTA />
      <Footer />
    </main>
  )
}
