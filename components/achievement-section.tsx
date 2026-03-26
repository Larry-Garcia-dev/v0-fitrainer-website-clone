"use client"

import Image from "next/image"
import { Activity, Star } from "lucide-react"

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

export default function AchievementSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="relative">
            {/* Cyan accent background */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3">
              <svg viewBox="0 0 400 150" className="h-full w-full" preserveAspectRatio="none">
                <path
                  d="M0,150 L0,50 Q50,20 100,60 T200,40 T300,70 T400,30 L400,150 Z"
                  fill="#00a8a6"
                />
              </svg>
            </div>

            {/* Woman Image */}
            <div className="relative z-10 mx-auto h-[400px] w-[300px] md:h-[500px] md:w-[350px]">
              <Image
                src="/images/drinking-woman.png"
                alt="Mujer atleta hidratandose"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Stats Cards */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-4">
              <div className="rounded-xl border border-gray-200 bg-white px-6 py-4 text-center shadow-lg">
                <span className="block font-sans text-3xl font-bold text-[#0a1628]">100%</span>
                <div className="my-1 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Activity key={i} className="h-4 w-4 text-[#00fffd]" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Personalizado</span>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white px-6 py-4 text-center shadow-lg">
                <span className="block font-sans text-3xl font-bold text-[#0a1628]">4.9</span>
                <div className="my-1 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 5 ? "fill-[#00fffd] text-[#00fffd]" : "fill-[#00fffd]/50 text-[#00fffd]/50"}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Satisfaccion</span>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            {/* Section label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
                Posicionamiento
              </span>
              <span className="h-px w-10 bg-[#00fffd]" />
            </div>

            {/* Main Heading */}
            <h2 className="font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl lg:text-[2.5rem]">
              No es un gimnasio. Es un espacio donde el movimiento se entiende.
            </h2>

            {/* Wavy underline */}
            <div className="mt-3">
              <WavyUnderline />
            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Un espacio donde el movimiento se analiza y se entrena con intencion. Cada ejercicio tiene un proposito, cada rutina esta respaldada por datos.
            </p>

            {/* Quote */}
            <p className="mt-6 font-serif text-base italic text-gray-700">
              &ldquo;Avanza. Agenda tu valoracion y comienza un proceso disenado para tu cuerpo.&rdquo;
            </p>

            {/* CTA Section */}
            <div className="mt-8">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px flex-1 bg-[#00fffd]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00a8a6]">
                  Resultados con intencion
                </span>
                <span className="h-px flex-1 bg-[#00fffd]" />
              </div>

              {/* CTA Banner */}
              <div className="flex items-center justify-between gap-4 rounded-xl bg-[#00fffd] px-6 py-4">
                <p className="font-sans font-bold text-[#0a1628]">
                  Empieza tu proceso con respaldo profesional
                </p>
                <a
                  href="#contact"
                  className="rounded-full bg-[#0a1628] px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-[#0a1628]/80"
                >
                  Agendar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
