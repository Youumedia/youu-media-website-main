"use client";

export function LandingAbout() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 bg-gradient-to-b from-white via-[#70BFFF]/5 to-[#BE55FF]/5 relative overflow-hidden"
    >
      {/* Creative gradient overlay with shapes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#70BFFF]/5 via-transparent to-[#BE55FF]/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#70BFFF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BE55FF]/5 rounded-full blur-3xl" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-32 bg-gradient-to-b from-[#70BFFF] to-transparent opacity-30" />
      <div className="absolute bottom-20 right-10 w-32 h-2 bg-gradient-to-r from-[#BE55FF] to-transparent opacity-30" />

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
