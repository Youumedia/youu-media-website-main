import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioPreview } from "@/components/portfolio-preview";
import { StatsSection } from "@/components/stats-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

("use client");

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-brand animate-gradient-x"></div>

      <Navigation />
      <HeroSection />

      {/* Grid background section starts from Services */}
      <div className="relative bg-white overflow-hidden">
        {/* Subtle Moving Purple Grid Background */}
        <div className="fixed inset-0 pointer-events-none moving-grid"></div>

        {/* Main content with grid background */}
        <div className="relative z-10">
          <ServicesSection />
          <PortfolioPreview />
          <StatsSection />
          <CTASection />
        </div>
      </div>

      <Footer />

      {/* Purple Grid Background Styles */}
      <style jsx>{`
        /* Subtle moving purple grid */
        .moving-grid {
          background-image: linear-gradient(
              rgba(147, 51, 234, 0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(147, 51, 234, 0.12) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        @media (max-width: 768px) {
          .moving-grid {
            background-size: 30px 30px;
          }
          @keyframes grid-move {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 30px 30px;
            }
          }
        }
      `}</style>
    </main>
  );
}
