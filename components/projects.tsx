'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  color: string
  glowColor: string
}

const projectsList: Project[] = [
  {
    title: 'Restaurant Website UI Design',
    description: 'Built a responsive restaurant website UI using HTML & CSS with modern design principles and interactive hover effects.',
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    link: '#',
    color: 'from-orange-500 to-orange-600',
    glowColor: 'shadow-orange-500/50',
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Developed a comprehensive dashboard for managing products, inventory, and orders with real-time analytics and reporting.',
    technologies: ['React', 'JavaScript', 'Dashboard'],
    link: '#',
    color: 'from-blue-500 to-blue-600',
    glowColor: 'shadow-blue-500/50',
  },
  {
    title: 'Python Data Analytics Tool',
    description: 'Created a Python-based tool for data analysis and visualization with support for multiple data formats and export options.',
    technologies: ['Python', 'Data Analysis', 'Visualization'],
    link: '#',
    color: 'from-purple-500 to-purple-600',
    glowColor: 'shadow-purple-500/50',
  },
  {
    title: 'Inventory Management System',
    description: 'Built a full-stack inventory management system with MySQL database and SAP integration for procurement operations.',
    technologies: ['MySQL', 'SAP', 'Backend'],
    link: '#',
    color: 'from-cyan-500 to-cyan-600',
    glowColor: 'shadow-cyan-500/50',
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
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
    <section id="projects" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      {/* Glow background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10 opacity-50"></div>

      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="mb-20 text-center space-y-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 border border-pink-500/30 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-pink-400"></div>
              <span className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">Projects</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            A showcase of my recent projects demonstrating my skills in design, development, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Card background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40 border border-border/30 group-hover:border-purple-400/30 rounded-2xl transition-all duration-300"></div>

              {/* Glow effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-2xl ${project.glowColor}`}
                style={{
                  boxShadow: `inset 0 0 50px rgba(139, 92, 246, 0.15)`,
                }}
              ></div>

              {/* Content */}
              <div className="relative p-8 space-y-6">
                {/* Project header with color badge */}
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div
                    className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${project.color} text-white text-xs font-bold shadow-lg ${project.glowColor} shadow-2xl`}
                  >
                    Project
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-background/50 border border-purple-400/20 text-foreground/70 group-hover:border-purple-400/50 group-hover:text-purple-300 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer with links */}
                <div className="flex gap-3 pt-4 border-t border-border/30 group-hover:border-purple-400/20 transition-colors">
                  {project.link && (
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>

                {/* Hover shine effect */}
                <div
                  className={`absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)`,
                    animation: 'shimmer 2s infinite',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects CTA */}
        <div className="mt-16 text-center">
          <button className="group relative px-8 py-3 rounded-full font-semibold border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 text-foreground hover:text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
            View All Projects
          </button>
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
