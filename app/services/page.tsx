"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  BarChart3, 
  Video, 
  Camera, 
  Instagram, 
  Mail, 
  Film, 
  User, 
  Palette, 
  Target, 
  Eye,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Layers,
  Zap
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative bg-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-[#E6F2FF] relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "0s" }} />
          <div className="absolute bottom-[15%] right-[25%] w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-[50%] left-[50%] w-[380px] h-[380px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" style={{ animationDelay: "0.8s" }} />

          {/* Geometric shapes - kept within bounds */}
          <div className="absolute top-[18%] left-[15%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-float-slow" style={{ animationDelay: "0.2s" }} />
          <div className="absolute bottom-[20%] right-[20%] w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-float-medium" style={{ animationDelay: "1.1s" }} />
          <div className="absolute top-[40%] right-[15%] w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "0.6s" }} />
          <div className="absolute bottom-[25%] left-[25%] w-20 h-20 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-[55%] right-[30%] w-26 h-26 bg-gradient-to-br from-[#70BFFF]/22 to-[#BE55FF]/22 rounded-full animate-float-medium" style={{ animationDelay: "0.9s" }} />
          <div className="absolute bottom-[18%] left-[18%] w-22 h-22 bg-[#BE55FF]/18 rounded-xl rotate-12 animate-float-fast" style={{ animationDelay: "1.3s" }} />
          <div className="absolute top-[22%] left-[60%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "0.4s" }} />
          <div className="absolute top-[45%] left-[8%] w-18 h-18 bg-[#70BFFF]/19 rounded-lg rotate-12 animate-float-medium" style={{ animationDelay: "1.7s" }} />
          <div className="absolute bottom-[30%] right-[45%] w-30 h-30 bg-gradient-to-br from-[#BE55FF]/21 to-[#70BFFF]/21 rounded-full animate-float-fast" style={{ animationDelay: "0.7s" }} />
          <div className="absolute top-[60%] left-[50%] w-24 h-24 bg-[#BE55FF]/18 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "1.2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
              What We Do
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive visual content solutions tailored to your budget, goals, and brand identity.
            </p>
          </div>
        </div>
      </div>

      {/* Integration Process Diagram */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-[#BE55FF] uppercase tracking-widest mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              How We <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Integrate</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A structured approach to understanding your business and delivering results.
            </p>
          </div>

          {/* Process Flow Diagram */}
          <div className="relative">
            {/* Desktop Process Flow */}
            <div className="hidden md:block">
              <div className="flex items-center justify-between mb-8">
                {/* Stage 1 */}
                <div className="flex-1 text-center">
                  <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-6 border-2 border-[#70BFFF]/20 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Understanding Vision</h3>
                    <p className="text-gray-700 text-sm">
                      Deep dive into your business objectives, target audience, and long-term goals
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="mx-4">
                  <ArrowRight className="h-8 w-8 text-[#70BFFF]" />
                </div>

                {/* Stage 2 */}
                <div className="flex-1 text-center">
                  <div className="bg-gradient-to-br from-[#BE55FF]/10 to-[#70BFFF]/10 rounded-2xl p-6 border-2 border-[#BE55FF]/20 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Palette className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Brand Alignment</h3>
                    <p className="text-gray-700 text-sm">
                      Analyse existing brand guidelines, hex codes, and visual identity to ensure consistency
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="mx-4">
                  <ArrowRight className="h-8 w-8 text-[#70BFFF]" />
                </div>

                {/* Stage 3 */}
                <div className="flex-1 text-center">
                  <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-6 border-2 border-[#70BFFF]/20 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Goal Setting</h3>
                    <p className="text-gray-700 text-sm">
                      Define measurable KPIs, content strategy, and success metrics aligned with your objectives
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="mx-4">
                  <ArrowRight className="h-8 w-8 text-[#70BFFF]" />
                </div>

                {/* Stage 4 */}
                <div className="flex-1 text-center">
                  <div className="bg-gradient-to-br from-[#BE55FF]/10 to-[#70BFFF]/10 rounded-2xl p-6 border-2 border-[#BE55FF]/20 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Execution</h3>
                    <p className="text-gray-700 text-sm">
                      Deliver content that integrates seamlessly into your business processes and workflows
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Process Flow */}
            <div className="md:hidden space-y-6">
              <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-6 border-2 border-[#70BFFF]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Understanding Vision</h3>
                <p className="text-gray-700 text-sm text-center">
                  Deep dive into your business objectives, target audience, and long-term goals
                </p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="h-8 w-8 text-[#70BFFF] rotate-90" />
              </div>
              <div className="bg-gradient-to-br from-[#BE55FF]/10 to-[#70BFFF]/10 rounded-2xl p-6 border-2 border-[#BE55FF]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Brand Alignment</h3>
                <p className="text-gray-700 text-sm text-center">
                  Analyse existing brand guidelines, hex codes, and visual identity to ensure consistency
                </p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="h-8 w-8 text-[#70BFFF] rotate-90" />
              </div>
              <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-6 border-2 border-[#70BFFF]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Goal Setting</h3>
                <p className="text-gray-700 text-sm text-center">
                  Define measurable KPIs, content strategy, and success metrics aligned with your objectives
                </p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="h-8 w-8 text-[#70BFFF] rotate-90" />
              </div>
              <div className="bg-gradient-to-br from-[#BE55FF]/10 to-[#70BFFF]/10 rounded-2xl p-6 border-2 border-[#BE55FF]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Execution</h3>
                <p className="text-gray-700 text-sm text-center">
                  Deliver content that integrates seamlessly into your business processes and workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Tiers */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[18%] right-[20%] w-[450px] h-[450px] bg-[#BE55FF]/15 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: "0.3s" }} />
          <div className="absolute bottom-[18%] left-[20%] w-[400px] h-[400px] bg-[#70BFFF]/18 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-[50%] left-[50%] w-[360px] h-[360px] bg-[#BE55FF]/12 rounded-full blur-2xl animate-float-fast" style={{ animationDelay: "0.7s" }} />

          {/* Geometric shapes - kept within bounds */}
          <div className="absolute top-[20%] left-[15%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-float-slow" style={{ animationDelay: "0.2s" }} />
          <div className="absolute bottom-[22%] right-[15%] w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-float-medium" style={{ animationDelay: "1.3s" }} />
          <div className="absolute top-[42%] right-[10%] w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "0.6s" }} />
          <div className="absolute bottom-[28%] left-[22%] w-20 h-20 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-[58%] right-[28%] w-26 h-26 bg-gradient-to-br from-[#70BFFF]/22 to-[#BE55FF]/22 rounded-full animate-float-medium" style={{ animationDelay: "0.9s" }} />
          <div className="absolute bottom-[20%] left-[18%] w-22 h-22 bg-[#BE55FF]/18 rounded-xl rotate-12 animate-float-fast" style={{ animationDelay: "1.1s" }} />
          <div className="absolute top-[25%] left-[58%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "0.4s" }} />
          <div className="absolute top-[48%] left-[8%] w-18 h-18 bg-[#70BFFF]/19 rounded-lg rotate-12 animate-float-medium" style={{ animationDelay: "1.7s" }} />
          <div className="absolute bottom-[32%] right-[42%] w-30 h-30 bg-gradient-to-br from-[#BE55FF]/21 to-[#70BFFF]/21 rounded-full animate-float-fast" style={{ animationDelay: "0.8s" }} />
          <div className="absolute top-[65%] left-[45%] w-24 h-24 bg-[#BE55FF]/18 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "1.2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
              Service Tiers
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Solutions for Every <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Budget</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From one-off projects to comprehensive retainer agreements, we offer flexible solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600">Project-Based</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">One-off video or photo projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Basic editing and post-production</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Brand guideline adherence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Standard delivery formats</span>
                </li>
              </ul>
            </div>

            {/* Professional Tier */}
            <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-3xl p-8 border-2 border-[#70BFFF]/30 shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="text-center mb-6 mt-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <p className="text-gray-600">Monthly Retainer</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Regular content creation (video, photo, carousels)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Engagement analysis and performance reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Social media management and scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Brand consistency across all content</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600">Long-Term Partnership</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive content strategy and execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Advanced analytics and stat analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Personal branding development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Full brand integration and custom hex code implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Priority support and rapid turnaround</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Services */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-[#BE55FF] uppercase tracking-widest mb-4 block">
              What's Included
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Service Offerings</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Engagement & Analytics */}
            <div className="bg-gradient-to-br from-[#70BFFF]/5 to-[#BE55FF]/5 rounded-3xl p-8 border border-[#70BFFF]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Engagement & Analytics</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For retainer clients, we provide comprehensive engagement analysis and statistical reporting to identify the most effective content types and posting strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Performance metrics tracking across all platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content effectiveness analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Monthly reports with actionable insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">A/B testing recommendations</span>
                </li>
              </ul>
            </div>

            {/* Social Media Management */}
            <div className="bg-gradient-to-br from-[#BE55FF]/5 to-[#70BFFF]/5 rounded-3xl p-8 border border-[#BE55FF]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <Instagram className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Social Media Management</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Complete social media content creation and management across all major platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Video content (reels, short documentaries, promotional videos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Photo content and professional photography</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Carousel posts and multi-image content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Interactive polls and engagement content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Newsletter design and content creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content scheduling and posting</span>
                </li>
              </ul>
            </div>

            {/* Personal Branding */}
            <div className="bg-gradient-to-br from-[#70BFFF]/5 to-[#BE55FF]/5 rounded-3xl p-8 border border-[#70BFFF]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-xl flex items-center justify-center">
                  <User className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Personal Branding</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Develop and maintain a consistent personal brand identity across all content and platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Brand identity development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Visual style guide creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content that reflects your unique voice and values</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cross-platform consistency</span>
                </li>
              </ul>
            </div>

            {/* Brand Integration */}
            <div className="bg-gradient-to-br from-[#BE55FF]/5 to-[#70BFFF]/5 rounded-3xl p-8 border border-[#BE55FF]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-xl flex items-center justify-center">
                  <Palette className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Brand Integration</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Seamlessly work within your existing brand guidelines and visual identity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Adherence to brand guidelines and style guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom hex code implementation across all content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Typography and font consistency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Logo placement and brand asset integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content that aligns with brand messaging and tone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Long-Term Contracts */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[15%] w-[400px] h-[400px] bg-[#BE55FF]/12 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "0.6s" }} />
          <div className="absolute bottom-[15%] right-[15%] w-[450px] h-[450px] bg-[#70BFFF]/15 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: "1.3s" }} />
          <div className="absolute top-[50%] left-[50%] w-[370px] h-[370px] bg-[#BE55FF]/10 rounded-full blur-2xl animate-float-fast" style={{ animationDelay: "0.8s" }} />

          {/* Geometric shapes - kept within bounds */}
          <div className="absolute top-[18%] left-[12%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-float-slow" style={{ animationDelay: "0.3s" }} />
          <div className="absolute bottom-[20%] right-[12%] w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-float-medium" style={{ animationDelay: "1.4s" }} />
          <div className="absolute top-[40%] right-[10%] w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "0.7s" }} />
          <div className="absolute bottom-[25%] left-[20%] w-20 h-20 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "1.6s" }} />
          <div className="absolute top-[55%] right-[25%] w-26 h-26 bg-gradient-to-br from-[#70BFFF]/22 to-[#BE55FF]/22 rounded-full animate-float-medium" style={{ animationDelay: "1.0s" }} />
          <div className="absolute bottom-[18%] left-[18%] w-22 h-22 bg-[#BE55FF]/18 rounded-xl rotate-12 animate-float-fast" style={{ animationDelay: "1.2s" }} />
          <div className="absolute top-[22%] left-[55%] w-28 h-28 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-[45%] left-[8%] w-18 h-18 bg-[#70BFFF]/19 rounded-lg rotate-12 animate-float-medium" style={{ animationDelay: "1.8s" }} />
          <div className="absolute bottom-[30%] right-[40%] w-30 h-30 bg-gradient-to-br from-[#BE55FF]/21 to-[#70BFFF]/21 rounded-full animate-float-fast" style={{ animationDelay: "0.9s" }} />
          <div className="absolute top-[62%] left-[48%] w-24 h-24 bg-[#BE55FF]/18 rounded-xl rotate-45 animate-float-slow" style={{ animationDelay: "1.3s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
              Long-Term Partnerships
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Retainer <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              When you sign longer-term contracts, we become an extension of your team with dedicated resources and strategic planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-[#70BFFF]/20 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Planning</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Quarterly content strategy sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Long-term goal alignment and planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Content calendar development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#70BFFF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Campaign planning and execution</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-[#BE55FF]/20 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Assigned account manager and creative team</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Priority scheduling and faster turnaround times</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Regular check-ins and progress reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#BE55FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flexible content adjustments based on performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ready to Get <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Started?</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how we can integrate into your business and deliver results that align with your goals.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 text-white px-10 py-6 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <Link href="https://calendly.com/youumedia-agency/30min" target="_blank" rel="noopener noreferrer">
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
