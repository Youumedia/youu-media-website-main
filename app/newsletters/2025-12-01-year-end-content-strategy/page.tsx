"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, ArrowLeft, Calendar, TrendingUp, Target, Zap, Lightbulb } from "lucide-react";
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
                          downloadNewsletterAsPDF(content, `youu-media-newsletter-year-end-content-strategy-2025-12-01.pdf`).catch(() => window.print());
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
          Year-End Content Strategy: Maximizing Q4 Impact and Planning for 2026
        </h1>
        <p className="text-lg text-gray-600">
          Monday, 1st December 2025
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-8 mb-10 print:mb-8 print:p-6 print:bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">This Week's Insight</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            December marks a critical transition point for content strategy. While many brands slow down content production during the holidays, strategic brands use this period to maximize Q4 impact and set the foundation for 2026 success. This week, we explore how to finish the year strong while building momentum for the year ahead.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The most successful brands don't wait until January to plan. They use December to analyze what worked, identify opportunities, and create a strategic roadmap that positions them for growth from day one of the new year.
          </p>
        </div>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full print:h-8"></span>
            Maximizing Q4: Strategic Content Moves for December
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-base">
            December presents unique opportunities that many brands overlook. While competitors reduce content output, strategic brands can capture attention with thoughtful, value-driven content. The key is understanding what your audience needs during this period: reflection, planning, and authentic connection.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-base">
            Year-end content performs exceptionally well when it focuses on three pillars: reflection (sharing lessons learned), value (providing actionable insights), and forward-looking vision (setting expectations for what's coming). Brands that master this balance see 40-60% higher engagement in December compared to generic holiday content.
          </p>
          <div className="bg-white border-l-4 border-[#70BFFF] pl-6 py-4 my-6 print:my-4 print:border-l-2">
            <p className="text-gray-800 font-semibold italic">
              "December isn't a content dead zone. It's a strategic opportunity to finish strong and start ahead."
            </p>
          </div>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#BE55FF] to-[#70BFFF] rounded-full print:h-8"></span>
            Strategic Planning for 2026: Building Your Content Foundation
          </h2>
          
          <div className="grid md:grid-cols-1 gap-6 mb-8">
            <div className="bg-white border-2 border-[#70BFFF]/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-[#70BFFF]" />
                <h3 className="text-xl font-bold text-gray-900">1. Content Audit & Analysis</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Before planning 2026, analyze what worked in 2025. Review your top-performing content across all platforms. Identify patterns: what topics resonated, which formats drove engagement, and when your audience was most active. This data becomes the foundation for your 2026 strategy.
              </p>
              <p className="text-sm text-gray-600 italic">
                Action: Create a spreadsheet tracking your top 20 pieces of content from 2025. Note the topic, format, posting time, and engagement metrics. Look for patterns that reveal what your audience truly values.
              </p>
            </div>

            <div className="bg-white border-2 border-[#BE55FF]/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-[#BE55FF]" />
                <h3 className="text-xl font-bold text-gray-900">2. Set Strategic Content Pillars</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Define 3-5 content pillars that align with your brand values and audience needs. These pillars should be broad enough to generate consistent content but specific enough to maintain brand focus. Each pillar should serve a clear purpose: education, inspiration, community building, or thought leadership.
              </p>
              <p className="text-sm text-gray-600 italic">
                Example pillars: Industry insights, behind-the-scenes storytelling, client success stories, strategic tips, and community highlights. Each piece of content should fit at least one pillar.
              </p>
            </div>

            <div className="bg-white border-2 border-[#70BFFF]/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-[#70BFFF]" />
                <h3 className="text-xl font-bold text-gray-900">3. Plan Quarterly Themes</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Break your year into quarterly themes that build on each other. Q1 might focus on foundation-building and education. Q2 could emphasize growth and expansion. Q3 might highlight community and partnerships. Q4 could focus on reflection and planning. This approach creates narrative continuity and strategic progression.
              </p>
              <p className="text-sm text-gray-600 italic">
                Strategic benefit: Quarterly themes help you maintain focus, create cohesive content series, and make it easier to repurpose content across platforms while maintaining strategic alignment.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full print:h-8"></span>
            Platform Updates & Trends
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#70BFFF]/5 to-transparent rounded-xl border-l-4 border-[#70BFFF]">
              <div className="w-3 h-3 bg-[#70BFFF] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Instagram & Facebook</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Meta is prioritizing year-end recap content and forward-looking planning posts. Content that reflects on 2025 achievements and sets 2026 goals is seeing 2x higher reach. Use Instagram Stories highlights and Facebook Groups to create year-end engagement campaigns that build community momentum.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#BE55FF]/5 to-transparent rounded-xl border-l-4 border-[#BE55FF]">
              <div className="w-3 h-3 bg-[#BE55FF] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">LinkedIn</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Professional audiences are highly engaged with year-end reflection and 2026 planning content. Thought leadership posts about industry trends, lessons learned, and strategic predictions for 2026 are performing exceptionally well. Video content showing behind-the-scenes planning processes is also seeing strong engagement.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#70BFFF]/5 to-transparent rounded-xl border-l-4 border-[#70BFFF]">
              <div className="w-3 h-3 bg-[#70BFFF] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">YouTube & YouTube Shorts</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Year-end compilation videos and "what's coming in 2026" content are trending. Educational content that helps viewers plan for the new year is seeing high watch-time. Shorts featuring quick tips for 2026 planning are performing well, especially in the business and marketing niches.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#BE55FF]/5 to-transparent rounded-xl border-l-4 border-[#BE55FF]">
              <div className="w-3 h-3 bg-[#BE55FF] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">TikTok</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Authentic year-end reflections and "what I learned in 2025" content is resonating. The platform favours genuine, personal storytelling over polished corporate messaging. Brands that share real lessons, failures, and growth stories are building stronger connections with audiences.
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
                <p className="text-gray-900 font-semibold mb-1">Conduct Your 2025 Content Audit</p>
                <p className="text-gray-700">Review all your content from 2025. Identify your top 10-15 performers across platforms. Document what made them successful: topic, format, timing, and engagement metrics. This analysis will inform your 2026 strategy.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 print:p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 print:w-6 print:h-6">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-1">Create Your 2026 Content Calendar Framework</p>
                <p className="text-gray-700">Set up your content calendar structure for 2026. Define your content pillars, plan quarterly themes, and create a template that makes content planning efficient. Don't fill it in yet—just create the framework that will guide your planning.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 print:p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 print:w-6 print:h-6">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-1">Publish Year-End Reflection Content</p>
                <p className="text-gray-700">Create and publish content that reflects on 2025 achievements, lessons learned, and sets the stage for 2026. This could be a video, blog post, or social media series. Use this as an opportunity to engage your audience and build anticipation for what's coming next.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full print:h-8"></span>
            The Strategic Advantage of Year-End Planning
          </h2>
          <div className="bg-gradient-to-br from-[#70BFFF]/10 via-[#BE55FF]/10 to-[#70BFFF]/10 rounded-2xl p-8 print:p-6 print:bg-gray-50 border-2 border-[#70BFFF]/20">
            <p className="text-gray-800 leading-relaxed mb-4 text-base font-medium">
              Brands that use December strategically don't just finish the year strong—they start the new year ahead. While competitors are scrambling to create strategies in January, you'll already have a clear roadmap, content framework, and momentum built from year-end engagement.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              The most successful content strategies aren't created in January. They're built in December through careful analysis, strategic planning, and thoughtful execution. Use this month to position yourself for a year of consistent, strategic content that drives real business results.
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
            © 2025 Youu Media. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

