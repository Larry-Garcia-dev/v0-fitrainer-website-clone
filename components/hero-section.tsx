"use client"

import Link from "next/link"
import { Activity } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0a1628]">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="/images/hero-bg.png"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0a1628]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-20 lg:px-8">
        {/* Centered Content */}
        <div className="z-10 mx-auto max-w-3xl text-center">
          {/* Subtitle */}
          <p className="mb-4 font-serif text-sm text-[#00fffd] md:text-base">
            Cada proceso comienza entendiendo tu cuerpo.
          </p>

          {/* Main Heading */}
          <h1 className="font-sans text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            Entrena con{" "}
            <span className="text-[#00fffd]">ciencia</span>
            <span className="text-white">.</span>
            <br />
            Mejora con{" "}
            <span className="text-[#00fffd]">precision</span>
            <span className="text-white">.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-lg text-base text-white/70 md:text-lg">
            Centro de entrenamiento en Ibague con respaldo medico, analisis biomecanico y tecnologia aplicada al movimiento.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-[#00fffd] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0a1628] transition-all hover:bg-[#68d2df]"
            >
              Agenda tu valoracion
            </Link>

            <Link
              href="#about"
              className="rounded-full border-2 border-[#00fffd] bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#00fffd] transition-all hover:bg-[#00fffd]/10"
            >
              Conoce como funciona
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="flex items-center justify-center gap-4 bg-[#00fffd]/10 backdrop-blur-sm px-6 py-4 border-t border-[#00fffd]/30">
          <Activity className="h-6 w-6 text-[#00fffd]" />
          <p className="text-center text-sm text-white/90 md:text-base">
            Respaldado por un enfoque interdisciplinar en salud, movimiento y bienestar.
          </p>
        </div>
      </div>
    </section>
  )
}
