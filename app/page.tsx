"use client";

import { LandingHero } from "@/components/landing-hero";
import { LandingAbout } from "@/components/landing-about";
import { LandingServices } from "@/components/landing-services";
import { LandingPortfolio } from "@/components/landing-portfolio";
import { LandingTestimonials } from "@/components/landing-testimonials";
import { LandingBrands } from "@/components/landing-brands";
import { LandingNetwork } from "@/components/landing-network";
import { LandingContact } from "@/components/landing-contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* Hero Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs - spread around */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute top-3/4 left-1/6 w-[400px] h-[400px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" />

          {/* Geometric shapes - distributed */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-pulse" />
          <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          {/* <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: "2s" }} /> */}
          {/* <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-pulse" style={{ animationDelay: "1.5s" }} /> */}
          {/* <div className="absolute top-2/3 right-1/5 w-28 h-28 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} /> */}
        </div>
        <LandingHero />
      </div>

      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* About Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs - spread around */}
          <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-1/4 w-[480px] h-[480px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-2/3 left-0 w-[380px] h-[380px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-1/4 right-0 w-[420px] h-[420px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" />

          {/* Geometric shapes - distributed */}
          <div className="absolute top-1/4 right-1/12 w-28 h-28 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-pulse" />
          <div className="absolute bottom-1/3 left-60 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-pulse" style={{ animationDelay: "1.2s" }} />
          {/* <div className="absolute top-1/2 right-0 w-18 h-18 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: "0.8s" }} /> */}
          {/* <div className="absolute bottom-1/2 left-1/3 w-22 h-22 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-pulse" style={{ animationDelay: "1.6s" }} /> */}
          {/* <div className="absolute top-3/4 right-1/3 w-26 h-26 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} /> */}
        </div>
        <LandingAbout />
      </div>

      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* Services Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs - spread around */}
          <div className="absolute top-1/4 right-1/3 w-[460px] h-[460px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/6 left-1/3 w-[440px] h-[440px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-1/2 right-0 w-[360px] h-[360px] bg-[#BE55FF]/15 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-1/2 left-0 w-[400px] h-[400px] bg-[#70BFFF]/18 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-3/4 right-1/2 w-[340px] h-[340px] bg-[#BE55FF]/16 rounded-full blur-2xl animate-float-medium" />

          {/* Geometric shapes - distributed */}
          {/* <div className="absolute top-1/5 left-1/4 w-30 h-30 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-3xl rotate-45 animate-pulse" /> */}
          <div className="absolute top-40 right-1/4 w-24 h-24 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-full animate-pulse" style={{ animationDelay: "1.3s" }} />
          {/* <div className="absolute top-2/3 left-1/6 w-20 h-20 bg-[#BE55FF]/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: "0.9s" }} /> */}
          {/* <div className="absolute bottom-1/3 right-1/6 w-26 h-26 bg-[#70BFFF]/22 rounded-2xl rotate-45 animate-pulse" style={{ animationDelay: "1.7s" }} /> */}
          {/* <div className="absolute top-1/3 right-2/3 w-22 h-22 bg-gradient-to-br from-[#BE55FF]/20 to-[#70BFFF]/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} /> */}
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/20 to-[#70BFFF]/20 rounded-2xl rotate-45 animate-pulse" style={{ animationDelay: "1.1s" }} />
        </div>
        <LandingServices />
      </div>

      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* Portfolio Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />

          {/* Geometric shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-pulse" />
          {/* <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-pulse" style={{ animationDelay: "1s" }} /> */}
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: "2s" }} />
          {/* <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-[#BE55FF]/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} /> */}
        </div>
        <LandingPortfolio />
      </div>

      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* Testimonials Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs - spread around */}
          <div className="absolute top-1/5 left-0 w-[420px] h-[420px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/5 right-0 w-[450px] h-[450px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-1/2 left-1/2 w-[380px] h-[380px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-0 right-1/3 w-[410px] h-[410px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" />

          {/* Geometric shapes - distributed */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-pulse" style={{ animationDelay: "1.1s" }} />
          {/* <div className="absolute top-1/6 right-1/4 w-30 h-30 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-pulse" /> */}
          <div className="absolute bottom-1/4 left-1/5 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-pulse" style={{ animationDelay: "1.1s" }} />
          {/* <div className="absolute top-2/3 right-1/3 w-18 h-18 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: "0.7s" }} /> */}
          {/* <div className="absolute bottom-1/2 left-2/3 w-22 h-22 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-pulse" style={{ animationDelay: "1.5s" }} /> */}
          {/* <div className="absolute top-1/4 left-1/2 w-26 h-26 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} /> */}
          {/* <div className="absolute top-1/8 left-1/2 w-[200px] h-[200px] bg-[#BE55FF]/15 rounded-full blur-2xl animate-float-medium transform -translate-x-1/2" /> */}
        </div>
        <LandingTestimonials />
      </div>

      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* Brands Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs - spread around */}
          <div className="absolute top-0 right-1/4 w-[470px] h-[470px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 left-1/4 w-[430px] h-[430px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-1/3 right-0 w-[390px] h-[390px] bg-[#BE55FF]/15 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-1/3 left-0 w-[410px] h-[410px] bg-[#70BFFF]/18 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-2/3 left-1/2 w-[360px] h-[360px] bg-[#BE55FF]/16 rounded-full blur-2xl animate-float-medium" />

          {/* Geometric shapes - distributed */}
          <div className="absolute top-1/4 left-1/6 w-28 h-28 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-3xl rotate-45 animate-pulse" />
          {/* <div className="absolute bottom-1/4 right-1/6 w-24 h-24 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-full animate-pulse" style={{ animationDelay: "1.4s" }} /> */}
          <div className="absolute top-1/2 right-1/2 w-20 h-20 bg-[#BE55FF]/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: "0.6s" }} />
          {/* <div className="absolute bottom-1/2 left-1/2 w-22 h-22 bg-[#70BFFF]/22 rounded-2xl rotate-45 animate-pulse" style={{ animationDelay: "1.8s" }} /> */}
          {/* <div className="absolute top-3/4 right-1/4 w-26 h-26 bg-gradient-to-br from-[#BE55FF]/20 to-[#70BFFF]/20 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} /> */}
        </div>
        <LandingBrands />
      </div>

      <LandingNetwork />

      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* Contact Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
          
          {/* Geometric shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-pulse" />
          <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-[#BE55FF]/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
        <LandingContact />
      </div>

      <Footer />
    </main>
  );
}
