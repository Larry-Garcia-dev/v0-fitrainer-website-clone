"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Clock, Dumbbell } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Achieve your goals",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo.",
  },
  {
    icon: Clock,
    title: "Train Day and night",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo.",
  },
  {
    icon: Dumbbell,
    title: "Best gym equipment",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-trainer.jpg"
                alt="Boxing workout"
                fill
                className="object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-4 rounded-xl bg-primary px-8 py-6 shadow-2xl shadow-primary/30 sm:right-6">
              <span className="block font-sans text-4xl font-bold text-primary-foreground">25+</span>
              <span className="mt-1 block text-sm font-medium uppercase tracking-wider text-primary-foreground/80">
                Years Experiences
              </span>
            </div>
            {/* Quote card */}
            <div className="absolute -left-4 top-8 max-w-xs rounded-xl bg-secondary/90 p-5 shadow-xl backdrop-blur-sm sm:left-0 lg:-left-6">
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;
              </p>
            </div>
          </div>

          {/* Content side */}
          <div>
            {/* Section label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Need Help
              </span>
            </div>

            {/* Phone number */}
            <p className="mb-6 font-sans text-2xl font-bold text-foreground">
              (+258) 2569 2582
            </p>

            {/* Features list */}
            <div className="flex flex-col gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex gap-5 rounded-xl border border-border/50 bg-secondary/50 p-5 transition-all hover:border-primary/30 hover:bg-secondary"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold uppercase tracking-wide text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="#services"
              className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
