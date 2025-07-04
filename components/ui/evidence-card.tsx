"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ExternalLink,
  FileText,
  ImageIcon,
  Video,
  LinkIcon,
  ThumbsUp,
  ThumbsDown,
  Flag,
  MoreHorizontal,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { HoverCard } from "@/components/ui/hover-effects"
import { AnimatedCounter } from "@/components/ui/animated-counter"

interface EvidenceCardProps {
  id: string
  type: "link" | "document" | "image" | "video" | "text"
  title: string
  content?: string
  url?: string
  author: {
    name: string
    avatar?: string
    username: string
  }
  credibilityScore: number
  votes: {
    helpful: number
    unhelpful: number
  }
  userVote?: "helpful" | "unhelpful" | null
  timeAgo: string
  verified?: boolean
  className?: string
  onVote?: (type: "helpful" | "unhelpful") => void
  onReport?: () => void
}

export function EvidenceCard({
  id,
  type,
  title,
  content,
  url,
  author,
  credibilityScore,
  votes,
  userVote,
  timeAgo,
  verified = false,
  className,
  onVote,
  onReport,
}: EvidenceCardProps) {
  const getTypeIcon = () => {
    switch (type) {
      case "link":
        return <LinkIcon className="w-4 h-4" />
      case "document":
        return <FileText className="w-4 h-4" />
      case "image":
        return <ImageIcon className="w-4 h-4" />
      case "video":
        return <Video className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getCredibilityColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-400"
    if (score >= 60) return "text-yellow-600 dark:text-yellow-400"
    return "text-red-600 dark:text-red-400"
  }

  const getCredibilityBg = (score: number) => {
    if (score >= 80) return "bg-green-100 dark:bg-green-900/30"
    if (score >= 60) return "bg-yellow-100 dark:bg-yellow-900/30"
    return "bg-red-100 dark:bg-red-900/30"
  }

  return (
    <HoverCard hoverScale={1.01} shadowIntensity="md">
      <Card className={cn("group transition-all duration-300", className)}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className="text-xs">
                {getTypeIcon()}
                <span className="ml-1 capitalize">{type}</span>
              </Badge>

              {verified && (
                <Badge className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  Verified
                </Badge>
              )}

              <Badge
                className={cn(
                  "text-xs transition-all duration-300 hover:scale-105",
                  getCredibilityBg(credibilityScore),
                  getCredibilityColor(credibilityScore),
                )}
              >
                {credibilityScore}% credible
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

          <div className="space-y-2">
            <h4 className="font-semibold leading-tight">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  {title}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                title
              )}
            </h4>

            {content && <p className="text-sm text-muted-foreground line-clamp-3">{content}</p>}
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
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
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>@{author.username}</span>
                <span>•</span>
                <span>{timeAgo}</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onVote?.("helpful")}
                className={cn(
                  "h-8 px-2 text-xs",
                  userVote === "helpful" && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                )}
              >
                <ThumbsUp className="w-3 h-3 mr-1" />
                <AnimatedCounter value={votes.helpful} duration={600} />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => onVote?.("unhelpful")}
                className={cn(
                  "h-8 px-2 text-xs",
                  userVote === "unhelpful" && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                )}
              >
                <ThumbsDown className="w-3 h-3 mr-1" />
                <AnimatedCounter value={votes.unhelpful} duration={600} />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={onReport}
                className="h-8 px-2 text-xs text-muted-foreground hover:text-red-600 dark:hover:text-red-400"
              >
                <Flag className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </HoverCard>
  )
}
