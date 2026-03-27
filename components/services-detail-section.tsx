"use client"

import Link from "next/link"
import { 
  ArrowRight, 
  Activity, 
  Heart, 
  Sparkles, 
  Utensils,
  Footprints,
  Stethoscope,
  Dumbbell,
  Waves,
  BadgePercent,
  FlameKindling
} from "lucide-react"

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

const serviceCategories = [
  {
    id: "biomecanica",
    title: "Biomecanica",
    icon: Footprints,
    color: "from-cyan-500 to-blue-500",
    services: [
      { name: "Analisis Running", price: "$650.000" },
      { name: "Analisis Marcha", price: "$400.000" },
    ],
  },
  {
    id: "cardiologia",
    title: "Cardiologia",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    services: [
      { name: "Consulta Especializada", price: "$300.000" },
      { name: "Ecocardiograma", price: "$250.000" },
      { name: "Holter 24h", price: "$200.000" },
      { name: "MAPA Presion Arterial", price: "$200.000" },
      { name: "ECG 12 Derivaciones", price: "$50.000" },
    ],
  },
  {
    id: "recuperacion",
    title: "Recuperacion & Spa",
    icon: Waves,
    color: "from-teal-500 to-cyan-500",
    services: [
      { name: "Terapia Fisica (10 sesiones)", price: "$650.000" },
      { name: "Circuito Recuperacion", price: "$220.000" },
      { name: "Masaje Terapeutico", price: "$120.000" },
      { name: "Bano Terapeutico / Jacuzzi", price: "$100.000" },
    ],
  },
  {
    id: "otros",
    title: "Otros Servicios",
    icon: Sparkles,
    color: "from-purple-500 to-indigo-500",
    services: [
      { name: "Consulta Nutricion", price: "$300.000" },
      { name: "Entrenamiento Simulador (4 sesiones)", price: "$200.000" },
    ],
  },
]

const mainServices = [
  {
    icon: Dumbbell,
    title: "Entrenamiento personalizado",
    description: "Planes disenados segun tu condicion, objetivos y analisis de movimiento. Cada ejercicio tiene un proposito especifico basado en datos.",
    features: ["Evaluacion inicial completa", "Programas a medida", "Seguimiento continuo", "Ajustes basados en progreso"],
  },
  {
    icon: Footprints,
    title: "Evaluacion biomecanica",
    description: "Estudio detallado de tu tecnica, activacion muscular y patrones de movimiento con tecnologia de precision.",
    features: ["Analisis de movimiento 3D", "Evaluacion postural", "Identificacion de desbalances", "Recomendaciones correctivas"],
  },
  {
    icon: Stethoscope,
    title: "Valoracion cardiovascular",
    description: "Evaluacion completa de tu salud cardiovascular con respaldo medico para un entrenamiento seguro y efectivo.",
    features: ["Pruebas de esfuerzo", "Monitoreo cardiaco", "Prescripcion de ejercicio", "Control de factores de riesgo"],
  },
  {
    icon: FlameKindling,
    title: "Recuperacion avanzada",
    description: "Crioterapia, sauna infrarrojo y terapias de descarga muscular para optimizar tu recuperacion.",
    features: ["Crioterapia localizada", "Sauna infrarrojo", "Terapia de compresion", "Protocolos personalizados"],
  },
  {
    icon: Waves,
    title: "Zona de bienestar",
    description: "Masajes, spa y experiencias enfocadas en recuperacion y descanso como parte integral del proceso.",
    features: ["Masajes terapeuticos", "Spa relajante", "Meditacion guiada", "Espacios de descanso"],
  },
  {
    icon: Utensils,
    title: "Nutricion integrada",
    description: "Opciones balanceadas y acompanamiento nutricional para complementar tu proceso de transformacion.",
    features: ["Plan nutricional personalizado", "Seguimiento de progreso", "Opciones saludables in-situ", "Educacion alimentaria"],
  },
]

export default function ServicesDetailSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#00fffd]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
              Servicios Detallados
            </span>
            <span className="h-px w-10 bg-[#00fffd]" />
          </div>
          <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl lg:text-[2.75rem]">
            Un proceso completo, no solo entrenamiento
          </h2>
          <div className="mt-3 flex justify-center">
            <WavyUnderline />
          </div>
        </div>

        {/* Main Services grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#00fffd] hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#00fffd]/10 text-[#00a8a6] transition-colors group-hover:bg-[#00fffd] group-hover:text-[#0a1628]">
                <service.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-sans text-xl font-bold text-[#0a1628]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="mt-4 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00fffd]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              <Link
                href="/contacto"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#00a8a6] transition-all hover:gap-3 hover:text-[#00796b]"
              >
                Mas informacion
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Pricing Categories */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#00fffd]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
                Precios por Categoria
              </span>
              <span className="h-px w-10 bg-[#00fffd]" />
            </div>
            <h3 className="mx-auto max-w-2xl font-sans text-2xl font-bold leading-tight text-[#0a1628] sm:text-3xl">
              Servicios Especializados
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-[#00fffd] hover:shadow-lg"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${category.color} p-4`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                      <category.icon className="h-5 w-5 text-white" strokeWidth={2} />
                    </div>
                    <h4 className="font-sans text-lg font-bold text-white">
                      {category.title}
                    </h4>
                  </div>
                </div>

                {/* Services list */}
                <div className="p-4">
                  <ul className="space-y-3">
                    {category.services.map((service) => (
                      <li key={service.name} className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                        <span className="text-sm text-gray-700">{service.name}</span>
                        <span className="text-sm font-semibold text-[#0a1628]">{service.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brochure CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="https://api.magnificapec.com/cardiofit/Brochure_Cardio.pdf"
            target="_blank"
            className="inline-flex items-center gap-3 rounded-full bg-[#00fffd] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#0a1628] transition-all hover:bg-[#68d2df]"
          >
            Descargar Brochure Completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
