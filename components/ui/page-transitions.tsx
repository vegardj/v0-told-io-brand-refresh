"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
  variant?: "fade" | "slide" | "scale" | "blur"
  duration?: number
}

export function PageTransition({ children, className, variant = "fade", duration = 300 }: PageTransitionProps) {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10)
    return () => clearTimeout(timer)
  }, [])

  const getVariantClasses = () => {
    const baseClasses = "transition-all ease-out"

    switch (variant) {
      case "fade":
        return cn(baseClasses, isVisible ? "opacity-100" : "opacity-0")
      case "slide":
        return cn(baseClasses, isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")
      case "scale":
        return cn(baseClasses, isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95")
      case "blur":
        return cn(baseClasses, isVisible ? "opacity-100 blur-0" : "opacity-0 blur-sm")
      default:
        return baseClasses
    }
  }

  return (
    <div className={cn(getVariantClasses(), className)} style={{ transitionDuration: `${duration}ms` }}>
      {children}
    </div>
  )
}

interface StaggeredAnimationProps {
  children: React.ReactNode[]
  delay?: number
  className?: string
}

export function StaggeredAnimation({ children, delay = 100, className }: StaggeredAnimationProps) {
  const [visibleItems, setVisibleItems] = React.useState<Set<number>>(new Set())

  React.useEffect(() => {
    children.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => new Set([...prev, index]))
      }, index * delay)
    })
  }, [children, delay])

  return (
    <div className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            "transition-all duration-500 ease-out",
            visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
