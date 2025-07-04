"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Users, TrendingUp, Clock, ThumbsUp, ThumbsDown, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { HoverCard, GlowEffect } from "@/components/ui/hover-effects"
import { AnimatedCounter } from "@/components/ui/animated-counter"

interface DebateCardProps {
  title: string
  description?: string
  category: string
  author: {
    name: string
    avatar?: string
    username: string
  }
  stats: {
    participants: number
    comments: number
    votes: {
      for: number
      against: number
    }
  }
  timeAgo: string
  trending?: boolean
  status: "active" | "resolved" | "closed"
  className?: string
}

export function DebateCard({
  title,
  description,
  category,
  author,
  stats,
  timeAgo,
  trending = false,
  status,
  className,
}: DebateCardProps) {
  const totalVotes = stats.votes.for + stats.votes.against
  const forPercentage = totalVotes > 0 ? (stats.votes.for / totalVotes) * 100 : 0
  const againstPercentage = totalVotes > 0 ? (stats.votes.against / totalVotes) * 100 : 0

  return (
    <HoverCard hoverScale={1.02} shadowIntensity="lg">
      <GlowEffect color="blue" intensity="medium">
        <Card className={cn("group transition-all duration-300", className)}>
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge
                  variant={trending ? "default" : "secondary"}
                  className={cn("text-xs", trending && "bg-gradient-to-r from-blue-600 to-purple-600 text-white")}
                >
                  {trending && <TrendingUp className="w-3 h-3 mr-1" />}
                  {category}
                </Badge>
                <Badge
                  variant="outline"
                  className={cn(
                    "text-xs",
                    status === "active" && "border-green-500 text-green-700 dark:text-green-400",
                    status === "resolved" && "border-blue-500 text-blue-700 dark:text-blue-400",
                    status === "closed" && "border-gray-500 text-gray-700 dark:text-gray-400",
                  )}
                >
                  {status}
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>

            {description && <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{description}</p>}
          </CardHeader>

          <CardContent className="py-3">
            {/* Vote Distribution */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Community Vote</span>
                <span className="text-muted-foreground">{totalVotes} votes</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">For</span>
                  </div>
                  <span className="text-sm font-medium">
                    <AnimatedCounter value={stats.votes.for} duration={1000} />
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out hover:bg-green-400"
                    style={{ width: `${forPercentage}%` }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsDown className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium">Against</span>
                  </div>
                  <span className="text-sm font-medium">
                    <AnimatedCounter value={stats.votes.against} duration={1000} />
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${againstPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="pt-3 border-t dark:border-gray-700">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{stats.participants}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>{stats.comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{timeAgo}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
                  <AvatarFallback className="text-xs">
                    {author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">@{author.username}</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </GlowEffect>
    </HoverCard>
  )
}
