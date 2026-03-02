"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

const plans = [
  {
    name: "Basic Membership",
    price: "$19",
    period: "99",
    suffix: "Person",
    features: [
      "Nisl netus, consequun.",
      "Rhoncus commodo port.",
      "Eleifend aut maxime metus.",
    ],
    featured: false,
  },
  {
    name: "Standard Membership",
    price: "$39",
    period: "99",
    suffix: "Person",
    features: [
      "Nisl netus, consequun.",
      "Rhoncus commodo port.",
      "Eleifend aut maxime metus.",
    ],
    featured: true,
  },
  {
    name: "Ultimate Membership",
    price: "$59",
    period: "99",
    suffix: "Person",
    features: [
      "Nisl netus, consequun.",
      "Rhoncus commodo port.",
      "Eleifend aut maxime metus.",
    ],
    featured: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Pricing Plans
            </span>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-sans text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Dedicated & professional trainer <span className="text-primary">ready to supporting</span>
          </h2>
        </div>

        {/* Pricing grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 lg:p-10 ${
                plan.featured
                  ? "border-primary bg-primary shadow-xl shadow-primary/20"
                  : "border-border/50 bg-background hover:border-primary/40"
              }`}
            >
              {/* Plan name */}
              <h3
                className={`font-sans text-lg font-semibold uppercase tracking-wide ${
                  plan.featured ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className={`font-sans text-5xl font-bold ${
                    plan.featured ? "text-primary-foreground" : "text-primary"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`font-sans text-2xl font-bold ${
                    plan.featured ? "text-primary-foreground" : "text-primary"
                  }`}
                >
                  {plan.period}
                </span>
                <span
                  className={`ml-2 text-sm ${
                    plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.suffix}
                </span>
              </div>

              {/* Divider */}
              <div
                className={`my-6 h-px ${
                  plan.featured ? "bg-primary-foreground/20" : "bg-border"
                }`}
              />

              {/* Features */}
              <ul className="flex flex-col gap-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        plan.featured
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-primary-foreground/90" : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#contact"
                className={`group/btn mt-8 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-all ${
                  plan.featured
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Join Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>

              {/* Note */}
              <p
                className={`mt-4 text-center text-xs ${
                  plan.featured ? "text-primary-foreground/60" : "text-muted-foreground/70"
                }`}
              >
                *Please read our term and condition before order ticket
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
