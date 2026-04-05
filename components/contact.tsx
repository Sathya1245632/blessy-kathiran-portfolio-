'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react'

interface ContactInfo {
  icon: React.ReactNode
  label: string
  value: string
  link?: string
  color: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'blessykathrin827@gmail.com',
    link: 'mailto:blessykathrin827@gmail.com',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <Phone size={24} />,
    label: 'Phone',
    value: '9344519335',
    link: 'tel:9344519335',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: <Linkedin size={24} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/blessy-kathrin',
    link: 'https://linkedin.com/in/blessy-kathrin',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <Github size={24} />,
    label: 'GitHub',
    value: 'github.com/blessykathrin',
    link: 'https://github.com',
    color: 'from-gray-600 to-gray-700',
  },
]

export default function Contact() {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null)
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
    <section id="contact" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -z-10 opacity-50"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10 opacity-50"></div>

      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="mb-20 text-center space-y-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 border border-cyan-500/30 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <span className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">Contact</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            I&apos;m always interested in hearing about new opportunities and projects. Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredContact(contact.label)}
              onMouseLeave={() => setHoveredContact(null)}
              className={`group relative p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40 border border-border/30 group-hover:border-purple-400/30 rounded-2xl transition-all duration-300 -z-10"></div>

              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20 rounded-2xl shadow-cyan-500/30 shadow-2xl"
              ></div>

              {/* Content */}
              <div className="flex items-center gap-6">
                {/* Icon with gradient background */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {contact.icon}
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground/60 mb-1">{contact.label}</h3>
                  <p className="text-lg font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 truncate">
                    {contact.value}
                  </p>
                </div>

                {/* Arrow icon */}
                <div className="w-8 h-8 rounded-full bg-background/50 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                  <span className="text-foreground/60 group-hover:text-purple-400 transition-colors">→</span>
                </div>
              </div>

              {/* Hover shine effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`}
                style={{
                  background: `linear-gradient(135deg, transparent 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)`,
                  animation: 'shimmer 2s infinite',
                }}
              ></div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-background/50 via-purple-500/10 to-background/50 border border-purple-500/20 backdrop-blur-md space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Ready to work together?</h3>
            <p className="text-foreground/70 max-w-lg mx-auto">
              I&apos;m always excited about new projects and opportunities. Get in touch and let&apos;s create something amazing!
            </p>
            <button className="group relative px-8 py-3 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <span className="relative text-white flex items-center justify-center gap-2">
                Send me an email
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {[
              { icon: <Linkedin size={20} />, link: '#' },
              { icon: <Github size={20} />, link: '#' },
              { icon: <Mail size={20} />, link: '#' },
              { icon: <Twitter size={20} />, link: '#' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="w-12 h-12 rounded-full bg-background/50 border border-border/30 hover:border-purple-400/50 flex items-center justify-center text-foreground/60 hover:text-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-border/20 text-center">
          <p className="text-sm text-foreground/50">
            © 2026 Blessy Kathrin A. All rights reserved. | Designed & Built with <span className="text-pink-400">❤</span>
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
