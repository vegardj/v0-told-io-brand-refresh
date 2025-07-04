"use client"

import * as React from "react"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  BookOpen,
  Code2,
  Lightbulb,
  Zap,
  Target,
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react"

// Import animation components for demonstrations
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ProgressRing } from "@/components/ui/progress-ring"
import { HoverCard, GlowEffect } from "@/components/ui/hover-effects"
import { TypewriterEffect } from "@/components/ui/micro-interactions"

interface GuideSection {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  content: React.ReactNode
}

function AnimationGuide() {
  const [activeDemo, setActiveDemo] = React.useState<string | null>(null)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const guideSections: GuideSection[] = [
    {
      id: "principles",
      title: "Animation Principles",
      icon: Target,
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Great animations follow fundamental principles that make them feel natural and purposeful.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Timing & Easing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Natural Motion</h4>
                    <p className="text-sm text-muted-foreground">
                      Objects in the real world don't move at constant speeds. Use easing functions to create natural
                      acceleration and deceleration.
                    </p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <code className="text-sm">transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);</code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  Purpose & Feedback
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Meaningful Motion</h4>
                    <p className="text-sm text-muted-foreground">
                      Every animation should serve a purpose: guide attention, provide feedback, or show relationships
                      between elements.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => setActiveDemo(activeDemo === "feedback" ? null : "feedback")}
                      className="transition-all duration-200 hover:scale-105"
                    >
                      {activeDemo === "feedback" ? (
                        <Pause className="w-3 h-3 mr-1" />
                      ) : (
                        <Play className="w-3 h-3 mr-1" />
                      )}
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>The 12 Principles Applied to UI</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Squash & Stretch</h4>
                  <p className="text-xs text-muted-foreground">
                    Scale elements during interaction to show responsiveness
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Anticipation</h4>
                  <p className="text-xs text-muted-foreground">Prepare users for actions with subtle pre-animations</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Staging</h4>
                  <p className="text-xs text-muted-foreground">Direct attention to important elements through motion</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Follow Through</h4>
                  <p className="text-xs text-muted-foreground">
                    Elements continue moving naturally after the main action
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Overlapping Action</h4>
                  <p className="text-xs text-muted-foreground">Stagger animations for more natural, organic movement</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Secondary Action</h4>
                  <p className="text-xs text-muted-foreground">
                    Add supporting animations that enhance the main action
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "implementation",
      title: "Implementation Patterns",
      icon: Code2,
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Learn common patterns and techniques for implementing smooth, performant animations.
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>CSS vs JavaScript Animations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">CSS Animations (Preferred)</h4>
                    <div className="space-y-3">
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">✓ Hardware accelerated</p>
                        <p className="text-xs text-muted-foreground">Runs on GPU for smooth 60fps</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">✓ Performant</p>
                        <p className="text-xs text-muted-foreground">Optimized by browser engines</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">✓ Declarative</p>
                        <p className="text-xs text-muted-foreground">Easy to maintain and debug</p>
                      </div>
                    </div>
                    <div className="mt-4 bg-muted p-3 rounded-lg">
                      <code className="text-xs">
                        {`.animate {
  transform: translateX(100px);
  transition: transform 0.3s ease-out;
}`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">JavaScript Animations (When Needed)</h4>
                    <div className="space-y-3">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">→ Complex logic</p>
                        <p className="text-xs text-muted-foreground">Dynamic values, user input</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">→ Precise control</p>
                        <p className="text-xs text-muted-foreground">Frame-by-frame manipulation</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">→ Interaction</p>
                        <p className="text-xs text-muted-foreground">Mouse/touch driven animations</p>
                      </div>
                    </div>
                    <div className="mt-4 bg-muted p-3 rounded-lg">
                      <code className="text-xs">
                        {`requestAnimationFrame(animate)
function animate() {
  // Update values
  element.style.transform = \`translateX(\${x}px)\`
}`}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Do's
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          Use transform and opacity for animations
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          Add will-change property for complex animations
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          Use Intersection Observer for scroll-triggered animations
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          Prefer CSS animations for simple transitions
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        Don'ts
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          Animate layout properties (width, height, top, left)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          Use setTimeout/setInterval for animations
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          Animate too many elements simultaneously
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          Ignore prefers-reduced-motion
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Performance Monitoring</h5>
                    <code className="text-xs block">
                      {`// Monitor animation performance
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > 16.67) { // > 60fps
      console.warn('Slow animation detected:', entry)
    }
  }
})
observer.observe({ entryTypes: ['measure'] })`}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "accessibility",
      title: "Accessibility Guidelines",
      icon: CheckCircle,
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Ensure your animations are inclusive and accessible to all users, including those with vestibular disorders
            or motion sensitivities.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-500" />
                Reduced Motion Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Always respect the user's motion preferences. Some users experience dizziness, nausea, or seizures from
                motion.
              </p>

              <div className="bg-muted p-4 rounded-lg">
                <h5 className="font-semibold mb-2">CSS Implementation</h5>
                <code className="text-xs block">
                  {`@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`}
                </code>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h5 className="font-semibold mb-2">JavaScript Detection</h5>
                <code className="text-xs block">
                  {`const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

// Conditional animation
if (!prefersReducedMotion) {
  element.animate(keyframes, options)
} else {
  // Provide instant feedback instead
  element.classList.add('completed')
}`}
                </code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Respect prefers-reduced-motion</h4>
                    <p className="text-xs text-muted-foreground">
                      Always provide alternatives for users who prefer reduced motion
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Maintain focus indicators</h4>
                    <p className="text-xs text-muted-foreground">
                      Ensure keyboard navigation remains clear during animations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Provide alternative feedback</h4>
                    <p className="text-xs text-muted-foreground">
                      Use text, color, and sound alongside motion for status updates
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Test with assistive technology</h4>
                    <p className="text-xs text-muted-foreground">
                      Verify animations work well with screen readers and other tools
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Avoid flashing content</h4>
                    <p className="text-xs text-muted-foreground">Keep flashing below 3Hz to prevent seizures</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>WCAG 2.1 Animation Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Level AA Requirements</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• No content flashes more than 3 times per second</li>
                    <li>• Motion can be disabled by user preference</li>
                    <li>• Essential animations have alternatives</li>
                    <li>• Focus indicators remain visible during transitions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Level AAA Best Practices</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Animations can be paused or stopped</li>
                    <li>• No auto-playing motion longer than 5 seconds</li>
                    <li>• Parallax and large motion effects are optional</li>
                    <li>• Clear visual boundaries during transitions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "best-practices",
      title: "Best Practices",
      icon: Lightbulb,
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Follow these proven practices to create animations that enhance rather than distract from the user
            experience.
          </p>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Animation Hierarchy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">1</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">Critical Actions</h4>
                      <p className="text-xs text-muted-foreground">Errors, confirmations, urgent feedback</p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        Immediate
                      </Badge>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-yellow-600 font-bold text-sm">2</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">User Actions</h4>
                      <p className="text-xs text-muted-foreground">Button clicks, form submissions, navigation</p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        Fast
                      </Badge>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">3</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">Ambient Effects</h4>
                      <p className="text-xs text-muted-foreground">Hover states, decorative animations</p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        Subtle
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Timing Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Duration Recommendations</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-2 bg-muted rounded">
                          <span className="text-sm">Micro-interactions</span>
                          <Badge variant="outline">100-200ms</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-muted rounded">
                          <span className="text-sm">UI transitions</span>
                          <Badge variant="outline">200-500ms</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-muted rounded">
                          <span className="text-sm">Page transitions</span>
                          <Badge variant="outline">300-600ms</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-muted rounded">
                          <span className="text-sm">Loading states</span>
                          <Badge variant="outline">1000ms+</Badge>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Easing Functions</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium text-sm mb-1">ease-out</h5>
                          <p className="text-xs text-muted-foreground mb-2">Natural deceleration, feels responsive</p>
                          <code className="text-xs bg-muted px-2 py-1 rounded">cubic-bezier(0, 0, 0.2, 1)</code>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h5 className="font-medium text-sm mb-1">ease-in-out</h5>
                          <p className="text-xs text-muted-foreground mb-2">Smooth start and end</p>
                          <code className="text-xs bg-muted px-2 py-1 rounded">cubic-bezier(0.4, 0, 0.6, 1)</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Entry Animations</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-3 h-3" />
                        <span>Fade in for new content</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-3 h-3" />
                        <span>Slide in for panels/modals</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-3 h-3" />
                        <span>Scale in for notifications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-3 h-3" />
                        <span>Stagger for lists</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Feedback Animations</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-3 h-3" />
                        <span>Pulse for loading states</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-3 h-3" />
                        <span>Shake for errors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-3 h-3" />
                        <span>Bounce for success</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-3 h-3" />
                        <span>Glow for focus states</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Animation Guide
                </h1>
                <p className="text-sm text-muted-foreground">Complete implementation guide</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <TypewriterEffect
              text="Master Animation Design"
              speed={100}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Learn the principles, patterns, and best practices for creating delightful animations in the told.io design
            system.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <HoverCard hoverScale={1.05}>
              <div className="text-center">
                <ProgressRing progress={progress} size={100} color="rgb(59, 130, 246)">
                  <div className="text-center">
                    <AnimatedCounter value={progress} suffix="%" className="text-lg font-bold" />
                    <div className="text-xs text-muted-foreground">Progress</div>
                  </div>
                </ProgressRing>
              </div>
            </HoverCard>

            <GlowEffect color="purple" intensity="medium">
              <div className="text-center">
                <ProgressRing progress={85} size={100} color="rgb(168, 85, 247)">
                  <div className="text-center">
                    <AnimatedCounter value={12} className="text-lg font-bold" />
                    <div className="text-xs text-muted-foreground">Principles</div>
                  </div>
                </ProgressRing>
              </div>
            </GlowEffect>

            <HoverCard hoverScale={1.05}>
              <div className="text-center">
                <ProgressRing progress={95} size={100} color="rgb(34, 197, 94)">
                  <div className="text-center">
                    <AnimatedCounter value={50} suffix="+" className="text-lg font-bold" />
                    <div className="text-xs text-muted-foreground">Examples</div>
                  </div>
                </ProgressRing>
              </div>
            </HoverCard>
          </div>
        </div>

        {/* Guide Sections */}
        <div className="space-y-16">
          {guideSections.map((section, index) => (
            <section key={section.id} id={section.id}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{section.title}</h2>
                  <Badge variant="outline" className="mt-1">
                    Section {index + 1}
                  </Badge>
                </div>
              </div>
              {section.content}
              {index < guideSections.length - 1 && <Separator className="mt-16" />}
            </section>
          ))}
        </div>

        {/* Quick Reference */}
        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5" />
                Quick Reference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Essential CSS Properties</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div>transform</div>
                    <div>opacity</div>
                    <div>transition</div>
                    <div>animation</div>
                    <div>will-change</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">JavaScript APIs</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div>requestAnimationFrame</div>
                    <div>IntersectionObserver</div>
                    <div>Web Animations API</div>
                    <div>matchMedia</div>
                    <div>PerformanceObserver</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Timing Functions</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div>ease-out</div>
                    <div>ease-in-out</div>
                    <div>cubic-bezier()</div>
                    <div>steps()</div>
                    <div>spring()</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default function AnimationGuideWithProvider() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimationGuide />
    </ThemeProvider>
  )
}
