"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Brain,
  Video,
  Instagram,
  TrendingUp,
  BarChart3,
  BookOpen,
  MessageSquare,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Fractional Video CMO & Strategy",
    description: "Strategic leadership and high-level consulting to guide your visual content ecosystem and brand storytelling architecture.",
    icon: Brain,
    gradient: "from-[#70BFFF] to-[#BE55FF]",
  },
  {
    id: 2,
    title: "Monthly Content Creation & Production",
    description: "Cinematic video production, photography, and post-production delivered monthly to support your brand's visual storytelling needs.",
    icon: Video,
    gradient: "from-[#BE55FF] to-[#70BFFF]",
  },
  {
    id: 3,
    title: "Done-For-You Social Media Management",
    description: "Complete social media management including content planning, scheduling, community engagement, and account optimisation.",
    icon: Instagram,
    gradient: "from-[#70BFFF] to-[#BE55FF]",
  },
  {
    id: 4,
    title: "Paid Advertising & Campaign Management",
    description: "End-to-end paid advertising campaigns with Meta ads, audience building, A/B testing, and performance optimisation.",
    icon: TrendingUp,
    gradient: "from-[#BE55FF] to-[#70BFFF]",
  },
  {
    id: 5,
    title: "Analytics, Insights & Performance Reporting",
    description: "Comprehensive monthly reporting with growth insights, ROI breakdown, and strategic recommendations for continuous improvement.",
    icon: BarChart3,
    gradient: "from-[#70BFFF] to-[#BE55FF]",
  },
  {
    id: 6,
    title: "Brand Playbook & Content Framework Development",
    description: "Develop comprehensive brand guidelines, messaging frameworks, content pillars, and visual style rules for consistent brand expression.",
    icon: BookOpen,
    gradient: "from-[#BE55FF] to-[#70BFFF]",
  },
  {
    id: 7,
    title: "Weekly WhatsApp Newsletter",
    description: "Weekly insights, trends, platform updates, and content strategy tips delivered directly to your WhatsApp for ongoing value and support.",
    icon: MessageSquare,
    gradient: "from-[#70BFFF] to-[#BE55FF]",
  },
];

export function LandingServices() {
  return (
    <section
      id="services"
      className="py-12 md:py-16 relative overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
            Strategic Media Partnership
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We position ourselves as your strategic media partner, supporting long-term growth through premium, corporate-level services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all hover:border-[#70BFFF]/50 hover:scale-[1.02]"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 md:mb-6`}>
                  <Icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 md:mt-12">
          <Button
            asChild
            className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 text-white px-8 md:px-10 py-4 md:py-6 text-base md:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
