"use client"

import Image from "next/image"
import { ClipboardCheck, Scan, Target, LineChart, Heart, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Evaluacion inicial",
    description: "Comenzamos conociendo tu condicion actual, historial medico, objetivos y estilo de vida. Esta evaluacion integral es la base de todo tu proceso.",
    details: ["Historia clinica completa", "Evaluacion fisica inicial", "Definicion de objetivos", "Analisis de habitos actuales"],
  },
  {
    icon: Scan,
    number: "02",
    title: "Analisis de movimiento",
    description: "Utilizamos tecnologia de precision para estudiar tu tecnica, activacion muscular y patrones de movimiento, identificando areas de mejora.",
    details: ["Evaluacion biomecanica", "Analisis postural", "Test funcionales", "Identificacion de desbalances"],
  },
  {
    icon: Target,
    number: "03",
    title: "Plan personalizado",
    description: "Con base en los datos recolectados, disenamos un programa de entrenamiento completamente adaptado a tu fisiologia y metas.",
    details: ["Programa de entrenamiento", "Plan nutricional", "Estrategia de recuperacion", "Metas a corto y largo plazo"],
  },
  {
    icon: LineChart,
    number: "04",
    title: "Seguimiento continuo",
    description: "Monitoreamos tu progreso con mediciones constantes, ajustando el plan segun tu respuesta al entrenamiento.",
    details: ["Sesiones de control", "Mediciones periodicas", "Ajustes de programa", "Feedback constante"],
  },
  {
    icon: Heart,
    number: "05",
    title: "Recuperacion integrada",
    description: "Integramos bienestar y descanso como parte fundamental del proceso para optimizar tus resultados.",
    details: ["Terapias de recuperacion", "Manejo del estres", "Optimizacion del sueno", "Bienestar integral"],
  },
]

export default function ProcessDetailSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="font-sans text-3xl font-bold text-[#0a1628] sm:text-4xl">
            Nuestro modelo de trabajo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Un enfoque estructurado y basado en ciencia para alcanzar tus objetivos de salud y rendimiento.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00fffd]/10 text-[#00a8a6]">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <span className="font-sans text-5xl font-bold text-[#00fffd]/20">{step.number}</span>
                </div>
                
                <h3 className="font-sans text-2xl font-bold text-[#0a1628] lg:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-gray-600">
                      <ArrowRight className="h-4 w-4 text-[#00fffd]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual indicator */}
              <div className="flex flex-1 items-center justify-center">
                <div className="relative h-64 w-64 lg:h-80 lg:w-80">
                  {/* Circle background */}
                  <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#00fffd]/20" />
                  <div className="absolute inset-4 rounded-full border-2 border-[#00fffd]/30" />
                  <div className="absolute inset-8 flex items-center justify-center rounded-full bg-[#0a1628]">
                    <step.icon className="h-16 w-16 text-[#00fffd]" />
                  </div>
                  
                  {/* Connection line to next step */}
                  {index < steps.length - 1 && (
                    <div className="absolute -bottom-16 left-1/2 hidden h-16 w-px -translate-x-1/2 bg-gradient-to-b from-[#00fffd]/50 to-transparent lg:block" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
