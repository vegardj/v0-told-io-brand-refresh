"use client"

import * as React from "react"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { DebateCard } from "@/components/ui/debate-card"
import { VoteButton } from "@/components/ui/vote-button"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ProgressRing } from "@/components/ui/progress-ring"
import { LoadingButton, LoadingSpinner, ProgressiveLoading, PullToRefresh } from "@/components/ui/loading-states"
import { ToastProvider, useToast } from "@/components/ui/toast-notification"
import { PageTransition, StaggeredAnimation } from "@/components/ui/page-transitions"
import { HoverCard, MagneticButton, GlowEffect } from "@/components/ui/hover-effects"
import { Heartbeat, BounceOnHover, TypewriterEffect } from "@/components/ui/micro-interactions"
import { DebateCardSkeleton, UserProfileSkeleton } from "@/components/ui/skeleton-loader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gavel, Sparkles, Zap, Heart, Star, Rocket } from "lucide-react"

function AnimationShowcase() {
  const { addToast } = useToast()
  const [loading, setLoading] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [showSkeletons, setShowSkeletons] = React.useState(false)

  const loadingSteps = [
    { id: "init", label: "Initializing debate", completed: true },
    { id: "validate", label: "Validating arguments", completed: true },
    { id: "process", label: "Processing evidence", completed: false },
    { id: "finalize", label: "Finalizing results", completed: false },
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const handleLoadingDemo = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
    addToast({
      type: "success",
      title: "Success!",
      message: "Animation demo completed successfully",
    })
  }

  const handleRefresh = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    addToast({
      type: "info",
      message: "Content refreshed!",
    })
  }

  const sampleDebate = {
    title: "Should AI have voting rights in democratic processes?",
    description:
      "Exploring the implications of artificial intelligence participation in governance and democratic decision-making.",
    category: "Technology",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "dr_chen_ai",
    },
    stats: {
      participants: 2847,
      comments: 1592,
      votes: { for: 1823, against: 1024 },
    },
    timeAgo: "3 hours ago",
    trending: true,
    status: "active" as const,
  }

  const debateCards = Array.from({ length: 6 }, (_, i) => ({
    ...sampleDebate,
    title: `Animated Debate Card ${i + 1}`,
    stats: {
      ...sampleDebate.stats,
      participants: Math.floor(Math.random() * 5000) + 100,
      votes: {
        for: Math.floor(Math.random() * 2000) + 500,
        against: Math.floor(Math.random() * 1500) + 300,
      },
    },
  }))

  return (
    <div className="min-h-screen bg-background">
      {/* Animated Header */}
      <PageTransition variant="slide" duration={500}>
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <BounceOnHover>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Gavel className="w-6 h-6 text-white" />
                  </div>
                </BounceOnHover>
                <div>
                  <TypewriterEffect
                    text="told.io"
                    speed={100}
                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  />
                  <p className="text-sm text-muted-foreground">Animated Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <MagneticButton className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Magic Button
                </MagneticButton>
              </div>
            </div>
          </div>
        </header>
      </PageTransition>

      <PullToRefresh onRefresh={handleRefresh}>
        <div className="container mx-auto px-6 py-12 max-w-7xl">
          {/* Hero Section */}
          <PageTransition variant="fade" duration={800}>
            <section className="text-center mb-16">
              <div className="mb-8">
                <h1 className="text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Micro-Interactions
                  </span>
                  <br />
                  <span className="text-foreground">& Smooth Animations</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Experience the enhanced told.io interface with delightful animations and engaging micro-interactions
                </p>
              </div>

              <div className="flex justify-center gap-6 mb-8">
                <div className="text-center">
                  <ProgressRing progress={progress} size={100} color="rgb(59, 130, 246)">
                    <div className="text-center">
                      <AnimatedCounter value={progress} suffix="%" className="text-2xl font-bold" />
                      <div className="text-xs text-muted-foreground">Progress</div>
                    </div>
                  </ProgressRing>
                </div>
                <div className="text-center">
                  <ProgressRing progress={75} size={100} color="rgb(34, 197, 94)">
                    <div className="text-center">
                      <AnimatedCounter value={2847} className="text-lg font-bold" />
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                  </ProgressRing>
                </div>
                <div className="text-center">
                  <ProgressRing progress={60} size={100} color="rgb(168, 85, 247)">
                    <div className="text-center">
                      <AnimatedCounter value={1592} className="text-lg font-bold" />
                      <div className="text-xs text-muted-foreground">Debates</div>
                    </div>
                  </ProgressRing>
                </div>
              </div>
            </section>
          </PageTransition>

          {/* Interactive Buttons Section */}
          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Interactive Elements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <LoadingButton
                    loading={loading}
                    loadingText="Processing..."
                    onClick={handleLoadingDemo}
                    className="bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Start Animation
                  </LoadingButton>

                  <Button
                    onClick={() =>
                      addToast({
                        type: "success",
                        title: "Animated Toast!",
                        message: "This toast slides in smoothly with micro-interactions",
                        action: { label: "Undo", onClick: () => console.log("Undo clicked") },
                      })
                    }
                    variant="outline"
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    Show Toast
                  </Button>

                  <Button
                    onClick={() => setShowSkeletons(!showSkeletons)}
                    variant="outline"
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    Toggle Skeletons
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Vote Buttons with Animation</h3>
                    <div className="flex gap-4">
                      <VoteButton type="for" count={1823} isActive />
                      <VoteButton type="against" count={1024} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Loading States</h3>
                    <ProgressiveLoading steps={loadingSteps} currentStep="process" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Animated Cards Grid */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500" />
                Animated Debate Cards
              </h2>
              <Heartbeat active>
                <Badge className="bg-gradient-to-r from-pink-500 to-red-500 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Live Updates
                </Badge>
              </Heartbeat>
            </div>

            {showSkeletons ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <DebateCardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <StaggeredAnimation delay={150}>
                {debateCards.map((debate, index) => (
                  <div key={index} className="mb-6">
                    <GlowEffect color="blue" intensity="medium">
                      <DebateCard {...debate} />
                    </GlowEffect>
                  </div>
                ))}
              </StaggeredAnimation>
            )}
          </section>

          {/* Hover Effects Demo */}
          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Hover Effects & Micro-Interactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <HoverCard hoverScale={1.05} shadowIntensity="lg">
                    <div className="p-6 border rounded-lg text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                      <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">Hover to Scale</h3>
                      <p className="text-sm text-muted-foreground">This card scales smoothly on hover</p>
                    </div>
                  </HoverCard>

                  <GlowEffect color="purple" intensity="high">
                    <div className="p-6 border rounded-lg text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                      <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">Glow Effect</h3>
                      <p className="text-sm text-muted-foreground">Hover for a magical glow</p>
                    </div>
                  </GlowEffect>

                  <BounceOnHover>
                    <div className="p-6 border rounded-lg text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                      <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">Bounce Animation</h3>
                      <p className="text-sm text-muted-foreground">Click me for a bounce!</p>
                    </div>
                  </BounceOnHover>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Loading States Demo */}
          {showSkeletons && (
            <section className="mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Loading States & Skeletons</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <UserProfileSkeleton />
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <LoadingSpinner size="sm" />
                        <span className="text-sm">Loading content...</span>
                      </div>
                      <DebateCardSkeleton />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          )}
        </div>
      </PullToRefresh>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  )
}

export default function AnimatedShowcaseWithProvider() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ToastProvider>
        <AnimationShowcase />
      </ToastProvider>
    </ThemeProvider>
  )
}
