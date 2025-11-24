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

  const handleDownloadPDF = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const isMobile = typeof window !== 'undefined' && (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      (window.innerWidth <= 768 && 'ontouchstart' in window)
    );
    
    if (isMobile) {
      window.print();
      return;
    }
    
    if (contentRef.current) {
      const filename = `youu-media-newsletter-brand-storytelling-2025-11-10.pdf`;
      downloadNewsletterAsPDF(contentRef.current, filename).catch((error) => {
        console.error('PDF download failed:', error);
        window.print();
      });
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
          Brand Storytelling in the Age of Authenticity
        </h1>
        <p className="text-lg text-gray-600">
          10th November 2025
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">This Week's Insight</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The era of polished perfection is ending. Audiences are demanding authenticity, vulnerability, and genuine connection from brands. This shift is reshaping how successful brands tell their stories and connect with their communities.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full"></span>
            Why Authenticity Wins
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Modern consumers have developed sophisticated filters for marketing. They can spot inauthentic content instantly and, more importantly, they're choosing to ignore it. Brands that show their humanity, including imperfections, challenges, and genuine moments, build deeper connections.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This doesn't mean abandoning brand guidelines or professional standards. It means finding the balance between polish and personality, between strategy and spontaneity.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-[#70BFFF] to-[#BE55FF] rounded-full"></span>
            Strategies for Authentic Storytelling
          </h2>
          <div className="space-y-4">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Show Behind the Scenes</h3>
              <p className="text-gray-700 leading-relaxed">
                Reveal the process, not just the product. Share team moments, development challenges, and the real work that goes into what you create. This transparency builds trust and connection.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Embrace Vulnerability</h3>
              <p className="text-gray-700 leading-relaxed">
                When appropriate, share failures, lessons learned, and moments of uncertainty. Vulnerability creates relatability and shows your brand is human, not just a faceless corporation.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Prioritise Purpose Over Promotion</h3>
              <p className="text-gray-700 leading-relaxed">
                Lead with values and mission. Show why your brand exists beyond making sales. Purpose-driven storytelling resonates more deeply than transactional messaging.
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
              <p className="text-gray-700">Review your content from the past month. Identify opportunities to add more authentic, behind-the-scenes moments.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <p className="text-gray-700">Create one piece of content this week that shows the human side of your brand, whether that's your team, process, or values in action.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <p className="text-gray-700">Audit your brand voice guidelines. Ensure they allow for personality and authenticity while maintaining professional standards.</p>
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

