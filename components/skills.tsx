'use client'

import { useEffect, useRef, useState } from 'react'

interface Skill {
  name: string
  color: string
  glowColor: string
}

const skillsList: Skill[] = [
  { name: 'HTML', color: 'from-orange-500 to-orange-600', glowColor: 'shadow-orange-500/50' },
  { name: 'CSS', color: 'from-blue-500 to-blue-600', glowColor: 'shadow-blue-500/50' },
  { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500', glowColor: 'shadow-yellow-400/50' },
  { name: 'Python', color: 'from-blue-400 to-purple-500', glowColor: 'shadow-blue-400/50' },
  { name: 'MySQL', color: 'from-blue-600 to-blue-700', glowColor: 'shadow-blue-600/50' },
  { name: 'MongoDB', color: 'from-green-500 to-green-600', glowColor: 'shadow-green-500/50' },
  { name: 'SAP', color: 'from-purple-600 to-purple-700', glowColor: 'shadow-purple-600/50' },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      {/* Glow background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -z-10 opacity-50"></div>

      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="mb-20 text-center space-y-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 border border-purple-500/30 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <span className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">Skills</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            I&apos;m proficient in a range of modern technologies for building scalable and dynamic applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`group relative p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${
                hoveredSkill === skill.name
                  ? 'bg-gradient-to-br from-background/80 to-background/50 border-purple-400/50 shadow-lg'
                  : 'bg-background/40 border-border/30 hover:border-purple-400/30'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                borderWidth: '1px',
                borderImage: `linear-gradient(135deg, ${
                  hoveredSkill === skill.name ? 'rgb(168, 85, 247), rgb(236, 72, 153)' : 'rgb(30, 39, 73), rgb(30, 39, 73)'
                }) 1`,
              }}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 ${skill.glowColor}`}
                style={{
                  boxShadow: `inset 0 0 30px rgba(139, 92, 246, 0.2)`,
                }}
              ></div>

              {/* Skill badge with gradient background */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`px-4 py-2 rounded-lg bg-gradient-to-r ${skill.color} text-white font-bold text-sm shadow-lg ${skill.glowColor} shadow-2xl`}
                >
                  {skill.name}
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                </div>
              </div>

              {/* Skill description */}
              <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                {skill.name} expertise with modern best practices and performance optimization.
              </p>

              {/* Animated border on hover */}
              <div
                className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 ${
                  hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent)`,
                  animation: 'shimmer 2s infinite',
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-background/50 to-background/30 border border-purple-500/20 backdrop-blur-md text-center">
          <p className="text-foreground/70 max-w-3xl mx-auto">
            With experience in both frontend and backend development, along with database management and accounting software, I&apos;m ready to tackle complex projects and continuously expand my technical skill set.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  )
}
