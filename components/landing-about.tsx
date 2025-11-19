"use client";

export function LandingAbout() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 relative overflow-hidden"
    >
      {/* Creative floating orbs and shapes - About section distribution */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs - spread around */}
        <div className="absolute top-0 left-1/3 w-[450px] h-[450px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-[480px] h-[480px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute top-2/3 left-0 w-[380px] h-[380px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
        <div className="absolute bottom-1/4 right-0 w-[420px] h-[420px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" />

        {/* Geometric shapes - distributed */}
        <div className="absolute top-1/4 right-1/5 w-28 h-28 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-pulse" style={{ animationDelay: "1.2s" }} />
        <div className="absolute top-1/2 right-0 w-18 h-18 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: "0.8s" }} />
        <div className="absolute bottom-1/2 left-1/3 w-22 h-22 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-pulse" style={{ animationDelay: "1.6s" }} />
        <div className="absolute top-3/4 right-1/3 w-26 h-26 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - Title with creative styling */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-2xl rotate-12 blur-xl" />
            <div className="relative">
              <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
                Who We Are
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                About
                <br />
                <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
                  Youu Media
                </span>
              </h2>
            </div>
          </div>

          {/* Right column - Content with creative card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-xl">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-bl-full" />
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed relative z-10">
                Youu Media is a creative agency built to help corporate and
                commercial brands attract clients, build trust and communicate
                authority through strategic visual content. We use expert
                videography, photography and storytelling to help brands stand
                out, influence decisions and achieve measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
