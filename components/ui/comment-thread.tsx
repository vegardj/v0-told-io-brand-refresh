"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { ThumbsUp, ThumbsDown, Reply, MoreHorizontal, Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface Comment {
  id: string
  content: string
  author: {
    name: string
    avatar?: string
    username: string
  }
  timeAgo: string
  votes: {
    up: number
    down: number
  }
  userVote?: "up" | "down" | null
  replies?: Comment[]
  depth: number
}

interface CommentThreadProps {
  comments: Comment[]
  onReply?: (commentId: string, content: string) => void
  onVote?: (commentId: string, type: "up" | "down") => void
  className?: string
}

function CommentItem({
  comment,
  onReply,
  onVote,
  maxDepth = 3,
}: {
  comment: Comment
  onReply?: (commentId: string, content: string) => void
  onVote?: (commentId: string, type: "up" | "down") => void
  maxDepth?: number
}) {
  const [showReplyForm, setShowReplyForm] = React.useState(false)
  const [replyContent, setReplyContent] = React.useState("")

  const handleReply = () => {
    if (replyContent.trim()) {
      onReply?.(comment.id, replyContent)
      setReplyContent("")
      setShowReplyForm(false)
    }
  }

  return (
    <div className={cn("space-y-3", comment.depth > 0 && "ml-6 border-l-2 border-gray-200 dark:border-gray-700 pl-4")}>
      <Card className="group hover:shadow-sm transition-shadow">
        <CardContent className="p-4">
          <div className="flex gap-3">
            <Avatar className="h-8 w-8 flex-shrink-0">
              <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
              <AvatarFallback className="text-xs">
                {comment.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">{comment.author.name}</span>
                <span className="text-muted-foreground">@{comment.author.username}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{comment.timeAgo}</span>
              </div>

              <p className="text-sm leading-relaxed">{comment.content}</p>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onVote?.(comment.id, "up")}
                  className={cn(
                    "h-7 px-2 text-xs",
                    comment.userVote === "up" && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                  )}
                >
                  <ThumbsUp className="w-3 h-3 mr-1" />
                  {comment.votes.up}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onVote?.(comment.id, "down")}
                  className={cn(
                    "h-7 px-2 text-xs",
                    comment.userVote === "down" && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                  )}
                >
                  <ThumbsDown className="w-3 h-3 mr-1" />
                  {comment.votes.down}
                </Button>

                {comment.depth < maxDepth && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowReplyForm(!showReplyForm)}
                    className="h-7 px-2 text-xs"
                  >
                    <Reply className="w-3 h-3 mr-1" />
                    Reply
                  </Button>
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreHorizontal className="w-3 h-3" />
                </Button>
              </div>

              {showReplyForm && (
                <div className="space-y-2 pt-2">
                  <Textarea
                    placeholder="Write a reply..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="min-h-[80px] resize-none"
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={handleReply} disabled={!replyContent.trim()}>
                      <Send className="w-3 h-3 mr-1" />
                      Reply
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setShowReplyForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {comment.replies && comment.replies.length > 0 && (
        <div className="space-y-3">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} onReply={onReply} onVote={onVote} maxDepth={maxDepth} />
          ))}
        </div>
      )}
    </div>
  )
}

export function CommentThread({ comments, onReply, onVote, className }: CommentThreadProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} onReply={onReply} onVote={onVote} />
      ))}
    </div>
  )
}
