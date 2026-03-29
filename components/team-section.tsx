"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback, useRef } from "react"

// Wavy underline SVG component
const WavyUnderline = () => (
  <svg viewBox="0 0 100 15" className="h-4 w-20 text-[#00fffd]">
    <path
      d="M0 7.5 Q 12.5 0, 25 7.5 T 50 7.5 T 75 7.5 T 100 7.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

const team = [
  {
    name: "Lorena Gonzales Russi",
    role: "Cardiologa, Nutricionista",
    image: "/images/team-member-3.png",
  },
  {
    name: "Edna Rengifo",
    role: "Fisioterapeuta",
    image: "/images/team-member-2.png",
  },
  {
    name: "Ivan Parra",
    role: "Entrenador",
    image: "/images/team-member-1.png",
  },
  {
    name: "Carlos Martinez",
    role: "Preparador Fisico",
    image: "/images/team-member-1.png",
  },
  {
    name: "Maria Fernandez",
    role: "Nutricionista Deportiva",
    image: "/images/team-member-3.png",
  },
  {
    name: "Juan Rodriguez",
    role: "Fisioterapeuta Deportivo",
    image: "/images/team-member-2.png",
  },
  {
    name: "Ana Sofia Lopez",
    role: "Coach de Bienestar",
    image: "/images/team-member-3.png",
  },
]

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const totalMembers = team.length

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalMembers)
    }, 3000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, totalMembers])

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalMembers)
  }, [totalMembers])

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalMembers) % totalMembers)
  }, [totalMembers])

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setIsAutoPlaying(false)
    setStartX(e.clientX)
    setDragOffset(0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const diff = e.clientX - startX
    setDragOffset(diff)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        goToPrev()
      } else {
        goToNext()
      }
    }
    setDragOffset(0)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setIsAutoPlaying(false)
    setStartX(e.touches[0].clientX)
    setDragOffset(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const diff = e.touches[0].clientX - startX
    setDragOffset(diff)
  }

  const handleTouchEnd = () => {
    handleMouseUp()
  }

  // Calculate position for each card in the arc
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex
    const normalizedDiff = ((diff + totalMembers / 2) % totalMembers) - totalMembers / 2
    
    // Arc parameters
    const arcRadius = 400
    const angleStep = 25 // degrees between cards
    const angle = normalizedDiff * angleStep
    const radian = (angle * Math.PI) / 180
    
    // Calculate position
    const x = Math.sin(radian) * arcRadius
    const y = (1 - Math.cos(radian)) * 80
    
    // Calculate scale and opacity based on position
    const absNormDiff = Math.abs(normalizedDiff)
    const scale = Math.max(0.6, 1 - absNormDiff * 0.15)
    const opacity = Math.max(0.3, 1 - absNormDiff * 0.25)
    const zIndex = 10 - Math.abs(normalizedDiff)
    
    // Apply drag offset to x position during drag
    const dragX = isDragging ? dragOffset * 0.3 : 0

    return {
      transform: `translateX(${x + dragX}px) translateY(${y}px) scale(${scale})`,
      opacity,
      zIndex,
      transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    }
  }

  return (
    <section id="team" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#00fffd]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00a8a6]">
              Nuestro Equipo
            </span>
            <span className="h-px w-10 bg-[#00fffd]" />
          </div>
          <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold leading-tight text-[#0a1628] sm:text-4xl lg:text-[2.75rem]">
            Profesionales dedicados a tu bienestar
          </h2>
          <div className="mt-3 flex justify-center">
            <WavyUnderline />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-600">
            Acompanamiento interdisciplinar en cardiologia, fisioterapia y nutricion para un proceso completo.
          </p>
        </div>

        {/* Arc Carousel */}
        <div 
          ref={carouselRef}
          className="relative h-[450px] cursor-grab select-none active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {team.map((member, index) => (
              <div
                key={member.name + member.role}
                className="absolute flex flex-col items-center"
                style={getCardStyle(index)}
                onClick={() => !isDragging && goToSlide(index)}
              >
                {/* Image with gradient border */}
                <div className="relative mb-4 p-1 rounded-2xl bg-gradient-to-b from-[#00fffd] to-[#00a8a6] shadow-xl">
                  <div className="relative h-56 w-44 sm:h-64 sm:w-52 overflow-hidden rounded-xl bg-[#0a1628]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top pointer-events-none"
                      draggable={false}
                    />
                  </div>
                </div>

                {/* Info */}
                <p className="text-sm font-medium text-[#00fffd]">
                  {member.role}
                </p>
                <h3 className="mt-1 font-sans text-lg sm:text-xl font-bold text-[#0a1628] text-center px-2">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-6">
          {/* Previous button */}
          <button
            onClick={() => {
              goToPrev()
              setIsAutoPlaying(false)
              setTimeout(() => setIsAutoPlaying(true), 5000)
            }}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#00fffd] bg-transparent text-[#00a8a6] transition-all hover:bg-[#00fffd] hover:text-[#0a1628]"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {team.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 5000)
                }}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-[#00fffd] w-8'
                    : 'bg-[#00fffd]/30 hover:bg-[#00fffd]/50'
                }`}
                aria-label={`Ir al miembro ${index + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={() => {
              goToNext()
              setIsAutoPlaying(false)
              setTimeout(() => setIsAutoPlaying(true), 5000)
            }}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#00fffd] bg-transparent text-[#00a8a6] transition-all hover:bg-[#00fffd] hover:text-[#0a1628]"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
