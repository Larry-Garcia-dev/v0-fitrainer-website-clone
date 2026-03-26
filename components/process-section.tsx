"use client"

import Image from "next/image"
import { ClipboardList, Activity, FileText, TrendingUp, Heart } from "lucide-react"

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

const processSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Evaluacion inicial",
    description: "Conocemos tu condicion y objetivos.",
  },
  {
    number: "02",
    icon: Activity,
    title: "Analisis de movimiento",
    description: "Estudiamos tu tecnica y activacion muscular.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Plan personalizado",
    description: "Disenamos tu entrenamiento con base en datos.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Seguimiento",
    description: "Ajustamos tu proceso con mediciones constantes.",
  },
  {
    number: "05",
    icon: Heart,
    title: "Recuperacion",
    description: "Integramos bienestar y descanso para optimizar resultados.",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content side */}
          <div>
            {/* Section label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
                Tu Proceso
              </span>
              <span className="h-px w-10 bg-[#00fffd]" />
            </div>

            {/* Main Heading */}
            <h2 className="font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl lg:text-[2.5rem]">
              Asi comienza tu proceso
            </h2>

            {/* Wavy underline */}
            <div className="mt-3">
              <WavyUnderline />
            </div>

            {/* Process Steps */}
            <div className="mt-10 space-y-6">
              {processSteps.map((step, index) => (
                <div key={step.number} className="flex items-start gap-4">
                  {/* Number circle */}
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-sans text-lg font-bold ${
                    index === 0 ? "bg-[#00fffd] text-[#0a1628]" : "bg-[#0a1628]/10 text-[#0a1628]"
                  }`}>
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-3">
                      <step.icon className="h-5 w-5 text-[#00fffd]" />
                      <h3 className="font-sans text-lg font-bold text-[#0a1628]">{step.title}</h3>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/5]">
              <Image
                src="/images/tech-woman.png"
                alt="Tecnologia aplicada al fitness"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-[#00fffd] p-4">
                <p className="text-center font-sans text-lg font-bold text-[#0a1628]">
                  Resultados con intencion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
