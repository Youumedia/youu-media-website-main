"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FreelancerApplicationForm } from "@/components/freelancer-application-form";

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50">
      <Navigation />

      {/* Enhanced animated background elements - same as home page */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large primary blob */}
        <div className="absolute top-1/4 left-1/3 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-400/40 to-purple-400/30 rounded-full blur-3xl animate-float-slow shadow-2xl" />

        {/* Medium secondary blob */}
        <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/50 to-blue-400/40 rounded-full blur-2xl animate-float-medium shadow-xl" />

        {/* Small accent blobs */}
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/35 to-purple-400/35 rounded-full blur-xl animate-float-fast shadow-lg" />
        <div className="absolute top-1/6 right-1/3 w-48 h-48 bg-gradient-to-bl from-purple-500/45 to-blue-400/35 rounded-full blur-lg animate-drift-slow shadow-lg" />
        <div className="absolute bottom-1/4 left-1/6 w-56 h-56 bg-gradient-to-tr from-blue-400/35 to-purple-400/30 rounded-full blur-xl animate-drift-fast shadow-lg" />

        {/* Enhanced floating particles */}
        <div className="absolute top-1/3 right-1/2 w-32 h-32 bg-blue-400/60 rounded-full blur-md animate-pulse-float shadow-lg" />
        <div className="absolute bottom-1/3 right-1/6 w-40 h-40 bg-purple-500/60 rounded-full blur-md animate-pulse-drift shadow-lg" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <FreelancerApplicationForm />
      </div>

      <Footer />
    </main>
  );
}
