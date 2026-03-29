"use client"

export default function VideoHeroSection() {
  return (
    <section className="relative h-screen w-full bg-[#0a1628] flex items-center justify-center">
      {/* Video Background - Horizontal for desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-contain hidden md:block"
      >
        <source
          src="https://api.magnificapec.com/cardiofit/videoCardioFig.mp4"
          type="video/mp4"
        />
      </video>

      {/* Video Background - Vertical for mobile */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-contain md:hidden"
      >
        <source
          src="https://api.magnificapec.com/cardiofit/vertical.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle overlay for better navbar visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-transparent to-transparent h-32 pointer-events-none" />
    </section>
  )
}
