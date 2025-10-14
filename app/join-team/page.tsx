"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FreelancerApplicationForm } from "@/components/freelancer-application-form";

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen relative bg-white overflow-hidden">
      <Navigation />
      
      {/* Particle Effect Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Large particles */}
        <div className="particle particle-1 absolute w-2 h-2 rounded-full bg-purple-400/30"></div>
        <div className="particle particle-2 absolute w-3 h-3 rounded-full bg-blue-400/25"></div>
        <div className="particle particle-3 absolute w-2.5 h-2.5 rounded-full bg-purple-500/20"></div>
        <div className="particle particle-4 absolute w-1.5 h-1.5 rounded-full bg-blue-500/30"></div>
        <div className="particle particle-5 absolute w-2 h-2 rounded-full bg-purple-400/25"></div>
        <div className="particle particle-6 absolute w-3 h-3 rounded-full bg-blue-400/20"></div>
        <div className="particle particle-7 absolute w-2 h-2 rounded-full bg-purple-500/30"></div>
        <div className="particle particle-8 absolute w-1.5 h-1.5 rounded-full bg-blue-500/25"></div>
        
        {/* Medium particles */}
        <div className="particle particle-9 absolute w-1.5 h-1.5 rounded-full bg-purple-400/20"></div>
        <div className="particle particle-10 absolute w-2 h-2 rounded-full bg-blue-400/15"></div>
        <div className="particle particle-11 absolute w-1 h-1 rounded-full bg-purple-500/25"></div>
        <div className="particle particle-12 absolute w-2.5 h-2.5 rounded-full bg-blue-500/20"></div>
        <div className="particle particle-13 absolute w-1.5 h-1.5 rounded-full bg-purple-400/15"></div>
        <div className="particle particle-14 absolute w-2 h-2 rounded-full bg-blue-400/20"></div>
        <div className="particle particle-15 absolute w-1 h-1 rounded-full bg-purple-500/30"></div>
        
        {/* Small particles */}
        <div className="particle particle-16 absolute w-1 h-1 rounded-full bg-blue-500/15"></div>
        <div className="particle particle-17 absolute w-1.5 h-1.5 rounded-full bg-purple-400/10"></div>
        <div className="particle particle-18 absolute w-1 h-1 rounded-full bg-blue-400/20"></div>
        <div className="particle particle-19 absolute w-0.5 h-0.5 rounded-full bg-purple-500/15"></div>
        <div className="particle particle-20 absolute w-1 h-1 rounded-full bg-blue-500/10"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <FreelancerApplicationForm />
      </div>

      <Footer />
      
      {/* Particle Animation Styles */}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(20px, -30px); opacity: 0.6; }
          50% { transform: translate(-15px, -60px); opacity: 0.4; }
          75% { transform: translate(30px, -40px); opacity: 0.7; }
        }
        
        @keyframes drift-particle {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          33% { transform: translate(-25px, -20px); opacity: 0.5; }
          66% { transform: translate(20px, -50px); opacity: 0.3; }
        }
        
        .particle { animation: float-particle 15s ease-in-out infinite; }
        
        .particle-1 { top: 10%; left: 15%; animation-delay: 0s; }
        .particle-2 { top: 20%; right: 20%; animation-delay: 2s; animation-name: drift-particle; animation-duration: 18s; }
        .particle-3 { top: 35%; left: 25%; animation-delay: 4s; }
        .particle-4 { top: 50%; right: 15%; animation-delay: 1s; animation-name: drift-particle; }
        .particle-5 { top: 65%; left: 10%; animation-delay: 6s; }
        .particle-6 { top: 75%; right: 25%; animation-delay: 3s; animation-duration: 20s; }
        .particle-7 { top: 15%; left: 45%; animation-delay: 5s; }
        .particle-8 { top: 40%; right: 35%; animation-delay: 7s; animation-name: drift-particle; }
        
        .particle-9 { top: 25%; left: 60%; animation-delay: 1.5s; animation-duration: 17s; }
        .particle-10 { top: 55%; right: 45%; animation-delay: 3.5s; }
        .particle-11 { top: 30%; left: 5%; animation-delay: 2.5s; animation-name: drift-particle; }
        .particle-12 { top: 70%; right: 10%; animation-delay: 4.5s; animation-duration: 19s; }
        .particle-13 { top: 45%; left: 70%; animation-delay: 6.5s; }
        .particle-14 { top: 80%; right: 50%; animation-delay: 5.5s; animation-name: drift-particle; }
        .particle-15 { top: 12%; left: 80%; animation-delay: 7.5s; }
        
        .particle-16 { top: 60%; left: 40%; animation-delay: 8s; animation-duration: 16s; }
        .particle-17 { top: 22%; right: 60%; animation-delay: 9s; animation-name: drift-particle; }
        .particle-18 { top: 48%; left: 50%; animation-delay: 10s; }
        .particle-19 { top: 72%; right: 70%; animation-delay: 11s; animation-duration: 21s; }
        .particle-20 { top: 38%; left: 90%; animation-delay: 12s; animation-name: drift-particle; }
        
        @media (max-width: 768px) {
          .particle { display: none; }
        }
      `}</style>
    </main>
  );
}
