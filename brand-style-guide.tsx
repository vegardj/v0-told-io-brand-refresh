"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Gavel,
  Palette,
  Type,
  Layout,
  MessageSquare,
  Users,
  TrendingUp,
  Copy,
  Check,
  Download,
  Eye,
  EyeOff,
  Volume2,
} from "lucide-react"
import { useState } from "react"

export default function BrandStyleGuide() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(id)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const colorPalette = {
    primary: {
      name: "Primary Blue",
      hex: "#2563eb",
      rgb: "rgb(37, 99, 235)",
      hsl: "hsl(221, 83%, 53%)",
      usage: "Primary actions, links, brand elements",
    },
    secondary: {
      name: "Primary Purple",
      hex: "#7c3aed",
      rgb: "rgb(124, 58, 237)",
      hsl: "hsl(262, 83%, 58%)",
      usage: "Secondary actions, gradients, accents",
    },
    neutral: {
      name: "Neutral Gray",
      hex: "#64748b",
      rgb: "rgb(100, 116, 139)",
      hsl: "hsl(215, 16%, 47%)",
      usage: "Text, borders, subtle backgrounds",
    },
    success: {
      name: "Success Green",
      hex: "#059669",
      rgb: "rgb(5, 150, 105)",
      hsl: "hsl(160, 84%, 39%)",
      usage: "Success states, positive feedback",
    },
    warning: {
      name: "Warning Orange",
      hex: "#d97706",
      rgb: "rgb(217, 119, 6)",
      hsl: "hsl(32, 95%, 44%)",
      usage: "Warnings, caution states",
    },
    error: {
      name: "Error Red",
      hex: "#dc2626",
      rgb: "rgb(220, 38, 38)",
      hsl: "hsl(0, 84%, 60%)",
      usage: "Errors, destructive actions",
    },
  }

  const gradients = [
    {
      name: "Primary Gradient",
      css: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
      usage: "Primary buttons, hero sections, brand elements",
    },
    {
      name: "Background Gradient",
      css: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      usage: "Page backgrounds, subtle overlays",
    },
    {
      name: "Card Gradient",
      css: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
      usage: "Card backgrounds, content areas",
    },
  ]

  const typography = {
    primary: {
      name: "Inter",
      weights: ["400 (Regular)", "500 (Medium)", "600 (Semibold)", "700 (Bold)"],
      usage: "All text content, UI elements",
      fallback: "system-ui, -apple-system, sans-serif",
    },
  }

  const logoVariations = [
    {
      name: "Primary Logo",
      description: "Full logo with icon and text",
      usage: "Headers, main branding, large applications",
      minSize: "120px width",
    },
    {
      name: "Icon Only",
      description: "Gavel icon in gradient container",
      usage: "Favicons, small spaces, social media profiles",
      minSize: "24px width",
    },
    {
      name: "Text Only",
      description: "told.io wordmark with gradient",
      usage: "Text-heavy layouts, minimal applications",
      minSize: "80px width",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50 backdrop-blur-sm bg-white/90">
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
                <p className="text-sm text-gray-500">Brand Style Guide</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Download className="w-4 h-4 mr-2" />
              Download Guide
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Brand Overview */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Brand Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Mission Statement</h3>
                <p className="text-gray-700 leading-relaxed">
                  told.io empowers communities to resolve debates through evidence-based discussion and collective
                  wisdom. We believe that truth emerges through respectful dialogue, factual evidence, and democratic
                  participation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Brand Values</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Truth & Transparency</h4>
                    <p className="text-sm text-blue-700">We prioritize facts and evidence over opinions and bias.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Community Wisdom</h4>
                    <p className="text-sm text-purple-700">Collective intelligence leads to better outcomes.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Respectful Discourse</h4>
                    <p className="text-sm text-green-700">Constructive dialogue builds understanding.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Brand Personality</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Authoritative",
                    "Fair",
                    "Intelligent",
                    "Trustworthy",
                    "Engaging",
                    "Professional",
                    "Accessible",
                    "Democratic",
                  ].map((trait) => (
                    <Badge key={trait} variant="secondary" className="bg-gray-100 text-gray-700">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Logo & Visual Identity */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Layout className="w-8 h-8" />
                Logo & Visual Identity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Logo Variations */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Logo Variations</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {logoVariations.map((logo, index) => (
                    <div key={index} className="text-center p-6 border rounded-lg bg-white">
                      <div className="mb-4 flex justify-center">
                        {index === 0 && (
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                              <Gavel className="w-7 h-7 text-white" />
                            </div>
                            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              told.io
                            </span>
                          </div>
                        )}
                        {index === 1 && (
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Gavel className="w-9 h-9 text-white" />
                          </div>
                        )}
                        {index === 2 && (
                          <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            told.io
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold mb-2">{logo.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{logo.description}</p>
                      <p className="text-xs text-gray-500">Min size: {logo.minSize}</p>
                      <p className="text-xs text-gray-500 mt-1">{logo.usage}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Logo Usage Guidelines */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Logo Usage Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Do's
                    </h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Use the primary logo on light backgrounds</li>
                      <li>• Maintain minimum clear space (equal to the icon height)</li>
                      <li>• Use approved color variations only</li>
                      <li>• Ensure sufficient contrast for readability</li>
                      <li>• Scale proportionally to maintain aspect ratio</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                      <EyeOff className="w-4 h-4" />
                      Don'ts
                    </h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Don't stretch or distort the logo</li>
                      <li>• Don't use unauthorized colors</li>
                      <li>• Don't place on busy backgrounds</li>
                      <li>• Don't use below minimum size requirements</li>
                      <li>• Don't add effects, shadows, or outlines</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Palette className="w-8 h-8" />
                Color Palette
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Primary Colors</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(colorPalette).map(([key, color]) => (
                    <div key={key} className="border rounded-lg overflow-hidden bg-white">
                      <div className="h-24 w-full" style={{ backgroundColor: color.hex }} />
                      <div className="p-4">
                        <h4 className="font-semibold mb-2">{color.name}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">HEX</span>
                            <button
                              onClick={() => copyToClipboard(color.hex, `${key}-hex`)}
                              className="font-mono text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
                            >
                              {color.hex}
                              {copiedColor === `${key}-hex` ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">RGB</span>
                            <button
                              onClick={() => copyToClipboard(color.rgb, `${key}-rgb`)}
                              className="font-mono text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
                            >
                              {color.rgb}
                              {copiedColor === `${key}-rgb` ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">HSL</span>
                            <button
                              onClick={() => copyToClipboard(color.hsl, `${key}-hsl`)}
                              className="font-mono text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
                            >
                              {color.hsl}
                              {copiedColor === `${key}-hsl` ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-3">{color.usage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Gradients</h3>
                <div className="space-y-4">
                  {gradients.map((gradient, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden bg-white">
                      <div className="h-16 w-full" style={{ background: gradient.css }} />
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{gradient.name}</h4>
                          <button
                            onClick={() => copyToClipboard(gradient.css, `gradient-${index}`)}
                            className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
                          >
                            Copy CSS
                            {copiedColor === `gradient-${index}` ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                        <code className="text-xs bg-gray-50 p-2 rounded block mb-2 font-mono">{gradient.css}</code>
                        <p className="text-xs text-gray-500">{gradient.usage}</p>
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
              <CardTitle className="text-3xl flex items-center gap-3">
                <Type className="w-8 h-8" />
                Typography
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Primary Typeface</h3>
                <div className="border rounded-lg p-6 bg-white">
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold mb-2">Inter</h4>
                    <p className="text-gray-600">Modern, clean, and highly legible sans-serif typeface</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold mb-2">Available Weights</h5>
                      <ul className="space-y-1 text-sm">
                        {typography.primary.weights.map((weight) => (
                          <li key={weight} className="text-gray-600">
                            • {weight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Fallback Stack</h5>
                      <code className="text-xs bg-gray-100 p-2 rounded block">{typography.primary.fallback}</code>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">Typography Scale</h5>
                      <div className="space-y-3">
                        <div className="flex items-baseline gap-4">
                          <span className="text-5xl font-bold">Aa</span>
                          <div>
                            <div className="font-semibold">Display (48px)</div>
                            <div className="text-sm text-gray-600">Hero headings, major titles</div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-4">
                          <span className="text-3xl font-bold">Aa</span>
                          <div>
                            <div className="font-semibold">Heading 1 (30px)</div>
                            <div className="text-sm text-gray-600">Page titles, section headers</div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-4">
                          <span className="text-xl font-semibold">Aa</span>
                          <div>
                            <div className="font-semibold">Heading 2 (20px)</div>
                            <div className="text-sm text-gray-600">Subsection headers</div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-4">
                          <span className="text-base font-medium">Aa</span>
                          <div>
                            <div className="font-semibold">Body (16px)</div>
                            <div className="text-sm text-gray-600">Main content, paragraphs</div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-4">
                          <span className="text-sm">Aa</span>
                          <div>
                            <div className="font-semibold">Small (14px)</div>
                            <div className="text-sm text-gray-600">Captions, metadata, labels</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Voice & Tone */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Volume2 className="w-8 h-8" />
                Voice & Tone
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Brand Voice</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">We Are:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <div>
                          <strong>Authoritative but approachable</strong> - We speak with confidence while remaining
                          accessible
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <div>
                          <strong>Clear and direct</strong> - We communicate complex ideas simply and effectively
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <div>
                          <strong>Respectful and inclusive</strong> - We value all perspectives and encourage civil
                          discourse
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <div>
                          <strong>Evidence-based</strong> - We prioritize facts and data over opinions
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">We Are Not:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <div>
                          <strong>Overly casual or informal</strong> - We maintain professionalism
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <div>
                          <strong>Biased or partisan</strong> - We remain neutral and fair
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <div>
                          <strong>Condescending or elitist</strong> - We welcome all knowledge levels
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <div>
                          <strong>Aggressive or confrontational</strong> - We promote constructive dialogue
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Tone Guidelines</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700">Onboarding & Welcome</h4>
                    <p className="text-sm text-gray-600 mb-2">Warm, encouraging, helpful</p>
                    <div className="text-xs bg-blue-50 p-2 rounded">
                      "Welcome to told.io! Ready to settle some debates with facts and community wisdom?"
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-700">Debate Content</h4>
                    <p className="text-sm text-gray-600 mb-2">Neutral, factual, balanced</p>
                    <div className="text-xs bg-purple-50 p-2 rounded">
                      "Present your evidence and let the community evaluate the facts."
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-700">Success States</h4>
                    <p className="text-sm text-gray-600 mb-2">Celebratory, affirming</p>
                    <div className="text-xs bg-green-50 p-2 rounded">
                      "Great job! Your evidence helped resolve this debate."
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Writing Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Language Style</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Use active voice when possible</li>
                        <li>• Write in second person ("you") for user-facing content</li>
                        <li>• Keep sentences concise and scannable</li>
                        <li>• Use parallel structure in lists</li>
                        <li>• Avoid jargon and technical terms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Punctuation & Grammar</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Use sentence case for headings</li>
                        <li>• Oxford comma in lists</li>
                        <li>• Periods in complete sentences</li>
                        <li>• No periods in UI labels or buttons</li>
                        <li>• Use em dashes (—) for breaks in thought</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Content Principles</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Lead with the most important information</li>
                        <li>• Provide context for complex topics</li>
                        <li>• Use examples to illustrate points</li>
                        <li>• Include clear calls-to-action</li>
                        <li>• Test content with real users</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Accessibility</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Write descriptive link text</li>
                        <li>• Use clear, descriptive headings</li>
                        <li>• Provide alt text for images</li>
                        <li>• Ensure sufficient color contrast</li>
                        <li>• Test with screen readers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Iconography */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <MessageSquare className="w-8 h-8" />
                Iconography
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Icon System</h3>
                <p className="text-gray-600 mb-6">
                  We use Lucide React icons for consistency and clarity. Icons should be simple, recognizable, and
                  aligned with our brand values.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { icon: Gavel, name: "Gavel", usage: "Primary brand icon, decisions, authority" },
                    { icon: MessageSquare, name: "Message Square", usage: "Comments, discussions, debates" },
                    { icon: Users, name: "Users", usage: "Community, participants, groups" },
                    { icon: TrendingUp, name: "Trending Up", usage: "Popular content, growth, success" },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 border rounded-lg bg-white">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.usage}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Icon Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3">Best Practices</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Use 16px, 20px, or 24px sizes for UI elements</li>
                      <li>• Maintain consistent stroke width (1.5-2px)</li>
                      <li>• Use semantic colors (blue for primary, gray for secondary)</li>
                      <li>• Ensure icons are accessible with proper labels</li>
                      <li>• Test icon recognition with users</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-3">Avoid</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Mixing different icon styles or weights</li>
                      <li>• Using icons without clear meaning</li>
                      <li>• Overusing decorative icons</li>
                      <li>• Icons smaller than 16px for interactive elements</li>
                      <li>• Custom icons unless absolutely necessary</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Brand Applications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Digital Applications</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-white">
                    <h4 className="font-semibold mb-2">Website</h4>
                    <p className="text-sm text-gray-600 mb-3">Primary brand touchpoint</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Use primary logo in header</li>
                      <li>• Apply brand colors consistently</li>
                      <li>• Maintain typography hierarchy</li>
                      <li>• Follow voice and tone guidelines</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-white">
                    <h4 className="font-semibold mb-2">Social Media</h4>
                    <p className="text-sm text-gray-600 mb-3">Community engagement</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Use icon-only logo for profiles</li>
                      <li>• Consistent visual style</li>
                      <li>• Brand-appropriate tone</li>
                      <li>• Engage respectfully</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-white">
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-sm text-gray-600 mb-3">Direct communication</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Include logo in header</li>
                      <li>• Use brand colors sparingly</li>
                      <li>• Clear, actionable content</li>
                      <li>• Professional tone</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Content Guidelines</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg bg-blue-50">
                    <h4 className="font-semibold text-blue-900 mb-2">Debate Content</h4>
                    <p className="text-sm text-blue-700">
                      Maintain neutrality, encourage evidence-based arguments, and foster respectful dialogue. Use clear
                      formatting and provide context for complex topics.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg bg-purple-50">
                    <h4 className="font-semibold text-purple-900 mb-2">Community Guidelines</h4>
                    <p className="text-sm text-purple-700">
                      Promote inclusive participation, set clear expectations for behavior, and provide resources for
                      constructive debate techniques.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg bg-green-50">
                    <h4 className="font-semibold text-green-900 mb-2">Educational Content</h4>
                    <p className="text-sm text-green-700">
                      Create helpful guides, tutorials, and resources that empower users to participate effectively in
                      debates and fact-checking.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <div className="text-center py-8 border-t">
          <p className="text-gray-600 mb-4">
            This brand guide ensures consistency across all told.io touchpoints and communications.
          </p>
          <p className="text-sm text-gray-500">Last updated: January 2024 • Version 1.0</p>
        </div>
      </div>
    </div>
  )
}
