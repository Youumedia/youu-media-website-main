"use client";

import { Navigation } from "@/components/navigation";
import { PortfolioHero } from "@/components/portfolio-hero";
import { FuturisticPortfolioCarousel } from "@/components/futuristic-portfolio-carousel";
import { ClientTestimonials } from "@/components/client-testimonials";
import { PortfolioCTA } from "@/components/portfolio-cta";
import { Footer } from "@/components/footer";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen relative bg-white overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-brand animate-gradient-x"></div>
      
      <Navigation />

      {/* Subtle Moving Grid Background */}
      <div className="fixed inset-0 pointer-events-none moving-grid"></div>

      {/* Main content */}
      <div className="relative z-10">
        <PortfolioHero />
        <FuturisticPortfolioCarousel />
        <ClientTestimonials />
        <PortfolioCTA />
      </div>

      <Footer />

      {/* Background Grid Styles */}
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
