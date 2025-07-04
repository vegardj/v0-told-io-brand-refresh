"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Plus, MessageSquare, Share2, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingAction {
  id: string
  icon: React.ReactNode
  label: string
  onClick: () => void
  color?: string
}

interface FloatingActionButtonProps {
  actions?: FloatingAction[]
  className?: string
}

export function FloatingActionButton({ actions, className }: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const defaultActions: FloatingAction[] = [
    {
      id: "debate",
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Start Debate",
      onClick: () => console.log("Start debate"),
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: "share",
      icon: <Share2 className="w-5 h-5" />,
      label: "Share",
      onClick: () => console.log("Share"),
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      id: "bookmark",
      icon: <Bookmark className="w-5 h-5" />,
      label: "Bookmark",
      onClick: () => console.log("Bookmark"),
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ]

  const finalActions = actions || defaultActions

  return (
    <div className={cn("fixed bottom-6 right-6 z-50", className)}>
      {/* Action buttons */}
      <div className="flex flex-col-reverse items-end gap-3 mb-3">
        {finalActions.map((action, index) => (
          <div
            key={action.id}
            className={cn(
              "flex items-center gap-3 transition-all duration-300 ease-out",
              isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none",
            )}
            style={{
              transitionDelay: isOpen ? `${index * 50}ms` : `${(finalActions.length - index - 1) * 50}ms`,
            }}
          >
            {/* Label */}
            <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap">
              {action.label}
            </div>

            {/* Action button */}
            <Button
              size="icon"
              onClick={() => {
                action.onClick()
                setIsOpen(false)
              }}
              className={cn(
                "w-12 h-12 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95",
                action.color || "bg-blue-600 hover:bg-blue-700",
              )}
            >
              {action.icon}
            </Button>
          </div>
        ))}
      </div>

      {/* Main FAB */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 active:scale-95",
          isOpen && "rotate-45",
        )}
      >
        <Plus className="w-6 h-6 transition-transform duration-300" />
      </Button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
