"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { useEffect, useState } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Check if it's desktop
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkIsDesktop()
    window.addEventListener("resize", checkIsDesktop)

    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    if (isDesktop) {
      document.addEventListener("mousemove", updateCursorPosition)

      // Add hover listeners to interactive elements
      const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]')
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })

      return () => {
        document.removeEventListener("mousemove", updateCursorPosition)
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter)
          el.removeEventListener("mouseleave", handleMouseLeave)
        })
        window.removeEventListener("resize", checkIsDesktop)
      }
    }

    return () => {
      window.removeEventListener("resize", checkIsDesktop)
    }
  }, [isDesktop])

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}

        {/* Custom Cursor - Only on Desktop */}
        {isDesktop && (
          <div
            className={`custom-cursor ${isHovering ? "hover" : ""}`}
            style={{
              left: `${cursorPosition.x - 10}px`,
              top: `${cursorPosition.y - 10}px`,
            }}
          />
        )}
      </body>
    </html>
  )
}
