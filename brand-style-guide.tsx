"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Gavel,
  Palette,
  Type,
  Layout,
  Copy,
  Check,
  Download,
  Eye,
  EyeOff,
  Moon,
  Sun,
  Monitor,
  Contrast,
} from "lucide-react"
import { useState } from "react"

export default function BrandStyleGuide() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(false)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(id)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const lightColorPalette = {
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

  const darkColorPalette = {
    primary: {
      name: "Primary Blue (Dark)",
      hex: "#3b82f6",
      rgb: "rgb(59, 130, 246)",
      hsl: "hsl(217, 91%, 60%)",
      usage: "Primary actions, links, brand elements",
    },
    secondary: {
      name: "Primary Purple (Dark)",
      hex: "#8b5cf6",
      rgb: "rgb(139, 92, 246)",
      hsl: "hsl(262, 83%, 66%)",
      usage: "Secondary actions, gradients, accents",
    },
    neutral: {
      name: "Neutral Gray (Dark)",
      hex: "#94a3b8",
      rgb: "rgb(148, 163, 184)",
      hsl: "hsl(215, 20%, 65%)",
      usage: "Text, borders, subtle backgrounds",
    },
    success: {
      name: "Success Green (Dark)",
      hex: "#10b981",
      rgb: "rgb(16, 185, 129)",
      hsl: "hsl(160, 84%, 39%)",
      usage: "Success states, positive feedback",
    },
    warning: {
      name: "Warning Orange (Dark)",
      hex: "#f59e0b",
      rgb: "rgb(245, 158, 11)",
      hsl: "hsl(43, 96%, 56%)",
      usage: "Warnings, caution states",
    },
    error: {
      name: "Error Red (Dark)",
      hex: "#ef4444",
      rgb: "rgb(239, 68, 68)",
      hsl: "hsl(0, 84%, 60%)",
      usage: "Errors, destructive actions",
    },
  }

  const darkModeBackgrounds = {
    primary: {
      name: "Primary Background",
      hex: "#0f172a",
      rgb: "rgb(15, 23, 42)",
      hsl: "hsl(222, 47%, 11%)",
      usage: "Main page background",
    },
    secondary: {
      name: "Secondary Background",
      hex: "#1e293b",
      rgb: "rgb(30, 41, 59)",
      hsl: "hsl(215, 25%, 17%)",
      usage: "Card backgrounds, elevated surfaces",
    },
    tertiary: {
      name: "Tertiary Background",
      hex: "#334155",
      rgb: "rgb(51, 65, 85)",
      hsl: "hsl(215, 25%, 27%)",
      usage: "Hover states, subtle emphasis",
    },
  }

  const currentPalette = darkMode ? darkColorPalette : lightColorPalette

  const lightGradients = [
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

  const darkGradients = [
    {
      name: "Primary Gradient (Dark)",
      css: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      usage: "Primary buttons, hero sections, brand elements",
    },
    {
      name: "Background Gradient (Dark)",
      css: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      usage: "Page backgrounds, subtle overlays",
    },
    {
      name: "Card Gradient (Dark)",
      css: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
      usage: "Card backgrounds, content areas",
    },
  ]

  const currentGradients = darkMode ? darkGradients : lightGradients

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
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white"
          : "bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <div
        className={`border-b sticky top-0 z-50 backdrop-blur-sm transition-colors duration-300 ${
          darkMode ? "bg-slate-900/90 border-slate-700" : "bg-white/90 border-gray-200"
        }`}
      >
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
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Brand Style Guide</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className={darkMode ? "border-slate-600 hover:bg-slate-800" : ""}
              >
                {darkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
                {darkMode ? "Light" : "Dark"}
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Download className="w-4 h-4 mr-2" />
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Brand Overview */}
        <section className="mb-16">
          <Card className={darkMode ? "bg-slate-800 border-slate-700" : ""}>
            <CardHeader>
              <CardTitle className="text-3xl">Brand Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Mission Statement</h3>
                <p className={`leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  told.io empowers communities to resolve debates through evidence-based discussion and collective
                  wisdom. We believe that truth emerges through respectful dialogue, factual evidence, and democratic
                  participation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Brand Values</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-blue-900/30" : "bg-blue-50"}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? "text-blue-300" : "text-blue-900"}`}>
                      Truth & Transparency
                    </h4>
                    <p className={`text-sm ${darkMode ? "text-blue-200" : "text-blue-700"}`}>
                      We prioritize facts and evidence over opinions and bias.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-purple-900/30" : "bg-purple-50"}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? "text-purple-300" : "text-purple-900"}`}>
                      Community Wisdom
                    </h4>
                    <p className={`text-sm ${darkMode ? "text-purple-200" : "text-purple-700"}`}>
                      Collective intelligence leads to better outcomes.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-green-900/30" : "bg-green-50"}`}>
                    <h4 className={`font-semibold mb-2 ${darkMode ? "text-green-300" : "text-green-900"}`}>
                      Respectful Discourse
                    </h4>
                    <p className={`text-sm ${darkMode ? "text-green-200" : "text-green-700"}`}>
                      Constructive dialogue builds understanding.
                    </p>
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
                    <Badge
                      key={trait}
                      variant="secondary"
                      className={darkMode ? "bg-slate-700 text-slate-300" : "bg-gray-100 text-gray-700"}
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Dark Mode Section */}
        <section className="mb-16">
          <Card className={darkMode ? "bg-slate-800 border-slate-700" : ""}>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Contrast className="w-8 h-8" />
                Dark Mode Design System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Theme Philosophy</h3>
                <p className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Our dark mode maintains brand consistency while providing a comfortable viewing experience in
                  low-light environments. We preserve the core brand identity through strategic color adjustments and
                  enhanced contrast ratios.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div
                    className={`p-4 border rounded-lg ${darkMode ? "bg-slate-700 border-slate-600" : "bg-white border-gray-200"}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sun className="w-5 h-5 text-yellow-500" />
                      <h4 className="font-semibold">Light Mode</h4>
                    </div>
                    <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Clean, bright interface for daytime use and high-contrast environments
                    </p>
                  </div>
                  <div
                    className={`p-4 border rounded-lg ${darkMode ? "bg-slate-700 border-slate-600" : "bg-white border-gray-200"}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Moon className="w-5 h-5 text-blue-400" />
                      <h4 className="font-semibold">Dark Mode</h4>
                    </div>
                    <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Comfortable viewing for low-light conditions while maintaining readability
                    </p>
                  </div>
                  <div
                    className={`p-4 border rounded-lg ${darkMode ? "bg-slate-700 border-slate-600" : "bg-white border-gray-200"}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Monitor className="w-5 h-5 text-gray-500" />
                      <h4 className="font-semibold">System</h4>
                    </div>
                    <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      Automatically adapts to user's system preference for seamless experience
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Dark Mode Backgrounds</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(darkModeBackgrounds).map(([key, color]) => (
                    <div key={key} className="border rounded-lg overflow-hidden bg-white">
                      <div className="h-24 w-full" style={{ backgroundColor: color.hex }} />
                      <div className="p-4">
                        <h4 className="font-semibold mb-2 text-gray-900">{color.name}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">HEX</span>
                            <button
                              onClick={() => copyToClipboard(color.hex, `${key}-hex`)}
                              className="font-mono text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1 text-gray-900"
                            >
                              {color.hex}
                              {copiedColor === `${key}-hex` ? (
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
                <h3 className="text-xl font-semibold mb-4">Accessibility Standards</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className={`p-4 border rounded-lg ${darkMode ? "border-green-700 bg-green-900/20" : "border-green-200 bg-green-50"}`}
                  >
                    <h4
                      className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? "text-green-300" : "text-green-800"}`}
                    >
                      <Check className="w-4 h-4" />
                      WCAG Compliance
                    </h4>
                    <ul className={`text-sm space-y-1 ${darkMode ? "text-green-200" : "text-green-700"}`}>
                      <li>• Minimum 4.5:1 contrast ratio for normal text</li>
                      <li>• Minimum 3:1 contrast ratio for large text</li>
                      <li>• Enhanced contrast for interactive elements</li>
                      <li>• Color-blind friendly palette</li>
                      <li>• Focus indicators clearly visible</li>
                    </ul>
                  </div>
                  <div
                    className={`p-4 border rounded-lg ${darkMode ? "border-blue-700 bg-blue-900/20" : "border-blue-200 bg-blue-50"}`}
                  >
                    <h4
                      className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? "text-blue-300" : "text-blue-800"}`}
                    >
                      <Eye className="w-4 h-4" />
                      Visual Comfort
                    </h4>
                    <ul className={`text-sm space-y-1 ${darkMode ? "text-blue-200" : "text-blue-700"}`}>
                      <li>• Reduced eye strain in low-light conditions</li>
                      <li>• Smooth transitions between themes</li>
                      <li>• Consistent visual hierarchy</li>
                      <li>• Appropriate brightness levels</li>
                      <li>• Readable typography at all sizes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Logo & Visual Identity */}
        <section className="mb-16">
          <Card className={darkMode ? "bg-slate-800 border-slate-700" : ""}>
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
                    <div
                      key={index}
                      className={`text-center p-6 border rounded-lg ${darkMode ? "bg-slate-700 border-slate-600" : "bg-white border-gray-200"}`}
                    >
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
                      <p className={`text-sm mb-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        {logo.description}
                      </p>
                      <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        Min size: {logo.minSize}
                      </p>
                      <p className={`text-xs mt-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{logo.usage}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dark Mode Logo Guidelines */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Dark Mode Logo Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className={`p-6 rounded-lg ${darkMode ? "bg-slate-900" : "bg-gray-900"}`}>
                    <h4 className="font-semibold text-white mb-4">Logo on Dark Backgrounds</h4>
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Gavel className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          told.io
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">
                      Use slightly brighter gradient colors for better visibility on dark backgrounds
                    </p>
                  </div>
                  <div className={`p-6 rounded-lg ${darkMode ? "bg-white" : "bg-white"}`}>
                    <h4 className="font-semibold text-gray-900 mb-4">Logo on Light Backgrounds</h4>
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                          <Gavel className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          told.io
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Use standard gradient colors for optimal contrast on light backgrounds
                    </p>
                  </div>
                </div>
              </div>

              {/* Logo Usage Guidelines */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Logo Usage Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className={`p-4 border rounded-lg ${darkMode ? "border-green-700 bg-green-900/20" : "border-green-200 bg-green-50"}`}
                  >
                    <h4
                      className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? "text-green-300" : "text-green-800"}`}
                    >
                      <Eye className="w-4 h-4" />
                      Do's
                    </h4>
                    <ul className={`text-sm space-y-1 ${darkMode ? "text-green-200" : "text-green-700"}`}>
                      <li>• Use the primary logo on light backgrounds</li>
                      <li>• Maintain minimum clear space (equal to the icon height)</li>
                      <li>• Use approved color variations only</li>
                      <li>• Ensure sufficient contrast for readability</li>
                      <li>• Scale proportionally to maintain aspect ratio</li>
                      <li>• Adjust gradient brightness for dark themes</li>
                    </ul>
                  </div>
                  <div
                    className={`p-4 border rounded-lg ${darkMode ? "border-red-700 bg-red-900/20" : "border-red-200 bg-red-50"}`}
                  >
                    <h4
                      className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? "text-red-300" : "text-red-800"}`}
                    >
                      <EyeOff className="w-4 h-4" />
                      Don'ts
                    </h4>
                    <ul className={`text-sm space-y-1 ${darkMode ? "text-red-200" : "text-red-700"}`}>
                      <li>• Don't stretch or distort the logo</li>
                      <li>• Don't use unauthorized colors</li>
                      <li>• Don't place on busy backgrounds</li>
                      <li>• Don't use below minimum size requirements</li>
                      <li>• Don't add effects, shadows, or outlines</li>
                      <li>• Don't ignore theme-specific adjustments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <Card className={darkMode ? "bg-slate-800 border-slate-700" : ""}>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Palette className="w-8 h-8" />
                Color Palette
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{darkMode ? "Dark Mode Colors" : "Light Mode Colors"}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className={darkMode ? "text-gray-400" : "text-gray-600"}>Toggle to see:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDarkMode(!darkMode)}
                    className={darkMode ? "border-slate-600 hover:bg-slate-700" : ""}
                  >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(currentPalette).map(([key, color]) => (
                  <div key={key} className="border rounded-lg overflow-hidden bg-white">
                    <div className="h-24 w-full" style={{ backgroundColor: color.hex }} />
                    <div className="p-4">
                      <h4 className="font-semibold mb-2 text-gray-900">{color.name}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">HEX</span>
                          <button
                            onClick={() => copyToClipboard(color.hex, `${key}-hex`)}
                            className="font-mono text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1 text-gray-900"
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
                            className="font-mono text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1 text-gray-900"
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
                            className="font-mono text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1 text-gray-900"
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

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {darkMode ? "Dark Mode Gradients" : "Light Mode Gradients"}
                </h3>
                <div className="space-y-4">
                  {currentGradients.map((gradient, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden bg-white">
                      <div className="h-16 w-full" style={{ background: gradient.css }} />
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{gradient.name}</h4>
                          <button
                            onClick={() => copyToClipboard(gradient.css, `gradient-${index}`)}
                            className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1 text-gray-900"
                          >
                            Copy CSS
                            {copiedColor === `gradient-${index}` ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                        <code className="text-xs bg-gray-50 p-2 rounded block mb-2 font-mono text-gray-900">
                          {gradient.css}
                        </code>
                        <p className="text-xs text-gray-500">{gradient.usage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Color Usage Matrix</h3>
                <div className="overflow-x-auto">
                  <table
                    className={`w-full text-sm border rounded-lg ${darkMode ? "border-slate-600" : "border-gray-200"}`}
                  >
                    <thead className={darkMode ? "bg-slate-700" : "bg-gray-50"}>
                      <tr>
                        <th className="text-left p-3 font-semibold">Element</th>
                        <th className="text-left p-3 font-semibold">Light Mode</th>
                        <th className="text-left p-3 font-semibold">Dark Mode</th>
                        <th className="text-left p-3 font-semibold">Usage</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${darkMode ? "divide-slate-600" : "divide-gray-200"}`}>
                      <tr>
                        <td className="p-3 font-medium">Primary Text</td>
                        <td className="p-3">#1f2937</td>
                        <td className="p-3">#f8fafc</td>
                        <td className="p-3">Main content, headings</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Secondary Text</td>
                        <td className="p-3">#64748b</td>
                        <td className="p-3">#94a3b8</td>
                        <td className="p-3">Descriptions, metadata</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Background</td>
                        <td className="p-3">#ffffff</td>
                        <td className="p-3">#0f172a</td>
                        <td className="p-3">Page backgrounds</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Surface</td>
                        <td className="p-3">#f8fafc</td>
                        <td className="p-3">#1e293b</td>
                        <td className="p-3">Cards, panels</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Border</td>
                        <td className="p-3">#e2e8f0</td>
                        <td className="p-3">#334155</td>
                        <td className="p-3">Dividers, outlines</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <Card className={darkMode ? "bg-slate-800 border-slate-700" : ""}>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Type className="w-8 h-8" />
                Typography
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Primary Typeface</h3>
                <div
                  className={`border rounded-lg p-6 ${darkMode ? "bg-slate-700 border-slate-600" : "bg-white border-gray-200"}`}
                >
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold mb-2">Inter</h4>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                      Modern, clean, and highly legible sans-serif typeface
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold mb-2">Available Weights</h5>
                      <ul className={`space-y-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        {typography.primary.weights.map((weight) => (
                          <li key={weight}>• {weight}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Fallback Stack</h5>
                      <code
                        className={`text-xs p-2 rounded block ${darkMode ? "bg-slate-600 text-gray-300" : "bg-gray-100 text-gray-900"}`}
                      >
                        {typography.primary.fallback}
                      </code>
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
                            <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                              Hero headings, major titles
                            </div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-4">
                          <span className="text-3xl font-bold">Aa</span>
                          <div>
                            <div className="font-semibold">Heading 1 (30px)</div>
                            <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                              Page titles, section headers
                            </div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-4">
                          <span className="text-xl font-semibold">Aa</span>
                          <div>
                            <div className="font-semibold">Heading 2 (20px)</div>
                            <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                              Subsection headers
                            </div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-4">
                          <span className="text-base font-medium">Aa</span>
                          <div>
                            <div className="font-semibold">Body (16px)</div>
                            <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                              Main content, paragraphs
                            </div>
                          </div>
                        </div>
                        <div className="flex items-baseline gap-4">
                          <span className="text-sm">Aa</span>
                          <div>
                            <div className="font-semibold">Small (14px)</div>
                            <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                              Captions, metadata, labels
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Dark Mode Typography Adjustments</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className={`p-4 border rounded-lg ${darkMode ? "border-blue-700 bg-blue-900/20" : "border-blue-200 bg-blue-50"}`}
                  >
                    <h4 className={`font-semibold mb-3 ${darkMode ? "text-blue-300" : "text-blue-800"}`}>
                      Contrast Enhancements
                    </h4>
                    <ul className={`text-sm space-y-1 ${darkMode ? "text-blue-200" : "text-blue-700"}`}>
                      <li>• Increased letter spacing for better readability</li>
                      <li>• Slightly heavier font weights for clarity</li>
                      <li>• Enhanced line height for comfortable reading</li>
                      <li>• Optimized color contrast ratios</li>
                    </ul>
                  </div>
                  <div
                    className={`p-4 border rounded-lg ${darkMode ? "border-purple-700 bg-purple-900/20" : "border-purple-200 bg-purple-50"}`}
                  >
                    <h4 className={`font-semibold mb-3 ${darkMode ? "text-purple-300" : "text-purple-800"}`}>
                      Visual Hierarchy
                    </h4>
                    <ul className={`text-sm space-y-1 ${darkMode ? "text-purple-200" : "text-purple-700"}`}>
                      <li>• Maintained relative contrast between text levels</li>
                      <li>• Preserved brand gradient for headings</li>
                      <li>• Consistent spacing and alignment</li>
                      <li>• Clear distinction between interactive elements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Implementation Guidelines */}
        <section className="mb-16">
          <Card className={darkMode ? "bg-slate-800 border-slate-700" : ""}>
            <CardHeader>
              <CardTitle className="text-3xl">Dark Mode Implementation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">CSS Custom Properties</h3>
                <div className={`p-4 rounded-lg ${darkMode ? "bg-slate-900" : "bg-gray-50"}`}>
                  <pre className={`text-sm overflow-x-auto ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
                    {`:root {
  /* Light mode colors */
  --color-primary: #2563eb;
  --color-secondary: #7c3aed;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text-primary: #1f2937;
  --color-text-secondary: #64748b;
  --color-border: #e2e8f0;
}

[data-theme="dark"] {
  /* Dark mode colors */
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text-primary: #f8fafc;
  --color-text-secondary: #94a3b8;
  --color-border: #334155;
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Tailwind CSS Configuration</h3>
                <div className={`p-4 rounded-lg ${darkMode ? "bg-slate-900" : "bg-gray-50"}`}>
                  <pre className={`text-sm overflow-x-auto ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
                    {`// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' for system preference
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#7c3aed',
          dark: '#8b5cf6',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#0f172a',
        },
        surface: {
          DEFAULT: '#f8fafc',
          dark: '#1e293b',
        }
      }
    }
  }
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">React Implementation</h3>
                <div className={`p-4 rounded-lg ${darkMode ? "bg-slate-900" : "bg-gray-50"}`}>
                  <pre className={`text-sm overflow-x-auto ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
                    {`// Theme context and hook
const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
  }, [theme])
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Testing Checklist</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className={`p-4 border rounded-lg ${darkMode ? "border-green-700 bg-green-900/20" : "border-green-200 bg-green-50"}`}
                  >
                    <h4 className={`font-semibold mb-3 ${darkMode ? "text-green-300" : "text-green-800"}`}>
                      Visual Testing
                    </h4>
                    <ul className={`text-sm space-y-1 ${darkMode ? "text-green-200" : "text-green-700"}`}>
                      <li>• Test all components in both themes</li>
                      <li>• Verify contrast ratios meet WCAG standards</li>
                      <li>• Check focus states and interactive elements</li>
                      <li>• Validate brand consistency across themes</li>
                      <li>• Test on different screen sizes and devices</li>
                    </ul>
                  </div>
                  <div
                    className={`p-4 border rounded-lg ${darkMode ? "border-blue-700 bg-blue-900/20" : "border-blue-200 bg-blue-50"}`}
                  >
                    <h4 className={`font-semibold mb-3 ${darkMode ? "text-blue-300" : "text-blue-800"}`}>
                      Functional Testing
                    </h4>
                    <ul className={`text-sm space-y-1 ${darkMode ? "text-blue-200" : "text-blue-700"}`}>
                      <li>• Theme switching works smoothly</li>
                      <li>• System preference detection functions</li>
                      <li>• Theme persistence across sessions</li>
                      <li>• No flash of unstyled content (FOUC)</li>
                      <li>• Performance impact is minimal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <div className={`text-center py-8 border-t ${darkMode ? "border-slate-700" : "border-gray-200"}`}>
          <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            This brand guide ensures consistency across all told.io touchpoints and communications in both light and
            dark modes.
          </p>
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Last updated: January 2024 • Version 2.0 (Dark Mode Extended)
          </p>
        </div>
      </div>
    </div>
  )
}
