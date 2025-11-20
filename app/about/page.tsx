"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Linkedin, Users, Sparkles, Video, Camera, Mic, Palette, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative bg-white overflow-hidden">
      <Navigation />
      
      {/* Hero Section - Khai's Story */}
      <div className="bg-[#E6F2FF] relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "0s" }} />
          <div className="absolute bottom-[15%] right-[25%] w-[500px] h-[500px] bg-[#BE55FF]/20 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-[45%] left-[55%] w-[300px] h-[300px] bg-[#70BFFF]/15 rounded-full blur-2xl animate-float-fast" style={{ animationDelay: "1s" }} />
          <div className="absolute top-[70%] left-[10%] w-[400px] h-[400px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-[10%] right-[30%] w-[350px] h-[350px] bg-[#70BFFF]/16 rounded-full blur-2xl animate-float-medium" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Building Our Own
              <br />
              <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">
                Path to Success
              </span>
            </h1>
          </div>

          {/* Founder Story Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all overflow-hidden group">
              {/* Glass effect layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl opacity-60" />
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-3xl" />
              
              <div className="relative z-10 space-y-6">
                <p className="text-lg md:text-xl text-gray-900 leading-relaxed">
                  Meet <span className="font-bold text-[#70BFFF]">Khai Phillips</span>, the founder of Youu Media. 
                  Born and raised in London, Khai faced the typical struggles many creative minds encounter. 
                  Growing up with dyslexia in school, he always found himself drawn to the creative side of things.
                </p>
                
                <p className="text-lg md:text-xl text-gray-900 leading-relaxed">
                  Despite his passion and talent, Khai found himself not being accepted into traditional professional roles. 
                  Instead of letting that stop him, he made a bold decision: <span className="font-semibold text-[#BE55FF]">he would create his own table</span> and 
                  attract the professional world to him.
                </p>
                
                <p className="text-lg md:text-xl text-gray-900 leading-relaxed">
                  Starting off as a freelancer, Khai quickly realised he wanted to build something more established. 
                  That's when <span className="font-bold bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Youu Media</span> was born. 
                  Through dedication, creativity, and an unwavering belief in his vision, Khai has found his way into many doors 
                  he never expected to open.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] right-[20%] w-[450px] h-[450px] bg-[#BE55FF]/15 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: "0.3s" }} />
          <div className="absolute bottom-[20%] left-[15%] w-[400px] h-[400px] bg-[#70BFFF]/18 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#BE55FF] uppercase tracking-widest mb-4 block">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Mission</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-3xl p-8 md:p-12 border border-[#70BFFF]/20 shadow-xl">
              <p className="text-xl md:text-2xl text-gray-900 leading-relaxed text-center font-medium">
                To empower brands and professionals through strategic visual storytelling, 
                helping them build trust, communicate authority, and achieve measurable growth. 
                We believe in creating opportunities, building communities, and making professional 
                success accessible to everyone, regardless of their background.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Youu Network Section */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[25%] left-[25%] w-[480px] h-[480px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-[15%] right-[20%] w-[420px] h-[420px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: "1.2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Content */}
            <div>
              <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
                Community First
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                The <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Youu Network</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-900 leading-relaxed">
                <p>
                  What started as a way to bring professionals together has evolved into something powerful. 
                  The Youu Network began as a community that could bring professionals more value and opportunities.
                </p>
                <p>
                  Today, we host regular <span className="font-semibold text-[#BE55FF]">networking events</span> where entrepreneurs, 
                  creatives, and business leaders come together to connect, collaborate, and grow. Our networking community 
                  has become a platform for sharing knowledge, creating partnerships, and opening doors that might have 
                  otherwise remained closed.
                </p>
                <p>
                  We believe that <span className="font-bold text-[#70BFFF]">your network is your net worth</span>, and we're 
                  committed to building a community where everyone can thrive.
                </p>
              </div>
            </div>

            {/* Right - Card with CTA */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-3xl p-8 md:p-10 shadow-2xl transform hover:scale-[1.02] transition-all">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                  Join The Network
                </h3>
                <p className="text-white/90 text-center mb-8 leading-relaxed">
                  Connect with like-minded professionals, attend exclusive events, and unlock new opportunities.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="w-full bg-white text-[#70BFFF] hover:bg-white/90 font-bold py-6 text-lg rounded-full shadow-xl"
                >
                  <Link
                    href="https://chat.whatsapp.com/LMHrYWeo9ttFWDs7es2qaT?mode=wwt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Our Community
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Expertise Section */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] bg-[#BE55FF]/12 rounded-full blur-3xl animate-float-fast" style={{ animationDelay: "0.8s" }} />
          <div className="absolute bottom-[10%] left-[20%] w-[450px] h-[450px] bg-[#70BFFF]/15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#BE55FF] uppercase tracking-widest mb-4 block">
              Our Powerhouse
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Powerful & <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Advanced Team</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We've assembled a team of creative professionals who bring expertise across every aspect of visual storytelling.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Videographers */}
            <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-6 border border-[#70BFFF]/20 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Videographers</h3>
              <p className="text-sm text-gray-700 text-center">Expert video production</p>
            </div>

            {/* Photographers */}
            <div className="bg-gradient-to-br from-[#BE55FF]/10 to-[#70BFFF]/10 rounded-2xl p-6 border border-[#BE55FF]/20 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Photographers</h3>
              <p className="text-sm text-gray-700 text-center">Professional photography</p>
            </div>

            {/* Cinematographers */}
            <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-6 border border-[#70BFFF]/20 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Cinematographers</h3>
              <p className="text-sm text-gray-700 text-center">Cinematic storytelling</p>
            </div>

            {/* Sound Engineers */}
            <div className="bg-gradient-to-br from-[#BE55FF]/10 to-[#70BFFF]/10 rounded-2xl p-6 border border-[#BE55FF]/20 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Sound Engineers</h3>
              <p className="text-sm text-gray-700 text-center">Audio excellence</p>
            </div>

            {/* Graphic Designers */}
            <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-6 border border-[#70BFFF]/20 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Graphic Designers</h3>
              <p className="text-sm text-gray-700 text-center">Visual design mastery</p>
            </div>

            {/* VX Artists */}
            <div className="bg-gradient-to-br from-[#BE55FF]/10 to-[#70BFFF]/10 rounded-2xl p-6 border border-[#BE55FF]/20 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">VX Artists</h3>
              <p className="text-sm text-gray-700 text-center">Visual effects magic</p>
            </div>

            {/* AI Specialists */}
            <div className="bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-2xl p-6 border border-[#70BFFF]/20 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">AI Specialists</h3>
              <p className="text-sm text-gray-700 text-center">Future-forward tech</p>
            </div>

            {/* More Coming */}
            <div className="bg-gradient-to-br from-[#BE55FF]/10 to-[#70BFFF]/10 rounded-2xl p-6 border border-[#BE55FF]/20 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-2">And More</h3>
              <p className="text-sm text-gray-700 text-center">Growing every day</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 italic">
              It's still early, but things are picking up fast. We're building something special.
            </p>
          </div>
        </div>
      </div>

      {/* AI Implementation Section */}
      <div className="bg-[#E6F2FF] relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[25%] w-[500px] h-[500px] bg-[#70BFFF]/20 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: "0.4s" }} />
          <div className="absolute bottom-[20%] left-[20%] w-[450px] h-[450px] bg-[#BE55FF]/18 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "1.1s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-2xl mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <span className="text-sm font-bold text-[#70BFFF] uppercase tracking-widest mb-4 block">
                The Future is Here
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Embracing <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">AI Innovation</span>
              </h2>
            </div>

            <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
              <div className="space-y-6 text-lg md:text-xl text-gray-900 leading-relaxed">
                <p>
                  The rise of AI is transforming how we work, and at Youu Media, we're not just watching, we're leading. 
                  We have plans to implement AI into our work where we see fit for our clients, helping them with 
                  <span className="font-semibold text-[#70BFFF]"> efficiency and client growth</span>.
                </p>
                <p>
                  Our approach is strategic and thoughtful. We're exploring how AI can enhance our creative processes, 
                  streamline workflows, and deliver even better results for our clients, all while maintaining the 
                  human touch and creativity that sets us apart.
                </p>
                <p className="font-semibold text-[#BE55FF]">
                  The future of visual content is here, and we're ready to help you leverage it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[15%] w-[400px] h-[400px] bg-[#BE55FF]/12 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "0.6s" }} />
          <div className="absolute bottom-[15%] right-[15%] w-[450px] h-[450px] bg-[#70BFFF]/15 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: "1.3s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Ready to <span className="bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] bg-clip-text text-transparent">Work Together?</span>
            </h2>
            <p className="text-xl text-gray-700">
              Let's create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Book a Call */}
            <div className="bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Book a Call</h3>
              <p className="text-white/90 text-center mb-6 leading-relaxed">
                Let's discuss your project and see how we can help.
              </p>
              <Button
                size="lg"
                asChild
                className="w-full bg-white text-[#70BFFF] hover:bg-white/90 font-bold py-6 rounded-full shadow-xl"
              >
                <Link
                  href="https://calendly.com/youumedia-agency/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Now
                </Link>
              </Button>
            </div>

            {/* Join Network */}
            <div className="bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Join The Network</h3>
              <p className="text-white/90 text-center mb-6 leading-relaxed">
                Connect with professionals and grow your network.
              </p>
              <Button
                size="lg"
                asChild
                className="w-full bg-white text-[#BE55FF] hover:bg-white/90 font-bold py-6 rounded-full shadow-xl"
              >
                <Link
                  href="https://chat.whatsapp.com/LMHrYWeo9ttFWDs7es2qaT?mode=wwt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Community
                </Link>
              </Button>
            </div>

            {/* LinkedIn */}
            <div className="bg-gradient-to-br from-[#70BFFF] to-[#BE55FF] rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Follow Us</h3>
              <p className="text-white/90 text-center mb-6 leading-relaxed">
                Stay connected and see our latest work.
              </p>
              <Button
                size="lg"
                asChild
                className="w-full bg-white text-[#70BFFF] hover:bg-white/90 font-bold py-6 rounded-full shadow-xl"
              >
                <Link
                  href="https://www.linkedin.com/company/youu-media/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
