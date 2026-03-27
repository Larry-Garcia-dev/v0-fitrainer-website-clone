"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          key={isMobile ? "vertical" : "horizontal"}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source 
            src={isMobile 
              ? "https://api.magnificapec.com/cardiofit/vertical.mp4" 
              : "https://api.magnificapec.com/cardiofit/videoCardioFig.mp4"
            } 
            type="video/mp4" 
          />
        </video>
        {/* Subtle dark overlay for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/30 via-transparent to-[#0a1628]/50" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-white/70">Scroll</span>
          <div className="h-12 w-6 rounded-full border-2 border-white/30 p-1">
            <div className="h-2 w-full animate-bounce rounded-full bg-[#00fffd]" />
          </div>
        </div>
      </div>
    </section>
  )
}
