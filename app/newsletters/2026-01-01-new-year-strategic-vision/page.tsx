"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, ArrowLeft, Calendar, TrendingUp, Target, Zap, Lightbulb, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { downloadNewsletterAsPDF } from "@/components/pdf-download";

export default function NewsletterPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <>
      <div className="hidden print:block print-styles">
        <NewsletterContent />
      </div>
      <div className="print:hidden">
        <main className="min-h-screen relative bg-white overflow-hidden">
          <Navigation />

          <div className="bg-white relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <Link href="/#portfolio" className="inline-flex items-center text-[#70BFFF] hover:text-[#BE55FF] mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Our Work
              </Link>
              
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12" ref={contentRef} data-newsletter-content>
                <NewsletterContent />
                
                <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center no-print">
                  <Link href="/#portfolio">
                    <Button variant="outline" className="border-2 border-gray-300 text-gray-900 hover:bg-[#E6F2FF]">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Portfolio
                    </Button>
                  </Link>
                  <div className="flex flex-col items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const width = window.innerWidth || screen.width;
                        if (width <= 768) {
                          window.print();
                          return;
                        }
                        const content = document.querySelector('[data-newsletter-content]') as HTMLElement;
                        if (content) {
                          downloadNewsletterAsPDF(content, `youu-media-newsletter-new-year-strategic-vision-2026-01-01.pdf`).catch(() => window.print());
                        } else {
                          window.print();
                        }
                      }}
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </button>
                    <p className="text-xs text-gray-500 text-center">If not downloading, refresh page</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 15mm;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          body {
            margin: 0;
            padding: 0;
            background: white !important;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          }
          .print\\:hidden,
          .no-print,
          nav,
          footer,
          button,
          .print-hide {
            display: none !important;
          }
          .print\\:block {
            display: block !important;
          }
          h1 {
            font-size: 32pt !important;
            margin-bottom: 12pt !important;
            color: #111827 !important;
            page-break-after: avoid;
          }
          h2 {
            font-size: 24pt !important;
            margin-top: 20pt !important;
            margin-bottom: 12pt !important;
            color: #111827 !important;
            page-break-after: avoid;
          }
          h3 {
            font-size: 18pt !important;
            margin-top: 16pt !important;
            margin-bottom: 8pt !important;
            color: #111827 !important;
            page-break-after: avoid;
          }
          p {
            font-size: 11pt !important;
            line-height: 1.6 !important;
            margin-bottom: 10pt !important;
            color: #374151 !important;
          }
          .bg-gradient-to-r,
          .bg-gradient-to-br {
            background: linear-gradient(to right, #70BFFF, #BE55FF) !important;
            -webkit-print-color-adjust: exact !important;
          }
          a {
            color: #2563eb !important;
            text-decoration: underline;
          }
          ul, ol {
            margin-left: 20pt !important;
            margin-bottom: 12pt !important;
          }
          li {
            margin-bottom: 6pt !important;
            font-size: 11pt !important;
          }
        }
      `}</style>
    </>
  );
}

function NewsletterContent() {
  return (
    <div className="max-w-4xl mx-auto print:max-w-none">
      {/* Header */}
      <div className="text-center mb-12 pb-8 border-b-2 border-gray-200 print:mb-8 print:pb-6">
        <div className="inline-block bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] text-white px-6 py-2 rounded-full text-sm font-bold mb-6 print:mb-4">
          Weekly Newsletter
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          New Year, New Strategic Vision: Setting Up 2026 for Success
        </h1>
        <p className="text-lg text-gray-600">
          Monday, 1st January 2026
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-8 mb-10 print:mb-8 print:p-6 print:bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">This Week's Insight</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            January 1st marks more than just a calendar change - it's a strategic opportunity to set the tone for the entire year. While many brands rush into content production without a clear plan, strategic brands use this moment to establish their vision, define their goals, and create a roadmap that drives meaningful results.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The most successful content strategies start with clarity. New Year's Day is the perfect time to articulate your brand vision, set strategic goals, and create the foundation that will guide every piece of content you create in 2026. This isn't about resolutions - it's about strategic vision.
          </p>
        </div>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full print:h-8"></span>
            The Power of Starting with Strategic Vision
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-base">
            January 1st is uniquely positioned in the content calendar. Your audience is reflective, motivated, and actively seeking inspiration. They're looking for brands that align with their own aspirations and goals. This creates an unprecedented opportunity to connect authentically and build lasting engagement.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-base">
            Content that launches your 2026 vision performs exceptionally well when it combines three elements: clarity (clearly articulating your direction), authenticity (genuine reflection on the journey), and inspiration (motivating your audience to join you). Brands that master this combination see 50-70% higher engagement in January compared to generic content.
          </p>
          <div className="bg-white border-l-4 border-[#70BFFF] pl-6 py-4 my-6 print:my-4 print:border-l-2">
            <p className="text-gray-800 font-semibold italic">
              "A clear vision at the start of the year isn't just motivating - it's strategically essential. It guides every decision, every piece of content, and every interaction with your audience."
            </p>
          </div>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#BE55FF] to-[#70BFFF] rounded-full print:h-8"></span>
            Building Your 2026 Content Strategy: Three Essential Foundations
          </h2>
          
          <div className="grid md:grid-cols-1 gap-6 mb-8">
            <div className="bg-white border-2 border-[#70BFFF]/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-[#70BFFF]" />
                <h3 className="text-xl font-bold text-gray-900">1. Define Your Strategic Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Before creating content, articulate your brand's vision for 2026. What do you want to achieve? Who do you want to serve? What impact do you want to make? Your vision should be clear enough to guide decisions but inspiring enough to motivate action. This vision becomes the north star for all your content.
              </p>
              <p className="text-sm text-gray-600 italic">
                Action: Write a one-page vision statement for 2026. Include your goals, your values, and the impact you want to create. Share this with your team and refer back to it when making content decisions throughout the year.
              </p>
            </div>

            <div className="bg-white border-2 border-[#BE55FF]/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-[#BE55FF]" />
                <h3 className="text-xl font-bold text-gray-900">2. Set Measurable Content Goals</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Transform your vision into specific, measurable goals. Instead of "grow our audience," define "increase Instagram followers by 30% through consistent value-driven content." Instead of "more engagement," specify "achieve 5% average engagement rate through authentic storytelling." Measurable goals create accountability and clarity.
              </p>
              <p className="text-sm text-gray-600 italic">
                Example goals: Reach 10K subscribers by Q2, launch a weekly video series with 1K+ views per episode, create a content series that generates 50 qualified leads per month. Each goal should be specific, measurable, and aligned with your business objectives.
              </p>
            </div>

            <div className="bg-white border-2 border-[#70BFFF]/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-[#70BFFF]" />
                <h3 className="text-xl font-bold text-gray-900">3. Create Your Content Framework</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Establish the framework that will guide your content creation. Define your content pillars, establish your posting cadence, identify your key platforms, and create templates that make content production efficient. This framework removes guesswork and ensures consistency while maintaining flexibility for creative opportunities.
              </p>
              <p className="text-sm text-gray-600 italic">
                Strategic benefit: A clear framework reduces decision fatigue, ensures brand consistency, and makes it easier to repurpose content across platforms while maintaining strategic alignment with your vision and goals.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full print:h-8"></span>
            Platform Updates & Trends for 2026
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#70BFFF]/5 to-transparent rounded-xl border-l-4 border-[#70BFFF]">
              <div className="w-3 h-3 bg-[#70BFFF] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Instagram & Facebook</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Meta is prioritising authentic, value-driven content in 2026. Brands that share their vision, goals, and journey are seeing increased reach. New Year vision posts and goal-setting content perform exceptionally well. Instagram Reels that show behind-the-scenes planning and strategic thinking are gaining traction. Use Stories to share your 2026 vision and build anticipation for what's coming.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#BE55FF]/5 to-transparent rounded-xl border-l-4 border-[#BE55FF]">
              <div className="w-3 h-3 bg-[#BE55FF] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">LinkedIn</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Professional audiences are highly engaged with New Year strategic vision content. Thought leadership posts about 2026 predictions, strategic planning, and goal setting are performing exceptionally well. Video content showing your planning process and strategic thinking is seeing strong engagement. LinkedIn's algorithm favours content that provides genuine value and sparks meaningful discussion.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#70BFFF]/5 to-transparent rounded-xl border-l-4 border-[#70BFFF]">
              <div className="w-3 h-3 bg-[#70BFFF] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">YouTube & YouTube Shorts</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  New Year strategic content is trending on YouTube. Videos that share your 2026 vision, strategic planning process, and goal-setting frameworks are seeing high watch-time. YouTube Shorts featuring quick strategic tips, vision statements, and goal-setting advice are performing well, especially in the business and marketing niches. Educational content that helps viewers plan their own year is highly valued.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#BE55FF]/5 to-transparent rounded-xl border-l-4 border-[#BE55FF]">
              <div className="w-3 h-3 bg-[#BE55FF] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">TikTok</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Authentic New Year vision content is resonating strongly on TikTok. The platform favours genuine, personal storytelling over polished corporate messaging. Brands that share their real goals, honest reflections, and authentic journey are building stronger connections. Quick tips for strategic planning and goal setting are performing well, especially when presented in an engaging, relatable format.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#BE55FF] to-[#70BFFF] rounded-full print:h-8"></span>
            Action Items for This Week
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 print:p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 print:w-6 print:h-6">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-1">Articulate Your 2026 Strategic Vision</p>
                <p className="text-gray-700">Write your brand's vision statement for 2026. Include your goals, values, and the impact you want to create. This doesn't need to be perfect - it needs to be clear. Use this vision as your north star for all content decisions throughout the year.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 print:p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 print:w-6 print:h-6">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-1">Set Three Measurable Content Goals</p>
                <p className="text-gray-700">Define three specific, measurable goals for your content in 2026. Make sure each goal is aligned with your business objectives and your strategic vision. Write them down, share them with your team, and create a plan to track progress throughout the year.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 print:p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 print:w-6 print:h-6">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-1">Launch Your 2026 Vision Content</p>
                <p className="text-gray-700">Create and publish content that shares your 2026 strategic vision with your audience. This could be a video, blog post, or social media series. Use this as an opportunity to engage your audience, build anticipation, and set the tone for the year ahead. Be authentic, be clear, and be inspiring.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full print:h-8"></span>
            The Strategic Advantage of Starting with Vision
          </h2>
          <div className="bg-gradient-to-br from-[#70BFFF]/10 via-[#BE55FF]/10 to-[#70BFFF]/10 rounded-2xl p-8 print:p-6 print:bg-gray-50 border-2 border-[#70BFFF]/20">
            <p className="text-gray-800 leading-relaxed mb-4 text-base font-medium">
              Brands that start the year with a clear strategic vision don't just create better content - they build stronger connections, make smarter decisions, and achieve better results. While competitors are creating content reactively, you'll have a clear roadmap that guides every piece of content you create.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              The most successful content strategies aren't created throughout the year - they're launched on day one with clarity, purpose, and strategic vision. Use January 1st to set the foundation that will guide your entire year of content creation. Your future self will thank you.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200 text-center print:mt-8 print:pt-6">
          <p className="text-gray-900 text-base mb-3 font-bold">
            <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Youu Media</span> - Strategic Visual Content for Brands
          </p>
          <p className="text-gray-600 text-sm mb-2">
            Delivered every Monday | Strategic insights for strategic brands
          </p>
          <p className="text-gray-500 text-xs">
            © 2026 Youu Media. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

