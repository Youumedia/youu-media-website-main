"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Brain,
  Video,
  Instagram,
  TrendingUp,
  BarChart3,
  BookOpen,
  GraduationCap,
  MessageSquare,
  ArrowRight,
  Lock,
  Users,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Fractional Video CMO & Strategy",
    description:
      "Strategic leadership and high-level consulting to guide your visual content ecosystem and brand storytelling architecture.",
    icon: Brain,
    href: "/services/fractional-video-cmo",
    gradient: "from-[#70BFFF] to-[#BE55FF]",
    bgGradient: "from-blue-50 via-purple-50 to-pink-50",
  },
  {
    id: 2,
    title: "Monthly Content Creation & Production",
    description:
      "Cinematic video production, photography, and post-production delivered monthly to support your brand's visual storytelling needs.",
    icon: Video,
    href: "/services/content-production",
    gradient: "from-[#BE55FF] to-[#70BFFF]",
    bgGradient: "from-purple-50 via-blue-50 to-cyan-50",
  },
  {
    id: 3,
    title: "Done-For-You Social Media Management",
    description:
      "Complete social media management including content planning, scheduling, community engagement, and account optimisation.",
    icon: Instagram,
    href: "/services/social-management",
    gradient: "from-[#70BFFF] to-[#BE55FF]",
    bgGradient: "from-pink-50 via-rose-50 to-orange-50",
  },
  {
    id: 4,
    title: "Paid Advertising & Campaign Management",
    description:
      "End-to-end paid advertising campaigns with Meta ads, audience building, A/B testing, and performance optimisation.",
    icon: TrendingUp,
    href: "/services/paid-ads",
    gradient: "from-[#BE55FF] to-[#70BFFF]",
    bgGradient: "from-emerald-50 via-teal-50 to-cyan-50",
  },
  {
    id: 5,
    title: "Analytics, Insights & Performance Reporting",
    description:
      "Comprehensive monthly reporting with growth insights, ROI breakdown, and strategic recommendations for continuous improvement.",
    icon: BarChart3,
    href: "/services/analytics",
    gradient: "from-[#70BFFF] to-[#BE55FF]",
    bgGradient: "from-indigo-50 via-blue-50 to-purple-50",
  },
  {
    id: 6,
    title: "Brand Playbook & Content Framework Development",
    description:
      "Develop comprehensive brand guidelines, messaging frameworks, content pillars, and visual style rules for consistent brand expression.",
    icon: BookOpen,
    href: "/services/playbook",
    gradient: "from-[#BE55FF] to-[#70BFFF]",
    bgGradient: "from-amber-50 via-yellow-50 to-orange-50",
  },
  {
    id: 7,
    title: "Executive Workshops & Training Days",
    description: "Launching soon — full educational hub in development.",
    icon: GraduationCap,
    href: null, // Not clickable
    gradient: "from-gray-400 to-gray-500",
    bgGradient: "from-gray-50 via-gray-100 to-gray-200",
    comingSoon: true,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative bg-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-[#E6F2FF] relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute bottom-[15%] right-[25%] w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-[50%] left-[50%] w-[380px] h-[380px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast"
            style={{ animationDelay: "0.8s" }}
          />

          {/* Geometric shapes */}
          <div
            className="absolute top-[18%] left-[15%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-float-slow"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="absolute bottom-[20%] right-[20%] w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-float-medium"
            style={{ animationDelay: "1.1s" }}
          />
          <div
            className="absolute top-[40%] right-[15%] w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-float-fast"
            style={{ animationDelay: "0.6s" }}
          />
          <div
            className="absolute bottom-[25%] left-[25%] w-20 h-20 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-float-slow"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-[55%] right-[30%] w-26 h-26 bg-gradient-to-br from-[#70BFFF]/22 to-[#BE55FF]/22 rounded-full animate-float-medium"
            style={{ animationDelay: "0.9s" }}
          />
          <div
            className="absolute bottom-[18%] left-[18%] w-22 h-22 bg-[#BE55FF]/18 rounded-xl rotate-12 animate-float-fast"
            style={{ animationDelay: "1.3s" }}
          />
          <div
            className="absolute top-[22%] left-[60%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-45 animate-float-slow"
            style={{ animationDelay: "0.4s" }}
          />
          <div
            className="absolute top-[45%] left-[8%] w-18 h-18 bg-[#70BFFF]/19 rounded-lg rotate-12 animate-float-medium"
            style={{ animationDelay: "1.7s" }}
          />
          <div
            className="absolute bottom-[30%] right-[45%] w-30 h-30 bg-gradient-to-br from-[#BE55FF]/21 to-[#70BFFF]/21 rounded-full animate-float-fast"
            style={{ animationDelay: "0.7s" }}
          />
          <div
            className="absolute top-[60%] left-[50%] w-24 h-24 bg-[#BE55FF]/18 rounded-xl rotate-45 animate-float-slow"
            style={{ animationDelay: "1.2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
              Strategic Media Partnership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
              Comprehensive visual content solutions tailored to your budget,
              goals, and brand identity.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We position ourselves as your strategic media partner, supporting
              long-term growth through premium, corporate-level services.
            </p>

            {/* Creative scroll indicator */}
            <div className="relative z-10 mt-8 md:mt-12 mb-0 flex justify-center">
              <div className="flex flex-col items-center gap-1.5 md:gap-2">
                <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
                  <div className="w-1.5 h-1.5 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full animate-bounce" />
                </div>
                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-semibold">
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              const isComingSoon = service.comingSoon;

              return (
                <div
                  key={service.id}
                  className={`group relative rounded-3xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all overflow-hidden ${
                    isComingSoon
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:border-[#70BFFF]/50 hover:scale-[1.02]"
                  }`}
                >
                  {/* Light gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl`}
                  />

                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  />

                  {/* Coming Soon Overlay */}
                  {isComingSoon && (
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center rounded-3xl">
                      <Lock className="h-12 w-12 text-gray-400 mb-4" />
                      <div className="text-center px-4">
                        <div className="inline-block bg-gradient-to-r from-gray-400 to-gray-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
                          COMING SOON
                        </div>
                        <p className="text-sm text-gray-600">
                          Launching soon — resources and training hub in
                          development.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Icon - positioned at top left */}
                  <div
                    className={`absolute top-6 left-6 md:top-8 md:left-8 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${
                      service.gradient
                    } rounded-2xl flex items-center justify-center z-10 ${
                      isComingSoon ? "opacity-50" : ""
                    }`}
                  >
                    <Icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pt-16 md:pt-20">
                    <h3
                      className={`text-xl md:text-2xl font-bold text-gray-900 mb-4 ${
                        isComingSoon ? "opacity-50" : ""
                      }`}
                    >
                      {service.title}
                    </h3>

                    {/* Learn More Button */}
                    {!isComingSoon && (
                      <Button
                        asChild
                        className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
                      >
                        <Link href={service.href || "#"}>
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5 inline" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
              Youu Media
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Proven Results
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We deliver measurable outcomes that drive business growth and
                brand recognition through strategic content and media solutions.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center mb-6">
                <Video className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cinematic Quality
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every project is crafted with professional-grade equipment and
                expertise, ensuring your content stands out in a crowded
                marketplace.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Strategic Partnership
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We work as an extension of your team, understanding your brand
                deeply and delivering solutions that align with your long-term
                vision.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Our{" "}
            <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">
              Approach
            </span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-2xl flex items-center justify-center text-white font-black text-xl">
                1
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Discovery & Strategy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We begin by understanding your brand, goals, and target
                  audience to develop a comprehensive strategy that drives
                  results.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-2xl flex items-center justify-center text-white font-black text-xl">
                2
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Execution & Production
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team brings your vision to life with professional
                  production, creative direction, and attention to detail that
                  sets your content apart.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-2xl flex items-center justify-center text-white font-black text-xl">
                3
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Optimisation & Growth
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We continuously analyse performance, optimise strategies, and
                  refine approaches to ensure your content delivers maximum
                  impact and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ready to Get{" "}
            <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
              Started?
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how we can integrate into your business and deliver
            results that align with your goals.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 text-white px-10 py-6 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <Link
              href="https://calendly.com/youumedia-agency/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
