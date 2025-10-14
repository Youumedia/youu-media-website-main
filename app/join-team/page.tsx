"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FreelancerApplicationForm } from "@/components/freelancer-application-form";

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navigation />

      {/* Videography-themed cinematic background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black -z-10">
        {/* Cinematic light rays */}
        <div className="light-ray ray-1 absolute h-full opacity-20 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="light-ray ray-2 absolute h-full opacity-15 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
        <div className="light-ray ray-3 absolute h-full opacity-25 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>

        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>

        {/* Floating camera lens flares */}
        <div className="lens-flare flare-1 absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/20 to-transparent blur-xl"></div>
        <div className="lens-flare flare-2 absolute w-24 h-24 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent blur-xl"></div>
        <div className="lens-flare flare-3 absolute w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400/15 to-transparent blur-2xl"></div>
        <div className="lens-flare flare-4 absolute w-28 h-28 rounded-full bg-gradient-to-br from-indigo-400/20 to-transparent blur-xl"></div>

        {/* Subtle grid overlay for professional look */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <FreelancerApplicationForm />
      </div>

      <Footer />

      {/* CSS Animations */}
      <style jsx>{`
        /* Cinematic light ray animations */
        .light-ray {
          width: 100px;
          animation: lightSweep 12s infinite ease-in-out;
          transform-origin: top;
          filter: blur(50px);
        }

        .ray-1 {
          left: 20%;
          animation-delay: 0s;
        }
        .ray-2 {
          left: 50%;
          animation-delay: 4s;
        }
        .ray-3 {
          left: 70%;
          animation-delay: 8s;
        }

        @keyframes lightSweep {
          0%,
          100% {
            transform: translateX(0) scaleY(1);
            opacity: 0.2;
          }
          50% {
            transform: translateX(30px) scaleY(1.1);
            opacity: 0.3;
          }
        }

        /* Lens flare animations */
        .lens-flare {
          animation: floatFlare 20s infinite ease-in-out;
        }

        .flare-1 {
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }
        .flare-2 {
          top: 60%;
          right: 15%;
          animation-delay: 5s;
        }
        .flare-3 {
          bottom: 20%;
          left: 20%;
          animation-delay: 10s;
        }
        .flare-4 {
          top: 40%;
          right: 25%;
          animation-delay: 15s;
        }

        @keyframes floatFlare {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          25% {
            transform: translate(30px, -20px) scale(1.1);
            opacity: 0.25;
          }
          50% {
            transform: translate(-20px, 30px) scale(0.9);
            opacity: 0.15;
          }
          75% {
            transform: translate(20px, 15px) scale(1.05);
            opacity: 0.2;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .light-ray {
            width: 60px;
            filter: blur(30px);
          }
          .lens-flare {
            width: 80px !important;
            height: 80px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1200px) {
          .light-ray {
            width: 80px;
            filter: blur(40px);
          }
        }
      `}</style>
    </main>
  );
}
