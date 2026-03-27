"use client"

import Image from "next/image"
import { Award, GraduationCap, Heart, Shield } from "lucide-react"

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

const credentials = [
  {
    icon: GraduationCap,
    title: "Formacion academica",
    description: "Medicina con especializacion en cardiologia y nutricion clinica.",
  },
  {
    icon: Award,
    title: "Experiencia clinica",
    description: "Anos de experiencia integrando salud cardiovascular con el rendimiento fisico.",
  },
  {
    icon: Heart,
    title: "Enfoque integral",
    description: "Combinacion unica de cardiologia, nutricion y ciencia del ejercicio.",
  },
  {
    icon: Shield,
    title: "Respaldo cientifico",
    description: "Protocolos basados en evidencia para resultados seguros y efectivos.",
  },
]

export default function DoctorSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,168,166,0.15) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image with decorative frame */}
            <div className="relative">
              {/* Cyan accent shape */}
              <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-[#00fffd]/20" />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[#00a8a6]/20" />
              
              {/* Image container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                <Image
                  src="/images/team-member-3.png"
                  alt="Dra. Lorena Gonzales Russi - Cardiologa y Nutricionista"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Authority badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-xl bg-[#0a1628] px-6 py-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-[#00fffd]" />
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-wider text-[#00fffd]">
                      Direccion Medica
                    </span>
                    <span className="block font-sans text-lg font-bold text-white">
                      Cardiofil y el Furor
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            {/* Section label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
                Posicionamiento
              </span>
              <span className="h-px w-10 bg-[#00fffd]" />
            </div>

            {/* Main Heading */}
            <h2 className="font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl lg:text-[2.75rem]">
              Dra. Lorena Gonzales Russi
            </h2>

            {/* Wavy underline */}
            <div className="mt-3">
              <WavyUnderline />
            </div>

            {/* Role */}
            <p className="mt-4 text-lg font-medium text-[#00a8a6]">
              Cardiologa | Nutricionista | Directora Medica
            </p>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Detras de CardioFit Lab hay una vision medica que transforma el entrenamiento convencional. 
              La Dra. Lorena Gonzales Russi lidera un enfoque donde cada rutina, cada plan nutricional y 
              cada proceso de recuperacion esta respaldado por la ciencia cardiovascular.
            </p>

            {/* Quote */}
            <blockquote className="mt-6 border-l-4 border-[#00fffd] pl-4">
              <p className="font-serif text-base italic text-[#0a1628]">
                &ldquo;El entrenamiento sin fundamento medico es un riesgo innecesario. Aqui cada movimiento 
                tiene un proposito, cada plan esta disenado para tu fisiologia especifica.&rdquo;
              </p>
            </blockquote>

            {/* Credentials grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {credentials.map((credential) => (
                <div
                  key={credential.title}
                  className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00fffd]/10 text-[#00a8a6]">
                    <credential.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-[#0a1628]">
                      {credential.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
