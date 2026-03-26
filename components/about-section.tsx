"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Award } from "lucide-react"

// Wavy underline SVG component
const WavyUnderline = () => (
  <svg viewBox="0 0 100 15" className="h-4 w-20 text-[#00a8a6]">
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
          {/* Content side */}
          <div className="order-2 lg:order-1">
            {/* Section label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
                Un nuevo enfoque del entrenamiento
              </span>
              <span className="h-px w-10 bg-[#00a8a6]" />
            </div>

            {/* Main Heading */}
            <h2 className="font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl lg:text-[2.75rem]">
              Donde la ciencia se encuentra con la fuerza
            </h2>

            {/* Wavy underline */}
            <div className="mt-3">
              <WavyUnderline />
            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              En CardioFit Lab integramos medicina, entrenamiento y tecnologia para transformar la forma en que las personas se mueven, se recuperan y mejoran su salud.
            </p>

            {/* Quote */}
            <p className="mt-6 font-serif text-base italic text-[#0a1628]">
              &ldquo;No trabajamos con rutinas estandar. Analizamos cada cuerpo, cada movimiento y cada respuesta para disenar procesos personalizados con fundamento cientifico. Aqui el entrenamiento tiene direccion.&rdquo;
            </p>

            {/* Phone + CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center text-[#00a8a6]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-[#00a8a6]">Contactanos</p>
                  <p className="font-sans text-lg font-bold text-[#0a1628]">315 577 4777</p>
                </div>
              </div>

              <Link
                href="#services"
                className="rounded-md bg-[#00a8a6] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#00796b]"
              >
                Conoce nuestros servicios
              </Link>
            </div>
          </div>

          {/* Image side */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image */}
            <div className="relative aspect-[4/5] w-[70%] overflow-hidden rounded-lg">
              <Image
                src="/images/deadlift-woman.png"
                alt="Entrenamiento con pesas"
                fill
                className="object-cover"
              />
            </div>

            {/* Secondary Image - overlapping with colored border */}
            <div className="absolute right-0 top-[15%] aspect-[4/5] w-[55%] overflow-hidden rounded-lg border-[6px] border-[#00a8a6] shadow-2xl">
              <Image
                src="/images/tech-woman.png"
                alt="Tecnologia aplicada al movimiento"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience badge - matching red design style */}
            <div className="absolute -bottom-4 right-0 flex items-center gap-4 rounded-lg bg-[#00a8a6] px-6 py-5 shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30">
                <Award className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="block font-sans text-3xl font-bold text-white">Respaldo</span>
                <span className="block text-sm font-medium uppercase tracking-wider text-white/90">
                  Medico Profesional
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
