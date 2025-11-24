"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, ArrowLeft, Play, TrendingUp, Target, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { downloadNewsletterAsPDF } from "@/components/pdf-download";

export default function NewsletterPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    setTimeout(async () => {
      if (contentRef.current) {
        try {
          const filename = `youu-media-newsletter-short-form-video-2025-11-17.pdf`;
          await downloadNewsletterAsPDF(contentRef.current, filename);
        } catch (error) {
          console.error('PDF download failed:', error);
          window.print();
        }
      }
    }, 100);
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
          Short-Form Video Strategy: What's Working Now
        </h1>
        <p className="text-lg text-gray-600">
          Monday, 17th November 2025
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-8 mb-10 print:mb-8 print:p-6 print:bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">This Week's Insight</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Short-form video continues to dominate social media engagement in 2025. With attention spans shorter than ever and content volume at an all-time high, brands that master short-form video strategy are seeing 3-5x higher engagement rates. This week, we're breaking down exactly what's working across TikTok, Instagram Reels, and YouTube Shorts, based on real data from brands seeing measurable results.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The winning formula isn't about producing more content. It's about producing smarter content that hooks viewers in the first three seconds and delivers value throughout.
          </p>
        </div>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full print:h-8"></span>
            The Hook Matters More Than Ever
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-base">
            Research shows that 50% of viewers decide whether to continue watching in the first 3 seconds. Algorithms heavily favour content with high watch-time completion rates. This means your hook isn't just nice to have. It's the difference between viral reach and invisible content.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-base">
            Successful hooks in 2025 follow proven patterns: immediate visual interest (bright colours, movement, faces), a clear value proposition ("I'll show you the one mistake everyone makes"), or an intriguing question that creates curiosity gap ("What if I told you everything you know about X is wrong?"). Brands that master these patterns see completion rates of 70-85% versus 20-30% for weak hooks.
          </p>
          <div className="bg-white border-l-4 border-[#BE55FF] pl-6 py-4 my-6 print:my-4 print:border-l-2">
            <p className="text-gray-800 font-semibold italic">
              "The first frame of your video is your most valuable real estate. Use it wisely, or lose your audience before they've even started."
            </p>
          </div>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#BE55FF] to-[#70BFFF] rounded-full print:h-8"></span>
            Platform-Specific Strategies That Actually Work
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border-2 border-[#70BFFF]/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Play className="h-6 w-6 text-[#70BFFF]" />
                <h3 className="text-xl font-bold text-gray-900">TikTok: Authenticity Wins</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Raw, unpolished content performs significantly better than over-produced videos on TikTok. Users want to see the real you, the process, the behind-the-scenes, the genuine moments. Brands that show their personality and humanity see 2-3x higher engagement than those with corporate perfection.
              </p>
              <p className="text-sm text-gray-600 italic mb-3">
                Tip: Use trending sounds, but make them your own with unique visuals or context that reflects your brand personality.
              </p>
              <div className="bg-gray-50 rounded-lg p-3 mt-3">
                <p className="text-xs text-gray-700 font-semibold mb-1">What's Working:</p>
                <ul className="text-xs text-gray-600 space-y-1 ml-4 list-disc">
                  <li>Behind-the-scenes content showing real moments</li>
                  <li>Quick tutorials (15-30 seconds)</li>
                  <li>Reaction videos and authentic responses</li>
                  <li>Trend participation with brand twist</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-[#BE55FF]/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-[#BE55FF]" />
                <h3 className="text-xl font-bold text-gray-900">Instagram Reels: Quality + Trend</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Instagram audiences expect slightly more polished content than TikTok, but trend participation remains crucial. The sweet spot is professional production (good lighting, clear audio) combined with timely trend integration. Cross-posting from Reels to your main feed doubles reach.
              </p>
              <p className="text-sm text-gray-600 italic mb-3">
                Tip: The Instagram algorithm heavily favours content posted during your audience's peak hours. Use Insights to identify optimal posting times.
              </p>
              <div className="bg-gray-50 rounded-lg p-3 mt-3">
                <p className="text-xs text-gray-700 font-semibold mb-1">What's Working:</p>
                <ul className="text-xs text-gray-600 space-y-1 ml-4 list-disc">
                  <li>Trending audio with branded visuals</li>
                  <li>Educational content with clear takeaways</li>
                  <li>Product showcases in action</li>
                  <li>User-generated content repurposed</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-[#70BFFF]/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-[#70BFFF]" />
                <h3 className="text-xl font-bold text-gray-900">YouTube Shorts: Educational Content</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Shorts that teach, explain, or provide value see the highest performance on YouTube. The platform's audience is actively seeking knowledge and insights, so educational content aligns perfectly with user intent. Include timestamps, clear takeaways, and descriptive titles for better SEO.
              </p>
              <p className="text-sm text-gray-600 italic mb-3">
                Tip: YouTube Shorts that drive viewers to longer-form content see algorithm boosts. Include clear CTAs linking to full videos.
              </p>
              <div className="bg-gray-50 rounded-lg p-3 mt-3">
                <p className="text-xs text-gray-700 font-semibold mb-1">What's Working:</p>
                <ul className="text-xs text-gray-600 space-y-1 ml-4 list-disc">
                  <li>How-to tutorials and quick tips</li>
                  <li>Problem-solving content</li>
                  <li>Industry insights and trends</li>
                  <li>Before/after transformations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full print:h-8"></span>
            The 3-Second Hook Formula
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-[#70BFFF]/10 to-transparent rounded-xl p-5 border border-[#70BFFF]/20">
              <div className="w-10 h-10 bg-[#70BFFF] rounded-full flex items-center justify-center mb-3 text-white font-bold">1</div>
              <h4 className="font-bold text-gray-900 mb-2">Visual Hook</h4>
              <p className="text-sm text-gray-700">Bright colours, movement, or an intriguing visual that stops scrolling immediately.</p>
            </div>
            <div className="bg-gradient-to-br from-[#BE55FF]/10 to-transparent rounded-xl p-5 border border-[#BE55FF]/20">
              <div className="w-10 h-10 bg-[#BE55FF] rounded-full flex items-center justify-center mb-3 text-white font-bold">2</div>
              <h4 className="font-bold text-gray-900 mb-2">Value Statement</h4>
              <p className="text-sm text-gray-700">Clear promise of what the viewer will learn or gain by watching.</p>
            </div>
            <div className="bg-gradient-to-br from-[#70BFFF]/10 to-transparent rounded-xl p-5 border border-[#70BFFF]/20">
              <div className="w-10 h-10 bg-[#70BFFF] rounded-full flex items-center justify-center mb-3 text-white font-bold">3</div>
              <h4 className="font-bold text-gray-900 mb-2">Curiosity Gap</h4>
              <p className="text-sm text-gray-700">Question or statement that creates intrigue and demands an answer.</p>
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
                <p className="text-gray-900 font-semibold mb-1">Audit Your Recent Content</p>
                <p className="text-gray-700">Review your last month's short-form videos. Identify which ones had the highest completion rates (aim for 70%+) and analyse what made them successful. Create a checklist of successful hook patterns to replicate.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 print:p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 print:w-6 print:h-6">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-1">Build a Trend Calendar</p>
                <p className="text-gray-700">Create a content calendar that includes dedicated "trend participation" days. Set aside 2-3 hours each week to quickly adapt trending formats to your brand. Use tools like TrendTok or platform analytics to spot emerging trends early.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 print:p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 print:w-6 print:h-6">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold mb-1">Test New Hook Formats</p>
                <p className="text-gray-700">This week, test one new hook format you haven't tried before, whether it's a question, visual surprise, or bold value statement. Create 3 variations and measure which performs best. Use the winning pattern for your next batch of content.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 print:mb-4">
            <span className="w-1 h-10 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full print:h-8"></span>
            Key Takeaway
          </h2>
          <div className="bg-gradient-to-br from-[#70BFFF]/10 via-[#BE55FF]/10 to-[#70BFFF]/10 rounded-2xl p-8 print:p-6 print:bg-gray-50 border-2 border-[#70BFFF]/20">
            <p className="text-gray-800 leading-relaxed mb-4 text-base font-medium">
              Short-form video success isn't about producing more content. It's about producing smarter content. Master the 3-second hook, understand each platform's unique preferences, and consistently deliver value. Brands that combine strategic hook development with authentic brand voice see exponential growth in engagement and reach.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              Remember: Every second counts. Your first three seconds determine whether your content gets watched, shared, and algorithmically boosted, or ignored completely.
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
