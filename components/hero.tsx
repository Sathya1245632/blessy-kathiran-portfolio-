'use client'

import { useEffect, useRef } from 'react'
import { Download, Eye } from 'lucide-react'
import TechIcons from './tech-icons'
import GlowingLaptop from './glowing-laptop'

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate title on load
    if (titleRef.current) {
      titleRef.current.style.opacity = '0'
      titleRef.current.style.transform = 'translateY(20px)'
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
          titleRef.current.style.opacity = '1'
          titleRef.current.style.transform = 'translateY(0)'
        }
      }, 100)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div ref={titleRef} className="space-y-8">
          {/* Label */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-pink-400/50"></div>
            <span className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <p className="text-xl text-foreground/80 font-light">Hi, I&apos;m</p>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Blessy
              <br />
              Kathrin A
            </h1>
          </div>

          {/* Subtitle */}
          <div className="space-y-4">
            <p className="text-sm text-foreground/60 font-medium">
              Accounting Specialist (Procurement Operations) <span className="text-purple-400">|</span> Python Developer (Intern)
            </p>
            <p className="text-base text-foreground/70 leading-relaxed max-w-md">
              Eager to learn new technologies and update myself to build a dynamic career.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group relative px-8 py-3 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <span className="relative flex items-center justify-center gap-2 text-white">
                <Download size={18} />
                Download Resume
              </span>
            </button>

            <button className="group relative px-8 py-3 rounded-full font-semibold border border-foreground/30 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-400/20">
              <span className="flex items-center justify-center gap-2 text-foreground">
                <Eye size={18} />
                View Projects
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-foreground/30 flex items-center justify-center">
              <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce"></div>
            </div>
            <span className="text-xs text-foreground/50 tracking-widest uppercase">Scroll Down</span>
            <div className="h-px w-12 bg-gradient-to-r from-foreground/50 to-transparent"></div>
          </div>
        </div>

        {/* Right Side - Laptop and Tech Icons */}
        <div className="hidden lg:flex flex-col items-center justify-center relative h-screen">
          <GlowingLaptop />
          <TechIcons />
        </div>
      </div>
    </section>
  )
}
