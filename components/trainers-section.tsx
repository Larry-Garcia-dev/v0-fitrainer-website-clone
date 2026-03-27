"use client"

import Image from "next/image"
import { Award, Dumbbell, Users } from "lucide-react"

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

const trainers = [
  {
    name: "Ivan Parra",
    role: "Entrenador Principal",
    specialty: "Fuerza y Acondicionamiento",
    image: "/images/team-member-1.png",
    certifications: ["NSCA-CPT", "FMS Level 2", "Precision Nutrition"],
    experience: "8+ anos de experiencia",
  },
  {
    name: "Carlos Martinez",
    role: "Entrenador de Rendimiento",
    specialty: "Alto Rendimiento Deportivo",
    image: "/images/team-member-1.png",
    certifications: ["CSCS", "USAW", "Functional Movement"],
    experience: "6+ anos de experiencia",
  },
  {
    name: "Andrea Gomez",
    role: "Entrenadora de Bienestar",
    specialty: "Entrenamiento Funcional",
    image: "/images/hero-woman.png",
    certifications: ["ACE-CPT", "Yoga Alliance", "Pilates Mat"],
    experience: "5+ anos de experiencia",
  },
]

export default function TrainersSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#00fffd]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
              Entrenadores
            </span>
            <span className="h-px w-10 bg-[#00fffd]" />
          </div>
          <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl lg:text-[2.75rem]">
            Profesionales certificados a tu servicio
          </h2>
          <div className="mt-3 flex justify-center">
            <WavyUnderline />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-600">
            Nuestro equipo de entrenadores combina formacion academica, experiencia practica y pasion por transformar vidas.
          </p>
        </div>

        {/* Trainers grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group overflow-hidden rounded-2xl bg-gray-50 transition-all hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-[#0a1628]">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                
                {/* Name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-medium text-[#00fffd]">{trainer.specialty}</p>
                  <h3 className="font-sans text-xl font-bold text-white">{trainer.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm font-medium text-[#00a8a6]">{trainer.role}</p>
                
                {/* Stats */}
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <Award className="h-4 w-4 text-[#00fffd]" />
                  <span>{trainer.experience}</span>
                </div>

                {/* Certifications */}
                <div className="mt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Certificaciones
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="rounded-full bg-[#00fffd]/10 px-3 py-1 text-xs font-medium text-[#00a8a6]"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
