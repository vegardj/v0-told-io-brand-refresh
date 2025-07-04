"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface HoverCardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: number
  shadowIntensity?: "sm" | "md" | "lg" | "xl"
}

export function HoverCard({ children, className, hoverScale = 1.02, shadowIntensity = "md" }: HoverCardProps) {
  const shadowClasses = {
    sm: "hover:shadow-sm",
    md: "hover:shadow-md",
    lg: "hover:shadow-lg",
    xl: "hover:shadow-xl",
  }

  return (
    <div
      className={cn("transition-all duration-300 ease-out cursor-pointer", shadowClasses[shadowIntensity], className)}
      style={{
        transform: "scale(1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `scale(${hoverScale})`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"
      }}
    >
      {children}
    </div>
  )
}

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  magnetStrength?: number
}

export function MagneticButton({ children, className, magnetStrength = 0.3, ...props }: MagneticButtonProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * magnetStrength
    const deltaY = (e.clientY - centerY) * magnetStrength

    buttonRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current) return
    buttonRef.current.style.transform = "translate(0px, 0px)"
  }

  return (
    <button
      ref={buttonRef}
      className={cn("transition-transform duration-200 ease-out", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  )
}

interface ParallaxContainerProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxContainer({ children, speed = 0.5, className }: ParallaxContainerProps) {
  const [offset, setOffset] = React.useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed

      setOffset(rate)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
        }}
        className="transition-transform duration-75 ease-out"
      >
        {children}
      </div>
    </div>
  )
}

interface GlowEffectProps {
  children: React.ReactNode
  color?: string
  intensity?: "low" | "medium" | "high"
  className?: string
}

export function GlowEffect({ children, color = "blue", intensity = "medium", className }: GlowEffectProps) {
  const intensityClasses = {
    low: "hover:shadow-lg",
    medium: "hover:shadow-xl",
    high: "hover:shadow-2xl",
  }

  const colorClasses = {
    blue: "hover:shadow-blue-500/25",
    purple: "hover:shadow-purple-500/25",
    green: "hover:shadow-green-500/25",
    red: "hover:shadow-red-500/25",
    yellow: "hover:shadow-yellow-500/25",
  }

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-out",
        intensityClasses[intensity],
        colorClasses[color as keyof typeof colorClasses] || colorClasses.blue,
        className,
      )}
    >
      {children}
    </div>
  )
}
