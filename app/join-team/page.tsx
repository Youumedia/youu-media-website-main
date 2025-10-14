"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FreelancerApplicationForm } from "@/components/freelancer-application-form";

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen relative bg-sky-400">
      <Navigation />

      {/* Main content with LED glow */}
      <div className="relative z-10">
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* LED-style white glow container */}
            <div className="relative">
              {/* Multiple glow layers for LED effect */}
              <div className="absolute -inset-1 bg-white rounded-3xl blur-sm opacity-90"></div>
              <div className="absolute -inset-2 bg-white rounded-3xl blur-md opacity-70"></div>
              <div className="absolute -inset-4 bg-white rounded-3xl blur-lg opacity-50"></div>
              <div className="absolute -inset-6 bg-white rounded-3xl blur-xl opacity-30"></div>
              
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
