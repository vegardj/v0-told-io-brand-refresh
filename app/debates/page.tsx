"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SearchFilters } from "@/components/ui/search-filters"
import { VoteButton } from "@/components/ui/vote-button"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { PageTransition, StaggeredAnimation } from "@/components/ui/page-transitions"
import { HoverCard } from "@/components/ui/hover-effects"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ToastProvider, useToast } from "@/components/ui/toast-notification"
import { Home, Trophy, User, Plus, Clock, Users, TrendingUp, MessageSquare, Filter, Search } from "lucide-react"

// Brand-consistent gavel icon component
function GavelIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m14.5 12.5-8 8a2.119 2.119 0 0 1-3-3l8-8" />
      <path d="m16 16 6-6" />
      <path d="m8 8 6-6" />
      <path d="m9 7 8 8" />
      <path d="m21 11-8-8" />
    </svg>
  )
}

interface Debate {
  id: string
  title: string
  description: string
  status: "active" | "resolved" | "closed"
  difficulty: "easy" | "medium" | "hard"
  votes: {
    for: number
    against: number
  }
  forPercentage: number
  againstPercentage: number
  resolutionTime: string
  participants: number
  author: {
    name: string
    avatar?: string
    username: string
  }
  timeAgo: string
  category: string
}

function DebatesPage() {
  const { addToast } = useToast()
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
  const [sortBy, setSortBy] = React.useState("recent")
  const [timeRange, setTimeRange] = React.useState("all")
  const [status, setStatus] = React.useState<string[]>(["active"])
  const [userVotes, setUserVotes] = React.useState<Record<string, "for" | "against" | null>>({})

  // Sample debates data matching the current interface
  const debates: Debate[] = [
    {
      id: "1",
      title: "Testing with new functionality",
      description: "OK, wondering if there is a difficult assessment or not.",
      status: "active",
      difficulty: "hard",
      votes: { for: 0, against: 0 },
      forPercentage: 0,
      againstPercentage: 0,
      resolutionTime: "Resolves in 13 days",
      participants: 2,
      author: {
        name: "Alex Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        username: "alex_chen",
      },
      timeAgo: "2 hours ago",
      category: "Technology",
    },
    {
      id: "2",
      title: "We're going to delete this one also 3",
      description: "We're going to delete this one also 3",
      status: "active",
      difficulty: "hard",
      votes: { for: 0, against: 0 },
      forPercentage: 0,
      againstPercentage: 0,
      resolutionTime: "Resolves 6 days ago",
      participants: 1,
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        username: "sarah_j",
      },
      timeAgo: "1 day ago",
      category: "General",
    },
    {
      id: "3",
      title: "This is a really interesting thing we're going to delete",
      description: "This is a really interesting thing we're going to delete",
      status: "active",
      difficulty: "hard",
      votes: { for: 0, against: 0 },
      forPercentage: 0,
      againstPercentage: 0,
      resolutionTime: "Resolves in 8 days",
      participants: 3,
      author: {
        name: "Mike Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        username: "mike_r",
      },
      timeAgo: "3 hours ago",
      category: "Philosophy",
    },
    {
      id: "4",
      title: "Should AI have voting rights in democratic processes?",
      description:
        "Exploring the implications of artificial intelligence participation in governance and democratic decision-making.",
      status: "active",
      difficulty: "hard",
      votes: { for: 1823, against: 1024 },
      forPercentage: 64,
      againstPercentage: 36,
      resolutionTime: "Resolves in 5 days",
      participants: 2847,
      author: {
        name: "Dr. Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        username: "dr_chen_ai",
      },
      timeAgo: "1 day ago",
      category: "Technology",
    },
    {
      id: "5",
      title: "Is remote work more productive than office work?",
      description:
        "A comprehensive analysis of productivity metrics, employee satisfaction, and business outcomes in remote vs office environments.",
      status: "active",
      difficulty: "medium",
      votes: { for: 756, against: 491 },
      forPercentage: 61,
      againstPercentage: 39,
      resolutionTime: "Resolves in 2 days",
      participants: 1247,
      author: {
        name: "Emma Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        username: "emma_work",
      },
      timeAgo: "4 hours ago",
      category: "Work & Career",
    },
    {
      id: "6",
      title: "Should social media platforms fact-check content?",
      description:
        "Examining the role of social media companies in content moderation and the balance between free speech and misinformation prevention.",
      status: "active",
      difficulty: "hard",
      votes: { for: 1834, against: 892 },
      forPercentage: 67,
      againstPercentage: 33,
      resolutionTime: "Resolves in 7 days",
      participants: 2156,
      author: {
        name: "Jordan Kim",
        avatar: "/placeholder.svg?height=40&width=40",
        username: "jordan_tech",
      },
      timeAgo: "6 hours ago",
      category: "Technology",
    },
  ]

  const categories = [
    { id: "technology", label: "Technology", count: 234 },
    { id: "politics", label: "Politics", count: 189 },
    { id: "science", label: "Science", count: 156 },
    { id: "health", label: "Health", count: 143 },
    { id: "work-career", label: "Work & Career", count: 98 },
    { id: "philosophy", label: "Philosophy", count: 87 },
    { id: "general", label: "General", count: 156 },
  ]

  const handleVote = (debateId: string, voteType: "for" | "against") => {
    const currentVote = userVotes[debateId]

    if (currentVote === voteType) {
      // Remove vote if clicking the same button
      setUserVotes((prev) => ({ ...prev, [debateId]: null }))
      addToast({
        type: "info",
        message: "Vote removed",
      })
    } else {
      // Set new vote
      setUserVotes((prev) => ({ ...prev, [debateId]: voteType }))
      addToast({
        type: "success",
        title: "Vote recorded!",
        message: `You voted ${voteType} on this debate`,
      })
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "medium":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "hard":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  const filteredDebates = debates.filter((debate) => {
    const matchesSearch =
      debate.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      debate.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(debate.category.toLowerCase().replace(/\s+/g, "-"))
    const matchesStatus = status.length === 0 || status.includes(debate.status)

    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <GavelIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">told.io</h1>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              <Link href="/">
                <Button variant="ghost" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Button>
              </Link>
              <Link href="/debates">
                <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                  <MessageSquare className="w-4 h-4" />
                  Debates
                </Button>
              </Link>
              <Link href="/leaderboard">
                <Button variant="ghost" className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Leaderboard
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="ghost" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Profile
                </Button>
              </Link>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="font-medium">Score: </span>
                <AnimatedCounter value={0} className="font-bold text-blue-600" />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Told
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Vegard" />
                <AvatarFallback>Ve</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <PageTransition variant="fade" duration={500}>
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Welcome Section */}
          <HoverCard hoverScale={1.01} shadowIntensity="md" className="mb-8">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Vegard" />
                      <AvatarFallback className="text-lg font-semibold">Ve</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                        Welcome back, Vegard!
                      </h2>
                      <p className="text-muted-foreground">Ready to settle some debates?</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <AnimatedCounter value={0} className="text-2xl font-bold text-blue-600" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Start a New Debate
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950 bg-transparent"
                  >
                    View My Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </HoverCard>

          {/* Search and Filters */}
          <div className="mb-8">
            <SearchFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              categories={categories}
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              sortBy={sortBy}
              onSortChange={setSortBy}
              timeRange={timeRange}
              onTimeRangeChange={setTimeRange}
              status={status}
              onStatusChange={setStatus}
            />
          </div>

          {/* Active Debates Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Active Debates</h2>
              <Badge variant="secondary" className="flex items-center gap-2">
                <TrendingUp className="w-3 h-3" />
                {filteredDebates.length} debates
              </Badge>
            </div>

            {/* Debates Grid */}
            <StaggeredAnimation delay={100}>
              {filteredDebates.map((debate) => (
                <div key={debate.id} className="mb-6">
                  <HoverCard hoverScale={1.01} shadowIntensity="lg">
                    <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-md transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge className="bg-blue-600 text-white">Active</Badge>
                            <Badge className={getDifficultyColor(debate.difficulty)}>
                              {debate.difficulty.charAt(0).toUpperCase() + debate.difficulty.slice(1)}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <TrendingUp className="w-3 h-3" />
                              <span>50.0</span>
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                          {debate.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed">{debate.description}</p>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Voting Section */}
                        <div className="flex items-center justify-center gap-8">
                          <VoteButton
                            type="for"
                            count={debate.votes.for}
                            isActive={userVotes[debate.id] === "for"}
                            onClick={() => handleVote(debate.id, "for")}
                            className="flex-1 max-w-32"
                          />
                          <VoteButton
                            type="against"
                            count={debate.votes.against}
                            isActive={userVotes[debate.id] === "against"}
                            onClick={() => handleVote(debate.id, "against")}
                            className="flex-1 max-w-32"
                          />
                        </div>

                        {/* Vote Percentages */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>For: {debate.forPercentage}%</span>
                          <span>Against: {debate.againstPercentage}%</span>
                        </div>

                        {/* Debate Info */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t dark:border-gray-700">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{debate.resolutionTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{debate.participants} participating</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverCard>
                </div>
              ))}
            </StaggeredAnimation>

            {filteredDebates.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No debates found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search criteria or start a new debate.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Start New Debate
                  </Button>
                </CardContent>
              </Card>
            )}
          </section>
        </div>
      </PageTransition>

      {/* Floating Action Button */}
      <FloatingActionButton
        actions={[
          {
            id: "new-debate",
            icon: <Plus className="w-5 h-5" />,
            label: "Start New Debate",
            onClick: () =>
              addToast({
                type: "info",
                message: "Starting new debate...",
              }),
            color: "bg-blue-600 hover:bg-blue-700",
          },
          {
            id: "search",
            icon: <Search className="w-5 h-5" />,
            label: "Search Debates",
            onClick: () =>
              addToast({
                type: "info",
                message: "Opening search...",
              }),
            color: "bg-green-600 hover:bg-green-700",
          },
          {
            id: "filter",
            icon: <Filter className="w-5 h-5" />,
            label: "Filter Debates",
            onClick: () =>
              addToast({
                type: "info",
                message: "Opening filters...",
              }),
            color: "bg-purple-600 hover:bg-purple-700",
          },
        ]}
      />
    </div>
  )
}

export default function DebatesPageWithProvider() {
  return (
    <ToastProvider>
      <DebatesPage />
    </ToastProvider>
  )
}
