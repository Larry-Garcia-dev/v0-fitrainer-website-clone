"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Dumbbell, Activity, Snowflake, Sparkles, Utensils } from "lucide-react"

// Wavy underline SVG component
const WavyUnderline = () => (
  <svg viewBox="0 0 100 15" className="h-4 w-20 text-[#00fffd]">
    <path
      d="M0 7.5 Q 12.5 0, 25 7.5 T 50 7.5 T 75 7.5 T 100 7.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

const services = [
  {
    icon: Dumbbell,
    title: "Entrenamiento personalizado",
    description: "Planes disenados segun tu condicion, objetivos y analisis de movimiento.",
  },
  {
    icon: Activity,
    title: "Evaluacion biomecanica",
    description: "Estudio detallado de tu tecnica, activacion muscular y patrones de movimiento.",
  },
  {
    icon: Snowflake,
    title: "Recuperacion avanzada",
    description: "Crioterapia, sauna infrarrojo y terapias de descarga muscular.",
  },
  {
    icon: Sparkles,
    title: "Zona de bienestar",
    description: "Masajes, spa y experiencias enfocadas en recuperacion y descanso.",
  },
  {
    icon: Utensils,
    title: "Zona de nutricion",
    description: "Opciones balanceadas y acompanamiento para nutrir tu proceso.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#0a1628] py-16 lg:py-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gym-interior.png"
          alt="Gym interior"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/90" />
      </div>

      {/* Cyan top border */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-[#00fffd]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#00fffd]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00fffd]">
              Nuestros Servicios
            </span>
            <span className="h-px w-10 bg-[#00fffd]" />
          </div>
          <h2 className="font-sans text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Un proceso completo, no solo entrenamiento
          </h2>
          <div className="mt-4 flex justify-center">
            <WavyUnderline />
          </div>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group rounded-xl p-6 transition-all duration-300 ${
                index === 2 
                  ? "bg-[#00fffd] text-[#0a1628]" 
                  : "border border-[#00fffd]/20 bg-[#0a1628]/50 backdrop-blur-sm hover:border-[#00fffd]/50"
              }`}
            >
              {/* Icon */}
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${
                index === 2 
                  ? "bg-[#0a1628]/10" 
                  : "bg-[#00fffd]/10"
              }`}>
                <service.icon className={`h-7 w-7 ${index === 2 ? "text-[#0a1628]" : "text-[#00fffd]"}`} />
              </div>

              {/* Content */}
              <h3 className={`font-sans text-lg font-bold ${index === 2 ? "text-[#0a1628]" : "text-[#00fffd]"}`}>
                {service.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${index === 2 ? "text-[#0a1628]/70" : "text-white/70"}`}>
                {service.description}
              </p>

              {/* Read more link */}
              <Link
                href="#contact"
                className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all hover:gap-3 ${
                  index === 2 ? "text-[#0a1628]" : "text-[#00fffd]"
                }`}
              >
                Saber mas
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex rounded-full bg-[#00fffd] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0a1628] transition-all hover:bg-[#68d2df]"
          >
            Agendar ahora
          </Link>
        </div>
      </div>
    </section>
  )
}
