"use client"

import Image from "next/image"
import { Instagram, Twitter, Facebook } from "lucide-react"

const team = [
  {
    name: "Kimberly Walker",
    role: "Instructor",
    image: "/images/trainer-1.jpg",
  },
  {
    name: "Smith Machine",
    role: "Instructor",
    image: "/images/trainer-2.jpg",
  },
  {
    name: "Jessica Adams",
    role: "Trainer",
    image: "/images/trainer-3.jpg",
  },
  {
    name: "David Reynolds",
    role: "Personal Trainer",
    image: "/images/trainer-4.jpg",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Meet our Teams
            </span>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-sans text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Dedicated & professional trainer <span className="text-primary">ready to supporting</span>
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Social icons - shown on hover */}
                <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </button>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110" aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {member.role}
                </p>
                <h3 className="mt-1 font-sans text-lg font-bold uppercase text-foreground">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
