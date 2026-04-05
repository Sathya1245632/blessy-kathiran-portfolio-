'use client'

import { useEffect, useRef, useState } from 'react'

export default function GlowingLaptop() {
  const laptopRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const laptop = laptopRef.current
    if (!laptop) return

    let animationId: number

    const animate = () => {
      const scrollY = window.scrollY
      const rotation = (scrollY * 0.1) % 360

      laptop.style.transform = `rotateX(${Math.sin(rotation * Math.PI / 180) * 5}deg) rotateY(${Math.cos(rotation * Math.PI / 180) * 10}deg)`

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div
      ref={laptopRef}
      className="relative w-96 h-64 transition-transform duration-500"
      style={{
        perspective: '1200px',
      }}
    >
      {/* Laptop Container */}
      <div className="relative w-full h-full">
        {/* Screen Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-pink-500/20 blur-3xl -z-10 animate-pulse"></div>

        {/* Laptop */}
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full drop-shadow-2xl"
          style={{
            filter: 'drop-shadow(0 0 60px rgba(139, 92, 246, 0.4)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.3))',
          }}
        >
          {/* Screen Frame */}
          <rect x="20" y="20" width="360" height="220" rx="12" fill="#0f1335" stroke="#1e2749" strokeWidth="2" />

          {/* Screen Gradient */}
          <defs>
            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#1a1f3a', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0f1335', stopOpacity: 1 }} />
            </linearGradient>

            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.6 }} />
              <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>

          <rect x="25" y="25" width="350" height="210" rx="10" fill="url(#screenGradient)" />

          {/* Code Lines Animation */}
          <g className="animate-pulse">
            {/* Color brackets */}
            <text x="50" y="60" fontSize="14" fill="#ec4899" fontFamily="monospace" fontWeight="bold">
              {'{'}
            </text>
            <text x="370" y="60" fontSize="14" fill="#ec4899" fontFamily="monospace" fontWeight="bold">
              {'}'}
            </text>

            {/* Code text lines */}
            <line x1="70" y1="70" x2="180" y2="70" stroke="#06b6d4" strokeWidth="1.5" opacity="0.7" />
            <line x1="70" y1="85" x2="240" y2="85" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.7" />
            <line x1="70" y1="100" x2="200" y2="100" stroke="#10b981" strokeWidth="1.5" opacity="0.7" />
            <line x1="70" y1="115" x2="220" y2="115" stroke="#f59e0b" strokeWidth="1.5" opacity="0.7" />

            {/* Function area */}
            <text x="50" y="145" fontSize="12" fill="#94a3b8" fontFamily="monospace">
              function Portfolio() {'{'}
            </text>
            <text x="70" y="165" fontSize="12" fill="#06b6d4" fontFamily="monospace">
              return &lt;...&gt;
            </text>
            <text x="50" y="185" fontSize="12" fill="#94a3b8" fontFamily="monospace">
              {'}'}
            </text>

            {/* Glow effect */}
            <rect x="25" y="25" width="350" height="210" rx="10" fill="none" stroke="url(#glowGradient)" strokeWidth="1" opacity="0.4" />
          </g>

          {/* Laptop Base */}
          <rect x="60" y="240" width="280" height="30" rx="4" fill="#1e2749" />
          <rect x="40" y="270" width="320" height="15" rx="2" fill="#0f1335" />

          {/* Keyboard keys */}
          {[...Array(5)].map((_, row) =>
            [...Array(6)].map((_, col) => (
              <rect
                key={`${row}-${col}`}
                x={80 + col * 45}
                y={245 + row * 18}
                width="40"
                height="14"
                rx="2"
                fill="#1e2749"
                stroke="#2d3748"
                strokeWidth="0.5"
              />
            ))
          )}
        </svg>
      </div>

      {/* Floating particles around laptop */}
      <div className="absolute inset-0">
        {mounted && [...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: ['#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b'][i % 4],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              boxShadow: `0 0 10px ${['#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b'][i % 4]}`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
