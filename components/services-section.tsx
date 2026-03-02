"use client"

import Link from "next/link"
import { ArrowRight, Dumbbell, Flame, Zap, Shield, Flower, TrendingDown } from "lucide-react"

const services = [
  {
    icon: Dumbbell,
    title: "Gym Fitness",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat.",
  },
  {
    icon: Flame,
    title: "Body Building",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat.",
  },
  {
    icon: Zap,
    title: "Power Lifting",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat.",
  },
  {
    icon: Shield,
    title: "Discipline",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat.",
  },
  {
    icon: Flower,
    title: "Yoga Powder",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat.",
  },
  {
    icon: TrendingDown,
    title: "Weight Loss",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-14 flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <div className="mb-4 flex items-center gap-3 justify-center lg:justify-start">
              <span className="h-px w-10 bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Services
              </span>
            </div>
            <h2 className="font-sans text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Solutions for moving better & feeling <span className="text-primary">healthier</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              I have been a loyal customer of this auto parts company for years and I cannot recommend them enough.
            </p>
          </div>
          <Link
            href="#contact"
            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 lg:mt-0"
          >
            More Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl border border-border/50 p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 ${
                i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary"
              }`}
            >
              {/* Icon */}
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl transition-all ${
                  i === 0
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                }`}
              >
                <service.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="font-sans text-xl font-semibold uppercase tracking-wide">
                {service.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  i === 0 ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              {/* Read more link */}
              <Link
                href="#contact"
                className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-all ${
                  i === 0
                    ? "text-primary-foreground hover:gap-3"
                    : "text-primary hover:gap-3"
                }`}
              >
                Read more
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Decorative number */}
              <span
                className={`absolute -bottom-4 -right-2 font-sans text-[8rem] font-bold leading-none ${
                  i === 0 ? "text-primary-foreground/5" : "text-foreground/5"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
