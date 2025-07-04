"use client"

import * as React from "react"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { DebateCard } from "@/components/ui/debate-card"
import { VoteButton } from "@/components/ui/vote-button"
import { EvidenceCard } from "@/components/ui/evidence-card"
import { CommentThread } from "@/components/ui/comment-thread"
import { DebateStatus } from "@/components/ui/debate-status"
import { UserProfileCard } from "@/components/ui/user-profile-card"
import { SearchFilters } from "@/components/ui/search-filters"
import { NotificationCenter } from "@/components/ui/notification-center"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gavel, Palette, Layout, Code } from "lucide-react"

export default function ComponentShowcase() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
  const [sortBy, setSortBy] = React.useState("recent")
  const [timeRange, setTimeRange] = React.useState("all")
  const [status, setStatus] = React.useState<string[]>([])

  // Sample data
  const sampleDebate = {
    title: "Is remote work more productive than office work?",
    description:
      "A comprehensive analysis of productivity metrics, employee satisfaction, and business outcomes in remote vs office environments.",
    category: "Work & Career",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "sarahj_debates",
    },
    stats: {
      participants: 1247,
      comments: 892,
      votes: { for: 756, against: 491 },
    },
    timeAgo: "2 hours ago",
    trending: true,
    status: "active" as const,
  }

  const sampleEvidence = {
    id: "1",
    type: "link" as const,
    title: "Stanford Study: Remote Work Productivity Analysis 2024",
    content:
      "Comprehensive research showing 13% increase in productivity among remote workers, with detailed methodology and peer review.",
    url: "https://example.com/stanford-study",
    author: {
      name: "Dr. Michael Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      username: "dr_chen_research",
    },
    credibilityScore: 94,
    votes: { helpful: 234, unhelpful: 12 },
    timeAgo: "1 day ago",
    verified: true,
  }

  const sampleComments = [
    {
      id: "1",
      content:
        "This is a fascinating debate! I've been working remotely for 3 years and can definitely say my productivity has increased significantly. The lack of office distractions and commute time really makes a difference.",
      author: {
        name: "Alex Rivera",
        avatar: "/placeholder.svg?height=32&width=32",
        username: "alex_remote",
      },
      timeAgo: "3 hours ago",
      votes: { up: 45, down: 3 },
      userVote: "up" as const,
      replies: [
        {
          id: "2",
          content:
            "I agree with your point about distractions, but what about collaboration? I find it harder to brainstorm and innovate when not in person.",
          author: {
            name: "Jamie Park",
            avatar: "/placeholder.svg?height=32&width=32",
            username: "jamie_collab",
          },
          timeAgo: "2 hours ago",
          votes: { up: 23, down: 1 },
          depth: 1,
        },
      ],
      depth: 0,
    },
  ]

  const sampleUser = {
    user: {
      id: "1",
      name: "Sarah Johnson",
      username: "sarahj_debates",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Product Manager passionate about workplace culture and productivity. Evidence-based decision maker.",
      location: "San Francisco, CA",
      website: "https://sarahjohnson.com",
      joinedDate: "March 2023",
      verified: true,
    },
    stats: {
      debatesWon: 23,
      debatesParticipated: 67,
      credibilityScore: 87,
      followers: 1234,
      following: 456,
    },
    badges: [
      { id: "1", name: "Top Contributor", icon: "🏆", color: "gold", description: "Top 1% contributor" },
      { id: "2", name: "Fact Checker", icon: "✅", color: "blue", description: "Verified facts 100+ times" },
      { id: "3", name: "Debate Master", icon: "🎯", color: "purple", description: "Won 20+ debates" },
    ],
  }

  const sampleNotifications = [
    {
      id: "1",
      type: "comment" as const,
      title: "New comment on your debate",
      message: "Alex Rivera commented on 'Is remote work more productive than office work?'",
      user: {
        name: "Alex Rivera",
        avatar: "/placeholder.svg?height=24&width=24",
        username: "alex_remote",
      },
      timeAgo: "5 minutes ago",
      read: false,
    },
    {
      id: "2",
      type: "vote" as const,
      title: "Your evidence was upvoted",
      message: "Your Stanford study evidence received 50 helpful votes",
      timeAgo: "1 hour ago",
      read: false,
    },
    {
      id: "3",
      type: "achievement" as const,
      title: "Achievement unlocked!",
      message: "You've earned the 'Fact Checker' badge for verifying 100+ pieces of evidence",
      timeAgo: "2 days ago",
      read: true,
    },
  ]

  const categories = [
    { id: "technology", label: "Technology", count: 234 },
    { id: "politics", label: "Politics", count: 189 },
    { id: "science", label: "Science", count: 156 },
    { id: "health", label: "Health", count: 143 },
    { id: "environment", label: "Environment", count: 98 },
    { id: "economics", label: "Economics", count: 87 },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Gavel className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    told.io
                  </h1>
                  <p className="text-sm text-muted-foreground">Component Library</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <NotificationCenter
                  notifications={sampleNotifications}
                  unreadCount={2}
                  onMarkAsRead={() => {}}
                  onMarkAllAsRead={() => {}}
                  onNotificationClick={() => {}}
                />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-6 py-12 max-w-7xl">
          {/* Introduction */}
          <section className="mb-16 text-center">
            <h1 className="text-4xl font-bold mb-4">told.io UI Component Library</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A comprehensive collection of React components designed specifically for debate platforms, featuring full
              dark mode support and accessibility-first design.
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="secondary" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Dark Mode Ready
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <Layout className="w-4 h-4" />
                Responsive Design
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                TypeScript
              </Badge>
            </div>
          </section>

          {/* Component Sections */}
          <div className="space-y-16">
            {/* Debate Components */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Debate Components</CardTitle>
                  <p className="text-muted-foreground">Core components for displaying and interacting with debates</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Debate Card</h3>
                    <DebateCard {...sampleDebate} className="max-w-md" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Vote Buttons</h3>
                    <div className="flex gap-4">
                      <VoteButton type="for" count={756} isActive />
                      <VoteButton type="against" count={491} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Debate Status</h3>
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
                      <DebateStatus
                        status="active"
                        timeRemaining="2 days"
                        participantCount={1247}
                        commentCount={892}
                        votingProgress={67}
                      />
                      <DebateStatus
                        status="resolved"
                        participantCount={2156}
                        commentCount={1834}
                        resolution={{
                          winner: "for",
                          confidence: 87,
                          reason: "Strong evidence and community consensus support the 'for' position",
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Evidence & Comments */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Evidence & Discussion</CardTitle>
                  <p className="text-muted-foreground">Components for evidence presentation and community discussion</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Evidence Card</h3>
                    <EvidenceCard {...sampleEvidence} className="max-w-2xl" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Comment Thread</h3>
                    <CommentThread
                      comments={sampleComments}
                      className="max-w-3xl"
                      onReply={(id, content) => console.log("Reply:", id, content)}
                      onVote={(id, type) => console.log("Vote:", id, type)}
                    />
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* User Components */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">User Components</CardTitle>
                  <p className="text-muted-foreground">Profile and user interaction components</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">User Profile Card</h3>
                    <UserProfileCard {...sampleUser} className="max-w-sm" />
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Search & Navigation */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Search & Navigation</CardTitle>
                  <p className="text-muted-foreground">Components for finding and filtering content</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Search Filters</h3>
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
                </CardContent>
              </Card>
            </section>

            {/* Implementation Guide */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Implementation Guide</CardTitle>
                  <p className="text-muted-foreground">How to use these components in your told.io application</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Installation</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">npm install @told-io/ui-components</code>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Theme Setup</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        {`import { ThemeProvider } from "@/components/ui/theme-provider"

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* Your app content */}
    </ThemeProvider>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Component Usage</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        {`import { DebateCard, VoteButton, ThemeToggle } from "@told-io/ui-components"

export function DebatePage() {
  return (
    <div>
      <ThemeToggle />
      <DebateCard
        title="Your debate title"
        category="Technology"
        author={{ name: "John Doe", username: "johndoe" }}
        stats={{ participants: 100, comments: 50, votes: { for: 60, against: 40 } }}
        timeAgo="2 hours ago"
        status="active"
      />
      <div className="flex gap-4">
        <VoteButton type="for" count={60} />
        <VoteButton type="against" count={40} />
      </div>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-green-500" />
                        Full TypeScript support with comprehensive type definitions
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-blue-500" />
                        Automatic dark mode with system preference detection
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-purple-500" />
                        WCAG 2.1 AA accessibility compliance
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-orange-500" />
                        Responsive design with mobile-first approach
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-red-500" />
                        Customizable theming with CSS custom properties
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
