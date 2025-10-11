import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioPreview />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
