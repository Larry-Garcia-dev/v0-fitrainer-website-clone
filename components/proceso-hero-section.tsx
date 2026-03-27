"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProcesoHeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#0a1628]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/process-bg.png')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0a1628]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-transparent to-[#0a1628]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-4 pt-32 pb-16 lg:px-8">
        <div className="z-10 mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00fffd]/30 bg-[#00fffd]/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#00fffd] animate-pulse" />
            <span className="text-sm font-medium text-[#00fffd]">Metodologia Propia</span>
          </div>

          {/* Subtitle */}
          <p className="mb-4 font-serif text-sm text-[#00fffd] md:text-base uppercase tracking-widest">
            Nuestro Proceso
          </p>

          {/* Main Heading */}
          <h1 className="font-sans text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[4rem]">
            Como{" "}
            <span className="text-[#00fffd]">trabajamos</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 md:text-lg leading-relaxed">
            Un modelo de trabajo disenado para acompanarte en cada etapa de tu transformacion. 
            Desde la evaluacion inicial hasta el seguimiento continuo, cada paso tiene un proposito.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="group rounded-full bg-[#00fffd] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0a1628] transition-all hover:bg-[#68d2df] inline-flex items-center gap-2"
            >
              Comienza tu proceso
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/planes-servicios"
              className="rounded-full border-2 border-[#00fffd] bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#00fffd] transition-all hover:bg-[#00fffd]/10"
            >
              Ver planes
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#00fffd] md:text-4xl">5</p>
              <p className="mt-1 text-sm text-white/60">Etapas del proceso</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#00fffd] md:text-4xl">100%</p>
              <p className="mt-1 text-sm text-white/60">Personalizado</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#00fffd] md:text-4xl">360°</p>
              <p className="mt-1 text-sm text-white/60">Enfoque integral</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-5 rounded-full border-2 border-white/30 p-1">
            <div className="h-2 w-full animate-bounce rounded-full bg-[#00fffd]" />
          </div>
        </div>
      </div>
    </section>
  )
}
