"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Dumbbell, HeartPulse } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/stats-bg.jpg"
          alt="Gym background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Top stats bar */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Expert Trainers" },
            { value: "25K", label: "Happy Members" },
            { value: "99%", label: "Customer Support" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-border/30 bg-secondary/50 p-6 text-center backdrop-blur-sm"
            >
              <span className="font-sans text-4xl font-bold text-primary">{stat.value}</span>
              <span className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Statistics
              </span>
            </div>
            <h2 className="font-sans text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Achieve Your Goals. Unlock Your <span className="text-primary">Full Potential.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Inceptos per con ulpa qui qui officia deserunt mollit ani sectetur consequatur proin.
            </p>
          </div>

          {/* Right - feature cards */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 rounded-xl border border-border/50 bg-secondary/50 p-6 backdrop-blur-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Dumbbell className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold uppercase tracking-wide text-foreground">
                  Free Fitness Training
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat tempo excepteur.
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-xl border border-border/50 bg-secondary/50 p-6 backdrop-blur-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <HeartPulse className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold uppercase tracking-wide text-foreground">
                  Cardio and Strength
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat tempo excepteur.
                </p>
              </div>
            </div>

            <Link
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
