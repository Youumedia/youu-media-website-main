"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { VideoPortfolioCarousel } from "@/components/video-portfolio-carousel";
import Link from "next/link";
import { 
  Video,
  Camera,
  Edit3,
  ArrowRight,
  CheckCircle2,
  Film,
  Image,
  FileText,
  Palette,
  Users,
  TrendingUp
} from "lucide-react";

export default function ContentProductionPage() {
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
              <Video className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Monthly Content <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Creation & Production</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
              Cinematic video production, photography, and post-production delivered monthly.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We produce premium visual content on a consistent monthly basis, ensuring your brand maintains a steady stream of high-quality video and photography that supports your marketing goals and brand storytelling.
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
              Our monthly content production service delivers a comprehensive suite of video and photography services. From cinematic video production to professional photography, we handle every aspect of content creation to ensure your brand maintains consistent, high-quality visual storytelling.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Comprehensive <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Breakdown</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <Film className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Video Production</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cinematic video production</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Short-form filming + editing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Long-form content creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Scriptwriting and storyboarding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Colour grading and post-production</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">On-location or studio shooting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <Camera className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Photography</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Brand photography</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Product photography</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Event photography</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Professional headshots</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">High-resolution image delivery</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <Edit3 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Post-Production</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Professional video editing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Colour grading and correction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Motion graphics and animations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Audio mixing and enhancement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Asset organisation and delivery</span>
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
            Our Production <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Process</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: 1, title: "Content Planning & Briefing", desc: "Monthly planning session to align content needs with your marketing calendar and brand objectives" },
              { step: 2, title: "Pre-Production Planning", desc: "Scriptwriting, storyboarding, location scouting, and production scheduling" },
              { step: 3, title: "Production Execution", desc: "On-location or studio filming and photography with professional equipment and crew" },
              { step: 4, title: "Post-Production & Editing", desc: "Professional editing, colour grading, and enhancement to deliver cinematic quality" },
              { step: 5, title: "Review & Refinement", desc: "Client review process with revision rounds to ensure content meets brand standards" },
              { step: 6, title: "Asset Delivery & Organisation", desc: "Organised delivery of all final assets in required formats and resolutions" },
              { step: 7, title: "Performance Integration", desc: "Content optimised for your platforms and integrated into your marketing workflow" },
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
            Monthly <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Deliverables</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <Video className="h-10 w-10 text-[#BE55FF] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Video Content</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Short-form videos</li>
                <li>• Long-form content</li>
                <li>• Social media videos</li>
                <li>• Brand films</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <Image className="h-10 w-10 text-[#70BFFF] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Photography</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Brand photography</li>
                <li>• Product shots</li>
                <li>• Event coverage</li>
                <li>• Professional headshots</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <FileText className="h-10 w-10 text-[#BE55FF] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Organised Assets</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• All source files</li>
                <li>• Multiple formats</li>
                <li>• Organised folders</li>
                <li>• Usage guidelines</li>
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
                "Brands needing consistent monthly video and photo content",
                "Companies looking to maintain professional visual presence",
                "Businesses requiring ongoing content for marketing campaigns",
                "Organisations wanting to outsource production entirely",
                "Brands seeking cinematic quality on a regular schedule",
                "Companies needing both video and photography services",
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

      {/* Video Portfolio Showcase */}
      <div className="bg-white relative overflow-hidden">
        <VideoPortfolioCarousel 
          title="Examples of Our Video Production Work"
          description="A selection of our cinematic video production projects showcasing the quality and style you can expect from our monthly content creation service."
        />
      </div>

      {/* Key Benefits */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Business <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Impact</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Film, title: "Consistent Brand Presence", desc: "Maintain steady stream of premium content that keeps your brand top-of-mind" },
              { icon: TrendingUp, title: "Scalable Production", desc: "Scale content production without hiring internal teams or managing freelancers" },
              { icon: Palette, title: "Professional Quality", desc: "Access cinematic production quality that elevates your brand perception" },
              { icon: CheckCircle2, title: "Time Efficiency", desc: "Free your team to focus on core business while we handle all production" },
              { icon: Users, title: "Strategic Alignment", desc: "Content aligned with your marketing calendar and business objectives" },
              { icon: Video, title: "Multi-Format Delivery", desc: "Receive content in all formats needed for your various platforms and channels" },
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
            Ready to Elevate Your <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Content?</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how monthly content production can support your brand's visual storytelling needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:from-[#BE55FF]/90 hover:to-[#70BFFF]/90 text-white px-10 py-6 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
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

