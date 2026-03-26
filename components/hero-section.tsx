"use client"

import Image from "next/image"
import Link from "next/link"
import { Dumbbell } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Fitness gym background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-20 lg:flex-row lg:items-center lg:px-8">
        {/* Left Content */}
        <div className="z-10 max-w-xl lg:w-1/2">
          {/* Subtitle */}
          <p className="mb-4 font-serif text-sm italic text-white/80 md:text-base">
            Transform Your Body. Transform Your Life!
          </p>

          {/* Main Heading */}
          <h1 className="font-sans text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            Personalized{" "}
            <span className="text-primary">COACHING</span>
            <span className="text-white">, And Real Results</span>
          </h1>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-primary/90"
            >
              Get Started
            </Link>

            <Link
              href="#services"
              className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:bg-white/10"
            >
              See Programs
            </Link>
          </div>
        </div>

        {/* Right Content - Female Trainer with Circles */}
        <div className="relative mt-8 flex items-center justify-center lg:mt-0 lg:w-1/2">
          {/* Red Circular Rings */}
          <div className="absolute h-[350px] w-[350px] rounded-full border-[6px] border-primary/80 md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]" />
          <div className="absolute h-[290px] w-[290px] rounded-full border-[4px] border-primary/40 md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px]" />
          
          {/* Female Trainer Image */}
          <div className="relative z-10 h-[400px] w-[280px] md:h-[500px] md:w-[350px] lg:h-[550px] lg:w-[380px]">
            <Image
              src="/images/hero-female.jpg"
              alt="Professional fitness trainer"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-0 right-0 z-20 w-full lg:w-auto">
        <div className="flex items-center gap-4 bg-primary px-6 py-4 lg:rounded-tl-2xl lg:px-10 lg:py-5">
          <div className="flex h-12 w-12 items-center justify-center">
            <Dumbbell className="h-8 w-8 text-white" />
          </div>
          <div>
            <p className="font-sans text-sm font-bold uppercase tracking-wider text-white md:text-base">
              WE HAVE STUDENTS TRAIN
            </p>
            <p className="font-sans text-lg font-bold text-white md:text-xl">
              MORE THAN 1580+
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
