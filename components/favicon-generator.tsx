"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Check, Copy } from "lucide-react"

export default function FaviconGenerator() {
  const [copied, setCopied] = useState<string | null>(null)

  const faviconSizes = [
    { name: "favicon.ico", size: "16x16, 32x32", description: "Classic favicon for browsers" },
    { name: "favicon-16x16.png", size: "16x16", description: "Small browser tab icon" },
    { name: "favicon-32x32.png", size: "32x32", description: "Standard browser tab icon" },
    { name: "apple-touch-icon.png", size: "180x180", description: "iOS home screen icon" },
    { name: "android-chrome-192x192.png", size: "192x192", description: "Android home screen icon" },
    { name: "android-chrome-512x512.png", size: "512x512", description: "High-res Android icon" },
    { name: "safari-pinned-tab.svg", size: "Vector", description: "Safari pinned tab icon" },
  ]

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const generateFaviconCode = (size: number) => {
    return `
// Generate ${size}x${size} favicon
export const size = { width: ${size}, height: ${size} }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '${size > 64 ? Math.floor(size * 0.15) : 6}px',
        }}
      >
        <svg
          width="${Math.floor(size * 0.6)}"
          height="${Math.floor(size * 0.6)}"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="${size > 64 ? "1.5" : "2.5"}"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m14.5 12.5-8 8a2.119 2.119 0 0 1-3-3l8-8" />
          <path d="m16 16 6-6" />
          <path d="m8 8 6-6" />
          <path d="m9 7 8 8" />
          <path d="m21 11-8-8" />
        </svg>
      </div>
    ),
    { width: ${size}, height: ${size} }
  )
}`
  }

  const safariSvgCode = `
<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.67 8.33L3.33 14.67C2.6 15.4 1.4 15.4 0.67 14.67C-0.06 13.94 -0.06 12.74 0.67 12.01L7.01 5.67L9.67 8.33Z" fill="#000"/>
  <path d="M10.67 10.67L14.67 6.67L12.01 4.01L8.01 8.01L10.67 10.67Z" fill="#000"/>
  <path d="M5.33 5.33L9.33 1.33L6.67 -1.33L2.67 2.67L5.33 5.33Z" fill="#000"/>
  <path d="M6.01 4.67L14.01 12.67L11.35 15.33L3.35 7.33L6.01 4.67Z" fill="#000"/>
  <path d="M14 7.33L6 -0.67L8.66 -3.33L16.66 4.67L14 7.33Z" fill="#000"/>
</svg>`

  const htmlMetaTags = `
<!-- Favicon Meta Tags -->
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16">
<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#2563eb">
<meta name="msapplication-TileColor" content="#2563eb">
<meta name="msapplication-config" content="/browserconfig.xml">`

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            told.io Favicon Generator
          </h1>
          <p className="text-gray-600 text-lg">Complete set of favicon files and code for your debate platform</p>
        </div>

        {/* Preview Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m14.5 12.5-8 8a2.119 2.119 0 0 1-3-3l8-8" />
                  <path d="m16 16 6-6" />
                  <path d="m8 8 6-6" />
                  <path d="m9 7 8 8" />
                  <path d="m21 11-8-8" />
                </svg>
              </div>
              Favicon Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {[16, 32, 48, 64, 128, 192, 512].map((size) => (
                <div key={size} className="text-center">
                  <div
                    className="mx-auto mb-2 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white"
                    style={{
                      width: Math.min(size, 64),
                      height: Math.min(size, 64),
                      borderRadius: size > 64 ? Math.floor(size * 0.15) : 6,
                    }}
                  >
                    <svg
                      width={Math.floor(Math.min(size, 64) * 0.6)}
                      height={Math.floor(Math.min(size, 64) * 0.6)}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={size > 64 ? "1.5" : "2.5"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m14.5 12.5-8 8a2.119 2.119 0 0 1-3-3l8-8" />
                      <path d="m16 16 6-6" />
                      <path d="m8 8 6-6" />
                      <path d="m9 7 8 8" />
                      <path d="m21 11-8-8" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium">
                    {size}×{size}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Required Files */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Required Favicon Files</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {faviconSizes.map((favicon) => (
                <div key={favicon.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-mono text-sm font-medium">{favicon.name}</div>
                    <div className="text-sm text-gray-600">{favicon.description}</div>
                    <div className="text-xs text-gray-500">Size: {favicon.size}</div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Generate
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Code Generation */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Next.js Icon Generation Code</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">app/icon.tsx (32×32)</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(generateFaviconCode(32), "icon-32")}
                    >
                      {copied === "icon-32" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <pre className="text-xs overflow-x-auto">
                    <code>{generateFaviconCode(32).trim()}</code>
                  </pre>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">app/apple-icon.tsx (180×180)</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(generateFaviconCode(180), "apple-icon")}
                    >
                      {copied === "apple-icon" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <pre className="text-xs overflow-x-auto">
                    <code>{generateFaviconCode(180).trim()}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>HTML Meta Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">HTML Head Tags</span>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard(htmlMetaTags, "html-meta")}>
                    {copied === "html-meta" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <pre className="text-xs overflow-x-auto">
                  <code>{htmlMetaTags.trim()}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Safari SVG */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Safari Pinned Tab SVG</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">safari-pinned-tab.svg</span>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(safariSvgCode, "safari-svg")}>
                  {copied === "safari-svg" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="text-xs overflow-x-auto">
                <code>{safariSvgCode.trim()}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Installation Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Installation Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Create the icon generation files:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>
                    Create <code className="bg-gray-100 px-1 rounded">app/icon.tsx</code> with the 32×32 code
                  </li>
                  <li>
                    Create <code className="bg-gray-100 px-1 rounded">app/apple-icon.tsx</code> with the 180×180 code
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Add static files to public directory:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>
                    Save the Safari SVG as{" "}
                    <code className="bg-gray-100 px-1 rounded">public/safari-pinned-tab.svg</code>
                  </li>
                  <li>Generate additional sizes using the provided code templates</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Update your layout.tsx:</h4>
                <p className="text-sm text-gray-600">
                  The favicon metadata is already included in the layout.tsx file from the previous refresh.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">4. Test your favicons:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Check browser tabs for the favicon display</li>
                  <li>Test on mobile devices for home screen icons</li>
                  <li>Verify Safari pinned tab appearance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
