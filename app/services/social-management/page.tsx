"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ContentManagementSlider } from "@/components/content-management-slider";
import Link from "next/link";
import { 
  Instagram,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Hash,
  MessageSquare,
  TrendingUp,
  Users,
  FileText
} from "lucide-react";

export default function SocialManagementPage() {
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
              <Instagram className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Done-For-You <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Social Media Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
              Complete social media management including content planning, scheduling, and community engagement.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We handle every aspect of your social media presence, from content creation and copywriting to scheduling, engagement, and account optimisation. You focus on your business while we manage your social media presence professionally.
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
              Our done-for-you social media management service provides comprehensive coverage of all social media needs. From content planning and creation to scheduling, engagement, and optimisation, we ensure your social media presence is professional, consistent, and aligned with your brand.
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Content Planning</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Monthly content calendar development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content strategy alignment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Creative direction and planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content repurposing strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <MessageSquare className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Copywriting & Captions</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Professional caption writing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Brand voice consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Engagement-optimized copy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Platform-specific messaging</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Scheduling & Posting</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Weekly posting schedule</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content scheduling across platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Optimal posting times</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Automated content distribution</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <Hash className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Hashtag Strategy</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Research-based hashtag selection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Brand-specific hashtag development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Trending hashtag integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Performance tracking and optimisation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Community Engagement</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Comment management and responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Direct message handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Community building strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Engagement optimisation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Account Optimisation</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Profile optimisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Bio and link optimisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content feed optimisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Algorithm-friendly posting strategies</span>
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
            Our Management <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Process</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: 1, title: "Account Audit & Strategy", desc: "Comprehensive review of current social media presence and development of optimisation strategy" },
              { step: 2, title: "Content Calendar Development", desc: "Create monthly content calendar aligned with your marketing goals and brand messaging" },
              { step: 3, title: "Content Creation & Planning", desc: "Develop and plan all content including captions, hashtags, and creative direction" },
              { step: 4, title: "Content Scheduling", desc: "Schedule all posts at optimal times across all platforms for maximum engagement" },
              { step: 5, title: "Active Posting & Distribution", desc: "Execute weekly posting schedule and ensure consistent brand presence" },
              { step: 6, title: "Community Engagement", desc: "Monitor and engage with your audience through comments, DMs, and community building" },
              { step: 7, title: "Performance Monitoring", desc: "Track engagement metrics, growth, and content performance across all platforms" },
              { step: 8, title: "Optimisation & Refinement", desc: "Continuously optimise strategy based on performance data and platform trends" },
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
            Monthly <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Deliverables</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Content & Posting</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Weekly content posting across all platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Monthly content calendar</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Professional captions and copywriting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hashtag strategy implementation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Management & Engagement</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Daily community engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Account optimisation and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Performance monitoring and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Strategy adjustments and optimisation</span>
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
                "Businesses wanting to outsource social media entirely",
                "Companies needing consistent professional social presence",
                "Brands looking to scale social media without hiring internally",
                "Organizations requiring strategic social media management",
                "Businesses wanting to focus on core operations",
                "Companies seeking professional community engagement",
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

      {/* Key Benefits */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Business <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Impact</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Instagram, title: "Consistent Brand Presence", desc: "Maintain professional social media presence without internal resource allocation" },
              { icon: TrendingUp, title: "Time Efficiency", desc: "Free your team to focus on core business while we handle all social media" },
              { icon: Users, title: "Community Growth", desc: "Build engaged community through strategic engagement and content" },
              { icon: CheckCircle2, title: "Professional Management", desc: "Access expert social media management without hiring full-time staff" },
              { icon: Calendar, title: "Strategic Posting", desc: "Optimized posting schedules and content timing for maximum engagement" },
              { icon: MessageSquare, title: "Brand Consistency", desc: "Ensure all social media content aligns with your brand voice and guidelines" },
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

      {/* Content Management Portfolio Slider */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <ContentManagementSlider showTitle={true} showCTA={false} showDetailsText={true} />
      </div>

      {/* CTA Section */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ready to Elevate Your <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Social Presence?</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how done-for-you social media management can transform your brand's online presence.
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

