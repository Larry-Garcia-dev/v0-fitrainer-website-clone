"use client"

import Image from "next/image"
import { Heart, Star } from "lucide-react"

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

// Partner logos mock
const partners = [
  { name: "ME", icon: "M" },
  { name: "Express", icon: "X" },
  { name: "CREATIVE", icon: "C" },
  { name: "CREATI", icon: "R" },
]

export default function AchievementSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side with paint splash effect */}
          <div className="relative">
            {/* Red paint splash effect background */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3">
              <svg viewBox="0 0 400 150" className="h-full w-full" preserveAspectRatio="none">
                <path
                  d="M0,150 L0,50 Q50,20 100,60 T200,40 T300,70 T400,30 L400,150 Z"
                  fill="#e31837"
                />
              </svg>
            </div>

            {/* Woman Image */}
            <div className="relative z-10 mx-auto h-[400px] w-[300px] md:h-[500px] md:w-[350px]">
              <Image
                src="/images/achievement-woman.jpg"
                alt="Woman drinking protein shake"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Stats Cards */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-4">
              <div className="rounded-xl border border-gray-200 bg-white px-6 py-4 text-center shadow-lg">
                <span className="block font-sans text-3xl font-bold text-[#1a1a1a]">1250 +</span>
                <div className="my-1 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Happy Customers</span>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white px-6 py-4 text-center shadow-lg">
                <span className="block font-sans text-3xl font-bold text-[#1a1a1a]">4.9</span>
                <div className="my-1 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-400/50 text-yellow-400/50"}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Positive Ratings</span>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            {/* Section label */}
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Achievement
              </span>
              <span className="h-px w-10 bg-primary" />
            </div>

            {/* Main Heading */}
            <h2 className="font-sans text-3xl font-bold leading-tight text-[#1a1a1a] sm:text-4xl lg:text-[2.5rem]">
              Trusted By 25,000+ Happy Customers Are Joining To Achieve Goal
            </h2>

            {/* Wavy underline */}
            <div className="mt-3">
              <WavyUnderline />
            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Quote */}
            <p className="mt-6 font-serif text-base italic text-gray-700">
              &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;
            </p>

            {/* Trusted Partner Section */}
            <div className="mt-8">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px flex-1 bg-primary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Trusted Partner
                </span>
                <span className="h-px flex-1 bg-primary" />
              </div>

              {/* Partner Logos */}
              <div className="flex items-center justify-between gap-4 rounded-xl bg-primary px-6 py-4">
                {partners.map((partner) => (
                  <div key={partner.name} className="flex flex-col items-center text-white">
                    <span className="text-2xl font-bold">{partner.icon}</span>
                    <span className="text-xs uppercase tracking-wider">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
