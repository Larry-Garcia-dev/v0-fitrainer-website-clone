"use client"

import Link from "next/link"
import { ArrowRight, Dumbbell, Activity, Snowflake, Heart, Utensils } from "lucide-react"

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
    icon: Heart,
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
    <section id="services" className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
      {/* Diagonal stripe background pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `repeating-linear-gradient(
          135deg,
          transparent,
          transparent 10px,
          rgba(0,168,166,0.2) 10px,
          rgba(0,168,166,0.2) 11px
        )`
      }} />

      {/* Cyan top border */}
      <div className="absolute left-0 right-0 top-0 h-1.5 bg-[#00fffd]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
                Nuestros Servicios
              </span>
              <span className="h-px w-10 bg-[#00fffd]" />
            </div>
            <h2 className="max-w-lg font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl">
              Un proceso completo, no solo entrenamiento
            </h2>
            <div className="mt-3">
              <WavyUnderline />
            </div>
          </div>

          <div className="max-w-sm">
            <p className="mb-4 font-serif text-sm italic text-gray-600">
              Cada servicio esta disenado para complementar tu proceso de transformacion fisica y bienestar integral.
            </p>
            <Link
              href="https://api.magnificapec.com/cardiofit/Brochure_Cardio.pdf"
              className="inline-flex rounded-full bg-[#00fffd] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#0a1628] transition-all hover:bg-[#68d2df]"
            >
              Ver Brochure
            </Link>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#00fffd] border border-transparent"
            >
              {/* Icon */}
              <div className="mb-4 text-gray-400 transition-colors group-hover:text-[#00fffd]">
                <service.icon className="h-12 w-12" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-sans text-lg font-bold text-[#00a8a6]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Read more link */}
              <Link
                href="/contacto"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00796b] transition-all hover:gap-3 hover:text-[#00a8a6]"
              >
                Mas informacion
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
