"use client"

import Image from "next/image"
import Link from "next/link"

// Wavy underline SVG component
const WavyUnderline = () => (
  <svg viewBox="0 0 100 15" className="h-4 w-20 text-white/30">
    <path
      d="M0 7.5 Q 12.5 0, 25 7.5 T 50 7.5 T 75 7.5 T 100 7.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

// Quote icon
const QuoteIcon = ({ className = "" }: { className?: string }) => (
  <div className={`flex h-14 w-14 items-center justify-center rounded-full ${className}`}>
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  </div>
)

const testimonials = [
  {
    text: "Entrenar aqui cambio completamente mi forma de ver el ejercicio. Todo tiene un proposito.",
    name: "Maria Lopez",
    role: "Cliente",
    image: "/images/hero-female.jpg",
    featured: false,
  },
  {
    text: "El acompanamiento y la tecnologia hacen que realmente sientas el avance.",
    name: "Juan Rodriguez",
    role: "Cliente",
    image: "/images/testimonial-1.jpg",
    featured: true,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gym-interior.png"
          alt="CardioFit Lab interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1628]/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#00fffd]">
                Testimonios
              </span>
              <span className="h-px w-10 bg-[#00fffd]/50" />
            </div>
            <h2 className="font-sans text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Experiencias reales
            </h2>
            <div className="mt-3">
              <WavyUnderline />
            </div>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Nuestros clientes han transformado su relacion con el ejercicio gracias a un enfoque basado en ciencia y respaldo profesional.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Cada proceso es unico, cada resultado es medible.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-block rounded-full bg-[#00fffd] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0a1628] transition-all hover:bg-[#68d2df]"
            >
              Comienza tu proceso
            </Link>
          </div>

          {/* Right - testimonial cards */}
          <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
            {/* First card - outlined */}
            <div className="relative rounded-xl border-2 border-dashed border-[#00fffd]/30 bg-transparent p-6 md:mt-12">
              <QuoteIcon className="bg-[#68d2df] text-white" />
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {testimonials[0].text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#00fffd]/20">
                  <Image
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-[#00fffd]">
                    {testimonials[0].name}
                  </h4>
                  <p className="text-xs text-white/60">{testimonials[0].role}</p>
                </div>
              </div>
            </div>

            {/* Second card - filled cyan */}
            <div className="relative rounded-xl bg-[#00fffd] p-6 md:-mt-6">
              <QuoteIcon className="bg-white text-[#00a8a6]" />
              <p className="mt-4 text-sm leading-relaxed text-[#0a1628]/90">
                {testimonials[1].text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#0a1628]/20">
                  <Image
                    src={testimonials[1].image}
                    alt={testimonials[1].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-[#0a1628]">
                    {testimonials[1].name}
                  </h4>
                  <p className="text-xs text-[#0a1628]/70">{testimonials[1].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
