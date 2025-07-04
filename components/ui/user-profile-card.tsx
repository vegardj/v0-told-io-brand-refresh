"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Calendar, MapPin, ExternalLink, UserPlus, UserCheck } from "lucide-react"
import { cn } from "@/lib/utils"

interface UserProfileCardProps {
  user: {
    id: string
    name: string
    username: string
    avatar?: string
    bio?: string
    location?: string
    website?: string
    joinedDate: string
    verified?: boolean
  }
  stats: {
    debatesWon: number
    debatesParticipated: number
    credibilityScore: number
    followers: number
    following: number
  }
  badges: Array<{
    id: string
    name: string
    icon: string
    color: string
    description: string
  }>
  isFollowing?: boolean
  isCurrentUser?: boolean
  onFollow?: () => void
  onUnfollow?: () => void
  className?: string
}

export function UserProfileCard({
  user,
  stats,
  badges,
  isFollowing = false,
  isCurrentUser = false,
  onFollow,
  onUnfollow,
  className,
}: UserProfileCardProps) {
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
    <Card className={cn("overflow-hidden", className)}>
      {/* Header with gradient background */}
      <div className="h-20 bg-gradient-to-r from-blue-600 to-purple-600" />

      <CardHeader className="relative pb-2">
        {/* Avatar positioned over gradient */}
        <div className="absolute -top-10 left-6">
          <Avatar className="h-20 w-20 border-4 border-white dark:border-gray-800">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback className="text-lg font-semibold">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Follow button */}
        {!isCurrentUser && (
          <div className="flex justify-end">
            <Button
              variant={isFollowing ? "outline" : "default"}
              size="sm"
              onClick={isFollowing ? onUnfollow : onFollow}
              className={cn(
                "transition-all duration-200",
                !isFollowing && "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
              )}
            >
              {isFollowing ? (
                <>
                  <UserCheck className="w-4 h-4 mr-2" />
                  Following
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Follow
                </>
              )}
            </Button>
          </div>
        )}

        <div className="pt-8 space-y-3">
          {/* Name and verification */}
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold">{user.name}</h3>
            {user.verified && (
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Verified</Badge>
            )}
          </div>

          <p className="text-muted-foreground">@{user.username}</p>

          {/* Bio */}
          {user.bio && <p className="text-sm leading-relaxed">{user.bio}</p>}

          {/* Location and website */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {user.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{user.location}</span>
              </div>
            )}
            {user.website && (
              <a
                href={user.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Website</span>
              </a>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>Joined {user.joinedDate}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.debatesWon}</div>
            <div className="text-xs text-muted-foreground">Debates Won</div>
          </div>

          <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.debatesParticipated}</div>
            <div className="text-xs text-muted-foreground">Participated</div>
          </div>
        </div>

        {/* Credibility Score */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="font-medium">Credibility Score</span>
          </div>
          <Badge
            className={cn(
              "font-bold",
              getCredibilityBg(stats.credibilityScore),
              getCredibilityColor(stats.credibilityScore),
            )}
          >
            {stats.credibilityScore}%
          </Badge>
        </div>

        {/* Followers */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div>
              <span className="font-medium">{stats.followers.toLocaleString()}</span>
              <span className="text-muted-foreground ml-1">followers</span>
            </div>
            <div>
              <span className="font-medium">{stats.following.toLocaleString()}</span>
              <span className="text-muted-foreground ml-1">following</span>
            </div>
          </div>
        </div>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Achievements</h4>
            <div className="flex flex-wrap gap-2">
              {badges.slice(0, 3).map((badge) => (
                <Badge key={badge.id} variant="outline" className="text-xs" title={badge.description}>
                  <span className="mr-1">{badge.icon}</span>
                  {badge.name}
                </Badge>
              ))}
              {badges.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{badges.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
