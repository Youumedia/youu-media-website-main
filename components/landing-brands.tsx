"use client";

// Placeholder logos - user will replace these
const brandLogos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Brand ${i + 1}`,
}));

export function LandingBrands() {
  // Duplicate logos for seamless infinite scroll (3 sets for smooth looping)
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section
      id="brands"
      className="py-12 md:py-16 bg-[#E6F2FF] relative overflow-hidden"
    >
      {/* Creative floating orbs and shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
        <div className="absolute top-3/4 left-1/6 w-[400px] h-[400px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-[#70BFFF]/16 rounded-full blur-2xl animate-float-medium" />

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-pulse" />
        <div
          className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-2/3 right-1/5 w-28 h-28 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
            Partnerships
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
              Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-700">Across multiple industries.</p>
        </div>

        {/* Infinite scrolling container */}
        <div className="relative w-full overflow-hidden -mx-4 md:-mx-6 lg:-mx-8">
          {/* Gradient fade on edges for smooth visual effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling logos - single continuous line */}
          <div className="flex gap-8 animate-scroll">
            {duplicatedLogos.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 group flex items-center justify-center p-6 bg-white rounded-2xl hover:bg-gradient-to-br hover:from-[#70BFFF]/5 hover:to-[#BE55FF]/5 transition-all border border-gray-200 hover:border-[#70BFFF]/40 hover:shadow-xl w-[180px] h-[180px] transform hover:scale-105"
              >
                <div className="text-center relative w-full">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />

                  <div className="relative w-20 h-20 mx-auto mb-2 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-xl flex items-center justify-center group-hover:from-[#70BFFF]/30 group-hover:to-[#BE55FF]/30 transition-all shadow-lg group-hover:shadow-xl">
                    <span className="text-xs text-gray-600 font-bold group-hover:text-gray-900 transition-colors">
                      Logo
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium group-hover:text-gray-900 transition-colors">
                    {brand.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-180px * 12 - 2rem * 11));
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
