"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-trainer.jpg"
          alt="Fitness trainer in gym"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-20 lg:px-8">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              More about Us
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-sans text-4xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Make yourself{" "}
            <span className="text-primary">Stronger</span>{" "}
            than your best excuses
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="#about"
              className="group flex items-center gap-3 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <button className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/50 transition-all group-hover:border-primary group-hover:bg-primary/10">
                <Play className="h-5 w-5 text-primary" />
              </span>
              Watch Video
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex items-center gap-8 border-t border-border/50 pt-8">
            <div>
              <span className="font-sans text-4xl font-bold text-primary">25+</span>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Years Experiences
              </p>
            </div>
            <div className="h-12 w-px bg-border/50" />
            <div>
              <span className="font-sans text-4xl font-bold text-primary">10K+</span>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Happy Customers
              </p>
            </div>
            <div className="h-12 w-px bg-border/50" />
            <div>
              <span className="font-sans text-4xl font-bold text-primary">99%</span>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Positive Ratings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
