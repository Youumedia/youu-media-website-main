"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Target,
  BarChart3,
  Zap,
  Users,
  Lightbulb,
  Settings,
  PlayCircle
} from "lucide-react";

export default function PaidAdsPage() {
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
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Paid Advertising & <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Campaign Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4">
              End-to-end paid advertising campaigns with Meta ads, audience building, and performance optimisation.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We manage your entire paid advertising ecosystem, from campaign setup and creative planning to execution, optimisation, and scaling. Our data-driven approach ensures maximum ROI on your advertising investment.
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
              Our paid advertising service provides comprehensive campaign management across Meta platforms. From initial setup and audience building to ongoing optimisation and scaling, we handle every aspect of your paid advertising to drive measurable results and ROI.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown - Campaign Setup */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Campaign <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Setup</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <Settings className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Meta Ads Setup</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Complete Meta Business Manager setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Pixel installation and configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Campaign structure optimisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ad account organisation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Audience Building</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom audience creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lookalike audience development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Retargeting audience setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Audience segmentation strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <PlayCircle className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Ad Creative Planning</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Creative concept development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ad copywriting and messaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Visual asset planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Format optimisation (video, image, carousel)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Funnel Mapping</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Customer journey mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Conversion funnel optimisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Landing page strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Budget structuring and allocation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Execution */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Campaign <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Execution</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#E6F2FF] rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Campaign Launch</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Strategic campaign launch</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Initial performance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Budget pacing and management</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#E6F2FF] rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Live Optimisation</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Daily/weekly performance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Real-time campaign adjustments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Bid optimisation and budget reallocation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* A/B Testing */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            A/B Testing & <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Optimisation</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Creative Testing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ad creative variations</li>
                <li>• Visual asset testing</li>
                <li>• Video vs image performance</li>
                <li>• Format optimisation</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Messaging Testing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Hook variations</li>
                <li>• Caption testing</li>
                <li>• CTA optimisation</li>
                <li>• Value proposition testing</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Audience Testing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Audience segment testing</li>
                <li>• Lookalike variations</li>
                <li>• Interest targeting tests</li>
                <li>• Demographic optimisation</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Landing Page Testing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Page layout variations</li>
                <li>• Form optimisation</li>
                <li>• CTA placement testing</li>
                <li>• Conversion flow optimisation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Reporting */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Reporting & <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Insights</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#E6F2FF] rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Weekly Insights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Performance snapshot reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Key metric tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Quick optimisation recommendations</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#E6F2FF] rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Monthly Breakdown</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive performance analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">ROI and conversion reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Scaling strategies and recommendations</span>
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
            Our Campaign <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Process</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: 1, title: "Account Setup & Configuration", desc: "Complete Meta Business Manager setup, pixel installation, and account structure optimisation" },
              { step: 2, title: "Audience Development", desc: "Build custom audiences, lookalikes, and retargeting segments based on your business data" },
              { step: 3, title: "Creative Planning & Development", desc: "Develop ad creatives, copy, and messaging aligned with your brand and campaign objectives" },
              { step: 4, title: "Funnel Mapping & Strategy", desc: "Map customer journey, optimise conversion funnels, and structure campaign budgets" },
              { step: 5, title: "Campaign Launch", desc: "Launch campaigns with strategic targeting, bidding, and budget allocation" },
              { step: 6, title: "Daily Monitoring & Optimisation", desc: "Monitor performance daily, make real-time adjustments, and optimise for best results" },
              { step: 7, title: "A/B Testing & Iteration", desc: "Continuously test creatives, audiences, and messaging to improve performance" },
              { step: 8, title: "Reporting & Scaling", desc: "Provide weekly insights and monthly reports with scaling strategies and recommendations" },
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
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            What You <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Receive</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#E6F2FF] rounded-3xl p-8 border border-gray-200 shadow-lg">
              <BarChart3 className="h-10 w-10 text-[#BE55FF] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Weekly Reports</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Performance snapshots</li>
                <li>• Key metrics tracking</li>
                <li>• Quick recommendations</li>
              </ul>
            </div>

            <div className="bg-[#E6F2FF] rounded-3xl p-8 border border-gray-200 shadow-lg">
              <TrendingUp className="h-10 w-10 text-[#70BFFF] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Analysis</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Comprehensive reports</li>
                <li>• ROI breakdown</li>
                <li>• Scaling strategies</li>
              </ul>
            </div>

            <div className="bg-[#E6F2FF] rounded-3xl p-8 border border-gray-200 shadow-lg">
              <Zap className="h-10 w-10 text-[#BE55FF] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Optimisation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Daily monitoring</li>
                <li>• Real-time adjustments</li>
                <li>• A/B testing results</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Who This Is For */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Who This Is <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">For</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Businesses ready to invest in paid advertising for growth",
                "Companies wanting professional campaign management",
                "Brands seeking data-driven advertising strategies",
                "Organisations needing to scale lead generation",
                "Businesses wanting to maximize advertising ROI",
                "Companies looking to outsource paid ads entirely",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-2xl p-6">
                  <Users className="h-6 w-6 text-[#BE55FF] mt-0.5 flex-shrink-0" />
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
            Business <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Impact</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: TrendingUp, title: "Measurable ROI", desc: "Data-driven campaigns that deliver clear return on advertising investment" },
              { icon: Target, title: "Precise Targeting", desc: "Advanced audience targeting to reach your ideal customers effectively" },
              { icon: Zap, title: "Continuous Optimisation", desc: "Ongoing campaign optimisation to improve performance and reduce costs" },
              { icon: BarChart3, title: "Performance Insights", desc: "Comprehensive reporting to understand what works and why" },
              { icon: Lightbulb, title: "Strategic Scaling", desc: "Data-backed strategies for scaling successful campaigns" },
              { icon: CheckCircle2, title: "Time Efficiency", desc: "Focus on your business while we handle all advertising management" },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-[#E6F2FF] rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
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
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ready to Scale Your <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Growth?</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how paid advertising can drive measurable results for your business.
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

