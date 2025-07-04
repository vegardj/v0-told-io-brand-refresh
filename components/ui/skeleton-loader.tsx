"use client"
import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
  variant?: "text" | "circular" | "rectangular" | "rounded"
  width?: string | number
  height?: string | number
  animation?: "pulse" | "wave" | "none"
}

export function Skeleton({
  className,
  variant = "rectangular",
  width,
  height,
  animation = "pulse",
  ...props
}: SkeletonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "text":
        return "h-4 rounded"
      case "circular":
        return "rounded-full"
      case "rounded":
        return "rounded-lg"
      case "rectangular":
      default:
        return "rounded"
    }
  }

  const getAnimationClasses = () => {
    switch (animation) {
      case "wave":
        return "animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%]"
      case "pulse":
        return "animate-pulse bg-gray-200 dark:bg-gray-700"
      case "none":
      default:
        return "bg-gray-200 dark:bg-gray-700"
    }
  }

  return (
    <div className={cn(getVariantClasses(), getAnimationClasses(), className)} style={{ width, height }} {...props} />
  )
}

// Preset skeleton components
export function DebateCardSkeleton() {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton variant="circular" className="w-8 h-8" />
      </div>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="space-y-2">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-2 w-full" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton variant="circular" className="w-6 h-6" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  )
}

export function UserProfileSkeleton() {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Skeleton className="h-20 w-full" />
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <Skeleton variant="circular" className="w-20 h-20" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-full" />
        </div>
      </div>
    </div>
  )
}
