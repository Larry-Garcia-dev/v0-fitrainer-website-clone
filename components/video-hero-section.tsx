"use client"

export default function VideoHeroSection() {
  return (
    <section className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
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
    </section>
  )
}
