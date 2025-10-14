"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FreelancerApplicationForm } from "@/components/freelancer-application-form";

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50">
      <Navigation />

      {/* Enhanced animated background elements - same as sign-in page */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large primary blob */}
        <div className="absolute top-1/4 left-1/3 w-[32rem] h-[32rem] bg-gradient-to-br from-[#70BFFF]/40 to-[#BE55FF]/30 rounded-full blur-3xl animate-float-slow shadow-2xl" />
        
        {/* Medium secondary blob */}
        <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#BE55FF]/50 to-[#70BFFF]/40 rounded-full blur-2xl animate-float-medium shadow-xl" />
        
        {/* Small accent blobs */}
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#70BFFF]/35 to-[#BE55FF]/35 rounded-full blur-xl animate-float-fast shadow-lg" />
        <div className="absolute top-1/6 right-1/3 w-48 h-48 bg-gradient-to-bl from-[#BE55FF]/45 to-[#70BFFF]/35 rounded-full blur-lg animate-drift-slow shadow-lg" />
        <div className="absolute bottom-1/4 left-1/6 w-56 h-56 bg-gradient-to-tr from-[#70BFFF]/35 to-[#BE55FF]/30 rounded-full blur-xl animate-drift-fast shadow-lg" />
        
        {/* Enhanced floating particles */}
        <div className="absolute top-1/3 right-1/2 w-32 h-32 bg-[#70BFFF]/60 rounded-full blur-md animate-pulse-float shadow-lg" />
        <div className="absolute bottom-1/3 right-1/6 w-40 h-40 bg-[#BE55FF]/60 rounded-full blur-md animate-pulse-drift shadow-lg" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <FreelancerApplicationForm />
      </div>

      <Footer />

    </main>
  );
}
