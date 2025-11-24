"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function NewsletterPage() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      <div className="hidden print:block">
        <NewsletterContent />
      </div>
      <div className="print:hidden">
        <main className="min-h-screen relative bg-white overflow-hidden">
          <Navigation />

          <div className="bg-[#E6F2FF] relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <Link href="/#portfolio" className="inline-flex items-center text-[#70BFFF] hover:text-[#BE55FF] mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Our Work
              </Link>
              
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <NewsletterContent />
                
                <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
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
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 20mm;
            background: white;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

function NewsletterContent() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8 pb-8 border-b-2 border-gray-200">
        <div className="inline-block bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
          Weekly Newsletter
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Short-Form Video Strategy: What's Working Now
        </h1>
        <p className="text-lg text-gray-600">
          17th November 2025
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">This Week's Insight</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Short-form video continues to dominate social media engagement. This week, we're breaking down the latest trends across TikTok, Instagram Reels, and YouTube Shorts that are driving real results for brands.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full"></span>
            The Hook Matters More Than Ever
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            With attention spans shrinking and content volume increasing, the first three seconds of your video are make-or-break. Algorithms favour content that keeps viewers watching, so hooking your audience immediately isn't optional—it's essential.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Successful hooks in 2025 follow a pattern: immediate visual interest, a clear value proposition, or an intriguing question. Brands that master this see 3-5x higher completion rates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full"></span>
            Platform-Specific Strategies
          </h2>
          <div className="space-y-4">
            <div className="bg-white border-2 border-[#70BFFF]/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">TikTok: Authenticity Wins</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Raw, unpolished content performs better than over-produced videos. Users want to see the real you, the process, the behind-the-scenes. Brands that show their personality and humanity are rewarded with higher engagement.
              </p>
              <p className="text-sm text-gray-600 italic">Tip: Use trending sounds, but make them your own with unique visuals or context.</p>
            </div>
            <div className="bg-white border-2 border-[#BE55FF]/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instagram Reels: Quality + Trend</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Instagram audiences expect slightly more polished content than TikTok, but trend participation remains crucial. The sweet spot is professional production combined with timely trend integration.
              </p>
              <p className="text-sm text-gray-600 italic">Tip: Cross-post from Reels to your main feed for maximum reach and engagement.</p>
            </div>
            <div className="bg-white border-2 border-[#70BFFF]/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">YouTube Shorts: Educational Content</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Shorts that teach, explain, or provide value see the highest performance. YouTube's audience is actively seeking knowledge and insights, so educational content aligns perfectly with user intent.
              </p>
              <p className="text-sm text-gray-600 italic">Tip: Include timestamps and clear takeaways in your description for better SEO.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full"></span>
            Action Items for This Week
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <p className="text-gray-700">Audit your last month's short-form content. Identify which videos had the highest completion rates and analyse what made them successful.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <p className="text-gray-700">Create a content calendar that includes trend participation days. Set aside time each week to quickly adapt trending formats to your brand.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <p className="text-gray-700">Test one new hook format this week. Whether it's a question, visual surprise, or value statement, measure performance and iterate.</p>
            </li>
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t-2 border-gray-200 text-center">
          <p className="text-gray-600 text-sm mb-4">
            <strong className="text-gray-900">Youu Media</strong> - Strategic Visual Content for Brands
          </p>
          <p className="text-gray-500 text-xs">
            Delivered every Monday | Strategic insights for strategic brands
          </p>
        </div>
      </div>
    </div>
  );
}

