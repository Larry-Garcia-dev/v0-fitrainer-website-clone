"use client"

import Image from "next/image"
import { Laptop, Wifi, Coffee, Users, Clock, Sparkles } from "lucide-react"

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

const amenities = [
  {
    icon: Wifi,
    title: "WiFi de alta velocidad",
    description: "Conexion estable para todas tus necesidades.",
  },
  {
    icon: Coffee,
    title: "Zona de cafe",
    description: "Bebidas saludables para mantenerte activo.",
  },
  {
    icon: Users,
    title: "Ambiente profesional",
    description: "Espacios disenados para concentracion.",
  },
  {
    icon: Clock,
    title: "Horario flexible",
    description: "Disponible mientras esperas tu sesion.",
  },
]

const spaces = [
  {
    title: "Zona de coworking",
    description: "Espacios comodos para trabajar mientras esperas tu sesion de entrenamiento.",
    icon: Laptop,
    image: "/images/gym-interior.png",
  },
  {
    title: "Zona de alimentacion",
    description: "Opciones saludables y balanceadas para nutrir tu proceso de transformacion.",
    icon: Coffee,
    image: "/images/gym-interior.png",
  },
  {
    title: "Zona de bienestar",
    description: "Spa, masajes y espacios de relajacion para una recuperacion completa.",
    icon: Sparkles,
    image: "/images/gym-woman-dark.png",
  },
]

export default function CoworkingSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#00fffd]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
              Espacios
            </span>
            <span className="h-px w-10 bg-[#00fffd]" />
          </div>
          <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl lg:text-[2.75rem]">
            Mas que un gimnasio, un espacio integral
          </h2>
          <div className="mt-3 flex justify-center">
            <WavyUnderline />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-600">
            Disenado para que tu proceso continue mas alla del ejercicio, con espacios que complementan tu bienestar.
          </p>
        </div>

        {/* Spaces grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {spaces.map((space) => (
            <div
              key={space.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                
                {/* Icon badge */}
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00fffd] text-[#0a1628]">
                  <space.icon className="h-6 w-6" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-sans text-xl font-bold text-[#0a1628]">{space.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{space.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="mt-16 rounded-2xl bg-[#0a1628] p-8 lg:p-12">
          <div className="mb-8 text-center">
            <h3 className="font-sans text-2xl font-bold text-white">
              Comodidades incluidas
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Todo lo que necesitas para aprovechar tu tiempo al maximo.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <div
                key={amenity.title}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00fffd]/10 text-[#00fffd]">
                  <amenity.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-white">{amenity.title}</h4>
                  <p className="mt-1 text-xs text-white/60">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
