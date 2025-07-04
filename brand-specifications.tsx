"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Copy, Check, Palette, Type, Layout, Download } from "lucide-react"

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

interface ColorSpec {
  name: string
  hex: string
  rgb: string
  hsl: string
  usage: string
  contrast?: string
}

interface BrandSpec {
  colors: {
    primary: ColorSpec[]
    secondary: ColorSpec[]
    neutral: ColorSpec[]
    semantic: ColorSpec[]
  }
  typography: {
    primary: {
      name: string
      weights: string[]
      usage: string
      fallback: string
    }
  }
  logo: {
    variations: Array<{
      name: string
      usage: string
      minSize: string
      formats: string[]
    }>
  }
  gradients: Array<{
    name: string
    css: string
    usage: string
  }>
}

export default function BrandSpecifications() {
  const [copiedItem, setCopiedItem] = React.useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(id)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  const brandSpec: BrandSpec = {
    colors: {
      primary: [
        {
          name: "Primary Blue",
          hex: "#2563eb",
          rgb: "rgb(37, 99, 235)",
          hsl: "hsl(221, 83%, 53%)",
          usage: "Primary buttons, links, brand elements",
          contrast: "WCAG AA compliant on white backgrounds",
        },
        {
          name: "Primary Blue Dark",
          hex: "#1d4ed8",
          rgb: "rgb(29, 78, 216)",
          hsl: "hsl(221, 83%, 48%)",
          usage: "Hover states, pressed states",
          contrast: "Enhanced contrast for accessibility",
        },
        {
          name: "Primary Blue Light",
          hex: "#3b82f6",
          rgb: "rgb(59, 130, 246)",
          hsl: "hsl(217, 91%, 60%)",
          usage: "Dark mode primary, lighter contexts",
          contrast: "Optimized for dark backgrounds",
        },
      ],
      secondary: [
        {
          name: "Secondary Purple",
          hex: "#7c3aed",
          rgb: "rgb(124, 58, 237)",
          hsl: "hsl(262, 83%, 58%)",
          usage: "Secondary actions, gradients, accents",
          contrast: "WCAG AA compliant",
        },
        {
          name: "Secondary Purple Light",
          hex: "#8b5cf6",
          rgb: "rgb(139, 92, 246)",
          hsl: "hsl(262, 83%, 66%)",
          usage: "Dark mode secondary, hover states",
          contrast: "Enhanced visibility in dark mode",
        },
      ],
      neutral: [
        {
          name: "Neutral 900",
          hex: "#111827",
          rgb: "rgb(17, 24, 39)",
          hsl: "hsl(220, 39%, 11%)",
          usage: "Primary text, headings",
          contrast: "Maximum contrast for readability",
        },
        {
          name: "Neutral 600",
          hex: "#4b5563",
          rgb: "rgb(75, 85, 99)",
          hsl: "hsl(220, 13%, 34%)",
          usage: "Secondary text, labels",
          contrast: "WCAG AA compliant for body text",
        },
        {
          name: "Neutral 400",
          hex: "#9ca3af",
          rgb: "rgb(156, 163, 175)",
          hsl: "hsl(220, 9%, 65%)",
          usage: "Placeholder text, disabled states",
          contrast: "Subtle text, meets WCAG AA for large text",
        },
        {
          name: "Neutral 200",
          hex: "#e5e7eb",
          rgb: "rgb(229, 231, 235)",
          hsl: "hsl(220, 13%, 91%)",
          usage: "Borders, dividers",
          contrast: "Subtle separation elements",
        },
        {
          name: "Neutral 50",
          hex: "#f9fafb",
          rgb: "rgb(249, 250, 251)",
          hsl: "hsl(220, 14%, 98%)",
          usage: "Background, cards",
          contrast: "Minimal contrast for backgrounds",
        },
      ],
      semantic: [
        {
          name: "Success Green",
          hex: "#059669",
          rgb: "rgb(5, 150, 105)",
          hsl: "hsl(160, 84%, 39%)",
          usage: "Success states, positive feedback",
          contrast: "WCAG AA compliant",
        },
        {
          name: "Warning Orange",
          hex: "#d97706",
          rgb: "rgb(217, 119, 6)",
          hsl: "hsl(32, 95%, 44%)",
          usage: "Warnings, caution states",
          contrast: "High visibility for alerts",
        },
        {
          name: "Error Red",
          hex: "#dc2626",
          rgb: "rgb(220, 38, 38)",
          hsl: "hsl(0, 84%, 60%)",
          usage: "Errors, destructive actions",
          contrast: "Maximum attention for critical states",
        },
      ],
    },
    typography: {
      primary: {
        name: "Inter",
        weights: ["400 (Regular)", "500 (Medium)", "600 (Semibold)", "700 (Bold)"],
        usage: "All text content, UI elements, optimal for digital interfaces",
        fallback: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      },
    },
    logo: {
      variations: [
        {
          name: "Primary Logo",
          usage: "Headers, main branding, marketing materials",
          minSize: "120px width",
          formats: ["SVG", "PNG", "WebP"],
        },
        {
          name: "Icon Only",
          usage: "Favicons, app icons, small spaces",
          minSize: "16px width",
          formats: ["SVG", "PNG", "ICO"],
        },
        {
          name: "Wordmark",
          usage: "Text-heavy layouts, minimal applications",
          minSize: "80px width",
          formats: ["SVG", "PNG"],
        },
      ],
    },
    gradients: [
      {
        name: "Primary Brand Gradient",
        css: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
        usage: "Primary buttons, hero sections, brand elements",
      },
      {
        name: "Primary Brand Gradient (Dark Mode)",
        css: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        usage: "Dark mode primary elements, enhanced visibility",
      },
      {
        name: "Background Gradient (Light)",
        css: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        usage: "Page backgrounds, subtle overlays",
      },
      {
        name: "Background Gradient (Dark)",
        css: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        usage: "Dark mode backgrounds, depth creation",
      },
      {
        name: "Card Gradient (Light)",
        css: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
        usage: "Card backgrounds, content areas",
      },
      {
        name: "Card Gradient (Dark)",
        css: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        usage: "Dark mode cards, elevated surfaces",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <GavelIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">told.io</h1>
                <p className="text-sm text-muted-foreground">Brand Specifications</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Download className="w-4 h-4 mr-2" />
              Download Assets
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Brand Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">told.io Brand Specifications</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete brand guidelines including colors, typography, logo usage, and implementation details for the
              told.io debate platform.
            </p>
          </div>

          {/* Logo Showcase */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layout className="w-5 h-5" />
                Logo Variations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Primary Logo */}
                <div className="text-center p-6 border rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <GavelIcon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">told.io</span>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Primary Logo</h4>
                  <p className="text-sm text-muted-foreground">Full logo with icon and wordmark</p>
                </div>

                {/* Icon Only */}
                <div className="text-center p-6 border rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <GavelIcon className="w-9 h-9 text-white" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Icon Only</h4>
                  <p className="text-sm text-muted-foreground">Gavel icon for small spaces</p>
                </div>

                {/* Wordmark */}
                <div className="text-center p-6 border rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">told.io</span>
                  </div>
                  <h4 className="font-semibold mb-2">Wordmark</h4>
                  <p className="text-sm text-muted-foreground">Text-only version</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Color Palette
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Primary Colors */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Primary Colors</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {brandSpec.colors.primary.map((color, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden bg-white dark:bg-slate-800">
                      <div className="h-24 w-full" style={{ backgroundColor: color.hex }} />
                      <div className="p-4">
                        <h4 className="font-semibold mb-2">{color.name}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">HEX</span>
                            <button
                              onClick={() => copyToClipboard(color.hex, `${color.name}-hex`)}
                              className="font-mono text-xs bg-muted px-2 py-1 rounded hover:bg-muted/80 flex items-center gap-1"
                            >
                              {color.hex}
                              {copiedItem === `${color.name}-hex` ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">RGB</span>
                            <button
                              onClick={() => copyToClipboard(color.rgb, `${color.name}-rgb`)}
                              className="font-mono text-xs bg-muted px-2 py-1 rounded hover:bg-muted/80 flex items-center gap-1"
                            >
                              {color.rgb}
                              {copiedItem === `${color.name}-rgb` ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">{color.usage}</p>
                        {color.contrast && (
                          <Badge variant="outline" className="mt-2 text-xs">
                            {color.contrast}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Secondary Colors */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Secondary Colors</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {brandSpec.colors.secondary.map((color, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden bg-white dark:bg-slate-800">
                      <div className="h-24 w-full" style={{ backgroundColor: color.hex }} />
                      <div className="p-4">
                        <h4 className="font-semibold mb-2">{color.name}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">HEX</span>
                            <button
                              onClick={() => copyToClipboard(color.hex, `${color.name}-hex`)}
                              className="font-mono text-xs bg-muted px-2 py-1 rounded hover:bg-muted/80 flex items-center gap-1"
                            >
                              {color.hex}
                              {copiedItem === `${color.name}-hex` ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">{color.usage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Semantic Colors */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Semantic Colors</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {brandSpec.colors.semantic.map((color, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden bg-white dark:bg-slate-800">
                      <div className="h-24 w-full" style={{ backgroundColor: color.hex }} />
                      <div className="p-4">
                        <h4 className="font-semibold mb-2">{color.name}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">HEX</span>
                            <button
                              onClick={() => copyToClipboard(color.hex, `${color.name}-hex`)}
                              className="font-mono text-xs bg-muted px-2 py-1 rounded hover:bg-muted/80 flex items-center gap-1"
                            >
                              {color.hex}
                              {copiedItem === `${color.name}-hex` ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">{color.usage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="w-5 h-5" />
                Typography
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Primary Typeface: Inter</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Font Weights</h4>
                      <div className="space-y-2">
                        {brandSpec.typography.primary.weights.map((weight, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                            <span className="text-sm">{weight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Fallback Stack</h4>
                      <code className="text-xs p-3 bg-muted rounded block">
                        {brandSpec.typography.primary.fallback}
                      </code>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">{brandSpec.typography.primary.usage}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Typography Scale</h4>
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                      <span className="text-5xl font-bold">Aa</span>
                      <div>
                        <div className="font-semibold">Display (48px)</div>
                        <div className="text-sm text-muted-foreground">Hero headings, major titles</div>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-3xl font-bold">Aa</span>
                      <div>
                        <div className="font-semibold">Heading 1 (30px)</div>
                        <div className="text-sm text-muted-foreground">Page titles, section headers</div>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-xl font-semibold">Aa</span>
                      <div>
                        <div className="font-semibold">Heading 2 (20px)</div>
                        <div className="text-sm text-muted-foreground">Subsection headers</div>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-base font-medium">Aa</span>
                      <div>
                        <div className="font-semibold">Body (16px)</div>
                        <div className="text-sm text-muted-foreground">Main content, paragraphs</div>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm">Aa</span>
                      <div>
                        <div className="font-semibold">Small (14px)</div>
                        <div className="text-sm text-muted-foreground">Captions, metadata, labels</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gradients */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Brand Gradients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {brandSpec.gradients.map((gradient, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden bg-white dark:bg-slate-800">
                    <div className="h-16 w-full" style={{ background: gradient.css }} />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{gradient.name}</h4>
                        <button
                          onClick={() => copyToClipboard(gradient.css, `gradient-${index}`)}
                          className="text-xs bg-muted px-2 py-1 rounded hover:bg-muted/80 flex items-center gap-1"
                        >
                          Copy CSS
                          {copiedItem === `gradient-${index}` ? (
                            <Check className="w-3 h-3" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                      <code className="text-xs bg-muted p-2 rounded block mb-2 font-mono">{gradient.css}</code>
                      <p className="text-xs text-muted-foreground">{gradient.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Implementation Guidelines */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Implementation Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">CSS Custom Properties</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`:root {
  /* Primary Colors */
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-primary-light: #3b82f6;
  
  /* Secondary Colors */
  --color-secondary: #7c3aed;
  --color-secondary-light: #8b5cf6;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  --gradient-primary-dark: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  
  /* Typography */
  --font-family-primary: 'Inter', system-ui, -apple-system, sans-serif;
}`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Logo Usage Rules</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2 text-green-600">✓ Do's</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Use the primary logo on light backgrounds</li>
                        <li>• Maintain minimum clear space (equal to icon height)</li>
                        <li>• Use approved color variations only</li>
                        <li>• Ensure sufficient contrast for readability</li>
                        <li>• Scale proportionally to maintain aspect ratio</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2 text-red-600">✗ Don'ts</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Don't stretch or distort the logo</li>
                        <li>• Don't use unauthorized colors</li>
                        <li>• Don't place on busy backgrounds</li>
                        <li>• Don't use below minimum size requirements</li>
                        <li>• Don't add effects, shadows, or outlines</li>
                      </ul>
                    </div>
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
