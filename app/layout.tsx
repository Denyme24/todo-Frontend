import "./globals.css"
import { Inter } from 'next/font/google'
import * as React from "react"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo App',
  description: 'A simple and clean todo app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

