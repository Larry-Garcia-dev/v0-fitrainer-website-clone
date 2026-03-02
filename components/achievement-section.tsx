"use client"

import Image from "next/image"
import { Quote } from "lucide-react"

export default function AchievementSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Content side */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Achievement
              </span>
            </div>

            <h2 className="font-sans text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Trusted by <span className="text-primary">25,000+</span> happy Customers are joining to achieve goal
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            {/* Quote */}
            <div className="relative mt-8 rounded-xl border-l-4 border-primary bg-background/50 p-6">
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/20" />
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">
                trusted partner
              </p>
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/achievement.jpg"
                alt="Gym achievement"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-4">
              <div className="flex-1 rounded-xl bg-background/90 p-4 text-center backdrop-blur-sm">
                <span className="block font-sans text-2xl font-bold text-primary">25K+</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Happy Customers</span>
              </div>
              <div className="flex-1 rounded-xl bg-primary p-4 text-center">
                <span className="block font-sans text-2xl font-bold text-primary-foreground">99%</span>
                <span className="text-xs uppercase tracking-wider text-primary-foreground/80">Positive Ratings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
