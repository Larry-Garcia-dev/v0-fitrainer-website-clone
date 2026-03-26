"use client"

import Image from "next/image"
import Link from "next/link"
import { Activity } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0a1628]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Gym background with athlete"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-20 lg:flex-row lg:items-center lg:px-8">
        {/* Left Content */}
        <div className="z-10 max-w-xl lg:w-1/2">
          {/* Subtitle */}
          <p className="mb-4 font-serif text-sm text-[#00fffd] md:text-base">
            Cada proceso comienza entendiendo tu cuerpo.
          </p>

          {/* Main Heading */}
          <h1 className="font-sans text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[4rem]">
            Entrena con{" "}
            <span className="text-[#00fffd]">ciencia</span>
            <span className="text-white">.</span>
            <br />
            Mejora con{" "}
            <span className="text-[#00fffd]">precision</span>
            <span className="text-white">.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 font-serif text-base text-white/70 md:text-lg">
            Centro de entrenamiento en Ibague con respaldo medico, analisis biomecanico y tecnologia aplicada al movimiento.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
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

        {/* Right Content - Woman with Circle */}
        <div className="relative mt-12 flex items-center justify-center lg:mt-0 lg:w-1/2">
          {/* Woman with cyan circle image */}
          <div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px] lg:h-[550px] lg:w-[550px]">
            <Image
              src="/images/hero-woman.png"
              alt="Professional fitness trainer"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-[#0a1628]/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-4 lg:justify-start lg:px-8">
            <Activity className="h-6 w-6 text-[#00fffd]" />
            <p className="text-center font-serif text-sm text-white/80 md:text-base">
              Respaldado por un enfoque interdisciplinar en salud, movimiento y bienestar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
