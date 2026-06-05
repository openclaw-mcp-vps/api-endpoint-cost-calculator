import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Endpoint Cost Calculator — Know Your True Cost Per Call',
  description: 'Track API usage patterns and calculate the true cost per endpoint including infrastructure, third-party APIs, and compute. Built for API product managers and SaaS founders.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d69811a8-3809-44a2-a98e-c4e6738c826d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
