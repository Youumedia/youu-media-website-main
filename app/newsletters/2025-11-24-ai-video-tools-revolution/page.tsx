"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, ArrowLeft, Zap, TrendingUp, Lightbulb, Target } from "lucide-react";
import { useEffect, useRef } from "react";
import { downloadNewsletterAsPDF } from "@/components/pdf-download";

export default function NewsletterPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (contentRef.current) {
      try {
        const filename = `youu-media-newsletter-ai-video-tools-2025-11-24.pdf`;
        await downloadNewsletterAsPDF(contentRef.current, filename);
      } catch (error) {
        console.error('PDF download failed:', error);
      }
    }
  };

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
              
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12" ref={contentRef}>
                <NewsletterContent />
                
                <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center no-print">
                  <Link href="/#portfolio">
                    <Button variant="outline" className="border-2 border-gray-300 text-gray-900 hover:bg-[#E6F2FF]">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Portfolio
                    </Button>
                  </Link>
                  <Button
                    onClick={handleDownloadPDF}
                    className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] hover:from-[#70BFFF]/90 hover:to-[#BE55FF]/90 text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
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
          AI Video Tools Revolutionise Content Creation
        </h1>
        <p className="text-lg text-gray-600">
          Monday, 24th November 2025
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-8 mb-10 print:mb-8 print:p-6 print:bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">This Week's Insight</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            The landscape of video content creation is undergoing a seismic shift. AI-powered video tools are no longer experimental. They're becoming essential parts of professional content workflows. This week, we explore what this means for brands and creators in 2025, and how to leverage these powerful tools while maintaining brand authenticity and strategic vision.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The democratisation of high-quality video production is here, but with great power comes the need for strategic thinking. Brands that simply use AI tools without a clear strategy risk blending into the noise.
          </p>
        </div>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full print:h-8"></span>
            The AI Video Revolution: What's Changed in 2025
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-base">
            Over the past 12 months, AI video tools have evolved from simple editing assistants to comprehensive content creation platforms. Tools like RunwayML, Pika, Synthesia, and Adobe's Firefly Video are now capable of generating professional-quality video content, dramatically reducing production time and costs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-base">
            What makes 2025 different is the accessibility and quality convergence. AI-generated content now rivals traditional production in many use cases, particularly for social media, explainer videos, and rapid prototyping. The barrier to entry has never been lower, but standing out requires strategic thinking and brand authenticity more than ever.
          </p>
          <div className="bg-white border-l-4 border-[#70BFFF] pl-6 py-4 my-6 print:my-4 print:border-l-2">
            <p className="text-gray-800 font-semibold italic">
              "The tools are becoming so good that the differentiator isn't the technology. It's the strategy, creativity, and brand vision behind how you use them."
            </p>
          </div>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#BE55FF] to-[#70BFFF] rounded-full print:h-8"></span>
            Strategic Implications for Brands
          </h2>
          
          <div className="grid md:grid-cols-1 gap-6 mb-8">
            <div className="bg-white border-2 border-[#70BFFF]/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-[#70BFFF]" />
                <h3 className="text-xl font-bold text-gray-900">1. Speed to Market</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                AI tools enable rapid iteration and testing. Brands can now produce multiple versions of content quickly, allowing for data-driven optimisation. However, this speed shouldn't compromise brand consistency or strategic messaging.
              </p>
              <p className="text-sm text-gray-600 italic">
                Real-world example: A brand can now test 10 different video hooks in the time it previously took to produce one, dramatically improving conversion rates through iterative testing.
              </p>
            </div>

            <div className="bg-white border-2 border-[#BE55FF]/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-[#BE55FF]" />
                <h3 className="text-xl font-bold text-gray-900">2. Cost Efficiency & Strategic Reinvestment</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Production costs are falling, but this doesn't mean quality should. Smart brands are reinvesting savings into strategic planning, brand development, and authentic storytelling that AI can't replicate. The key is shifting budget from execution to strategy.
              </p>
              <p className="text-sm text-gray-600 italic">
                Consider: If AI saves you 60% on production costs, reinvest that into creative strategy, brand positioning, and content planning that drives long-term growth.
              </p>
            </div>

            <div className="bg-white border-2 border-[#70BFFF]/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-6 w-6 text-[#70BFFF]" />
                <h3 className="text-xl font-bold text-gray-900">3. Human Creativity Remains Essential</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                While AI handles execution, strategic vision, creative direction, and brand storytelling require human insight. The most successful brands use AI as a tool, not a replacement for creative strategy. Your unique brand voice and strategic thinking are what differentiate you.
              </p>
              <p className="text-sm text-gray-600 italic">
                The brands winning in 2025 are those that combine AI efficiency with human creativity and strategic vision, not those replacing humans entirely.
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
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Instagram Reels</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  New AI-powered editing features now available for creators. Instagram's algorithm is favouring content that uses native editing tools. Test internal analytics to see how AI-generated content performs versus traditional production. Early data suggests mixed results depending on audience and niche.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#BE55FF]/5 to-transparent rounded-xl border-l-4 border-[#BE55FF]">
              <div className="w-3 h-3 bg-[#BE55FF] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">YouTube Shorts</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Algorithm favouring authentic, human-centric content over purely AI-generated videos. Balance automation with personal brand voice. YouTube's latest updates show that content with human faces and authentic moments performs 40% better than fully AI-generated content.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#70BFFF]/5 to-transparent rounded-xl border-l-4 border-[#70BFFF]">
              <div className="w-3 h-3 bg-[#70BFFF] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">LinkedIn Video</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Professional audiences responding well to behind-the-scenes content showing how brands integrate AI tools into workflows. Transparency builds trust. Thought leadership content that demonstrates AI integration is seeing 3x higher engagement than standard promotional content.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#BE55FF]/5 to-transparent rounded-xl border-l-4 border-[#BE55FF]">
              <div className="w-3 h-3 bg-[#BE55FF] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">TikTok</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Authenticity remains key. AI-generated content performs poorly unless it's clearly disclosed and adds value. The platform's audience values human connection and genuine moments over polished perfection.
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
                <p className="text-gray-900 font-semibold mb-1">Audit Your Workflow</p>
                <p className="text-gray-700">Review your current content creation process. Identify specific tasks where AI tools could streamline workflow without compromising brand quality. Create a list of 5-7 tasks that are repetitive or time-consuming.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 print:p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 print:w-6 print:h-6">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-1">Test One AI Tool</p>
                <p className="text-gray-700">This week, test one AI video tool. Start with something accessible like auto-captioning, basic editing, or thumbnail generation. Document what works, what doesn't, and how it impacts your workflow. Don't aim for perfection. Aim for learning.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 print:p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 print:w-6 print:h-6">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-1">Review Brand Guidelines</p>
                <p className="text-gray-700">Ensure your team understands how to maintain brand consistency when using AI-generated content. Update guidelines if needed to include AI usage policies, quality standards, and approval processes for AI-assisted content.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full print:h-8"></span>
            The Strategic Balance
          </h2>
          <div className="bg-gradient-to-br from-[#70BFFF]/10 via-[#BE55FF]/10 to-[#70BFFF]/10 rounded-2xl p-8 print:p-6 print:bg-gray-50 border-2 border-[#70BFFF]/20">
            <p className="text-gray-800 leading-relaxed mb-4 text-base font-medium">
              The most successful brands in 2025 aren't those avoiding AI or those completely replacing human creativity. They're the ones finding the strategic balance: using AI to handle execution and efficiency, while investing human creativity and insight into strategy, brand development, and authentic storytelling.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              As you explore AI video tools this week, remember: technology is a means to an end, not the end itself. Your brand's unique voice, strategic vision, and authentic connection with your audience are what ultimately drive success.
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
