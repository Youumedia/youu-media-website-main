"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FreelancerApplicationForm } from "@/components/freelancer-application-form"

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Blurred background with animations */}
      <div className="fixed inset-0 backdrop-blur-sm bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100 -z-10">
        {/* Floating colored circles */}
        <div className="floating-circle circle-1 absolute w-32 h-32 rounded-full bg-purple-400/30 blur-xl"></div>
        <div className="floating-circle circle-2 absolute w-24 h-24 rounded-full bg-blue-400/30 blur-xl"></div>
        <div className="floating-circle circle-3 absolute w-28 h-28 rounded-full bg-red-400/30 blur-xl"></div>
        <div className="floating-circle circle-4 absolute w-20 h-20 rounded-full bg-green-400/30 blur-xl"></div>
        <div className="floating-circle circle-5 absolute w-36 h-36 rounded-full bg-cyan-400/30 blur-xl"></div>
        <div className="floating-circle circle-6 absolute w-24 h-24 rounded-full bg-pink-400/30 blur-xl"></div>
        
        {/* Animated stickmen characters */}
        <div className="stickman stickman-camera absolute">
          <div className="stickman-body">
            {/* Cameraman with camera */}
            <svg viewBox="0 0 100 150" className="w-20 h-30">
              {/* Head */}
              <circle cx="50" cy="20" r="12" fill="#333" />
              {/* Body */}
              <line x1="50" y1="32" x2="50" y2="70" stroke="#333" strokeWidth="3" />
              {/* Arms - holding camera */}
              <line x1="50" y1="45" x2="30" y2="55" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="45" x2="70" y2="55" stroke="#333" strokeWidth="3" />
              {/* Camera */}
              <rect x="25" y="50" width="30" height="15" fill="#666" rx="2" />
              <circle cx="40" cy="57" r="5" fill="#333" />
              {/* Legs */}
              <line x1="50" y1="70" x2="35" y2="100" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="70" x2="65" y2="100" stroke="#333" strokeWidth="3" />
            </svg>
          </div>
        </div>

        <div className="stickman stickman-light absolute">
          <div className="stickman-body">
            {/* Lighting tech */}
            <svg viewBox="0 0 100 150" className="w-20 h-30">
              <circle cx="50" cy="20" r="12" fill="#333" />
              <line x1="50" y1="32" x2="50" y2="70" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="45" x2="70" y2="35" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="45" x2="30" y2="50" stroke="#333" strokeWidth="3" />
              {/* Light stand */}
              <line x1="70" y1="35" x2="70" y2="10" stroke="#666" strokeWidth="2" />
              <polygon points="65,10 75,10 70,0" fill="#FFD700" />
              <line x1="50" y1="70" x2="40" y2="100" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="70" x2="60" y2="100" stroke="#333" strokeWidth="3" />
            </svg>
          </div>
        </div>

        <div className="stickman stickman-photo absolute">
          <div className="stickman-body">
            {/* Photographer */}
            <svg viewBox="0 0 100 150" className="w-20 h-30">
              <circle cx="50" cy="20" r="12" fill="#333" />
              <line x1="50" y1="32" x2="50" y2="70" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="45" x2="35" y2="50" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="45" x2="65" y2="50" stroke="#333" strokeWidth="3" />
              {/* Camera in hands */}
              <rect x="30" y="45" width="25" height="12" fill="#666" rx="2" />
              <circle cx="42" cy="51" r="4" fill="#333" />
              <line x1="50" y1="70" x2="38" y2="100" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="70" x2="62" y2="100" stroke="#333" strokeWidth="3" />
            </svg>
          </div>
        </div>

        <div className="stickman stickman-director absolute">
          <div className="stickman-body">
            {/* Director */}
            <svg viewBox="0 0 100 150" className="w-20 h-30">
              <circle cx="50" cy="20" r="12" fill="#333" />
              <line x1="50" y1="32" x2="50" y2="70" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="45" x2="25" y2="40" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="45" x2="75" y2="55" stroke="#333" strokeWidth="3" />
              {/* Clipboard */}
              <rect x="70" y="50" width="15" height="20" fill="#8B4513" rx="1" />
              <line x1="73" y1="55" x2="82" y2="55" stroke="#fff" strokeWidth="1" />
              <line x1="73" y1="60" x2="82" y2="60" stroke="#fff" strokeWidth="1" />
              <line x1="50" y1="70" x2="42" y2="100" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="70" x2="58" y2="100" stroke="#333" strokeWidth="3" />
            </svg>
          </div>
        </div>

        <div className="stickman stickman-editor absolute">
          <div className="stickman-body">
            {/* Editor with laptop */}
            <svg viewBox="0 0 100 150" className="w-20 h-30">
              <circle cx="50" cy="20" r="12" fill="#333" />
              <line x1="50" y1="32" x2="50" y2="70" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="45" x2="35" y2="55" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="45" x2="65" y2="55" stroke="#333" strokeWidth="3" />
              {/* Laptop */}
              <rect x="30" y="50" width="30" height="18" fill="#444" rx="1" />
              <rect x="32" y="52" width="26" height="12" fill="#6B8" />
              <line x1="50" y1="70" x2="40" y2="100" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="70" x2="60" y2="100" stroke="#333" strokeWidth="3" />
            </svg>
          </div>
        </div>

        <div className="stickman stickman-grip absolute">
          <div className="stickman-body">
            {/* Grip carrying equipment */}
            <svg viewBox="0 0 100 150" className="w-20 h-30">
              <circle cx="50" cy="20" r="12" fill="#333" />
              <line x1="50" y1="32" x2="50" y2="70" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="45" x2="25" y2="30" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="45" x2="75" y2="30" stroke="#333" strokeWidth="3" />
              {/* Tripod */}
              <line x1="25" y1="30" x2="25" y2="15" stroke="#666" strokeWidth="2" />
              <line x1="20" y1="15" x2="30" y2="15" stroke="#666" strokeWidth="2" />
              {/* Cable */}
              <path d="M 75 30 Q 80 25, 85 30" stroke="#666" strokeWidth="2" fill="none" />
              <line x1="50" y1="70" x2="43" y2="100" stroke="#333" strokeWidth="3" />
              <line x1="50" y1="70" x2="57" y2="100" stroke="#333" strokeWidth="3" />
            </svg>
          </div>
        </div>

        {/* Peeking stickmen */}
        <div className="stickman-peek peek-1 absolute">
          <svg viewBox="0 0 60 80" className="w-16 h-20">
            <circle cx="30" cy="15" r="10" fill="#333" />
            {/* Waving hand */}
            <line x1="30" y1="25" x2="30" y2="40" stroke="#333" strokeWidth="2" />
            <line x1="30" y1="30" x2="45" y2="20" stroke="#333" strokeWidth="2" className="wave-hand" />
            {/* Smile */}
            <path d="M 25 15 Q 30 18, 35 15" stroke="#fff" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        <div className="stickman-peek peek-2 absolute">
          <svg viewBox="0 0 60 80" className="w-16 h-20">
            <circle cx="30" cy="15" r="10" fill="#333" />
            <line x1="30" y1="25" x2="30" y2="40" stroke="#333" strokeWidth="2" />
            <line x1="30" y1="30" x2="15" y2="20" stroke="#333" strokeWidth="2" className="wave-hand" />
            <path d="M 25 15 Q 30 18, 35 15" stroke="#fff" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>

      {/* Main content with centered form */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-24 px-4">
        <div className="application-box w-full max-w-4xl relative">
          {/* Four-corner gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 via-transparent to-transparent blur-2xl -z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-purple-200/40 via-transparent to-transparent blur-2xl -z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-red-200/40 via-transparent to-transparent blur-2xl -z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-200/40 via-transparent to-transparent blur-2xl -z-10"></div>
          
          {/* Soft glow around box */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-300/20 via-blue-300/20 to-pink-300/20 blur-3xl -z-20 animate-pulse"></div>
          
          {/* Form container with glass effect */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8">
            <FreelancerApplicationForm />
          </div>
        </div>
      </div>

      <Footer />

      {/* CSS Animations */}
      <style jsx>{`
        /* Floating circles animation */}
        .floating-circle {
          animation: float 20s infinite ease-in-out;
        }
        
        .circle-1 { top: 10%; left: 5%; animation-delay: 0s; }
        .circle-2 { top: 60%; right: 10%; animation-delay: 3s; }
        .circle-3 { bottom: 15%; left: 15%; animation-delay: 6s; }
        .circle-4 { top: 30%; right: 20%; animation-delay: 9s; }
        .circle-5 { bottom: 40%; right: 5%; animation-delay: 12s; }
        .circle-6 { top: 80%; left: 50%; animation-delay: 15s; }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(20px, -20px) scale(1.1); opacity: 0.5; }
          50% { transform: translate(-10px, 20px) scale(0.9); opacity: 0.4; }
          75% { transform: translate(15px, 10px) scale(1.05); opacity: 0.6; }
        }

        /* Stickman positions and movements */
        .stickman-camera { top: 20%; left: 8%; animation: bounce 4s infinite; }
        .stickman-light { top: 50%; right: 5%; animation: sway 5s infinite; }
        .stickman-photo { bottom: 25%; left: 10%; animation: bounce 3.5s infinite; }
        .stickman-director { top: 35%; right: 12%; animation: walk 6s infinite; }
        .stickman-editor { bottom: 15%; right: 8%; animation: sway 4.5s infinite; }
        .stickman-grip { top: 65%; left: 5%; animation: walk 5.5s infinite; }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes sway {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(5px) rotate(2deg); }
        }

        @keyframes walk {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(15px); }
        }

        /* Peeking stickmen */}
        .stickman-peek { z-index: 20; }
        .peek-1 { 
          bottom: 40%; 
          right: calc(50% + 450px);
          animation: peekUpDown 8s infinite;
        }
        .peek-2 { 
          bottom: 30%; 
          left: calc(50% + 450px);
          animation: peekUpDown 10s infinite;
          animation-delay: 4s;
        }

        @keyframes peekUpDown {
          0%, 90%, 100% { transform: translateY(100px); opacity: 0; }
          10%, 80% { transform: translateY(0); opacity: 1; }
        }

        .wave-hand {
          animation: wave 1s infinite;
          transform-origin: 30px 30px;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }

        /* Responsive adjustments */}
        @media (max-width: 768px) {
          .stickman, .stickman-peek { display: none; }
          .floating-circle { width: 16px !important; height: 16px !important; }
        }

        @media (min-width: 769px) and (max-width: 1200px) {
          .stickman svg { width: 60px; height: 90px; }
          .peek-1 { right: calc(50% + 350px); }
          .peek-2 { left: calc(50% + 350px); }
        }
      `}</style>
    </main>
  )
}
