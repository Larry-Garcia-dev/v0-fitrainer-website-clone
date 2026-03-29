"use client"

import Link from "next/link"
import { Activity } from "lucide-react"

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

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-[#0a1628]/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-24 md:justify-center md:pb-0">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          {/* Subtitle */}
          <p className="mb-4 font-serif text-sm text-[#00fffd] md:text-base">
            Cada proceso comienza entendiendo tu cuerpo.
          </p>

          {/* Main Heading */}
          <h1 className="text-balance font-sans text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            Entrena con{" "}
            <span className="text-[#00fffd]">ciencia</span>
            <span className="text-white">.</span>
            <br />
            Mejora con{" "}
            <span className="text-[#00fffd]">precision</span>
            <span className="text-white">.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base text-white/80 md:text-lg">
            Centro de entrenamiento en Ibague con respaldo medico, analisis biomecanico y tecnologia aplicada al movimiento.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contacto"
              className="rounded-full bg-[#00fffd] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0a1628] transition-all hover:bg-[#68d2df]"
            >
              Agenda tu valoracion
            </Link>

            <Link
              href="/proceso"
              className="rounded-full border-2 border-[#00fffd] bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#00fffd] transition-all hover:bg-[#00fffd]/10"
            >
              Conoce como funciona
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="flex items-center justify-center gap-4 border-t border-[#00fffd]/30 bg-[#0a1628]/60 px-6 py-4 backdrop-blur-sm">
          <Activity className="h-6 w-6 text-[#00fffd]" />
          <p className="text-center text-sm text-white/90 md:text-base">
            Respaldado por un enfoque interdisciplinar en salud, movimiento y bienestar.
          </p>
        </div>
      </div>
    </section>
  )
}
