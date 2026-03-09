"use client"

import Image from "next/image"
import { Instagram, Twitter, Facebook } from "lucide-react"

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

// Google icon
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
)

const team = [
  {
    name: "Kimberly Walker",
    role: "Instructor",
    image: "/images/team-1.jpg",
  },
  {
    name: "Smith Machine",
    role: "Instructor",
    image: "/images/team-2.jpg",
  },
  {
    name: "Kimberly Walker",
    role: "Trainer",
    image: "/images/team-3.jpg",
  },
  {
    name: "Smith Machine",
    role: "Personal Trainer",
    image: "/images/team-4.jpg",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Meet Our Teams
            </span>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold italic leading-tight text-[#1a1a1a] sm:text-4xl lg:text-[2.75rem]">
            Dedicated & Professional Trainer Ready To Supporting
          </h2>
          <div className="mt-3 flex justify-center">
            <WavyUnderline />
          </div>
        </div>

        {/* Team grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name + member.role}
              className="group flex flex-col items-center"
            >
              {/* Image with dashed border */}
              <div className="relative mb-4 p-4">
                <div className="absolute inset-0 rounded-xl border-2 border-dashed border-gray-300" />
                <div className="relative h-64 w-48 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <p className="text-sm font-medium text-primary">
                {member.role}
              </p>
              <h3 className="mt-1 font-sans text-lg font-bold text-[#1a1a1a]">
                {member.name}
              </h3>

              {/* Social icons */}
              <div className="mt-3 flex gap-2">
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3b5998] text-white transition-transform hover:scale-110" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1da1f2] text-white transition-transform hover:scale-110" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#db4437] text-white transition-transform hover:scale-110" aria-label="Google">
                  <GoogleIcon />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white transition-transform hover:scale-110" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
