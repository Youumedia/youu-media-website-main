"use client";

export function LandingMission() {
  return (
    <section
      id="mission"
      className="py-12 md:py-16 bg-[#E6F2FF] relative overflow-hidden"
    >
      {/* Creative floating orbs and shapes - Mission section distribution */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs - spread around */}
        <div className="absolute top-1/6 left-1/5 w-[440px] h-[440px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/6 right-1/5 w-[460px] h-[460px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute top-2/3 left-1/2 w-[370px] h-[370px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
        <div className="absolute bottom-1/3 right-1/2 w-[400px] h-[400px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" />

        {/* Geometric shapes - distributed */}
        <div className="absolute top-1/3 left-1/4 w-30 h-30 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-pulse" style={{ animationDelay: "1.2s" }} />
        <div className="absolute top-1/2 left-0 w-18 h-18 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: "0.8s" }} />
        <div className="absolute bottom-1/2 right-0 w-22 h-22 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-pulse" style={{ animationDelay: "1.6s" }} />
        <div className="absolute top-1/5 right-1/3 w-26 h-26 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
      </div>

      <div className="relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Mission and Values
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
          Our mission is to help brands communicate clearly and creatively. We
          focus on storytelling, professionalism and intentional design. Our aim
          is to create visual content that supports long term growth and builds
          real trust with your audience.
        </p>
      </div>
      </div>
    </section>
  );
}
