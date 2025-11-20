"use client";

// Partner logos
const brandLogos = [
  {
    id: 1,
    name: "Investogo",
    image: "/images/partners/1.png",
  },
  {
    id: 2,
    name: "The Business Minds",
    image: "/images/partners/2.jpg",
  },
  {
    id: 3,
    name: "AFROSOCIAL",
    image: "/images/partners/3.jpg",
  },
  {
    id: 4,
    name: "Digital Leadership Conference",
    image: "/images/partners/4.jpg",
  },
  {
    id: 5,
    name: "ARTIFIC",
    image: "/images/partners/5.jpg",
  },
  {
    id: 6,
    name: "Startup Croydon",
    image: "/images/partners/6.jpg",
  },
];

export function LandingBrands() {
  // Duplicate logos for seamless infinite scroll (3 sets for smooth looping)
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section
      id="brands"
      className="py-12 md:py-16 bg-[#E6F2FF] relative overflow-x-hidden"
    >
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
      </div>

      {/* Infinite scrolling container - full width edge to edge */}
      <div className="relative w-screen overflow-hidden -ml-[50vw] left-1/2">
        {/* Gradient fade on edges for smooth visual effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#E6F2FF] via-[#E6F2FF]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#E6F2FF] via-[#E6F2FF]/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling logos - single continuous line - full width */}
        <div className="flex gap-12 animate-scroll pl-4 md:pl-6 lg:pl-8 pr-4 md:pr-6 lg:pr-8 items-center">
          {duplicatedLogos.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 group flex flex-col items-center justify-center gap-3 transform hover:scale-110 transition-transform duration-300"
            >
              {/* Logo image with rounded corners */}
              <div className="relative flex items-center justify-center">
                {/* Logo image */}
                <div className="relative w-32 h-20 md:w-40 md:h-24 flex items-center justify-center">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="object-contain w-full h-full rounded-lg"
                    style={{ borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
                    onError={(e) => {
                      console.error(`Failed to load image: ${brand.image}`);
                      // Hide the image container if image fails to load
                      const container = (e.target as HTMLElement).parentElement;
                      if (container) {
                        container.style.display = 'none';
                      }
                    }}
                  />
                </div>
              </div>
              
              {/* Label */}
              <p className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors text-center">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-200px * ${brandLogos.length} - 3rem * ${brandLogos.length - 1}));
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll ${40 + brandLogos.length * 2}s linear infinite;
          will-change: transform;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
