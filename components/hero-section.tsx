"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large primary blob - more prominent */}
        <div className="absolute top-1/4 left-1/3 w-[32rem] h-[32rem] bg-gradient-to-br from-[#70BFFF]/40 to-[#BE55FF]/30 rounded-full blur-3xl animate-float-slow shadow-2xl" />
        
        {/* Medium secondary blob - more vibrant */}
        <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#BE55FF]/50 to-[#70BFFF]/40 rounded-full blur-2xl animate-float-medium shadow-xl" />
        
        {/* Small accent blobs - enhanced glow */}
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#70BFFF]/35 to-[#BE55FF]/35 rounded-full blur-xl animate-float-fast shadow-lg" />
        <div className="absolute top-1/6 right-1/3 w-48 h-48 bg-gradient-to-bl from-[#BE55FF]/45 to-[#70BFFF]/35 rounded-full blur-lg animate-drift-slow shadow-lg" />
        <div className="absolute bottom-1/4 left-1/6 w-56 h-56 bg-gradient-to-tr from-[#70BFFF]/35 to-[#BE55FF]/30 rounded-full blur-xl animate-drift-fast shadow-lg" />
        
        {/* Enhanced floating particles */}
        <div className="absolute top-1/3 right-1/2 w-32 h-32 bg-[#70BFFF]/60 rounded-full blur-md animate-pulse-float shadow-lg" />
        <div className="absolute bottom-1/3 right-1/6 w-40 h-40 bg-[#BE55FF]/60 rounded-full blur-md animate-pulse-drift shadow-lg" />
        
        {/* Additional dynamic elements */}
        <div className="absolute top-1/5 left-1/5 w-24 h-24 bg-gradient-to-r from-[#BE55FF]/50 to-[#70BFFF]/50 rounded-full blur-lg animate-pulse shadow-md" />
        <div className="absolute bottom-1/5 right-1/5 w-28 h-28 bg-gradient-to-l from-[#70BFFF]/50 to-[#BE55FF]/50 rounded-full blur-lg animate-pulse shadow-md" />
      </div>


      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
            <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">Cinematic</span>
            <br />
            <span className="text-gray-900">Storytelling</span>
            <br />
            <span className="text-gray-600 text-2xl md:text-3xl lg:text-4xl font-normal">That Inspires</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl text-pretty">
            We are a collective of passionate creatives delivering premium videography, photography, and editing
            services that elevate your brand and tell your story with cinematic quality.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="group bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-200 hover:border-[#70BFFF] px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
            >
              <Link href="/portfolio">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                View Our Work
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-full" />
              <span className="font-medium">25+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] rounded-full" />
              <span className="font-medium">Professional Network</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] rounded-full animate-pulse" />
              <span className="font-medium">Cinematic Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
