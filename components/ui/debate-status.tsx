"use client"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, CheckCircle, XCircle, Users, MessageSquare, TrendingUp, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface DebateStatusProps {
  status: "active" | "resolved" | "closed" | "pending"
  timeRemaining?: string
  participantCount: number
  commentCount: number
  votingProgress?: number
  resolution?: {
    winner: "for" | "against"
    confidence: number
    reason: string
  }
  className?: string
}

export function DebateStatus({
  status,
  timeRemaining,
  participantCount,
  commentCount,
  votingProgress = 0,
  resolution,
  className,
}: DebateStatusProps) {
  const getStatusConfig = () => {
    switch (status) {
      case "active":
        return {
          icon: <Clock className="w-4 h-4" />,
          label: "Active",
          color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
          description: "Debate is ongoing",
        }
      case "resolved":
        return {
          icon: <CheckCircle className="w-4 h-4" />,
          label: "Resolved",
          color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
          description: "Community has reached consensus",
        }
      case "closed":
        return {
          icon: <XCircle className="w-4 h-4" />,
          label: "Closed",
          color: "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400",
          description: "Debate has ended",
        }
      case "pending":
        return {
          icon: <AlertCircle className="w-4 h-4" />,
          label: "Pending",
          color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
          description: "Awaiting moderation",
        }
    }
  }

  const statusConfig = getStatusConfig()

  return (
    <div className={cn("space-y-4", className)}>
      {/* Status Header */}
      <div className="flex items-center justify-between">
        <Badge className={cn("flex items-center gap-2", statusConfig.color)}>
          {statusConfig.icon}
          {statusConfig.label}
        </Badge>

        {timeRemaining && status === "active" && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{timeRemaining} remaining</span>
          </div>
        )}
      </div>

      {/* Progress Bar for Active Debates */}
      {status === "active" && votingProgress > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Voting Progress</span>
            <span className="font-medium">{votingProgress}%</span>
          </div>
          <Progress value={votingProgress} className="h-2" />
        </div>
      )}

      {/* Resolution Details */}
      {status === "resolved" && resolution && (
        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="font-medium text-blue-900 dark:text-blue-100">
              Resolved: {resolution.winner === "for" ? "For" : "Against"} wins
            </span>
          </div>
          <div className="text-sm text-blue-700 dark:text-blue-300 mb-2">Confidence: {resolution.confidence}%</div>
          <p className="text-sm text-blue-600 dark:text-blue-400">{resolution.reason}</p>
        </div>
      )}

      {/* Stats */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{participantCount.toLocaleString()} participants</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare className="w-4 h-4" />
          <span>{commentCount.toLocaleString()} comments</span>
        </div>
        {status === "active" && (
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>Trending</span>
          </div>
        )}
      </div>

      {/* Status Description */}
      <p className="text-sm text-muted-foreground">{statusConfig.description}</p>
    </div>
  )
}
