"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FreelancerApplicationForm } from "@/components/freelancer-application-form";

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navigation />

      {/* Production team video background */}
      <div className="fixed inset-0 -z-10 bg-black">
        {/* Background video/image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=2000&auto=format&fit=crop')",
          }}
        ></div>
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <FreelancerApplicationForm />
      </div>

      <Footer />

    </main>
  );
}
