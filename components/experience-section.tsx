"use client"

import Image from "next/image"
import { Laptop, Utensils, Sparkles, Activity } from "lucide-react"

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

const experiences = [
  {
    icon: Laptop,
    title: "Zona de coworking",
    description: "Espacios de trabajo para continuar tu dia productivo.",
  },
  {
    icon: Utensils,
    title: "Zona de alimentacion",
    description: "Opciones saludables y balanceadas para tu nutricion.",
  },
  {
    icon: Sparkles,
    title: "Zona de spa y bienestar",
    description: "Relajacion y recuperacion para cuerpo y mente.",
  },
  {
    icon: Activity,
    title: "Espacios de recuperacion",
    description: "Crioterapia, sauna infrarrojo y mas.",
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/drinking-woman.png"
                alt="Mujer en zona de bienestar"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -right-4 bottom-12 rounded-xl bg-[#00fffd] px-6 py-4 shadow-xl lg:right-8">
              <p className="font-sans text-2xl font-bold text-[#0a1628]">Mas que</p>
              <p className="font-sans text-2xl font-bold text-[#0a1628]">entrenamiento</p>
            </div>
          </div>

          {/* Content side */}
          <div>
            {/* Section label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
                Experiencia
              </span>
              <span className="h-px w-10 bg-[#00fffd]" />
            </div>

            {/* Main Heading */}
            <h2 className="font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl lg:text-[2.5rem]">
              Un espacio disenado para que tu proceso continue mas alla del ejercicio
            </h2>

            {/* Wavy underline */}
            <div className="mt-3">
              <WavyUnderline />
            </div>

            {/* Experience cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.title}
                  className={`rounded-xl p-5 ${
                    index === 0 
                      ? "bg-[#00fffd]" 
                      : "border border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${
                    index === 0 
                      ? "bg-[#0a1628]/10" 
                      : "bg-[#00fffd]/10"
                  }`}>
                    <exp.icon className={`h-6 w-6 ${index === 0 ? "text-[#0a1628]" : "text-[#00fffd]"}`} />
                  </div>
                  <h3 className={`font-sans text-lg font-bold ${index === 0 ? "text-[#0a1628]" : "text-[#0a1628]"}`}>
                    {exp.title}
                  </h3>
                  <p className={`mt-1 text-sm ${index === 0 ? "text-[#0a1628]/70" : "text-gray-600"}`}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
