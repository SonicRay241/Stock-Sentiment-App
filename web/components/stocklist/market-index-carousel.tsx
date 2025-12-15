"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MarketIndex {
  name: string
  value: string
  change: string
  isPositive: boolean
}

const marketIndices: MarketIndex[] = [
  { name: "S&P 500", value: "$4,120.00", change: "-2.1%", isPositive: false },
  { name: "NASDAQ", value: "$12,340.00", change: "+1.3%", isPositive: true },
  { name: "DOW JONES", value: "$34,580.00", change: "+0.8%", isPositive: true },
]

export function MarketIndexCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const cardWidth = 100 // We are using 100% of the parent width for single slide view

  // --- Navigation Functions ---

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? marketIndices.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === marketIndices.length - 1 ? 0 : prev + 1))
  }

  // --- Drag/Swipe Handlers ---

  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
    // Capture the current base transform to calculate relative drag later
    setCurrentTranslate(-currentIndex * cardWidth)
    if (carouselRef.current) {
      // Remove transition during drag for smooth, immediate movement
      carouselRef.current.style.transition = "none"
    }
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return
    const moveX = clientX - startX
    // Calculate new temporary transform based on drag
    const newTranslate = currentTranslate + (moveX / (carouselRef.current?.offsetWidth || 1)) * cardWidth
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${newTranslate}%)`
    }
  }

  const handleEnd = (clientX: number) => {
    if (!isDragging) return
    setIsDragging(false)

    if (carouselRef.current) {
      // Restore transition after drag is complete
      carouselRef.current.style.transition = "transform 0.7s ease-in-out"
    }

    const moveX = clientX - startX
    const threshold = 50 // Minimum pixel distance for a slide to register

    if (moveX > threshold) {
      // Swiped right (to previous item)
      goToPrev()
    } else if (moveX < -threshold) {
      // Swiped left (to next item)
      goToNext()
    } else {
      // Not enough movement, snap back to current index
      setCurrentIndex(currentIndex)
    }

    // Reset temporary translate style (the main transform style will update via state change)
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * cardWidth}%)`
    }
  }

  // Desktop Mouse Handlers
  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX)
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX)
  const onMouseUp = (e: React.MouseEvent) => handleEnd(e.clientX)
  const onMouseLeave = (e: React.MouseEvent) => {
    // Handle case where mouse button is released outside the element
    if (isDragging) handleEnd(e.clientX)
  }

  // Mobile Touch Handlers
  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX)
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX)
  const onTouchEnd = (e: React.TouchEvent) => handleEnd(e.changedTouches[0].clientX)

  return (
    <div
      className="relative px-6 py-6 select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-700 ease-in-out gap-4"
          style={{ transform: `translateX(-${currentIndex * cardWidth}%)` }}
        >
          {marketIndices.map((index, i) => (
            <div key={i} className="min-w-[calc(100%-1rem)] flex justify-center">
              <div
                className={`w-full max-w-md ${
                  index.isPositive
                    ? "bg-gradient-to-br from-emerald-900/40 to-popover border-emerald-900/50"
                    : "bg-gradient-to-br from-red-900/40 to-popover border-red-900/50"
                } border rounded-2xl p-8`}
              >
                <div className="text-sm text-muted-foreground mb-2">{index.name}</div>
                <div className="text-4xl font-bold mb-2">{index.value}</div>
                <div className={`text-base ${index.isPositive ? "text-emerald-400" : "text-red-400"}`}>
                  {index.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manual Navigation Controls */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-secondary/50 hover:bg-secondary/70 rounded-full transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-secondary/50 hover:bg-secondary/70 rounded-full transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Indicator Dots - Clickable */}
      <div className="flex justify-center gap-2 mt-4">
        {marketIndices.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
              i === currentIndex ? "bg-primary" : "bg-secondary hover:bg-secondary/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}