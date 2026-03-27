"use client"

import Image from "next/image"
import { BarChart3, Users, Snowflake, Heart } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Entrenamiento con datos",
    description: "Evaluamos tu movimiento, tecnica y activacion muscular con tecnologia de precision.",
  },
  {
    icon: Users,
    title: "Respaldo profesional",
    description: "Acompanamiento interdisciplinar en cardiologia, fisioterapia y nutricion.",
    highlighted: true,
  },
  {
    icon: Snowflake,
    title: "Recuperacion estrategica",
    description: "Crioterapia, sauna infrarrojo y terapias disenadas con protocolos establecidos.",
  },
  {
    icon: Heart,
    title: "Bienestar integral",
    description: "Espacios de spa, nutricion y descanso como parte del proceso.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gym-interior.png"
          alt="Interior CardioFit Lab"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1628]/85" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00fffd]">
            Diferenciales
          </span>
          <h2 className="mt-4 font-sans text-3xl font-bold text-white sm:text-4xl">
            Por que elegir Cardiofil y el Furor
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center rounded-2xl border-2 p-8 text-center transition-all hover:border-[#00fffd] ${
                feature.highlighted
                  ? "border-[#00fffd] bg-[#00fffd]/5"
                  : "border-[#00fffd]/30 bg-transparent"
              }`}
            >
              <div className="mb-6 text-[#00fffd]">
                <feature.icon className="h-16 w-16" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans text-lg font-bold uppercase tracking-wider text-[#00fffd]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
