"use client"

import * as React from "react"
import { Loader2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  return <Loader2 className={cn("animate-spin text-blue-600", sizeClasses[size], className)} />
}

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  loadingText?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function LoadingButton({
  loading = false,
  loadingText = "Loading...",
  children,
  disabled,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      disabled={disabled || loading}
      className={cn("transition-all duration-200", loading && "cursor-not-allowed", className)}
      {...props}
    >
      {loading && <LoadingSpinner size="sm" className="mr-2" />}
      {loading ? loadingText : children}
    </Button>
  )
}

interface PullToRefreshProps {
  onRefresh: () => Promise<void>
  children: React.ReactNode
  threshold?: number
  className?: string
}

export function PullToRefresh({ onRefresh, children, threshold = 80, className }: PullToRefreshProps) {
  const [isPulling, setIsPulling] = React.useState(false)
  const [pullDistance, setPullDistance] = React.useState(0)
  const [isRefreshing, setIsRefreshing] = React.useState(false)
  const startY = React.useRef(0)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (containerRef.current?.scrollTop === 0) {
      startY.current = e.touches[0].clientY
      setIsPulling(true)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isPulling || containerRef.current?.scrollTop !== 0) return

    const currentY = e.touches[0].clientY
    const distance = Math.max(0, currentY - startY.current)
    setPullDistance(Math.min(distance, threshold * 1.5))
  }

  const handleTouchEnd = async () => {
    if (!isPulling) return

    setIsPulling(false)

    if (pullDistance >= threshold) {
      setIsRefreshing(true)
      try {
        await onRefresh()
      } finally {
        setIsRefreshing(false)
      }
    }

    setPullDistance(0)
  }

  const pullProgress = Math.min(pullDistance / threshold, 1)
  const shouldTrigger = pullDistance >= threshold

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-auto", className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Pull indicator */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 flex items-center justify-center transition-all duration-200 ease-out bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/20",
          isPulling || isRefreshing ? "opacity-100" : "opacity-0",
        )}
        style={{
          height: Math.max(pullDistance * 0.8, 0),
          transform: `translateY(${isPulling ? 0 : -100}%)`,
        }}
      >
        <div className="flex flex-col items-center gap-2 text-blue-600 dark:text-blue-400">
          <RefreshCw
            className={cn(
              "w-6 h-6 transition-transform duration-200",
              isRefreshing && "animate-spin",
              shouldTrigger && !isRefreshing && "rotate-180",
            )}
            style={{
              transform: `rotate(${pullProgress * 180}deg)`,
            }}
          />
          <span className="text-sm font-medium">
            {isRefreshing ? "Refreshing..." : shouldTrigger ? "Release to refresh" : "Pull to refresh"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `translateY(${isPulling ? pullDistance * 0.5 : 0}px)`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

interface ProgressiveLoadingProps {
  steps: Array<{
    id: string
    label: string
    completed: boolean
  }>
  currentStep?: string
  className?: string
}

export function ProgressiveLoading({ steps, currentStep, className }: ProgressiveLoadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {steps.map((step, index) => {
        const isActive = step.id === currentStep
        const isCompleted = step.completed
        const isPending = !isCompleted && !isActive

        return (
          <div key={step.id} className="flex items-center gap-3">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                isCompleted && "bg-green-500 text-white scale-110",
                isActive && "bg-blue-500 text-white animate-pulse",
                isPending && "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400",
              )}
            >
              {isCompleted ? "✓" : index + 1}
            </div>
            <span
              className={cn(
                "text-sm transition-colors duration-300",
                isCompleted && "text-green-600 dark:text-green-400 font-medium",
                isActive && "text-blue-600 dark:text-blue-400 font-medium",
                isPending && "text-gray-500 dark:text-gray-400",
              )}
            >
              {step.label}
            </span>
            {isActive && <LoadingSpinner size="sm" />}
          </div>
        )
      })}
    </div>
  )
}
