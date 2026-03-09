"use client"

import Link from "next/link"
import { Instagram, Twitter, Facebook, Phone, Mail, MapPin, ChevronUp } from "lucide-react"

// Wavy underline SVG component
const WavyUnderline = ({ color = "text-primary" }: { color?: string }) => (
  <svg viewBox="0 0 60 12" className={`h-3 w-10 ${color}`}>
    <path
      d="M0 6 Q 7.5 0, 15 6 T 30 6 T 45 6 T 60 6"
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

// Fitrainer Logo
const FitrainerLogo = () => (
  <div className="flex items-center gap-2">
    <div className="flex h-10 w-10 items-center justify-center">
      <svg viewBox="0 0 40 40" className="h-10 w-10 text-white">
        <path
          d="M20 5 L30 10 L30 20 L25 25 L30 30 L20 35 L10 30 L15 25 L10 20 L10 10 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M15 15 L25 15 L25 20 L20 25 L15 20 Z" fill="currentColor" />
      </svg>
    </div>
    <span className="font-sans text-2xl font-bold text-white">Fitrainer</span>
  </div>
)

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#" },
  { label: "Private Policy", href: "#" },
  { label: "News & Article", href: "#blog" },
  { label: "Legal Notice", href: "#" },
]

const programs = [
  "Bodybuilding",
  "Yoga Power",
  "Areobics",
  "Body Wellness",
  "Zumba Dance",
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#1a1a1a]">
      {/* CTA Banner */}
      <div className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 lg:flex-row lg:px-8">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                Get A Quote
              </span>
              <span className="h-px w-10 bg-white/50" />
            </div>
            <h3 className="font-sans text-xl font-bold uppercase text-white md:text-2xl">
              Got A Question? We Would Be Happy To Help!
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 rounded-full border-2 border-white bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a] transition-all hover:bg-transparent hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        {/* Top row - Logo and contact info */}
        <div className="mb-10 flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row">
          <FitrainerLogo />
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+33 877 554 332</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@fitrainer.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>81 Haven, Sambergerville</span>
            </div>
          </div>
        </div>

        {/* Main columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Us */}
          <div>
            <h4 className="font-sans text-lg font-bold text-white">About Us</h4>
            <div className="mt-2">
              <WavyUnderline color="text-primary" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-2">
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

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-lg font-bold text-white">Quick Links</h4>
            <div className="mt-2">
              <WavyUnderline color="text-primary" />
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-sans text-lg font-bold text-white">Programs</h4>
            <div className="mt-2">
              <WavyUnderline color="text-primary" />
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              {programs.map((program) => (
                <li key={program}>
                  <Link
                    href="#services"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans text-lg font-bold text-white">Newsletter</h4>
            <div className="mt-2">
              <WavyUnderline color="text-primary" />
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-full border-0 bg-white px-5 py-3 text-sm text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="mt-3 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-primary/90">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-xs text-white/50">
              *quae convallis minim cum ornare! Pede ut rem, totam dictum convallis.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#111]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 text-center sm:flex-row lg:px-8">
          <p className="text-xs text-white/50">
            Copyright 2025 Fitrainer. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-white/50 transition-colors hover:text-white">
              Private Policy
            </Link>
            <span className="text-white/30">|</span>
            <Link href="#" className="text-xs text-white/50 transition-colors hover:text-white">
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all hover:bg-primary/90"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </footer>
  )
}
