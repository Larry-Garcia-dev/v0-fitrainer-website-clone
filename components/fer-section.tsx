"use client"

import Image from "next/image"
import Link from "next/link"
import { Activity, Heart, Target, Zap } from "lucide-react"

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

const highlights = [
  {
    icon: Target,
    title: "Metodologia unica",
    description: "Entrenamiento basado en ciencia aplicada al movimiento.",
  },
  {
    icon: Heart,
    title: "Conexion personal",
    description: "Cada persona es un proyecto unico, no un cliente mas.",
  },
  {
    icon: Zap,
    title: "Resultados medibles",
    description: "Progreso cuantificable en cada etapa del proceso.",
  },
  {
    icon: Activity,
    title: "Vision integral",
    description: "El entrenamiento va mas alla del ejercicio fisico.",
  },
]

export default function FerSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-16 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gym-interior.png"
          alt="CardioFit Lab Interior"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00fffd]">
              Conoce a Fer
            </span>
            <h2 className="mt-4 font-sans text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              El motor detras del movimiento
            </h2>
            <div className="mt-3">
              <WavyUnderline />
            </div>

            <p className="mt-6 text-lg text-white/80">
              Fernando es el corazon operativo de CardioFit Lab. Su energia, compromiso y vision han sido 
              fundamentales para crear un espacio donde cada persona encuentra su mejor version.
            </p>

            <blockquote className="mt-6 border-l-4 border-[#00fffd] pl-4">
              <p className="font-serif text-base italic text-white/90">
                &ldquo;Aqui no vendemos rutinas, construimos procesos. Cada persona que entra por esa puerta 
                merece un acompanamiento real, no un plan generico.&rdquo;
              </p>
              <footer className="mt-2 text-sm text-[#00fffd]">- Fernando, Co-fundador</footer>
            </blockquote>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00fffd]/10 text-[#00fffd]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="https://wa.me/573155774777"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-[#00fffd] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0a1628] transition-all hover:bg-[#68d2df]"
              >
                Habla con Fer
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-2xl border-4 border-[#00fffd]/20">
              <Image
                src="/images/team-member-1.png"
                alt="Fernando - Co-fundador CardioFit Lab"
                fill
                className="object-cover object-top"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border-2 border-dashed border-[#00fffd]/30" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full border-2 border-dashed border-[#00fffd]/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
