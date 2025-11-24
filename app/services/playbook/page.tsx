"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Palette,
  FileText,
  Camera,
  Video,
  Users,
  Lightbulb,
  Target
} from "lucide-react";

export default function PlaybookPage() {
  return (
    <main className="min-h-screen relative bg-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-[#E6F2FF] relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[15%] right-[25%] w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-medium" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-2xl mb-6">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Brand Playbook & <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Content Framework</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
              Develop comprehensive brand guidelines, messaging frameworks, and content pillars for consistent brand expression.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We create a complete brand playbook that serves as your content creation blueprint. This framework ensures every piece of content aligns with your brand identity, messaging, and visual style, creating consistency across all platforms and touchpoints.
            </p>
          </div>
        </div>
      </div>

      {/* What This Service Includes */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-center">
              What This Service <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Includes</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed text-center mb-12">
              Our brand playbook development service creates a comprehensive framework that guides all your content creation. From brand identity guidelines to content pillars and visual style rules, we develop a complete system that ensures brand consistency and strategic content alignment.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Comprehensive <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Framework</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <Palette className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Brand Identity Guidelines</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Visual style rules and guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Color palette and hex code specifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Typography and font guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Logo usage and placement rules</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tone of Voice</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Brand voice definition and guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Messaging frameworks and templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Communication style guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Do's and don'ts for brand messaging</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Content Pillars</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Core content themes and topics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content pillar definitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Story structures and narratives</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content mix and balance guidelines</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <Camera className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Shooting Guidelines</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Visual style and aesthetic guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Composition and framing rules</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lighting and color treatment standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Production quality standards</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <Video className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Repurposing Framework</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content repurposing strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Multi-platform content adaptation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Format conversion guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content extension strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Posting Blueprint</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content calendar structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Posting frequency guidelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Platform-specific posting strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content mix and balance framework</span>
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
            Our Development <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Process</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: 1, title: "Brand Discovery & Analysis", desc: "Deep dive into your brand identity, values, target audience, and current content approach" },
              { step: 2, title: "Visual Identity Documentation", desc: "Document all visual elements including colors, typography, logo usage, and style guidelines" },
              { step: 3, title: "Messaging Framework Development", desc: "Define tone of voice, messaging pillars, and communication style guidelines" },
              { step: 4, title: "Content Pillar Definition", desc: "Establish core content themes, topics, and story structures aligned with your brand" },
              { step: 5, title: "Production Guidelines Creation", desc: "Develop shooting guidelines, visual standards, and quality benchmarks" },
              { step: 6, title: "Repurposing Framework Design", desc: "Create systems for adapting content across platforms and formats" },
              { step: 7, title: "Posting Blueprint Development", desc: "Design content calendar structure and posting strategies" },
              { step: 8, title: "Playbook Delivery & Training", desc: "Deliver comprehensive playbook and train your team on implementation" },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-2xl flex items-center justify-center text-white font-black text-xl">
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
            What You <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Receive</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Brand Playbook</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive brand guidelines document</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Visual style guide with examples</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Messaging framework and templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content pillar definitions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Tools</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content creation templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Posting blueprint and calendar structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Repurposing workflow guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Team training and onboarding materials</span>
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
            Who This Is <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">For</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Companies needing brand consistency across all content",
                "Businesses scaling content creation with multiple team members",
                "Brands wanting strategic content framework and guidelines",
                "Organizations requiring clear brand identity documentation",
                "Companies looking to standardize content production",
                "Brands seeking long-term content strategy foundation",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#E6F2FF] rounded-2xl p-6">
                  <Users className="h-6 w-6 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-900 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Business <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Impact</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Palette, title: "Brand Consistency", desc: "Ensure all content aligns with your brand identity and messaging across all platforms" },
              { icon: Target, title: "Strategic Alignment", desc: "Create content that consistently supports your business objectives and brand positioning" },
              { icon: Users, title: "Team Scalability", desc: "Enable multiple team members to create on-brand content with clear guidelines" },
              { icon: Lightbulb, title: "Content Efficiency", desc: "Streamline content creation with clear frameworks and templates" },
              { icon: CheckCircle2, title: "Quality Standards", desc: "Maintain consistent quality and brand standards across all content" },
              { icon: BookOpen, title: "Long-Term Foundation", desc: "Build sustainable content strategy that scales with your business growth" },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center mb-4">
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
            Ready to Build Your <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Brand Framework?</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how a comprehensive brand playbook can ensure consistent, strategic content across all your platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:from-[#BE55FF]/90 hover:to-[#70BFFF]/90 text-white px-10 py-6 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Link href="https://calendly.com/youumedia-agency/30min" target="_blank" rel="noopener noreferrer">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
            </Button>
            <Button
              size="lg"
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

