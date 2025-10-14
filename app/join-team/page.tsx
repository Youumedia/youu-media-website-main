"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FreelancerApplicationForm } from "@/components/freelancer-application-form";

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen relative bg-white overflow-hidden">
      <Navigation />
      
      {/* Dot Grid Pattern Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Base dot grid pattern */}
        <div className="dot-grid absolute inset-0"></div>
        
        {/* Highlighted animated dots */}
        <div className="highlight-dot dot-1 absolute w-1.5 h-1.5 rounded-full bg-purple-500"></div>
        <div className="highlight-dot dot-2 absolute w-1.5 h-1.5 rounded-full bg-blue-500"></div>
        <div className="highlight-dot dot-3 absolute w-1.5 h-1.5 rounded-full bg-purple-600"></div>
        <div className="highlight-dot dot-4 absolute w-1.5 h-1.5 rounded-full bg-blue-600"></div>
        <div className="highlight-dot dot-5 absolute w-1.5 h-1.5 rounded-full bg-purple-500"></div>
        <div className="highlight-dot dot-6 absolute w-1.5 h-1.5 rounded-full bg-blue-500"></div>
        <div className="highlight-dot dot-7 absolute w-1.5 h-1.5 rounded-full bg-purple-600"></div>
        <div className="highlight-dot dot-8 absolute w-1.5 h-1.5 rounded-full bg-blue-600"></div>
        <div className="highlight-dot dot-9 absolute w-1.5 h-1.5 rounded-full bg-purple-500"></div>
        <div className="highlight-dot dot-10 absolute w-1.5 h-1.5 rounded-full bg-blue-500"></div>
        <div className="highlight-dot dot-11 absolute w-1.5 h-1.5 rounded-full bg-purple-600"></div>
        <div className="highlight-dot dot-12 absolute w-1.5 h-1.5 rounded-full bg-blue-600"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <FreelancerApplicationForm />
      </div>

      <Footer />
      
      {/* Dot Grid Pattern Styles */}
      <style jsx>{`
        /* Base dot grid */
        .dot-grid {
          background-image: radial-gradient(circle, rgba(148, 163, 184, 0.15) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        /* Highlighted dot animation */
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1);
            box-shadow: 0 0 0 0 currentColor;
          }
          50% { 
            opacity: 1; 
            transform: scale(1.3);
            box-shadow: 0 0 8px 2px currentColor;
          }
        }
        
        .highlight-dot {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        /* Position highlighted dots on grid intersections */
        .dot-1 { top: 120px; left: 160px; animation-delay: 0s; }
        .dot-2 { top: 240px; right: 200px; animation-delay: 0.5s; }
        .dot-3 { top: 400px; left: 280px; animation-delay: 1s; }
        .dot-4 { top: 560px; right: 160px; animation-delay: 1.5s; }
        .dot-5 { top: 320px; left: 120px; animation-delay: 2s; }
        .dot-6 { top: 480px; right: 280px; animation-delay: 2.5s; }
        .dot-7 { top: 200px; left: 360px; animation-delay: 0.8s; }
        .dot-8 { top: 440px; right: 320px; animation-delay: 1.3s; }
        .dot-9 { top: 280px; left: 520px; animation-delay: 1.8s; }
        .dot-10 { top: 520px; right: 240px; animation-delay: 2.3s; }
        .dot-11 { top: 160px; left: 240px; animation-delay: 0.3s; }
        .dot-12 { top: 360px; right: 400px; animation-delay: 1.1s; }
        
        @media (max-width: 768px) {
          .dot-grid {
            background-size: 30px 30px;
          }
          .highlight-dot {
            width: 4px;
            height: 4px;
          }
        }
      `}</style>
    </main>
  );
}
