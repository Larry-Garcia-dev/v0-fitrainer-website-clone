"use client"

import Link from "next/link"

// Wavy underline SVG component
const WavyUnderline = () => (
  <svg viewBox="0 0 100 15" className="h-4 w-20 text-white/30">
    <path
      d="M0 7.5 Q 12.5 0, 25 7.5 T 50 7.5 T 75 7.5 T 100 7.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

const plans = [
  {
    name: "Basic Membership",
    price: "19",
    features: [
      "Eleifend aut maxime metus.",
      "Rhoncus commodo port.",
      "Nisl netus, consequun.",
    ],
    featured: false,
  },
  {
    name: "Standard Membership",
    price: "39",
    features: [
      "Eleifend aut maxime metus.",
      "Rhoncus commodo port.",
      "Nisl netus, consequun.",
    ],
    featured: true,
  },
  {
    name: "Ultimate Membership",
    price: "59",
    features: [
      "Eleifend aut maxime metus.",
      "Rhoncus commodo port.",
      "Nisl netus, consequun.",
    ],
    featured: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#1a1a1a] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Pricing Plans
            </span>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold italic leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Dedicated & Professional Trainer Ready To Supporting
          </h2>
          <div className="mt-3 flex justify-center">
            <WavyUnderline />
          </div>
        </div>

        {/* Pricing grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ${
                plan.featured
                  ? "border-2 border-primary shadow-xl shadow-primary/20"
                  : "border border-primary/20"
              }`}
            >
              {/* Header */}
              <div className={`px-6 py-4 text-center ${plan.featured ? "bg-primary" : "bg-white"}`}>
                <h3 className={`font-sans text-lg font-bold ${plan.featured ? "text-white" : "text-[#1a1a1a]"}`}>
                  {plan.name}
                </h3>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col bg-white px-6 py-8">
                {/* Price */}
                <div className="mb-6 text-center">
                  <div className="flex items-start justify-center">
                    <span className="mt-2 text-lg font-bold text-[#1a1a1a]">$</span>
                    <span className="font-sans text-6xl font-bold text-[#1a1a1a]">{plan.price}</span>
                    <span className="mt-2 text-lg font-bold text-[#1a1a1a]">99</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">Person</p>
                </div>

                {/* Features */}
                <div className="flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i}>
                      <p className="py-3 text-center text-sm text-gray-600">{feature}</p>
                      {i < plan.features.length - 1 && <div className="h-px bg-gray-200" />}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="#contact"
                  className="mt-6 flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-primary/90"
                >
                  Join Now
                </Link>

                {/* Note */}
                <p className="mt-4 text-center text-xs text-gray-500">
                  *Please read our <span className="underline">term and condition</span> before order ticket
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
