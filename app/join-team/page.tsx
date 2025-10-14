"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FreelancerApplicationForm } from "@/components/freelancer-application-form";

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen relative bg-sky-100">
      <Navigation />

      {/* Main content with white glow */}
      <div className="relative z-10">
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* White glow container */}
            <div className="relative">
              {/* White glow effect */}
              <div className="absolute -inset-8 bg-white/80 rounded-3xl blur-3xl"></div>
              
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
