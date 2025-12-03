"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Lightbulb,
  Users,
  Target,
  Zap
} from "lucide-react";

export default function NewsletterPage() {
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
              <MessageSquare className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Weekly WhatsApp <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Newsletter</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
              Weekly insights, trends, platform updates, and content strategy tips delivered directly to your WhatsApp.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our weekly newsletter delivered directly to your WhatsApp. Get valuable insights, industry trends, platform updates, and actionable content strategy tips that help you make informed decisions and stay competitive in your market.
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
              Our weekly WhatsApp newsletter provides ongoing value, insights, and support. Each week, you receive curated content including industry trends, platform updates, content strategy tips, and community support, all delivered directly to your WhatsApp for maximum convenience and engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Weekly <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Content</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Insights & Trends</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Industry trend analysis and insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Market intelligence and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Emerging content strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Competitive landscape insights</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Platform Updates</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Social media platform algorithm changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">New feature announcements and how to use them</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Best practices and optimisation tips</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Platform-specific strategy updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <Lightbulb className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Content Strategy Tips</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Actionable content creation strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Engagement optimisation techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content planning and calendar tips</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Brand storytelling best practices</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Community Support</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Access to exclusive community insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Q&A opportunities and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Network connections and opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Free value and educational content</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Generation System */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Lead Generation <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">System</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#E6F2FF] rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our weekly newsletter serves as a powerful lead generation system. By providing consistent value, insights, and support, we build trust and authority with your audience. This positions Youu Media as a thought leader while naturally generating qualified leads interested in our premium services.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Value-First Approach</p>
                    <p className="text-gray-700">Deliver free, valuable content that builds trust and positions you as an expert</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Consistent Engagement</p>
                    <p className="text-gray-700">Weekly touchpoints keep your brand top-of-mind and maintain ongoing relationships</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Natural Lead Flow</p>
                    <p className="text-gray-700">Subscribers naturally inquire about services after experiencing consistent value</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Process */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Newsletter <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Process</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: 1, title: "Content Research & Curation", desc: "Research industry trends, platform updates, and gather valuable insights from multiple sources" },
              { step: 2, title: "Strategic Content Development", desc: "Develop weekly newsletter content that provides actionable value and strategic insights" },
              { step: 3, title: "Trend Analysis & Insights", desc: "Analyse current trends and provide forward-looking insights relevant to your industry" },
              { step: 4, title: "Platform Update Compilation", desc: "Curate and explain important platform changes and how they impact content strategy" },
              { step: 5, title: "Strategy Tips & Best Practices", desc: "Share actionable content strategy tips and best practices based on current performance data" },
              { step: 6, title: "Community Value Delivery", desc: "Include community support, networking opportunities, and exclusive insights" },
              { step: 7, title: "Weekly Distribution", desc: "Deliver newsletter directly to WhatsApp for maximum convenience and engagement" },
              { step: 8, title: "Engagement & Follow-Up", desc: "Monitor engagement, respond to questions, and nurture relationships with subscribers" },
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
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Weekly <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Deliverables</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#E6F2FF] rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Weekly Newsletter</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Industry insights and trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Platform updates and changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content strategy tips</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Community support and value</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#E6F2FF] rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ongoing Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Direct WhatsApp delivery for convenience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Access to exclusive community insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Q&A and support opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Natural lead generation through value delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Who This Is For */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Who This Is <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">For</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Businesses wanting to stay ahead of industry trends",
                "Companies seeking ongoing strategic insights",
                "Brands looking for convenient weekly value delivery",
                "Organisations wanting to build thought leadership",
                "Businesses interested in community support and networking",
                "Companies seeking lead generation through value",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-2xl p-6">
                  <Users className="h-6 w-6 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-900 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Business <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Impact</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Lightbulb, title: "Stay Informed", desc: "Receive weekly insights and trends to stay ahead of industry changes and opportunities" },
              { icon: Target, title: "Strategic Advantage", desc: "Access actionable content strategy tips that improve your marketing performance" },
              { icon: Users, title: "Community Access", desc: "Join exclusive community with networking opportunities and support" },
              { icon: TrendingUp, title: "Lead Generation", desc: "Natural lead generation system through consistent value delivery and trust building" },
              { icon: Zap, title: "Convenient Delivery", desc: "Get valuable insights delivered directly to WhatsApp for maximum convenience" },
              { icon: CheckCircle2, title: "Ongoing Value", desc: "Continuous free value that positions Youu Media as a trusted strategic partner" },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-[#E6F2FF] rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
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
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ready to Stay <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Ahead?</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join our weekly newsletter to receive valuable insights, trends, and content strategy tips delivered directly to your WhatsApp.
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
              className="border-2 border-gray-300 text-gray-900 hover:bg-white px-10 py-6 text-lg font-bold rounded-full"
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

