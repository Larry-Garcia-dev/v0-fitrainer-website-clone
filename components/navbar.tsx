"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
]

// Fitrainer Logo
const FitrainerLogo = () => (
  <div className="flex items-center gap-2">
    <div className="flex h-8 w-8 items-center justify-center">
      <svg viewBox="0 0 40 40" className="h-8 w-8 text-white">
        <path
          d="M20 5 L30 10 L30 20 L25 25 L30 30 L20 35 L10 30 L15 25 L10 20 L10 10 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M15 15 L25 15 L25 20 L20 25 L15 20 Z" fill="currentColor" />
      </svg>
    </div>
    <span className="font-sans text-xl font-bold text-white">Fitrainer</span>
  </div>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a1a1a]/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* Red top bar */}
      <div className="h-1 w-full bg-primary" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="#home">
          <FitrainerLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
              <ChevronDown className="h-3 w-3" />
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-primary/90 lg:block"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#1a1a1a]/98 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
