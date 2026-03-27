"use client"

import Link from "next/link"
import { Check, Star } from "lucide-react"

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

const plans = [
  {
    name: "Basico",
    description: "Para comenzar tu proceso con respaldo profesional.",
    price: "150.000",
    period: "/mes",
    features: [
      "Evaluacion inicial",
      "Plan de entrenamiento personalizado",
      "Acceso al gimnasio",
      "Seguimiento mensual",
      "App de seguimiento",
    ],
    highlighted: false,
    cta: "Comenzar ahora",
  },
  {
    name: "Premium",
    description: "El plan mas completo para resultados optimos.",
    price: "280.000",
    period: "/mes",
    features: [
      "Todo lo del plan Basico",
      "Evaluacion biomecanica completa",
      "Valoracion cardiovascular",
      "Plan nutricional personalizado",
      "Acceso a zona de recuperacion",
      "Sesiones de seguimiento semanales",
      "Acceso a zona de bienestar",
    ],
    highlighted: true,
    cta: "Elegir Premium",
  },
  {
    name: "Elite",
    description: "Experiencia completa con acompanamiento total.",
    price: "450.000",
    period: "/mes",
    features: [
      "Todo lo del plan Premium",
      "Acompanamiento medico directo",
      "Sesiones ilimitadas de recuperacion",
      "Nutricion in-situ incluida",
      "Acceso a coworking",
      "Prioridad en agenda",
      "Analisis de progreso avanzado",
    ],
    highlighted: false,
    cta: "Contactar",
  },
]

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-16 lg:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,255,253,0.3) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00fffd]">
            Planes
          </span>
          <h2 className="mt-4 font-sans text-3xl font-bold text-white sm:text-4xl">
            Elige tu plan de transformacion
          </h2>
          <div className="mt-3 flex justify-center">
            <WavyUnderline />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70">
            Todos nuestros planes incluyen respaldo medico y acceso a tecnologia de precision para tu entrenamiento.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-all ${
                plan.highlighted
                  ? "border-2 border-[#00fffd] bg-[#00fffd]/5 shadow-2xl shadow-[#00fffd]/20"
                  : "border border-white/10 bg-white/5"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-[#00fffd] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0a1628]">
                    <Star className="h-3 w-3 fill-current" />
                    Mas Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="font-sans text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-white/60">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-sm text-white/60">COP</span>
                <span className="ml-1 font-sans text-4xl font-bold text-[#00fffd]">{plan.price}</span>
                <span className="text-white/60">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#00fffd]" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="https://wa.me/573155774777"
                target="_blank"
                className={`flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all ${
                  plan.highlighted
                    ? "bg-[#00fffd] text-[#0a1628] hover:bg-[#68d2df]"
                    : "border-2 border-[#00fffd] text-[#00fffd] hover:bg-[#00fffd]/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-12 text-center text-sm text-white/50">
          Todos los precios estan sujetos a la evaluacion inicial. Consulta disponibilidad y promociones actuales.
        </p>
      </div>
    </section>
  )
}
