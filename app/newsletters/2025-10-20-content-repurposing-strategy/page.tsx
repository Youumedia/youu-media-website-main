"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { useRef } from "react";
import { downloadNewsletterAsPDF } from "@/components/pdf-download";

export default function NewsletterPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (contentRef.current) {
      try {
        const filename = `youu-media-newsletter-content-repurposing-2025-10-20.pdf`;
        await downloadNewsletterAsPDF(contentRef.current, filename);
      } catch (error) {
        console.error('PDF download failed:', error);
      }
    }
  };

  return (
    <>
      <div className="hidden print:block">
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
          Content Repurposing: Maximise Your Media Investment
        </h1>
        <p className="text-lg text-gray-600">
          20th October 2025
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">This Week's Insight</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Smart content repurposing transforms one piece of content into multiple assets, maximising your production investment and extending your content's reach. Here's how to do it strategically.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full"></span>
            The Repurposing Framework
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Start with one high-quality piece of content: a long-form video, a comprehensive article, or a detailed presentation. From this single asset, you can create dozens of pieces of content across multiple platforms and formats.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The key is planning repurposing from the creation stage. Think about how you'll extract value at each stage of production, not just after content is complete.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full"></span>
            Strategic Repurposing Methods
          </h2>
          <div className="space-y-4">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Format Conversion</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Transform long-form video into short clips, carousel posts, static images with quotes, and blog posts. Each format serves different audiences and platforms.
              </p>
              <p className="text-sm text-gray-600 italic">Example: A 10-minute video becomes 5 Reels, 3 carousels, 10 quote graphics, and a blog post.</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Platform Optimisation</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Adapt the same content for different platform requirements. What works on LinkedIn differs from TikTok, but the core message remains consistent.
              </p>
              <p className="text-sm text-gray-600 italic">Example: A professional LinkedIn video becomes an authentic TikTok version with different tone and pacing.</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Behind-the-Scenes Extraction</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Use outtakes, B-roll, and production moments as separate content pieces. These authentic moments often perform better than polished content.
              </p>
              <p className="text-sm text-gray-600 italic">Example: Bloopers, setup shots, and team moments become standalone content that shows your brand's personality.</p>
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
              <p className="text-gray-700">Choose one piece of existing content. Create a repurposing plan that generates at least 5 different assets from it.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <p className="text-gray-700">Set up a content repurposing workflow. Document how each piece of content will be adapted for different platforms.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <p className="text-gray-700">Track ROI. Measure how repurposed content performs compared to original content to validate your strategy.</p>
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

