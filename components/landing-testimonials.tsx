"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    type: "text",
    name: "Christian N Jr.",
    role: "FT100 Most Influential BAME Leaders in UK Tech",
    content: "Very good video. Very, very good.",
  },
  {
    id: 2,
    type: "video",
    name: "Catherine",
    role: "Video Testimonial",
    content: "",
    videoUrl: "/videos/catherine-testimonial.mp4",
  },
  {
    id: 3,
    type: "text",
    name: "Elena Karpenko",
    role: "Founder of The Business Minds",
    content:
      "It was a pleasure having Youu Media with us, and your work truly captured the spirit of The Business Minds community. The energy, the conversations, and the connections that night were special, and your team brought it all to life perfectly. Huge thanks again for your professionalism, creativity, and for being such a great partner. Looking forward to creating even more impactful moments together!",
  },
  {
    id: 4,
    type: "text",
    name: "Agatha Howes",
    role: "Founder, Claudia Fabian Media Ltd",
    content:
      "Great piece of work Youu Media 👏 – you captured the event in a way that gives us an insight into what we've missed out on (those who did not attend) and what the main themes and atmosphere was like for those who were there. Engaging and informative – well done.",
  },
  {
    id: 5,
    type: "text",
    name: "Fenton Cayless",
    role: "Founder, CameThru",
    content: "Great video.",
  },
  {
    id: 6,
    type: "text",
    name: "Geoff Ranson",
    role: "Project Manager, Startup Croydon",
    content:
      "We look forward to supporting small businesses grow and making Croydon's economy even stronger. Small businesses like You Media who created the video of our launch event on 6 November.",
  },
  {
    id: 7,
    type: "text",
    name: "Saffron Saunders",
    role: "CEO, Startup Croydon",
    content:
      "We know the power of video and networking. On the night, I got to meet the energy of Khai Phillips, who had started his journey a couple of years back through a project run here with Youth PWR Charity and The Creative Digital Lab! Check out his video, which says it all! Thank you, Khai, and I look forward to getting to know you in the coming months.",
  },
  {
    id: 8,
    type: "text",
    name: "Shanice Tomlinson",
    role: "Co-Founder, Become Orbit",
    content:
      "Love the video you've created! It captures the vibes of the night. I've followed your business page so looking forward to see how you continue to grow.",
  },
];

export function LandingTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 bg-[#E6F2FF] relative overflow-hidden"
    >
      {/* Creative floating orbs and shapes - Testimonials section distribution */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs - spread around */}
        <div className="absolute top-1/5 left-0 w-[420px] h-[420px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/5 right-0 w-[450px] h-[450px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute top-1/2 left-1/2 w-[380px] h-[380px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" />
        <div className="absolute bottom-0 right-1/3 w-[410px] h-[410px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" />

        {/* Geometric shapes - distributed with floating animations, kept within bounds */}
        <div className="absolute top-[20%] right-1/4 w-28 h-28 bg-gradient-to-br from-[#70BFFF]/25 to-[#BE55FF]/25 rounded-3xl rotate-45 animate-float-slow" />
        <div className="absolute bottom-[20%] left-1/5 w-24 h-24 bg-gradient-to-br from-[#BE55FF]/25 to-[#70BFFF]/25 rounded-full animate-float-medium" style={{ animationDelay: "1.1s" }} />
        <div className="absolute top-[60%] right-1/3 w-16 h-16 bg-[#70BFFF]/20 rounded-lg rotate-12 animate-float-fast" style={{ animationDelay: "0.7s" }} />
        <div className="absolute bottom-[30%] left-2/3 w-20 h-20 bg-[#BE55FF]/22 rounded-2xl rotate-45 animate-float-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[25%] left-1/2 w-24 h-24 bg-gradient-to-br from-[#70BFFF]/20 to-[#BE55FF]/20 rounded-full animate-float-medium" style={{ animationDelay: "0.3s" }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-[#BE55FF] uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Client{" "}
            <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
              Feedback
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            What people say about working with Youu Media.
          </p>
        </div>

        <div className="relative">
          {/* Decorative quote marks */}
          <div className="absolute -top-8 -left-8 text-9xl text-[#70BFFF]/10 font-black z-0">
            "
          </div>
          <div className="absolute -bottom-8 -right-8 text-9xl text-[#BE55FF]/10 font-black z-0">
            "
          </div>

          {/* Testimonial Card */}
          <div className={`relative rounded-3xl p-8 md:p-12 min-h-[300px] flex flex-col justify-center transition-all overflow-hidden group ${
            currentTestimonial.type === "video" 
              ? "bg-transparent" 
              : "bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] hover:bg-white/25 hover:border-white/40 transform hover:scale-[1.02] hover:-translate-y-1"
          }`}>
            {/* 3D Glass effect layers - only for text testimonials */}
            {currentTestimonial.type === "text" && (
              <>
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl opacity-60" />
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-3xl" />
                {/* Subtle inner glow */}
                <div className="absolute inset-[1px] bg-gradient-to-br from-[#70BFFF]/5 via-transparent to-[#BE55FF]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </>
            )}

            <div className="relative z-10">
              {currentTestimonial.type === "video" ? (
                /* Video Testimonial */
                <div className="w-full flex flex-col justify-center">
                  <div className="aspect-video rounded-xl overflow-hidden mb-8 flex items-center justify-center">
                    {currentTestimonial.videoUrl ? (
                      <video
                        className="w-full h-full object-cover"
                        controls
                      >
                        <source src={currentTestimonial.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="text-center text-white p-8">
                        <p className="text-lg font-semibold mb-2">Video Testimonial</p>
                        <p className="text-sm text-gray-300">
                          Add video URL to the testimonials array
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] flex items-center justify-center text-white font-bold text-lg">
                      {currentTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">
                        {currentTestimonial.name}
                      </p>
                      {currentTestimonial.role && (
                        <p className="text-gray-600">
                          {currentTestimonial.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* Text Testimonial */
                <>
                  <p className="text-xl md:text-2xl text-gray-900 mb-8 leading-relaxed italic relative" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', 'Georgia', serif" }}>
                    <span className="text-4xl text-gray-900/30 absolute -left-6 -top-4">
                      "
                    </span>
                    {currentTestimonial.content}
                    <span className="text-4xl text-gray-900/30 absolute -right-6 -bottom-4">
                      "
                    </span>
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {currentTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-gray-700">
                        {currentTestimonial.role}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 hover:border-[#70BFFF]/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#70BFFF] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 hover:border-[#70BFFF]/50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
