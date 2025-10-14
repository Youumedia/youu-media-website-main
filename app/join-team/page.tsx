"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FreelancerApplicationForm } from "@/components/freelancer-application-form";

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen relative bg-white overflow-hidden">
      <Navigation />
      
      {/* Subtle Moving Grid Background */}
      <div className="fixed inset-0 pointer-events-none moving-grid"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <FreelancerApplicationForm />
      </div>

      <Footer />
      
      {/* Background Grid Styles */}
      <style jsx>{`
        /* Subtle moving gradient grid */
        .moving-grid {
          background-image: 
            linear-gradient(rgba(147, 51, 234, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }
        
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        @media (max-width: 768px) {
          .moving-grid {
            background-size: 30px 30px;
          }
          @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 30px 30px; }
          }
        }
      `}</style>
    </main>
  );
}
