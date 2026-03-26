"use client"

import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

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

const team = [
  {
    name: "Dr. Carlos Mejia",
    role: "Director Medico",
    image: "/images/team-member-1.png",
  },
  {
    name: "Dra. Maria Rodriguez",
    role: "Fisioterapeuta",
    image: "/images/team-member-2.png",
  },
  {
    name: "Ana Martinez",
    role: "Entrenadora Personal",
    image: "/images/team-member-3.png",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-[#0a1628] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#00fffd]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00fffd]">
              Nuestro Equipo
            </span>
            <span className="h-px w-10 bg-[#00fffd]" />
          </div>
          <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Profesionales dedicados a tu bienestar
          </h2>
          <div className="mt-3 flex justify-center">
            <WavyUnderline />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-white/70">
            Acompanamiento interdisciplinar en cardiologia, fisioterapia y nutricion.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center"
            >
              {/* Image with dashed border */}
              <div className="relative mb-6 p-4">
                <div className="absolute inset-0 rounded-xl border-2 border-dashed border-[#00fffd]/30" />
                <div className="relative h-72 w-56 overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Info */}
              <p className="text-sm font-medium text-[#00fffd]">
                {member.role}
              </p>
              <h3 className="mt-1 font-sans text-xl font-bold text-white">
                {member.name}
              </h3>

              {/* Social icons */}
              <div className="mt-4 flex gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00fffd]/30 text-[#00fffd] transition-all hover:bg-[#00fffd] hover:text-[#0a1628]" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00fffd]/30 text-[#00fffd] transition-all hover:bg-[#00fffd] hover:text-[#0a1628]" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
