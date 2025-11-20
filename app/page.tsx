"use client";

import { Navigation } from "@/components/navigation";
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
      <Navigation />
      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* Hero Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs - spread around more evenly */}
          <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute top-[75%] left-[10%] w-[400px] h-[400px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-[10%] right-[30%] w-[350px] h-[350px] bg-[#70BFFF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute bottom-[30%] left-[30%] w-[380px] h-[380px] bg-[#BE55FF]/17 rounded-full blur-3xl animate-float-fast" />
          <div className="absolute top-[25%] right-[15%] w-[420px] h-[420px] bg-[#70BFFF]/17 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[15%] left-[60%] w-[360px] h-[360px] bg-[#BE55FF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute top-[60%] left-[15%] w-[340px] h-[340px] bg-[#70BFFF]/18 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-[50%] right-[20%] w-[390px] h-[390px] bg-[#BE55FF]/19 rounded-full blur-3xl animate-float-slow" />

          {/* Geometric shapes - distributed with floating animations, spread out more */}
          <div className="absolute top-[8%] right-[8%] w-32 h-32 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-float-slow" />
          <div className="absolute bottom-[12%] left-[12%] w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-float-medium" style={{ animationDelay: "1s" }} />
          <div className="absolute top-[35%] right-[35%] w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-[25%] left-[25%] w-20 h-20 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-[65%] right-[20%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-full animate-float-medium" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-[15%] left-[65%] w-22 h-22 bg-gradient-to-br from-[#BE55FF]/22 to-[#70BFFF]/22 rounded-xl rotate-12 animate-float-fast" style={{ animationDelay: "0.8s" }} />
          <div className="absolute bottom-[18%] right-[15%] w-26 h-26 bg-[#70BFFF]/18 rounded-full animate-float-slow" style={{ animationDelay: "1.2s" }} />
          <div className="absolute top-[45%] left-[8%] w-18 h-18 bg-[#BE55FF]/20 rounded-lg rotate-12 animate-float-medium" style={{ animationDelay: "0.3s" }} />
          <div className="absolute bottom-[40%] right-[40%] w-30 h-30 bg-gradient-to-br from-[#70BFFF]/22 to-[#BE55FF]/22 rounded-full animate-float-fast" style={{ animationDelay: "1.7s" }} />
          <div className="absolute top-[80%] left-[50%] w-24 h-24 bg-[#BE55FF]/18 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "0.6s" }} />
          <div className="absolute top-[30%] right-[60%] w-20 h-20 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-12 animate-float-medium" style={{ animationDelay: "1.4s" }} />
          <div className="absolute bottom-[55%] left-[45%] w-28 h-28 bg-[#BE55FF]/19 rounded-full animate-float-fast" style={{ animationDelay: "0.9s" }} />
          <div className="absolute top-[55%] right-[8%] w-22 h-22 bg-gradient-to-br from-[#70BFFF]/21 to-[#BE55FF]/21 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "1.3s" }} />
        </div>
        <LandingHero />
      </div>

      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* About Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs - spread around more evenly */}
          <div className="absolute top-[5%] left-[30%] w-[450px] h-[450px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[5%] right-[20%] w-[480px] h-[480px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-[65%] left-[5%] w-[380px] h-[380px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-[20%] right-[5%] w-[420px] h-[420px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-[30%] left-[50%] w-[360px] h-[360px] bg-[#70BFFF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute bottom-[30%] right-[50%] w-[400px] h-[400px] bg-[#BE55FF]/17 rounded-full blur-3xl animate-float-fast" />
          <div className="absolute top-[15%] right-[10%] w-[410px] h-[410px] bg-[#70BFFF]/17 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[15%] left-[15%] w-[370px] h-[370px] bg-[#BE55FF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute top-[50%] left-[8%] w-[340px] h-[340px] bg-[#70BFFF]/18 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-[50%] right-[8%] w-[390px] h-[390px] bg-[#BE55FF]/19 rounded-full blur-3xl animate-float-slow" />

          {/* Geometric shapes - distributed with floating animations, spread out more */}
          <div className="absolute top-[20%] right-[8%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-float-slow" />
          <div className="absolute bottom-[30%] left-[15%] w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-float-medium" style={{ animationDelay: "1.2s" }} />
          <div className="absolute top-[50%] right-[5%] w-18 h-18 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "0.8s" }} />
          <div className="absolute bottom-[50%] left-[30%] w-22 h-22 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "1.6s" }} />
          <div className="absolute top-[75%] right-[30%] w-26 h-26 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-full animate-float-medium" style={{ animationDelay: "0.4s" }} />
          <div className="absolute top-[12%] left-[18%] w-20 h-20 bg-[#BE55FF]/18 rounded-xl rotate-12 animate-float-fast" style={{ animationDelay: "1.4s" }} />
          <div className="absolute bottom-[12%] right-[18%] w-30 h-30 bg-gradient-to-br from-[#70BFFF]/22 to-[#BE55FF]/22 rounded-full animate-float-slow" style={{ animationDelay: "0.6s" }} />
          <div className="absolute top-[40%] left-[5%] w-18 h-18 bg-[#70BFFF]/19 rounded-lg rotate-12 animate-float-medium" style={{ animationDelay: "0.3s" }} />
          <div className="absolute bottom-[40%] right-[40%] w-28 h-28 bg-gradient-to-br from-[#BE55FF]/21 to-[#70BFFF]/21 rounded-full animate-float-fast" style={{ animationDelay: "1.7s" }} />
          <div className="absolute top-[60%] left-[45%] w-24 h-24 bg-[#BE55FF]/18 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "0.9s" }} />
          <div className="absolute top-[25%] right-[55%] w-22 h-22 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-12 animate-float-medium" style={{ animationDelay: "1.3s" }} />
          <div className="absolute bottom-[65%] left-[60%] w-26 h-26 bg-[#BE55FF]/19 rounded-full animate-float-fast" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-[85%] right-[12%] w-20 h-20 bg-gradient-to-br from-[#70BFFF]/21 to-[#BE55FF]/21 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "1.1s" }} />
        </div>
        <LandingAbout />
      </div>

      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* Services Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs - spread around more evenly */}
          <div className="absolute top-[20%] right-[30%] w-[460px] h-[460px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[15%] left-[30%] w-[440px] h-[440px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-[50%] right-[5%] w-[360px] h-[360px] bg-[#BE55FF]/15 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-[50%] left-[5%] w-[400px] h-[400px] bg-[#70BFFF]/18 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-[75%] right-[50%] w-[340px] h-[340px] bg-[#BE55FF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute top-[10%] left-[20%] w-[380px] h-[380px] bg-[#70BFFF]/17 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute top-[5%] right-[10%] w-[420px] h-[420px] bg-[#BE55FF]/17 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[5%] left-[50%] w-[370px] h-[370px] bg-[#70BFFF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute top-[40%] left-[12%] w-[350px] h-[350px] bg-[#BE55FF]/18 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-[35%] right-[15%] w-[390px] h-[390px] bg-[#70BFFF]/19 rounded-full blur-3xl animate-float-slow" />

          {/* Geometric shapes - distributed with floating animations, spread out more */}
          <div className="absolute top-[18%] left-[22%] w-30 h-30 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-3xl rotate-45 animate-float-slow" />
          <div className="absolute top-[10%] right-[22%] w-24 h-24 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-full animate-float-medium" style={{ animationDelay: "1.3s" }} />
          <div className="absolute top-[65%] left-[12%] w-20 h-20 bg-[#BE55FF]/20 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "0.9s" }} />
          <div className="absolute bottom-[30%] right-[12%] w-26 h-26 bg-[#70BFFF]/22 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "1.7s" }} />
          <div className="absolute top-[30%] right-[65%] w-22 h-22 bg-gradient-to-br from-[#BE55FF]/20 to-[#70BFFF]/20 rounded-full animate-float-medium" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-[22%] left-[30%] w-24 h-24 bg-gradient-to-br from-[#BE55FF]/20 to-[#70BFFF]/20 rounded-2xl rotate-45 animate-float-fast" style={{ animationDelay: "1.1s" }} />
          <div className="absolute top-[50%] left-[50%] w-18 h-18 bg-[#70BFFF]/18 rounded-lg rotate-12 animate-float-slow" style={{ animationDelay: "0.7s" }} />
          <div className="absolute bottom-[18%] right-[30%] w-28 h-28 bg-gradient-to-br from-[#BE55FF]/22 to-[#70BFFF]/22 rounded-full animate-float-medium" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-[8%] left-[45%] w-20 h-20 bg-[#BE55FF]/19 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "0.3s" }} />
          <div className="absolute bottom-[42%] right-[45%] w-30 h-30 bg-gradient-to-br from-[#70BFFF]/21 to-[#BE55FF]/21 rounded-full animate-float-slow" style={{ animationDelay: "1.2s" }} />
          <div className="absolute top-[35%] left-[8%] w-22 h-22 bg-[#BE55FF]/18 rounded-xl rotate-45 animate-float-medium" style={{ animationDelay: "0.8s" }} />
          <div className="absolute bottom-[8%] right-[55%] w-26 h-26 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-full animate-float-fast" style={{ animationDelay: "1.4s" }} />
          <div className="absolute top-[70%] right-[8%] w-24 h-24 bg-[#BE55FF]/19 rounded-xl rotate-12 animate-float-slow" style={{ animationDelay: "0.6s" }} />
        </div>
        <LandingServices />
      </div>

      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* Portfolio Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute top-[10%] right-[12%] w-[420px] h-[420px] bg-[#BE55FF]/17 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[30%] left-[30%] w-[360px] h-[360px] bg-[#70BFFF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute top-[5%] left-[55%] w-[380px] h-[380px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-fast" />
          <div className="absolute bottom-[5%] right-[35%] w-[400px] h-[400px] bg-[#70BFFF]/17 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-[35%] right-[5%] w-[340px] h-[340px] bg-[#BE55FF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute bottom-[45%] left-[8%] w-[370px] h-[370px] bg-[#70BFFF]/18 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute top-[65%] left-[45%] w-[390px] h-[390px] bg-[#BE55FF]/19 rounded-full blur-3xl animate-float-slow" />

          {/* Geometric shapes with floating animations, spread out more */}
          <div className="absolute top-[8%] right-[8%] w-32 h-32 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-float-slow" />
          <div className="absolute bottom-[12%] left-[12%] w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-float-medium" style={{ animationDelay: "1s" }} />
          <div className="absolute top-[32%] right-[32%] w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-[30%] left-[30%] w-20 h-20 bg-[#BE55FF]/20 rounded-full animate-float-slow" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-[65%] right-[18%] w-26 h-26 bg-gradient-to-br from-[#70BFFF]/22 to-[#BE55FF]/22 rounded-full animate-float-medium" style={{ animationDelay: "1.3s" }} />
          <div className="absolute bottom-[18%] left-[18%] w-22 h-22 bg-[#BE55FF]/18 rounded-xl rotate-12 animate-float-fast" style={{ animationDelay: "0.8s" }} />
          <div className="absolute top-[15%] left-[65%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "1.6s" }} />
          <div className="absolute top-[45%] left-[5%] w-18 h-18 bg-[#70BFFF]/19 rounded-lg rotate-12 animate-float-medium" style={{ animationDelay: "0.3s" }} />
          <div className="absolute bottom-[55%] right-[45%] w-30 h-30 bg-gradient-to-br from-[#BE55FF]/21 to-[#70BFFF]/21 rounded-full animate-float-fast" style={{ animationDelay: "1.7s" }} />
          <div className="absolute top-[55%] left-[60%] w-24 h-24 bg-[#BE55FF]/18 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "0.9s" }} />
          <div className="absolute top-[25%] right-[55%] w-22 h-22 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-12 animate-float-medium" style={{ animationDelay: "1.4s" }} />
          <div className="absolute bottom-[38%] left-[50%] w-26 h-26 bg-[#BE55FF]/19 rounded-full animate-float-fast" style={{ animationDelay: "0.6s" }} />
          <div className="absolute top-[75%] right-[12%] w-20 h-20 bg-gradient-to-br from-[#70BFFF]/21 to-[#BE55FF]/21 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "1.2s" }} />
        </div>
        <LandingPortfolio />
      </div>

      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* Testimonials Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs - spread around more evenly */}
          <div className="absolute top-[15%] left-[5%] w-[420px] h-[420px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[15%] right-[5%] w-[450px] h-[450px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-[50%] left-[50%] w-[380px] h-[380px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-[5%] right-[30%] w-[410px] h-[410px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-[30%] left-[20%] w-[390px] h-[390px] bg-[#70BFFF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute bottom-[30%] right-[20%] w-[370px] h-[370px] bg-[#BE55FF]/17 rounded-full blur-3xl animate-float-fast" />
          <div className="absolute top-[5%] right-[15%] w-[400px] h-[400px] bg-[#70BFFF]/17 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[5%] left-[50%] w-[360px] h-[360px] bg-[#BE55FF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute top-[65%] left-[12%] w-[350px] h-[350px] bg-[#70BFFF]/18 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-[45%] right-[12%] w-[390px] h-[390px] bg-[#BE55FF]/19 rounded-full blur-3xl animate-float-slow" />

          {/* Geometric shapes - distributed with floating animations, spread out more */}
          <div className="absolute top-[22%] right-[22%] w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-float-slow" style={{ animationDelay: "1.1s" }} />
          <div className="absolute top-[12%] right-[22%] w-30 h-30 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-float-medium" />
          <div className="absolute bottom-[22%] left-[18%] w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-float-fast" style={{ animationDelay: "1.1s" }} />
          <div className="absolute top-[65%] right-[30%] w-18 h-18 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-float-slow" style={{ animationDelay: "0.7s" }} />
          <div className="absolute bottom-[50%] left-[65%] w-22 h-22 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-float-medium" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-[22%] left-[50%] w-26 h-26 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-full animate-float-fast" style={{ animationDelay: "0.3s" }} />
          <div className="absolute top-[8%] left-[30%] w-20 h-20 bg-[#BE55FF]/18 rounded-xl rotate-12 animate-float-slow" style={{ animationDelay: "1.8s" }} />
          <div className="absolute bottom-[12%] right-[12%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/22 to-[#BE55FF]/22 rounded-full animate-float-medium" style={{ animationDelay: "0.9s" }} />
          <div className="absolute top-[40%] left-[8%] w-18 h-18 bg-[#70BFFF]/19 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "0.4s" }} />
          <div className="absolute bottom-[38%] right-[45%] w-30 h-30 bg-gradient-to-br from-[#BE55FF]/21 to-[#70BFFF]/21 rounded-full animate-float-slow" style={{ animationDelay: "1.6s" }} />
          <div className="absolute top-[55%] left-[45%] w-24 h-24 bg-[#BE55FF]/18 rounded-xl rotate-45 animate-float-medium" style={{ animationDelay: "1.2s" }} />
          <div className="absolute top-[35%] right-[55%] w-22 h-22 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-12 animate-float-fast" style={{ animationDelay: "0.8s" }} />
          <div className="absolute bottom-[28%] left-[55%] w-26 h-26 bg-[#BE55FF]/19 rounded-full animate-float-slow" style={{ animationDelay: "1.4s" }} />
        </div>
        <LandingTestimonials />
      </div>

      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* Brands Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs - spread around more evenly */}
          <div className="absolute top-[5%] right-[20%] w-[470px] h-[470px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[5%] left-[20%] w-[430px] h-[430px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-[30%] right-[5%] w-[390px] h-[390px] bg-[#BE55FF]/15 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-[30%] left-[5%] w-[410px] h-[410px] bg-[#70BFFF]/18 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-[65%] left-[50%] w-[360px] h-[360px] bg-[#BE55FF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute top-[10%] right-[30%] w-[400px] h-[400px] bg-[#70BFFF]/17 rounded-full blur-3xl animate-float-fast" />
          <div className="absolute top-[5%] left-[45%] w-[420px] h-[420px] bg-[#BE55FF]/17 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[5%] right-[45%] w-[370px] h-[370px] bg-[#70BFFF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute top-[50%] left-[12%] w-[350px] h-[350px] bg-[#BE55FF]/18 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-[50%] right-[12%] w-[390px] h-[390px] bg-[#70BFFF]/19 rounded-full blur-3xl animate-float-slow" />

          {/* Geometric shapes - distributed with floating animations, spread out more */}
          <div className="absolute top-[20%] left-[15%] w-28 h-28 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-3xl rotate-45 animate-float-slow" />
          <div className="absolute bottom-[22%] right-[12%] w-24 h-24 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-full animate-float-medium" style={{ animationDelay: "1.4s" }} />
          <div className="absolute top-[50%] right-[50%] w-20 h-20 bg-[#BE55FF]/20 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "0.6s" }} />
          <div className="absolute bottom-[50%] left-[50%] w-22 h-22 bg-[#70BFFF]/22 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "1.8s" }} />
          <div className="absolute top-[75%] right-[22%] w-26 h-26 bg-gradient-to-br from-[#BE55FF]/20 to-[#70BFFF]/20 rounded-full animate-float-medium" style={{ animationDelay: "0.2s" }} />
          <div className="absolute top-[12%] left-[30%] w-18 h-18 bg-[#70BFFF]/18 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "1.2s" }} />
          <div className="absolute bottom-[12%] right-[22%] w-30 h-30 bg-gradient-to-br from-[#BE55FF]/22 to-[#70BFFF]/22 rounded-full animate-float-slow" style={{ animationDelay: "0.4s" }} />
          <div className="absolute top-[35%] left-[8%] w-20 h-20 bg-[#BE55FF]/19 rounded-lg rotate-12 animate-float-medium" style={{ animationDelay: "0.3s" }} />
          <div className="absolute bottom-[38%] right-[38%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/21 to-[#BE55FF]/21 rounded-full animate-float-fast" style={{ animationDelay: "1.6s" }} />
          <div className="absolute top-[60%] left-[55%] w-24 h-24 bg-[#BE55FF]/18 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "1.1s" }} />
          <div className="absolute top-[28%] right-[60%] w-22 h-22 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-12 animate-float-medium" style={{ animationDelay: "0.8s" }} />
          <div className="absolute bottom-[28%] left-[60%] w-26 h-26 bg-[#BE55FF]/19 rounded-full animate-float-fast" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-[80%] right-[8%] w-20 h-20 bg-gradient-to-br from-[#70BFFF]/21 to-[#BE55FF]/21 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "0.9s" }} />
        </div>
        <LandingBrands />
      </div>

      <LandingNetwork />

      <div className="bg-[#E6F2FF] relative overflow-hidden">
        {/* Contact Section Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
          <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute top-[10%] right-[12%] w-[420px] h-[420px] bg-[#BE55FF]/17 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[30%] left-[30%] w-[380px] h-[380px] bg-[#70BFFF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute top-[5%] left-[55%] w-[400px] h-[400px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-fast" />
          <div className="absolute bottom-[5%] right-[35%] w-[360px] h-[360px] bg-[#70BFFF]/17 rounded-full blur-2xl animate-float-slow" />
          <div className="absolute top-[35%] right-[5%] w-[370px] h-[370px] bg-[#BE55FF]/16 rounded-full blur-2xl animate-float-medium" />
          <div className="absolute bottom-[45%] left-[8%] w-[390px] h-[390px] bg-[#70BFFF]/18 rounded-full blur-3xl animate-float-fast" />
          <div className="absolute top-[65%] left-[45%] w-[350px] h-[350px] bg-[#BE55FF]/19 rounded-full blur-2xl animate-float-slow" />
          
          {/* Geometric shapes with floating animations, spread out more */}
          <div className="absolute top-[8%] right-[8%] w-32 h-32 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-float-slow" />
          <div className="absolute bottom-[12%] left-[12%] w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-float-medium" style={{ animationDelay: "1s" }} />
          <div className="absolute top-[32%] right-[32%] w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-[30%] left-[30%] w-20 h-20 bg-[#BE55FF]/20 rounded-full animate-float-slow" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-[65%] right-[18%] w-26 h-26 bg-gradient-to-br from-[#70BFFF]/22 to-[#BE55FF]/22 rounded-full animate-float-medium" style={{ animationDelay: "1.3s" }} />
          <div className="absolute bottom-[18%] left-[18%] w-22 h-22 bg-[#BE55FF]/18 rounded-xl rotate-12 animate-float-fast" style={{ animationDelay: "0.8s" }} />
          <div className="absolute top-[15%] left-[65%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "1.6s" }} />
          <div className="absolute top-[45%] left-[5%] w-18 h-18 bg-[#70BFFF]/19 rounded-lg rotate-12 animate-float-medium" style={{ animationDelay: "0.3s" }} />
          <div className="absolute bottom-[55%] right-[45%] w-30 h-30 bg-gradient-to-br from-[#BE55FF]/21 to-[#70BFFF]/21 rounded-full animate-float-fast" style={{ animationDelay: "1.7s" }} />
          <div className="absolute top-[55%] left-[60%] w-24 h-24 bg-[#BE55FF]/18 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "0.9s" }} />
          <div className="absolute top-[25%] right-[55%] w-22 h-22 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-12 animate-float-medium" style={{ animationDelay: "1.4s" }} />
          <div className="absolute bottom-[38%] left-[50%] w-26 h-26 bg-[#BE55FF]/19 rounded-full animate-float-fast" style={{ animationDelay: "0.6s" }} />
          <div className="absolute top-[75%] right-[12%] w-20 h-20 bg-gradient-to-br from-[#70BFFF]/21 to-[#BE55FF]/21 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "1.2s" }} />
        </div>
        <LandingContact />
      </div>

      <Footer />
    </main>
  );
}
