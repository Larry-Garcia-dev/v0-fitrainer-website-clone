"use client"

import Image from "next/image"
import { Watch, Heart, Dumbbell } from "lucide-react"

const features = [
  {
    icon: Watch,
    title: "ACHIEVE YOUR GOALS",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo.",
  },
  {
    icon: Heart,
    title: "TRAIN DAY AND NIGHT",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo.",
    highlighted: true,
  },
  {
    icon: Dumbbell,
    title: "BEST GYM EQUIPMENT",
    description: "Nam laoreet ultricies vestibulum. Cras a odio tempo.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/features-bg.jpg"
          alt="Gym background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center rounded-2xl border-2 p-8 text-center transition-all ${
                feature.highlighted
                  ? "border-primary bg-transparent"
                  : "border-primary/40 bg-transparent"
              }`}
            >
              <div className="mb-6 text-white">
                <feature.icon className="h-16 w-16" strokeWidth={1} />
              </div>
              <h3 className="font-sans text-lg font-bold uppercase tracking-wider text-primary">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
