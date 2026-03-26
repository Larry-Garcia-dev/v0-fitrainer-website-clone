"use client"

import Image from "next/image"
import { Instagram, Linkedin, Mail } from "lucide-react"

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
    name: "Lorena Gonzales Russi",
    role: "Cardiologa, Nutricionista",
    image: "/images/team-member-3.png",
    
  },
  {
    name: "Edna Rengifo ",
    role: "Fisioterapeuta",
    image: "/images/team-member-2.png",
  },
  {
    name: "Ivan Parra",
    role: "Entrenador",
    image: "/images/team-member-1.png",
    
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#00fffd]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
              Nuestro Equipo
            </span>
            <span className="h-px w-10 bg-[#00fffd]" />
          </div>
          <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl lg:text-[2.75rem]">
            Profesionales dedicados a tu bienestar
          </h2>
          <div className="mt-3 flex justify-center">
            <WavyUnderline />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-600">
            Acompanamiento interdisciplinar en cardiologia, fisioterapia y nutricion para un proceso completo.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name + member.role}
              className="group flex flex-col items-center"
            >
              {/* Image with gradient border */}
              <div className="relative mb-6 p-1 rounded-2xl bg-gradient-to-b from-[#00fffd] to-[#00a8a6]">
                <div className="relative h-72 w-56 overflow-hidden rounded-xl bg-[#0a1628]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Info */}
              <p className="text-sm font-medium text-[#00fffd]">
                {member.role}
              </p>
              <h3 className="mt-1 font-sans text-xl font-bold text-[#0a1628]">
                {member.name}
              </h3>

              {/* Social icons */}
              {/* <div className="mt-4 flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00fffd]/10 text-[#00a8a6] transition-all hover:bg-[#00fffd] hover:text-[#0a1628]" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00fffd]/10 text-[#00a8a6] transition-all hover:bg-[#00fffd] hover:text-[#0a1628]" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00fffd]/10 text-[#00a8a6] transition-all hover:bg-[#00fffd] hover:text-[#0a1628]" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
