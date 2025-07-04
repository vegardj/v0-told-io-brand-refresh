"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface HeartbeatProps {
  children: React.ReactNode
  active?: boolean
  className?: string
}

export function Heartbeat({ children, active = false, className }: HeartbeatProps) {
  return (
    <div className={cn("transition-transform duration-200", active && "animate-pulse scale-110", className)}>
      {children}
    </div>
  )
}

interface BounceOnHoverProps {
  children: React.ReactNode
  className?: string
}

export function BounceOnHover({ children, className }: BounceOnHoverProps) {
  return (
    <div className={cn("transition-transform duration-200 hover:animate-bounce cursor-pointer", className)}>
      {children}
    </div>
  )
}

interface ShakeOnErrorProps {
  children: React.ReactNode
  error?: boolean
  className?: string
}

export function ShakeOnError({ children, error = false, className }: ShakeOnErrorProps) {
  const [isShaking, setIsShaking] = React.useState(false)

  React.useEffect(() => {
    if (error) {
      setIsShaking(true)
      const timer = setTimeout(() => setIsShaking(false), 500)
      return () => clearTimeout(timer)
    }
  }, [error])

  return (
    <div className={cn("transition-transform duration-100", isShaking && "animate-shake", className)}>{children}</div>
  )
}

interface TypewriterEffectProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

export function TypewriterEffect({ text, speed = 50, className, onComplete }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = React.useState("")
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timer)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <span className={cn("relative", className)}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
