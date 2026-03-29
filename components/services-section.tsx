"use client"

import Link from "next/link"
import { ArrowRight, Dumbbell, Bike, Activity, Snowflake, Heart, Utensils, Zap, Thermometer } from "lucide-react"

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

// Planes de Entrenamiento - Mayor relevancia
const trainingPlans = [
  {
    icon: Dumbbell,
    title: "Experiencia Fitness Plan Basico",
    price: "$349.000",
    features: [
      "Analisis biomecanica dinamico y estatico",
      "Plan de entrenamiento individualizado",
      "4 clases semipersonalizadas a la semana",
      "Electrocardiograma con precio adicional (+35 anos)",
    ],
    highlighted: false,
  },
  {
    icon: Dumbbell,
    title: "Experiencia Fitness",
    price: "$449.000",
    firstMonth: "$549.000",
    features: [
      "Analisis biomecanica dinamico y estatico",
      "Plan de entrenamiento individualizado",
      "4 clases semipersonalizadas a la semana",
      "Control de sensores a los 2 meses",
      "Bano terapeutico 1 vez al mes",
      "Electrocardiograma con precio adicional (+35 anos)",
    ],
    highlighted: true,
  },
  {
    icon: Dumbbell,
    title: "Experiencia Fitness de Lujo",
    price: "$750.000",
    features: [
      "Todo lo del plan Experiencia Fitness",
      "Bano terapeutico o spa semanal",
      "Jugo de la vida 3 veces por semana",
      "Estimacion del consumo maximo de oxigeno",
      "Banos de contraste (frio - calor)",
    ],
    highlighted: false,
  },
  {
    icon: Bike,
    title: "Experiencia Bike Fit de Lujo",
    price: "Desde $450.000",
    features: [
      "Bike fit estatico: antropometria y ajuste",
      "Bike fit dinamico: analisis 3D del movimiento",
      "Analisis del pedaleo y aerodinamica",
      "Electromiografia, fuerzas y simetria muscular",
      "Evaluacion del umbral de fatiga neuromuscular",
      "Control de sensores a los 2 meses ($99.000)",
    ],
    highlighted: false,
  },
]

// Servicios Adicionales
const additionalServices = [
  {
    icon: Activity,
    title: "Analisis Biomecanico de Running",
    price: "$650.000",
    description: "Estudio completo de tu tecnica de carrera, activacion muscular y patrones de movimiento.",
  },
  {
    icon: Activity,
    title: "Analisis Biomecanico de la Marcha",
    price: "$400.000",
    description: "Evaluacion detallada de tu forma de caminar y postura.",
  },
  {
    icon: Zap,
    title: "Analisis Biomecanico General",
    price: "$250.000",
    description: "Cuantificacion de resultados de entrenamiento y medidas antropometricas.",
  },
  {
    icon: Snowflake,
    title: "Bano Terapeutico",
    price: "$100.000",
    description: "Uso de jacuzzi o terapia de hielo para recuperacion muscular.",
  },
  {
    icon: Heart,
    title: "Spa y Masajes",
    price: "$120.000",
    description: "Masaje relajante o deportivo de 45 minutos.",
  },
  {
    icon: Thermometer,
    title: "Sauna",
    price: "$50.000",
    description: "Sesion de sauna para relajacion y desintoxicacion.",
  },
  {
    icon: Utensils,
    title: "Jugo de la Vida",
    price: "$15.000",
    description: "Bebida nutricional para complementar tu entrenamiento.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
      {/* Diagonal stripe background pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `repeating-linear-gradient(
          135deg,
          transparent,
          transparent 10px,
          rgba(0,168,166,0.2) 10px,
          rgba(0,168,166,0.2) 11px
        )`
      }} />

      {/* Cyan top border */}
      <div className="absolute left-0 right-0 top-0 h-1.5 bg-[#00fffd]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header - Planes de Entrenamiento */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
              Planes de Entrenamiento
            </span>
            <span className="h-px w-10 bg-[#00fffd]" />
          </div>
          <h2 className="max-w-lg font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl">
            Elige la experiencia que se adapta a ti
          </h2>
          <div className="mt-3">
            <WavyUnderline />
          </div>
          <p className="mt-4 max-w-2xl text-gray-600">
            Todos los planes pueden ser personalizados por un costo adicional de $250.000
          </p>
        </div>

        {/* Training Plans Grid */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trainingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`group relative rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${
                plan.highlighted
                  ? "bg-[#0a1628] text-white shadow-lg ring-2 ring-[#00fffd]"
                  : "bg-white shadow-sm hover:border-[#00fffd] border border-transparent"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#00fffd] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0a1628]">
                  Mas Popular
                </div>
              )}

              {/* Icon */}
              <div className={`mb-4 ${plan.highlighted ? "text-[#00fffd]" : "text-gray-400 group-hover:text-[#00fffd]"} transition-colors`}>
                <plan.icon className="h-10 w-10" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className={`font-sans text-lg font-bold ${plan.highlighted ? "text-white" : "text-[#0a1628]"}`}>
                {plan.title}
              </h3>

              {/* Price */}
              <div className="mt-3 mb-4">
                <span className={`text-2xl font-bold ${plan.highlighted ? "text-[#00fffd]" : "text-[#00a8a6]"}`}>
                  {plan.price}
                </span>
                {plan.firstMonth && (
                  <p className={`text-xs mt-1 ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                    Primera mensualidad: {plan.firstMonth}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start gap-2 text-sm ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00fffd]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contacto"
                className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all ${
                  plan.highlighted
                    ? "bg-[#00fffd] text-[#0a1628] hover:bg-[#68d2df]"
                    : "bg-[#0a1628] text-white hover:bg-[#0a1628]/90"
                }`}
              >
                Agendar
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Section header - Servicios Adicionales */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
              Servicios Adicionales
            </span>
            <span className="h-px w-10 bg-[#00fffd]" />
          </div>
          <h2 className="max-w-lg font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl">
            Complementa tu experiencia
          </h2>
          <div className="mt-3">
            <WavyUnderline />
          </div>
        </div>

        {/* Additional Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {additionalServices.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#00fffd] border border-transparent"
            >
              {/* Icon */}
              <div className="mb-4 text-gray-400 transition-colors group-hover:text-[#00fffd]">
                <service.icon className="h-10 w-10" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-sans text-base font-bold text-[#0a1628]">
                {service.title}
              </h3>
              <p className="mt-1 text-xl font-bold text-[#00a8a6]">
                {service.price}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Read more link */}
              <Link
                href="/contacto"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00796b] transition-all hover:gap-3 hover:text-[#00a8a6]"
              >
                Mas informacion
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
