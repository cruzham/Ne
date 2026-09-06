import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NEXORA — Intent-Driven Computing',
  description: 'Turn intent into outcomes',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white min-h-screen">{children}</body>
    </html>
  )
}

