'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home')

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/30 border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
          <span className="text-sm font-medium tracking-widest text-foreground">
            BLESSY<span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent font-bold"> KATHRIN A</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                  activeTab === link.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Call Button */}
        <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
          <Phone size={16} />
          <span className="text-sm">Call Me</span>
        </button>
      </div>
    </nav>
  )
}
