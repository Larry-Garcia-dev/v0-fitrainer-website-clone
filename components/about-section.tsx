"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Activity, Brain, Zap } from "lucide-react"

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

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/images/deadlift-woman.png"
                alt="Mujer haciendo peso muerto"
                fill
                className="object-cover"
              />
            </div>

            {/* Secondary Image - overlapping */}
            <div className="absolute -right-4 top-1/4 hidden aspect-[3/4] w-1/2 overflow-hidden rounded-xl border-4 border-white shadow-xl lg:block">
              <Image
                src="/images/gym-woman.png"
                alt="Mujer entrenando en gimnasio"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-xl bg-[#00fffd] px-6 py-4 shadow-xl lg:right-auto lg:left-1/2">
              <div className="flex h-12 w-12 items-center justify-center text-[#0a1628]">
                <Activity className="h-8 w-8" />
              </div>
              <div>
                <span className="block font-sans text-2xl font-bold text-[#0a1628]">Ciencia + Fuerza</span>
                <span className="block text-xs font-medium uppercase tracking-wider text-[#0a1628]/80">
                  Enfoque integral
                </span>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            {/* Section label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
                Acerca de Nosotros
              </span>
              <span className="h-px w-10 bg-[#00fffd]" />
            </div>

            {/* Main Heading */}
            <h2 className="font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl lg:text-[2.75rem]">
              Un nuevo enfoque del entrenamiento
            </h2>

            {/* Wavy underline */}
            <div className="mt-3">
              <WavyUnderline />
            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              En CardioFit Lab integramos medicina, entrenamiento y tecnologia para transformar la forma en que las personas se mueven, se recuperan y mejoran su salud.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-600">
              No trabajamos con rutinas estandar. Analizamos cada cuerpo, cada movimiento y cada respuesta para disenar procesos personalizados con fundamento cientifico.
            </p>

            {/* Quote */}
            <p className="mt-6 border-l-4 border-[#00fffd] pl-4 font-serif text-lg italic text-[#0a1628]">
              &ldquo;Aqui el entrenamiento tiene direccion.&rdquo;
            </p>

            {/* Phone + CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00fffd]/10 text-[#00fffd]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-[#00a8a6]">Contactanos</p>
                  <p className="font-sans text-lg font-bold text-[#0a1628]">315 577 4777</p>
                </div>
              </div>

              <Link
                href="#services"
                className="rounded-full bg-[#00fffd] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0a1628] transition-all hover:bg-[#68d2df]"
              >
                Conoce nuestros servicios
              </Link>
            </div>
          </div>
        </div>

        {/* Diferenciales Section */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-[#0a1628] p-6">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00fffd]/10">
              <Brain className="h-7 w-7 text-[#00fffd]" />
            </div>
            <h3 className="mb-2 font-sans text-lg font-bold text-white">Entrenamiento con datos</h3>
            <p className="text-sm text-white/70">Evaluamos tu movimiento, tecnica y activacion muscular con tecnologia de precision.</p>
          </div>

          <div className="rounded-xl bg-[#0a1628] p-6">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00fffd]/10">
              <Activity className="h-7 w-7 text-[#00fffd]" />
            </div>
            <h3 className="mb-2 font-sans text-lg font-bold text-white">Respaldo profesional</h3>
            <p className="text-sm text-white/70">Acompanamiento interdisciplinar en cardiologia, fisioterapia y nutricion.</p>
          </div>

          <div className="rounded-xl bg-[#0a1628] p-6">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00fffd]/10">
              <Zap className="h-7 w-7 text-[#00fffd]" />
            </div>
            <h3 className="mb-2 font-sans text-lg font-bold text-white">Recuperacion estrategica</h3>
            <p className="text-sm text-white/70">Crioterapia, sauna infrarrojo y terapias disenadas con protocolos establecidos.</p>
          </div>

          <div className="rounded-xl bg-[#00fffd] p-6">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0a1628]/10">
              <Activity className="h-7 w-7 text-[#0a1628]" />
            </div>
            <h3 className="mb-2 font-sans text-lg font-bold text-[#0a1628]">Bienestar integral</h3>
            <p className="text-sm text-[#0a1628]/70">Espacios de spa, nutricion y descanso como parte del proceso.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
