"use client"

export default function VideoHeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background - Horizontal for desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover hidden md:block"
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
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      >
        <source
          src="https://api.magnificapec.com/cardiofit/vertical.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle overlay for better navbar visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-transparent to-transparent h-32" />
    </section>
  )
}
