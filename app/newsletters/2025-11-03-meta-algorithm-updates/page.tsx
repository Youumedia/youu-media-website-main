"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";

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

          <div className="bg-white relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
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
          Meta Algorithm Updates: What You Need to Know
        </h1>
        <p className="text-lg text-gray-600">
          3rd November 2025
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">This Week's Insight</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meta's latest algorithm updates are reshaping how content performs on Instagram and Facebook. Understanding these changes is crucial for maintaining and improving your content's reach and engagement.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full"></span>
            Key Algorithm Changes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meta's algorithm now prioritises content that drives meaningful engagement over passive consumption. This means likes alone aren't enough—comments, shares, saves, and time spent viewing are weighted more heavily in determining content distribution.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The platform is also favouring original content over reposted material, rewarding creators who produce unique, valuable content for their audience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full"></span>
            What This Means for Your Strategy
          </h2>
          <div className="space-y-4">
            <div className="bg-white border-2 border-[#70BFFF]/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prioritise Engagement Quality</h3>
              <p className="text-gray-700 leading-relaxed">
                Create content that prompts genuine responses. Ask questions, share insights that spark discussion, and encourage your audience to share their thoughts. Quality engagement signals to the algorithm that your content is valuable.
              </p>
            </div>
            <div className="bg-white border-2 border-[#BE55FF]/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Focus on Originality</h3>
              <p className="text-gray-700 leading-relaxed">
                Reduce reposting of others' content. Instead, create original content that reflects your brand's unique perspective. Even when inspired by trends, put your own spin on them.
              </p>
            </div>
            <div className="bg-white border-2 border-[#70BFFF]/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimise for Time Spent</h3>
              <p className="text-gray-700 leading-relaxed">
                Create content that keeps viewers watching. Use strong hooks, valuable insights, and engaging visuals that encourage people to stay on your content longer.
              </p>
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
              <p className="text-gray-700">Review your recent content performance. Identify which posts drove the most meaningful engagement (comments, shares, saves) versus just likes.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <p className="text-gray-700">Audit your content mix. Ensure at least 80% of your content is original rather than reposted material.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <p className="text-gray-700">Create a content prompt strategy. Plan questions and engagement hooks for each piece of content you publish this week.</p>
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

