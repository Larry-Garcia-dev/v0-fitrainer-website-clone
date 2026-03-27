"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    specialty: "Direccion Medica",
    image: "/images/team-member-3.png",
    bio: "Lidera el enfoque medico de CardioFit Lab, integrando cardiologia y nutricion para un entrenamiento con respaldo cientifico.",
  },
  {
    name: "Edna Rengifo",
    role: "Fisioterapeuta",
    specialty: "Rehabilitacion y Movimiento",
    image: "/images/team-member-2.png",
    bio: "Especialista en rehabilitacion y movimiento funcional, asegurando que cada ejercicio sea seguro y efectivo.",
  },
  {
    name: "Ivan Parra",
    role: "Entrenador Principal",
    specialty: "Fuerza y Acondicionamiento",
    image: "/images/team-member-1.png",
    bio: "Experto en fuerza y acondicionamiento, disenando programas que transforman el rendimiento fisico.",
  },
  {
    name: "Fernando",
    role: "Co-fundador",
    specialty: "Operaciones y Vision",
    image: "/images/team-member-1.png",
    bio: "El motor detras de CardioFit Lab, construyendo un espacio donde cada persona encuentra su mejor version.",
  },
]

export default function TeamCarouselSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
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
            Acompanamiento interdisciplinar para un proceso completo de transformacion.
          </p>
        </div>

        {/* Team Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-5xl"
        >
          <CarouselContent className="-ml-4">
            {team.map((member) => (
              <CarouselItem key={member.name} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-[#00fffd] hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden bg-[#0a1628]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/20 to-transparent" />
                    
                    {/* Name overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-sm font-medium text-[#00fffd]">{member.specialty}</p>
                      <h3 className="font-sans text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-sm text-white/70">{member.role}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-gray-600">{member.bio}</p>
                    
                    {/* Decorative line */}
                    <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#00fffd] to-[#00a8a6]" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <CarouselPrevious className="static translate-y-0 border-[#00fffd] bg-transparent text-[#00fffd] hover:bg-[#00fffd] hover:text-[#0a1628]" />
            <CarouselNext className="static translate-y-0 border-[#00fffd] bg-transparent text-[#00fffd] hover:bg-[#00fffd] hover:text-[#0a1628]" />
          </div>
        </Carousel>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Conoce a nuestro equipo completo y comienza tu proceso de transformacion.
          </p>
        </div>
      </div>
    </section>
  )
}
