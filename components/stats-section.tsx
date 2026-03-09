"use client"

import Image from "next/image"
import Link from "next/link"
import { Dumbbell, HeartPulse } from "lucide-react"

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

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Image with stats card */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/images/stats-trainer.jpg"
                alt="Trainer using gym equipment"
                fill
                className="object-cover"
              />
            </div>

            {/* Stats Card Overlay */}
            <div className="absolute -bottom-6 -right-4 w-72 rounded-xl bg-white p-6 shadow-xl lg:right-6">
              {/* Client Satisfaction */}
              <div className="mb-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase text-gray-700">Client Satisfaction</span>
                  <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-white">90%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-[90%] rounded-full bg-primary" />
                </div>
              </div>

              {/* Customer Support */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase text-gray-700">Customer Support</span>
                  <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-white">85%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-[85%] rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Statistics
              </span>
              <span className="h-px w-10 bg-primary" />
            </div>
            <h2 className="font-sans text-3xl font-bold leading-tight text-[#1a1a1a] sm:text-4xl lg:text-[2.5rem]">
              Achieve Your Goals. Unlock Your Full Potential.
            </h2>
            <div className="mt-3">
              <WavyUnderline />
            </div>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Inceptos per con ulpa qui qui officia deserunt mollit ani sectetur consequatur proin.
            </p>

            {/* Feature cards */}
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center text-gray-400">
                  <Dumbbell className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold italic text-primary">
                    Free Fitness Training
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat tempo excepteur.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center text-gray-400">
                  <HeartPulse className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold italic text-primary">
                    Cardio And Strength
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Nam laoreet ultricies vestibulum. Cras a odio tempo excepteur sint occaecat cupidatat tempo excepteur.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="#contact"
              className="mt-8 inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-primary/90"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
