"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { VoteButton } from "@/components/ui/vote-button"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { ToastNotification } from "@/components/ui/toast-notification"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import {
  MessageSquare,
  Users,
  TrendingUp,
  Search,
  Filter,
  Plus,
  Clock,
  Trophy,
  User,
  Home,
  BarChart3,
} from "lucide-react"

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
  status: "Active" | "Resolved" | "Pending"
  difficulty: "Easy" | "Medium" | "Hard"
  category: string
  votesFor: number
  votesAgainst: number
  participants: number
  resolutionTime: string
  trending: boolean
  createdAt: string
}

export default function DebatesPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [showToast, setShowToast] = React.useState(false)
  const [toastMessage, setToastMessage] = React.useState("")
  const [debates, setDebates] = React.useState<Debate[]>([
    {
      id: "1",
      title: "Testing with new functionality",
      description: "OK, wondering if there is a difficult assessment or not.",
      status: "Active",
      difficulty: "Hard",
      category: "Technology",
      votesFor: 0,
      votesAgainst: 0,
      participants: 2,
      resolutionTime: "Resolves in 13 days",
      trending: false,
      createdAt: "2024-01-15",
    },
    {
      id: "2",
      title: "We're going to delete this one also 3",
      description: "We're going to delete this one also 3",
      status: "Active",
      difficulty: "Hard",
      category: "General",
      votesFor: 0,
      votesAgainst: 0,
      participants: 1,
      resolutionTime: "Resolves 6 days ago",
      trending: false,
      createdAt: "2024-01-10",
    },
    {
      id: "3",
      title: "This is a really interesting thing we're going to delete",
      description: "This is a really interesting thing we're going to delete",
      status: "Active",
      difficulty: "Hard",
      category: "Philosophy",
      votesFor: 0,
      votesAgainst: 0,
      participants: 1,
      resolutionTime: "Resolves in 5 days",
      trending: true,
      createdAt: "2024-01-12",
    },
    {
      id: "4",
      title: "Is remote work more productive than office work?",
      description: "A comprehensive analysis of productivity metrics comparing remote and in-office work environments.",
      status: "Active",
      difficulty: "Medium",
      category: "Work & Career",
      votesFor: 247,
      votesAgainst: 156,
      participants: 1247,
      resolutionTime: "Resolves in 8 days",
      trending: true,
      createdAt: "2024-01-08",
    },
    {
      id: "5",
      title: "Should social media platforms fact-check content?",
      description: "Examining the role of social media companies in content moderation and fact-checking.",
      status: "Active",
      difficulty: "Hard",
      category: "Technology",
      votesFor: 892,
      votesAgainst: 634,
      participants: 2156,
      resolutionTime: "Resolves in 12 days",
      trending: false,
      createdAt: "2024-01-05",
    },
  ])

  const handleVote = (debateId: string, voteType: "for" | "against") => {
    setDebates((prev) =>
      prev.map((debate) => {
        if (debate.id === debateId) {
          return {
            ...debate,
            votesFor: voteType === "for" ? debate.votesFor + 1 : debate.votesFor,
            votesAgainst: voteType === "against" ? debate.votesAgainst + 1 : debate.votesAgainst,
          }
        }
        return debate
      }),
    )

    setToastMessage(`Vote ${voteType === "for" ? "for" : "against"} recorded!`)
    setShowToast(true)
  }

  const filteredDebates = debates.filter((debate) => {
    const matchesSearch =
      debate.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      debate.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || debate.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ["All", ...Array.from(new Set(debates.map((d) => d.category)))]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GavelIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-blue-600">told.io</span>
              </Link>

              <nav className="hidden md:flex items-center space-x-6">
                <Link
                  href="/"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-blue-50 transition-all"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                <Link
                  href="/leaderboard"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-blue-50 transition-all"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Leaderboard</span>
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-blue-50 transition-all"
                >
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-600">Score:</span>
                <AnimatedCounter value={0} className="font-semibold text-blue-600" />
              </div>
              <span className="text-gray-600">Ve</span>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                New Told
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Welcome Section */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" />
                  <AvatarFallback className="bg-blue-600 text-white font-semibold">Ve</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold text-blue-600 mb-1">Welcome back, Vegard!</h2>
                  <p className="text-gray-600">Ready to settle some debates?</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-6 h-6 text-blue-600" />
                <AnimatedCounter value={0} className="text-2xl font-bold text-blue-600" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex-1 sm:flex-none"
              >
                Start a New Debate
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 flex-1 sm:flex-none bg-transparent"
              >
                View My Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search debates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg bg-white focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Debates Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Active Debates</h2>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              {filteredDebates.length} debates
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDebates.map((debate, index) => (
              <Card
                key={debate.id}
                className="hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm animate-stagger"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Status and Trending */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={debate.status === "Active" ? "default" : "secondary"}
                        className="bg-blue-600 text-white"
                      >
                        {debate.status}
                      </Badge>
                      <Badge variant="outline" className="border-red-200 text-red-600 bg-red-50">
                        {debate.difficulty}
                      </Badge>
                    </div>
                    {debate.trending && (
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* Title and Description */}
                  <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 leading-snug">{debate.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{debate.description}</p>

                  {/* Voting Section */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <VoteButton
                      type="up"
                      count={debate.votesFor}
                      onClick={() => handleVote(debate.id, "for")}
                      className="flex-1"
                    />
                    <VoteButton
                      type="down"
                      count={debate.votesAgainst}
                      onClick={() => handleVote(debate.id, "against")}
                      className="flex-1"
                    />
                  </div>

                  {/* Vote Percentages */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>
                      For:{" "}
                      {debate.votesFor + debate.votesAgainst > 0
                        ? Math.round((debate.votesFor / (debate.votesFor + debate.votesAgainst)) * 100)
                        : 0}
                      %
                    </span>
                    <span>
                      Against:{" "}
                      {debate.votesFor + debate.votesAgainst > 0
                        ? Math.round((debate.votesAgainst / (debate.votesFor + debate.votesAgainst)) * 100)
                        : 0}
                      %
                    </span>
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">{debate.resolutionTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <AnimatedCounter value={debate.participants} className="text-xs" />
                        <span className="text-xs">participating</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDebates.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No debates found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </section>
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton
        onClick={() => {
          setToastMessage("Starting new debate...")
          setShowToast(true)
        }}
        className="fixed bottom-6 right-6"
      >
        <Plus className="w-6 h-6" />
      </FloatingActionButton>

      {/* Toast Notification */}
      {showToast && <ToastNotification message={toastMessage} type="success" onClose={() => setShowToast(false)} />}
    </div>
  )
}
