'use client'

import { useEffect, useRef } from 'react'

interface TechIcon {
  name: string
  color: string
  glowColor: string
  x: number
  y: number
  size: number
  icon: string
}

const techIcons: TechIcon[] = [
  {
    name: 'HTML',
    color: 'from-orange-500 to-orange-600',
    glowColor: 'shadow-orange-500/50',
    x: 10,
    y: 20,
    size: 60,
    icon: '📄',
  },
  {
    name: 'CSS',
    color: 'from-blue-500 to-blue-600',
    glowColor: 'shadow-blue-500/50',
    x: 85,
    y: 15,
    size: 60,
    icon: '🎨',
  },
  {
    name: 'JavaScript',
    color: 'from-yellow-400 to-yellow-500',
    glowColor: 'shadow-yellow-400/50',
    x: 75,
    y: 70,
    size: 60,
    icon: '⚡',
  },
  {
    name: 'Python',
    color: 'from-blue-400 to-purple-500',
    glowColor: 'shadow-blue-400/50',
    x: 20,
    y: 75,
    size: 60,
    icon: '🐍',
  },
  {
    name: 'MySQL',
    color: 'from-blue-600 to-blue-700',
    glowColor: 'shadow-blue-600/50',
    x: 60,
    y: 85,
    size: 55,
    icon: '🗄️',
  },
  {
    name: 'MongoDB',
    color: 'from-green-500 to-green-600',
    glowColor: 'shadow-green-500/50',
    x: 85,
    y: 50,
    size: 55,
    icon: '🍃',
  },
]

export default function TechIcons() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const icons = container.querySelectorAll('[data-icon]')
      icons.forEach((icon) => {
        const iconElement = icon as HTMLElement
        const iconX = parseFloat(iconElement.style.left) + 30
        const iconY = parseFloat(iconElement.style.top) + 30
        const distance = Math.sqrt((x - iconX) ** 2 + (y - iconY) ** 2)

        if (distance < 150) {
          const angle = Math.atan2(y - iconY, x - iconX)
          const force = (1 - distance / 150) * 30
          iconElement.style.transform = `translate(${Math.cos(angle) * force}px, ${Math.sin(angle) * force}px) scale(1.1)`
        } else {
          iconElement.style.transform = 'translate(0, 0) scale(1)'
        }
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{
        perspective: '1000px',
      }}
    >
      {techIcons.map((tech, index) => (
        <div
          key={index}
          data-icon={tech.name}
          className={`absolute transition-transform duration-300 ease-out`}
          style={{
            left: `${tech.x}%`,
            top: `${tech.y}%`,
            transform: 'translate(0, 0)',
          }}
        >
          <div
            className={`w-${Math.ceil(tech.size / 16)} h-${Math.ceil(tech.size / 16)} rounded-xl bg-gradient-to-br ${tech.color} shadow-lg ${tech.glowColor} shadow-2xl flex items-center justify-center backdrop-blur-md border border-white/10 cursor-pointer hover:scale-110 transition-transform duration-300`}
            style={{
              width: tech.size,
              height: tech.size,
              boxShadow: `0 0 30px ${tech.glowColor.split('-')[1]}`,
            }}
          >
            <span className="text-3xl filter drop-shadow-lg">{tech.icon}</span>
          </div>
          <p className="text-xs font-semibold text-foreground/60 mt-2 text-center whitespace-nowrap">
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  )
}
