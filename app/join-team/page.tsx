"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FreelancerApplicationForm } from "@/components/freelancer-application-form";

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen relative bg-white">
      <Navigation />
      
      {/* Main content */}
      <div className="relative z-10">
        <FreelancerApplicationForm />
      </div>

      <Footer />
    </main>
  );
}
