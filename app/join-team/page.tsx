"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FreelancerApplicationForm } from "@/components/freelancer-application-form"

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Cartoon-style animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-sky-100 via-pink-50 to-purple-100 -z-10">
        {/* Cartoon colorful shapes that merge and move */}
        <div className="cartoon-shape shape-1 absolute rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
        <div className="cartoon-shape shape-2 absolute rounded-full bg-gradient-to-br from-pink-400 to-rose-500"></div>
        <div className="cartoon-shape shape-3 absolute rounded-full bg-gradient-to-br from-purple-400 to-indigo-500"></div>
        <div className="cartoon-shape shape-4 absolute rounded-full bg-gradient-to-br from-green-400 to-emerald-500"></div>
        <div className="cartoon-shape shape-5 absolute rounded-full bg-gradient-to-br from-blue-400 to-cyan-500"></div>
        <div className="cartoon-shape shape-6 absolute rounded-full bg-gradient-to-br from-red-400 to-pink-500"></div>
        <div className="cartoon-shape shape-7 absolute rounded-full bg-gradient-to-br from-teal-400 to-blue-500"></div>
        <div className="cartoon-shape shape-8 absolute rounded-full bg-gradient-to-br from-amber-400 to-yellow-500"></div>
        <div className="cartoon-shape shape-9 absolute rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-500"></div>
        <div className="cartoon-shape shape-10 absolute rounded-full bg-gradient-to-br from-lime-400 to-green-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <FreelancerApplicationForm />
      </div>

      <Footer />

      {/* CSS Animations */}
      <style jsx>{`
        /* Cartoon shape animations - merging and moving */
        .cartoon-shape {
          animation: cartoonMove 15s infinite ease-in-out;
          filter: blur(40px);
          opacity: 0.7;
          mix-blend-mode: multiply;
        }
        
        .shape-1 { 
          width: 300px; 
          height: 300px; 
          top: 5%; 
          left: 10%; 
          animation-delay: 0s; 
        }
        .shape-2 { 
          width: 250px; 
          height: 250px; 
          top: 15%; 
          right: 15%; 
          animation-delay: 2s; 
        }
        .shape-3 { 
          width: 350px; 
          height: 350px; 
          bottom: 10%; 
          left: 5%; 
          animation-delay: 4s; 
        }
        .shape-4 { 
          width: 280px; 
          height: 280px; 
          top: 40%; 
          right: 10%; 
          animation-delay: 1s; 
        }
        .shape-5 { 
          width: 320px; 
          height: 320px; 
          bottom: 20%; 
          right: 20%; 
          animation-delay: 3s; 
        }
        .shape-6 { 
          width: 270px; 
          height: 270px; 
          top: 60%; 
          left: 15%; 
          animation-delay: 5s; 
        }
        .shape-7 { 
          width: 290px; 
          height: 290px; 
          top: 25%; 
          left: 40%; 
          animation-delay: 6s; 
        }
        .shape-8 { 
          width: 310px; 
          height: 310px; 
          bottom: 35%; 
          right: 5%; 
          animation-delay: 7s; 
        }
        .shape-9 { 
          width: 260px; 
          height: 260px; 
          top: 50%; 
          left: 50%; 
          animation-delay: 8s; 
        }
        .shape-10 { 
          width: 340px; 
          height: 340px; 
          bottom: 5%; 
          left: 35%; 
          animation-delay: 9s; 
        }
        
        @keyframes cartoonMove {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
          }
          25% { 
            transform: translate(50px, -40px) scale(1.2); 
          }
          50% { 
            transform: translate(-30px, 50px) scale(0.8); 
          }
          75% { 
            transform: translate(40px, 30px) scale(1.1); 
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .cartoon-shape { 
            width: 150px !important; 
            height: 150px !important; 
            filter: blur(30px);
          }
        }

        @media (min-width: 769px) and (max-width: 1200px) {
          .cartoon-shape { 
            filter: blur(35px);
          }
        }
      `}</style>
    </main>
  )
}
