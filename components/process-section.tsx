"use client"

import Image from "next/image"
import { ClipboardCheck, Scan, Target, LineChart, Heart } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Evaluacion inicial",
    description: "Conocemos tu condicion y objetivos.",
  },
  {
    icon: Scan,
    number: "02",
    title: "Analisis de movimiento",
    description: "Estudiamos tu tecnica y activacion muscular.",
  },
  {
    icon: Target,
    number: "03",
    title: "Plan personalizado",
    description: "Disenamos tu entrenamiento con base en datos.",
  },
  {
    icon: LineChart,
    number: "04",
    title: "Seguimiento",
    description: "Ajustamos tu proceso con mediciones constantes.",
  },
  {
    icon: Heart,
    number: "05",
    title: "Recuperacion",
    description: "Integramos bienestar y descanso para optimizar resultados.",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#0a1628] py-16 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/medical-tech.png"
          alt="Tecnologia medica CardioFit Lab"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00fffd]">
            Proceso
          </span>
          <h2 className="mt-4 font-sans text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Asi comienza tu proceso
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            Un enfoque estructurado y basado en ciencia para alcanzar tus objetivos de salud y rendimiento.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#00fffd]/0 via-[#00fffd]/50 to-[#00fffd]/0 lg:block" />

          <div className="grid gap-8 lg:gap-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col items-center gap-6 lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                  <div className={`rounded-2xl border border-[#00fffd]/30 bg-[#0a1628]/50 p-6 backdrop-blur-sm transition-all hover:border-[#00fffd] ${
                    index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                  } max-w-md`}>
                    <span className="text-4xl font-bold text-[#00fffd]/30">{step.number}</span>
                    <h3 className="mt-2 font-sans text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{step.description}</p>
                  </div>
                </div>

                {/* Icon (center) */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#00fffd] bg-[#0a1628] text-[#00fffd] lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  <step.icon className="h-7 w-7" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
