"use client"

import Image from "next/image"
import { Laptop, Utensils, Sparkles, Heart } from "lucide-react"

const experiences = [
  {
    icon: Laptop,
    title: "Zona de coworking",
    description: "Espacios para trabajar mientras esperas tu sesion.",
  },
  {
    icon: Utensils,
    title: "Zona de alimentacion",
    description: "Opciones saludables para nutrir tu proceso.",
  },
  {
    icon: Sparkles,
    title: "Zona de spa y bienestar",
    description: "Relajacion y recuperacion en un solo lugar.",
  },
  {
    icon: Heart,
    title: "Espacios de recuperacion",
    description: "Crioterapia y sauna para optimizar resultados.",
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#0a1628] py-16 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/gym-woman-dark.png"
          alt="CardioFit Lab experiencia"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00fffd]">
              Experiencia
            </span>
            <h2 className="mt-4 font-sans text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Mas que entrenamiento
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Un espacio disenado para que tu proceso continue mas alla del ejercicio.
            </p>

            {/* Experience cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="group rounded-xl border border-[#00fffd]/30 bg-[#0a1628]/50 p-6 backdrop-blur-sm transition-all hover:border-[#00fffd] hover:bg-[#00fffd]/5"
                >
                  <exp.icon className="h-10 w-10 text-[#00fffd]" strokeWidth={1.5} />
                  <h3 className="mt-4 font-sans text-lg font-bold text-white">{exp.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative hidden lg:block">
            <div className="relative h-[500px] w-full">
              <Image
                src="/images/running-man.png"
                alt="Atleta CardioFit Lab"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
