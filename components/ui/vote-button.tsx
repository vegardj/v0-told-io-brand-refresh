"use client"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedCounter } from "@/components/ui/animated-counter"

interface VoteButtonProps {
  type: "for" | "against"
  count: number
  isActive?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export function VoteButton({ type, count, isActive = false, disabled = false, onClick, className }: VoteButtonProps) {
  const Icon = type === "for" ? ThumbsUp : ThumbsDown
  const baseColor = type === "for" ? "green" : "red"

  return (
    <Button
      variant={isActive ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-white/20 before:rounded-full before:scale-0 before:transition-transform before:duration-300",
        "hover:before:scale-100 active:before:scale-110",
        isActive && "animate-pulse shadow-lg",
        isActive && type === "for" && "bg-green-600 hover:bg-green-700 text-white",
        isActive && type === "against" && "bg-red-600 hover:bg-red-700 text-white",
        !isActive &&
          type === "for" &&
          "border-green-200 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-950",
        !isActive &&
          type === "against" &&
          "border-red-200 text-red-700 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    >
      <Icon className="w-4 h-4" />
      <span className="font-medium">
        <AnimatedCounter value={count} duration={800} />
      </span>
    </Button>
  )
}
