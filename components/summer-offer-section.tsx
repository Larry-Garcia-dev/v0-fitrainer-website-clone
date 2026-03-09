"use client"

import Image from "next/image"
import Link from "next/link"

export default function SummerOfferSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left side - Image */}
        <div className="relative flex items-center justify-center bg-gray-100 py-12 lg:py-0">
          {/* Red Circular Rings */}
          <div className="absolute h-[280px] w-[280px] rounded-full border-[6px] border-primary/80 md:h-[350px] md:w-[350px]" />
          <div className="absolute h-[220px] w-[220px] rounded-full border-[4px] border-primary/40 md:h-[280px] md:w-[280px]" />
          
          {/* Man Image */}
          <div className="relative z-10 h-[350px] w-[200px] md:h-[450px] md:w-[280px]">
            <Image
              src="/images/summer-man.jpg"
              alt="Muscular fitness trainer"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex items-center bg-gradient-to-r from-primary to-red-600 px-8 py-16 lg:px-16 lg:py-24">
          <div className="max-w-lg">
            <p className="font-serif text-lg italic text-white/90">
              This Summer
            </p>
            <h2 className="mt-2 font-sans text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Save 50% Offer
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/80">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-block rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:bg-white"
            >
              Become A Member
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
