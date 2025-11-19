"use client";

import { LandingHero } from "@/components/landing-hero";
import { LandingAbout } from "@/components/landing-about";
import { LandingServices } from "@/components/landing-services";
import { LandingPortfolio } from "@/components/landing-portfolio";
import { LandingTestimonials } from "@/components/landing-testimonials";
import { LandingBrands } from "@/components/landing-brands";
import { LandingMission } from "@/components/landing-mission";
import { LandingNetwork } from "@/components/landing-network";
import { LandingContact } from "@/components/landing-contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-[#E6F2FF]">
        <LandingHero />
        <LandingAbout />
        <LandingServices />
        <LandingPortfolio />
        <LandingTestimonials />
        <LandingBrands />
      </div>
      <LandingMission />
      <LandingNetwork />
      <LandingContact />
      <Footer />
    </main>
  );
}
