"use client"

import React, { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { X } from "lucide-react"

export interface Toast {
  id: string
  title?: string
  description?: string
  type?: "default" | "success" | "error" | "warning"
  duration?: number
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, "id">) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id }
    setToasts((prev) => [...prev, newToast])

    // Auto remove after duration
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, toast.duration || 5000)
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`
              min-w-80 p-4 rounded-lg shadow-lg border animate-in slide-in-from-right-full
              ${toast.type === "success" ? "bg-green-50 border-green-200 text-green-800" : ""}
              ${toast.type === "error" ? "bg-red-50 border-red-200 text-red-800" : ""}
              ${toast.type === "warning" ? "bg-yellow-50 border-yellow-200 text-yellow-800" : ""}
              ${!toast.type || toast.type === "default" ? "bg-white border-gray-200 text-gray-900" : ""}
            `}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {toast.title && <div className="font-semibold text-sm mb-1">{toast.title}</div>}
                {toast.description && <div className="text-sm opacity-90">{toast.description}</div>}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within ToastProvider")
  }
  return context
}

export function ToastNotification({ title, description, type = "default", duration = 5000 }: Omit<Toast, "id">) {
  const { addToast } = useToast()

  React.useEffect(() => {
    addToast({ title, description, type, duration })
  }, [addToast, title, description, type, duration])

  return null
}
