"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Wavy underline SVG component
const WavyUnderline = () => (
  <svg viewBox="0 0 100 15" className="h-4 w-20 text-primary">
    <path
      d="M0 7.5 Q 12.5 0, 25 7.5 T 50 7.5 T 75 7.5 T 100 7.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

// Custom SVG icons matching the design
const PowerLiftingIcon = () => (
  <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 32h48M8 24v16M56 24v16M16 28v8M48 28v8M24 20v24M40 20v24" strokeLinecap="round" />
  </svg>
)

const DisciplineIcon = () => (
  <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="32" r="20" />
    <path d="M32 18v14l8 8" strokeLinecap="round" />
    <circle cx="32" cy="12" r="3" fill="currentColor" />
  </svg>
)

const YogaIcon = () => (
  <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="20" y="16" width="24" height="32" rx="4" />
    <text x="32" y="38" textAnchor="middle" fontSize="14" fill="currentColor" stroke="none" fontWeight="bold">KG</text>
  </svg>
)

const WeightLossIcon = () => (
  <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="32" cy="20" r="8" />
    <path d="M20 54c0-12 5-20 12-20s12 8 12 20" strokeLinecap="round" />
    <path d="M28 38l-8 16M36 38l8 16" strokeLinecap="round" />
  </svg>
)

const GymFitnessIcon = () => (
  <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="16" y="20" width="8" height="24" rx="2" />
    <rect x="40" y="20" width="8" height="24" rx="2" />
    <path d="M24 32h16M12 28v8M52 28v8" strokeLinecap="round" />
  </svg>
)

const services = [
  {
    icon: PowerLiftingIcon,
    title: "Power Lifting",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat.",
  },
  {
    icon: DisciplineIcon,
    title: "Discipline",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat.",
  },
  {
    icon: YogaIcon,
    title: "Yoga Powder",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat.",
  },
  {
    icon: WeightLossIcon,
    title: "Weight Loss",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat.",
  },
  {
    icon: GymFitnessIcon,
    title: "Gym Fitness",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
      {/* Diagonal stripe background pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `repeating-linear-gradient(
          135deg,
          transparent,
          transparent 10px,
          rgba(200,200,200,0.3) 10px,
          rgba(200,200,200,0.3) 11px
        )`
      }} />

      {/* Red top border */}
      <div className="absolute left-0 right-0 top-0 h-1.5 bg-primary" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Services
              </span>
              <span className="h-px w-10 bg-primary" />
            </div>
            <h2 className="max-w-lg font-sans text-3xl font-bold leading-tight text-[#1a1a1a] sm:text-4xl">
              Solutions For Moving Better & Feeling A Healthier
            </h2>
            <div className="mt-3">
              <WavyUnderline />
            </div>
          </div>

          <div className="max-w-sm">
            <p className="mb-4 font-serif text-sm italic text-gray-600">
              I have been a loyal customer of this auto parts company for years and I cannot recommend them enough.
            </p>
            <Link
              href="#contact"
              className="inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-primary/90"
            >
              More Services
            </Link>
          </div>
        </div>

        {/* Services grid - 5 cards in a row */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4 text-gray-400 transition-colors group-hover:text-primary">
                <service.icon />
              </div>

              {/* Content */}
              <h3 className="font-sans text-lg font-bold text-primary">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Read more link */}
              <Link
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:gap-3"
              >
                Read More
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
