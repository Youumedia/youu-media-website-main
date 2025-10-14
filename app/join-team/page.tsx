"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FreelancerApplicationForm } from "@/components/freelancer-application-form";

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen relative bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400">
      <Navigation />
      
      {/* Main content with LED glow */}
      <div className="relative z-10">
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* LED glow container */}
            <div className="relative">
              {/* Multiple layered LED glow effect */}
              <div className="absolute -inset-1 bg-white rounded-lg blur-sm opacity-75"></div>
              <div className="absolute -inset-2 bg-white rounded-lg blur-md opacity-60"></div>
              <div className="absolute -inset-4 bg-white rounded-xl blur-lg opacity-50"></div>
              <div className="absolute -inset-6 bg-white rounded-2xl blur-xl opacity-40"></div>
              <div className="absolute -inset-8 bg-white rounded-3xl blur-2xl opacity-30"></div>
              
              {/* Form content */}
              <div className="relative">
                <FreelancerApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
