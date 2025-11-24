"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Brain,
  ArrowRight,
  CheckCircle2,
  Target,
  TrendingUp,
  Users,
  Lightbulb
} from "lucide-react";

export default function FractionalVideoCMOPage() {
  return (
    <main className="min-h-screen relative bg-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-[#E6F2FF] relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[15%] right-[25%] w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-2xl mb-6">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Fractional Video <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">CMO & Strategy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
              Strategic leadership and high-level consulting to guide your visual content ecosystem.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We act as your fractional Chief Marketing Officer, providing strategic direction, campaign planning, and brand storytelling architecture to position your brand for long-term growth and authority in your market.
            </p>
          </div>
        </div>
      </div>

      {/* What This Service Includes */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-center">
              What This Service <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Includes</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed text-center mb-12">
              As your fractional Video CMO, we provide strategic leadership across all aspects of your visual content and marketing ecosystem. This service is designed for companies ready to invest in long-term brand positioning and strategic growth.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Comprehensive <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Breakdown</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Strategic Planning</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Quarterly Strategy Sessions</p>
                    <p className="text-gray-700 text-sm">Deep-dive planning sessions to align content strategy with business objectives</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Annual Campaign Planning</p>
                    <p className="text-gray-700 text-sm">Comprehensive year-long campaign roadmap and strategic initiatives</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Brand Storytelling Architecture</p>
                    <p className="text-gray-700 text-sm">Develop cohesive narrative frameworks that resonate with your target audience</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Creative Direction</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Content Ecosystem Development</p>
                    <p className="text-gray-700 text-sm">Design integrated content systems across all platforms and touchpoints</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Visual Communication Strategy</p>
                    <p className="text-gray-700 text-sm">Define how your brand communicates visually across all channels</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Creative Direction</p>
                    <p className="text-gray-700 text-sm">Oversee creative vision and ensure consistency across all content</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Intelligence</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Audience & Competitor Analysis</p>
                    <p className="text-gray-700 text-sm">Deep research into your target market and competitive landscape</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">High-Level Consulting</p>
                    <p className="text-gray-700 text-sm">Strategic guidance on marketing decisions and brand positioning</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Marketing Guidance</p>
                    <p className="text-gray-700 text-sm">Expert advice on marketing strategy, channels, and investment allocation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Process */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Our Strategic <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Process</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: 1, title: "Discovery & Assessment", desc: "Deep dive into your business objectives, current marketing landscape, and long-term vision" },
              { step: 2, title: "Strategic Framework Development", desc: "Create comprehensive strategy documents outlining your content ecosystem and brand architecture" },
              { step: 3, title: "Campaign Planning", desc: "Develop quarterly and annual campaign roadmaps aligned with business goals" },
              { step: 4, title: "Brand Storytelling Architecture", desc: "Define narrative frameworks, messaging pillars, and visual communication strategies" },
              { step: 5, title: "Content Ecosystem Design", desc: "Map out integrated content systems across all platforms and touchpoints" },
              { step: 6, title: "Ongoing Strategic Guidance", desc: "Regular consultation sessions to adjust strategy, review performance, and optimise approach" },
              { step: 7, title: "Team Alignment & Training", desc: "Ensure your internal team understands and can execute the strategic vision" },
              { step: 8, title: "Performance Review & Optimisation", desc: "Quarterly reviews to assess results, refine strategy, and plan next phase initiatives" },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-2xl flex items-center justify-center text-white font-black text-xl">
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            What You <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Receive</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quarterly Deliverables</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive strategy documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Campaign roadmaps and timelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Brand storytelling frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Market analysis reports</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ongoing Support</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Regular strategy consultation sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Strategic guidance on marketing decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content ecosystem optimisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Performance review and recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Who This Is For */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Who This Is <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">For</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Growing companies ready to invest in strategic brand positioning",
                "Businesses seeking long-term marketing leadership without full-time CMO costs",
                "Companies looking to build authority and trust through visual storytelling",
                "Organizations needing integrated content strategy across multiple platforms",
                "Businesses requiring high-level marketing guidance and strategic direction",
                "Companies ready to scale their visual content and brand presence",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#E6F2FF] rounded-2xl p-6">
                  <Users className="h-6 w-6 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-900 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits / Business Impact */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Strategic <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Benefits</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Target, title: "Long-Term Brand Positioning", desc: "Build sustainable brand authority and market position through strategic content planning" },
              { icon: TrendingUp, title: "Strategic Growth", desc: "Align content strategy with business objectives for measurable growth and ROI" },
              { icon: Lightbulb, title: "Expert Guidance", desc: "Access senior-level marketing expertise without the cost of a full-time CMO" },
              { icon: Brain, title: "Integrated Strategy", desc: "Create cohesive content ecosystems that work across all platforms and channels" },
              { icon: Users, title: "Team Alignment", desc: "Ensure your entire organization understands and executes the strategic vision" },
              { icon: CheckCircle2, title: "Competitive Advantage", desc: "Stay ahead of competitors with strategic insights and market intelligence" },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ready to Elevate Your <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Strategy?</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how strategic leadership can transform your brand's visual content and marketing approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 text-white px-10 py-6 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Link href="https://calendly.com/youumedia-agency/30min" target="_blank" rel="noopener noreferrer">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-2 border-gray-300 text-gray-900 hover:bg-[#E6F2FF] px-10 py-6 text-lg font-bold rounded-full"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

