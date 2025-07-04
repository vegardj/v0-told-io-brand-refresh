"use client"

import * as React from "react"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Book,
  Code,
  Play,
  Copy,
  Check,
  Zap,
  Palette,
  Settings,
  Eye,
  Download,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Heart,
  Star,
  Rocket,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Import all animation components for examples
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { ProgressRing } from "@/components/ui/progress-ring"
import { LoadingButton, LoadingSpinner, ProgressiveLoading } from "@/components/ui/loading-states"
import { ToastProvider, useToast } from "@/components/ui/toast-notification"
import { PageTransition, StaggeredAnimation } from "@/components/ui/page-transitions"
import { HoverCard, MagneticButton, GlowEffect } from "@/components/ui/hover-effects"
import { Heartbeat, BounceOnHover, TypewriterEffect } from "@/components/ui/micro-interactions"
import { DebateCardSkeleton } from "@/components/ui/skeleton-loader"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  className?: string
}

function CodeBlock({ code, language = "tsx", title, className }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative", className)}>
      {title && (
        <div className="flex items-center justify-between bg-muted px-4 py-2 rounded-t-lg border-b">
          <span className="text-sm font-medium">{title}</span>
          <Badge variant="outline" className="text-xs">
            {language}
          </Badge>
        </div>
      )}
      <div className="relative">
        <pre className="bg-muted/50 p-4 rounded-b-lg overflow-x-auto text-sm">
          <code>{code}</code>
        </pre>
        <Button variant="ghost" size="sm" onClick={copyToClipboard} className="absolute top-2 right-2 h-8 w-8 p-0">
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </Button>
      </div>
    </div>
  )
}

interface LiveExampleProps {
  title: string
  description: string
  children: React.ReactNode
  code: string
  className?: string
}

function LiveExample({ title, description, children, code, className }: LiveExampleProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="w-4 h-4 text-green-600" />
          {title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-6 border rounded-lg bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10">
          {children}
        </div>
        <Tabs defaultValue="code" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="props">Props</TabsTrigger>
          </TabsList>
          <TabsContent value="code">
            <CodeBlock code={code} title="Implementation" />
          </TabsContent>
          <TabsContent value="props">
            <div className="text-sm text-muted-foreground p-4 border rounded-lg">
              See component props in the API reference section below.
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function AnimationDocs() {
  const { addToast } = useToast()
  const [loading, setLoading] = React.useState(false)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const handleLoadingDemo = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
    addToast({
      type: "success",
      title: "Demo Complete!",
      message: "Loading animation finished successfully",
    })
  }

  const navigationItems = [
    { id: "overview", label: "Overview", icon: Book },
    { id: "getting-started", label: "Getting Started", icon: Rocket },
    { id: "components", label: "Components", icon: Palette },
    { id: "examples", label: "Live Examples", icon: Play },
    { id: "api", label: "API Reference", icon: Code },
    { id: "best-practices", label: "Best Practices", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Animation Docs
                </h1>
                <p className="text-sm text-muted-foreground">told.io Animation System</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Navigation</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[calc(100vh-200px)]">
                    <nav className="space-y-1 p-4">
                      {navigationItems.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors"
                        >
                          <item.icon className="w-4 h-4" />
                          {item.label}
                          <ChevronRight className="w-3 h-3 ml-auto" />
                        </a>
                      ))}
                    </nav>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Overview Section */}
            <section id="overview">
              <PageTransition variant="fade" duration={600}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Animation System Overview</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      The told.io animation system provides a comprehensive set of smooth, performant animations and
                      micro-interactions designed to enhance user experience while maintaining accessibility and
                      performance.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Zap className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Performance First</h3>
                        <p className="text-sm text-muted-foreground">
                          Hardware-accelerated animations using CSS transforms and requestAnimationFrame
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Eye className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Accessible</h3>
                        <p className="text-sm text-muted-foreground">
                          Respects prefers-reduced-motion and maintains keyboard navigation
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Settings className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Customizable</h3>
                        <p className="text-sm text-muted-foreground">
                          Flexible API with configurable timing, easing, and visual properties
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </PageTransition>
            </section>

            <Separator />

            {/* Getting Started Section */}
            <section id="getting-started">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Getting Started</h2>

                <Card>
                  <CardHeader>
                    <CardTitle>Installation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      code={`npm install @told-io/animations
# or
yarn add @told-io/animations
# or
pnpm add @told-io/animations`}
                      language="bash"
                      title="Package Installation"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Basic Setup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      code={`import { ThemeProvider } from "@/components/ui/theme-provider"
import { ToastProvider } from "@/components/ui/toast-notification"
import { AnimatedCounter, ProgressRing } from "@told-io/animations"

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ToastProvider>
        {/* Your app content */}
        <AnimatedCounter value={100} duration={1000} />
        <ProgressRing progress={75} size={120} />
      </ToastProvider>
    </ThemeProvider>
  )
}`}
                      title="Basic Implementation"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tailwind Configuration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      code={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(2px)" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        shake: "shake 0.5s ease-in-out",
        "bounce-in": "bounce-in 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`}
                      title="Tailwind Setup"
                    />
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Components Section */}
            <section id="components">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Animation Components</h2>

                {/* Animated Counter */}
                <LiveExample
                  title="Animated Counter"
                  description="Smooth number transitions with customizable easing and formatting"
                  code={`import { AnimatedCounter } from "@/components/ui/animated-counter"

export function CounterExample() {
  return (
    <div className="space-y-4">
      <AnimatedCounter 
        value={2847} 
        duration={1500} 
        className="text-2xl font-bold"
      />
      <AnimatedCounter 
        value={98.5} 
        duration={1000} 
        decimals={1}
        suffix="%" 
        className="text-lg"
      />
    </div>
  )
}`}
                >
                  <div className="space-y-4 text-center">
                    <div>
                      <AnimatedCounter value={2847} duration={1500} className="text-2xl font-bold" />
                      <p className="text-sm text-muted-foreground">Active Users</p>
                    </div>
                    <div>
                      <AnimatedCounter value={98.5} duration={1000} decimals={1} suffix="%" className="text-lg" />
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                    </div>
                  </div>
                </LiveExample>

                {/* Progress Ring */}
                <LiveExample
                  title="Progress Ring"
                  description="Circular progress indicators with smooth animations and customizable styling"
                  code={`import { ProgressRing } from "@/components/ui/progress-ring"

export function ProgressExample() {
  return (
    <ProgressRing 
      progress={75} 
      size={120} 
      color="rgb(59, 130, 246)"
    >
      <div className="text-center">
        <div className="text-2xl font-bold">75%</div>
        <div className="text-xs text-muted-foreground">Complete</div>
      </div>
    </ProgressRing>
  )
}`}
                >
                  <div className="flex justify-center">
                    <ProgressRing progress={progress} size={120} color="rgb(59, 130, 246)">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{progress}%</div>
                        <div className="text-xs text-muted-foreground">Progress</div>
                      </div>
                    </ProgressRing>
                  </div>
                </LiveExample>

                {/* Loading States */}
                <LiveExample
                  title="Loading States"
                  description="Various loading indicators including buttons, spinners, and progressive loading"
                  code={`import { LoadingButton, LoadingSpinner, ProgressiveLoading } from "@/components/ui/loading-states"

export function LoadingExample() {
  const [loading, setLoading] = useState(false)
  
  const steps = [
    { id: "init", label: "Initializing", completed: true },
    { id: "process", label: "Processing", completed: false },
    { id: "finish", label: "Finishing", completed: false },
  ]

  return (
    <div className="space-y-4">
      <LoadingButton 
        loading={loading} 
        onClick={() => setLoading(!loading)}
      >
        Click me
      </LoadingButton>
      <ProgressiveLoading steps={steps} currentStep="process" />
    </div>
  )
}`}
                >
                  <div className="space-y-6">
                    <div className="flex gap-4 justify-center">
                      <LoadingButton loading={loading} loadingText="Processing..." onClick={handleLoadingDemo}>
                        Demo Loading
                      </LoadingButton>
                      <LoadingSpinner size="md" />
                    </div>
                    <ProgressiveLoading
                      steps={[
                        { id: "init", label: "Initializing debate", completed: true },
                        { id: "validate", label: "Validating arguments", completed: true },
                        { id: "process", label: "Processing evidence", completed: false },
                        { id: "finalize", label: "Finalizing results", completed: false },
                      ]}
                      currentStep="process"
                    />
                  </div>
                </LiveExample>

                {/* Hover Effects */}
                <LiveExample
                  title="Hover Effects"
                  description="Interactive hover effects including scaling, magnetic attraction, and glow effects"
                  code={`import { HoverCard, MagneticButton, GlowEffect } from "@/components/ui/hover-effects"

export function HoverExample() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <HoverCard hoverScale={1.05}>
        <div className="p-4 border rounded-lg">Hover to scale</div>
      </HoverCard>
      
      <GlowEffect color="blue" intensity="medium">
        <div className="p-4 border rounded-lg">Hover for glow</div>
      </GlowEffect>
      
      <MagneticButton className="p-4 border rounded-lg">
        Magnetic button
      </MagneticButton>
    </div>
  )
}`}
                >
                  <div className="grid grid-cols-3 gap-4">
                    <HoverCard hoverScale={1.05}>
                      <div className="p-4 border rounded-lg text-center bg-blue-50 dark:bg-blue-900/20">
                        <Zap className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                        <p className="text-sm">Hover to scale</p>
                      </div>
                    </HoverCard>

                    <GlowEffect color="purple" intensity="medium">
                      <div className="p-4 border rounded-lg text-center bg-purple-50 dark:bg-purple-900/20">
                        <Sparkles className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                        <p className="text-sm">Hover for glow</p>
                      </div>
                    </GlowEffect>

                    <MagneticButton className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 w-full">
                      <div className="text-center">
                        <Heart className="w-6 h-6 mx-auto mb-2 text-green-600" />
                        <p className="text-sm">Magnetic button</p>
                      </div>
                    </MagneticButton>
                  </div>
                </LiveExample>

                {/* Micro-interactions */}
                <LiveExample
                  title="Micro-interactions"
                  description="Small delightful animations that provide feedback and enhance user experience"
                  code={`import { Heartbeat, BounceOnHover, TypewriterEffect } from "@/components/ui/micro-interactions"

export function MicroInteractionsExample() {
  return (
    <div className="space-y-4">
      <Heartbeat active>
        <Badge className="bg-red-500">Live</Badge>
      </Heartbeat>
      
      <BounceOnHover>
        <Button>Click me!</Button>
      </BounceOnHover>
      
      <TypewriterEffect 
        text="Welcome to told.io!" 
        speed={100} 
        className="text-lg font-semibold"
      />
    </div>
  )
}`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Heartbeat active>
                        <Badge className="bg-red-500 text-white">
                          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                          Live Updates
                        </Badge>
                      </Heartbeat>

                      <BounceOnHover>
                        <Button variant="outline">
                          <Star className="w-4 h-4 mr-2" />
                          Bounce on hover
                        </Button>
                      </BounceOnHover>
                    </div>

                    <TypewriterEffect
                      text="Welcome to the told.io animation system!"
                      speed={80}
                      className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    />
                  </div>
                </LiveExample>

                {/* Page Transitions */}
                <LiveExample
                  title="Page Transitions"
                  description="Smooth page and component transitions with staggered animations"
                  code={`import { PageTransition, StaggeredAnimation } from "@/components/ui/page-transitions"

export function TransitionExample() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"]
  
  return (
    <PageTransition variant="slide" duration={500}>
      <StaggeredAnimation delay={100}>
        {items.map((item, index) => (
          <Card key={index} className="p-4">
            {item}
          </Card>
        ))}
      </StaggeredAnimation>
    </PageTransition>
  )
}`}
                >
                  <StaggeredAnimation delay={150}>
                    {["Debate Analytics", "User Engagement", "Content Quality", "Community Growth"].map(
                      (item, index) => (
                        <Card key={index} className="p-4 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                              <span className="text-white text-sm font-bold">{index + 1}</span>
                            </div>
                            <span className="font-medium">{item}</span>
                          </div>
                        </Card>
                      ),
                    )}
                  </StaggeredAnimation>
                </LiveExample>
              </div>
            </section>

            <Separator />

            {/* Live Examples Section */}
            <section id="examples">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Interactive Examples</h2>

                <Card>
                  <CardHeader>
                    <CardTitle>Toast Notifications</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Click the buttons below to see different toast notification animations
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        onClick={() =>
                          addToast({
                            type: "success",
                            title: "Success!",
                            message: "Your action was completed successfully",
                          })
                        }
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Success Toast
                      </Button>
                      <Button
                        onClick={() =>
                          addToast({
                            type: "error",
                            title: "Error",
                            message: "Something went wrong. Please try again.",
                          })
                        }
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Error Toast
                      </Button>
                      <Button
                        onClick={() =>
                          addToast({
                            type: "warning",
                            title: "Warning",
                            message: "Please review your input before proceeding",
                          })
                        }
                        className="bg-yellow-600 hover:bg-yellow-700"
                      >
                        Warning Toast
                      </Button>
                      <Button
                        onClick={() =>
                          addToast({
                            type: "info",
                            title: "Information",
                            message: "Here's some helpful information for you",
                            action: { label: "Learn More", onClick: () => console.log("Learn more clicked") },
                          })
                        }
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Info Toast
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skeleton Loading States</CardTitle>
                    <p className="text-sm text-muted-foreground">Smooth loading placeholders with shimmer effects</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <DebateCardSkeleton />
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <LoadingSpinner size="sm" />
                          <span className="text-sm">Loading debate content...</span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4" />
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/2" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* API Reference Section */}
            <section id="api">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">API Reference</h2>

                <div className="grid gap-6">
                  {/* AnimatedCounter API */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-mono text-lg">AnimatedCounter</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Prop</th>
                              <th className="text-left p-2">Type</th>
                              <th className="text-left p-2">Default</th>
                              <th className="text-left p-2">Description</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="p-2 font-mono">value</td>
                              <td className="p-2">number</td>
                              <td className="p-2">-</td>
                              <td className="p-2">Target number to animate to</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-mono">duration</td>
                              <td className="p-2">number</td>
                              <td className="p-2">1000</td>
                              <td className="p-2">Animation duration in milliseconds</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-mono">decimals</td>
                              <td className="p-2">number</td>
                              <td className="p-2">0</td>
                              <td className="p-2">Number of decimal places</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-mono">prefix</td>
                              <td className="p-2">string</td>
                              <td className="p-2">""</td>
                              <td className="p-2">Text to display before the number</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-mono">suffix</td>
                              <td className="p-2">string</td>
                              <td className="p-2">""</td>
                              <td className="p-2">Text to display after the number</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* ProgressRing API */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-mono text-lg">ProgressRing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Prop</th>
                              <th className="text-left p-2">Type</th>
                              <th className="text-left p-2">Default</th>
                              <th className="text-left p-2">Description</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="p-2 font-mono">progress</td>
                              <td className="p-2">number</td>
                              <td className="p-2">-</td>
                              <td className="p-2">Progress percentage (0-100)</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-mono">size</td>
                              <td className="p-2">number</td>
                              <td className="p-2">120</td>
                              <td className="p-2">Ring diameter in pixels</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-mono">strokeWidth</td>
                              <td className="p-2">number</td>
                              <td className="p-2">8</td>
                              <td className="p-2">Ring stroke width</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-mono">color</td>
                              <td className="p-2">string</td>
                              <td className="p-2">"currentColor"</td>
                              <td className="p-2">Progress ring color</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-mono">animated</td>
                              <td className="p-2">boolean</td>
                              <td className="p-2">true</td>
                              <td className="p-2">Enable animation</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* HoverCard API */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-mono text-lg">HoverCard</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Prop</th>
                              <th className="text-left p-2">Type</th>
                              <th className="text-left p-2">Default</th>
                              <th className="text-left p-2">Description</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="p-2 font-mono">hoverScale</td>
                              <td className="p-2">number</td>
                              <td className="p-2">1.02</td>
                              <td className="p-2">Scale factor on hover</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-mono">shadowIntensity</td>
                              <td className="p-2">"sm" | "md" | "lg" | "xl"</td>
                              <td className="p-2">"md"</td>
                              <td className="p-2">Shadow intensity on hover</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <Separator />

            {/* Best Practices Section */}
            <section id="best-practices">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Best Practices</h2>

                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        Performance Guidelines
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">Use CSS transforms</h4>
                            <p className="text-sm text-muted-foreground">
                              Prefer transform and opacity changes over layout-affecting properties for smooth 60fps
                              animations.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">Intersection Observer</h4>
                            <p className="text-sm text-muted-foreground">
                              Use Intersection Observer to trigger animations only when elements are visible.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">RequestAnimationFrame</h4>
                            <p className="text-sm text-muted-foreground">
                              Use requestAnimationFrame for JavaScript-driven animations to sync with the browser's
                              refresh rate.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-blue-500" />
                        Accessibility Considerations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CodeBlock
                        code={`// Respect user preferences
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

// JavaScript detection
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Conditional animation
if (!prefersReducedMotion) {
  element.animate(keyframes, options)
}`}
                        title="Reduced Motion Support"
                      />

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">Maintain focus indicators</h4>
                            <p className="text-sm text-muted-foreground">
                              Ensure keyboard navigation remains clear during animations.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">Provide alternative feedback</h4>
                            <p className="text-sm text-muted-foreground">
                              Use text, color, and other visual cues alongside animations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-purple-500" />
                        Animation Timing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Recommended Durations</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Micro-interactions: 100-200ms</li>
                            <li>• UI transitions: 200-500ms</li>
                            <li>• Page transitions: 300-600ms</li>
                            <li>• Loading states: 1000-2000ms</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Easing Functions</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• ease-out: Natural deceleration</li>
                            <li>• ease-in-out: Smooth start and end</li>
                            <li>• cubic-bezier: Custom curves</li>
                            <li>• spring: Bouncy, natural motion</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Floating Action Button for quick access */}
      <FloatingActionButton />
    </div>
  )
}

export default function AnimationDocsWithProvider() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ToastProvider>
        <AnimationDocs />
      </ToastProvider>
    </ThemeProvider>
  )
}
