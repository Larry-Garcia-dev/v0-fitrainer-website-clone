"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Dumbbell, Activity, Snowflake, Heart, Utensils, Scan } from "lucide-react"

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
    description: "Planes disenados segun tu condicion, objetivos y analisis de movimiento. Cada ejercicio tiene un proposito especifico basado en datos.",
    features: ["Evaluacion inicial completa", "Programas a medida", "Seguimiento continuo", "Ajustes basados en progreso"],
  },
  {
    icon: Scan,
    title: "Evaluacion biomecanica",
    description: "Estudio detallado de tu tecnica, activacion muscular y patrones de movimiento con tecnologia de precision.",
    features: ["Analisis de movimiento 3D", "Evaluacion postural", "Identificacion de desbalances", "Recomendaciones correctivas"],
  },
  {
    icon: Activity,
    title: "Valoracion cardiovascular",
    description: "Evaluacion completa de tu salud cardiovascular con respaldo medico para un entrenamiento seguro y efectivo.",
    features: ["Pruebas de esfuerzo", "Monitoreo cardiaco", "Prescripcion de ejercicio", "Control de factores de riesgo"],
  },
  {
    icon: Snowflake,
    title: "Recuperacion avanzada",
    description: "Crioterapia, sauna infrarrojo y terapias de descarga muscular para optimizar tu recuperacion.",
    features: ["Crioterapia localizada", "Sauna infrarrojo", "Terapia de compresion", "Protocolos personalizados"],
  },
  {
    icon: Heart,
    title: "Zona de bienestar",
    description: "Masajes, spa y experiencias enfocadas en recuperacion y descanso como parte integral del proceso.",
    features: ["Masajes terapeuticos", "Spa relajante", "Meditacion guiada", "Espacios de descanso"],
  },
  {
    icon: Utensils,
    title: "Nutricion integrada",
    description: "Opciones balanceadas y acompanamiento nutricional para complementar tu proceso de transformacion.",
    features: ["Plan nutricional personalizado", "Seguimiento de progreso", "Opciones saludables in-situ", "Educacion alimentaria"],
  },
]

export default function ServicesDetailSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#00fffd]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
              Servicios Detallados
            </span>
            <span className="h-px w-10 bg-[#00fffd]" />
          </div>
          <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl lg:text-[2.75rem]">
            Un proceso completo, no solo entrenamiento
          </h2>
          <div className="mt-3 flex justify-center">
            <WavyUnderline />
          </div>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#00fffd] hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#00fffd]/10 text-[#00a8a6] transition-colors group-hover:bg-[#00fffd] group-hover:text-[#0a1628]">
                <service.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-sans text-xl font-bold text-[#0a1628]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="mt-4 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00fffd]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              <Link
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#00a8a6] transition-all hover:gap-3 hover:text-[#00796b]"
              >
                Mas informacion
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Brochure CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="https://api.magnificapec.com/cardiofit/Brochure_Cardio.pdf"
            target="_blank"
            className="inline-flex items-center gap-3 rounded-full bg-[#00fffd] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#0a1628] transition-all hover:bg-[#68d2df]"
          >
            Descargar Brochure Completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
