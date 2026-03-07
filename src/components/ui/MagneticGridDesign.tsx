import { useState } from "react"

interface Technology {
  name: string
  category: "Frontend" | "Backend" | "Tools"
  icon: React.ComponentType<{ className?: string }>
  color: string // Tailwind gradient class e.g. from-pink-500 to-yellow-500
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
}

interface DesignProps {
  technologies: Technology[]
  isVisible: boolean
}

const MorphingCardsDesign: React.FC<DesignProps> = ({ technologies, isVisible }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {technologies.map((tech, index) => {
        const Icon = tech.icon
        const isHovered = hoveredIndex === index

        return (
          <div
            key={tech.name}
            className={`group relative cursor-pointer transition-all duration-500 ease-out ${
              isVisible ? "animate-in zoom-in-50 fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 80}ms` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`
                relative overflow-hidden rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-gray-700
                transition-all duration-500 ease-out
                ${
                  isHovered
                    ? "bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl scale-110 -translate-y-2"
                    : "bg-white/60 hover:bg-white/80 dark:bg-gray-800/60 dark:hover:bg-gray-800/80"
                }
              `}
            >
              <div className="p-6 text-center space-y-3">
                <div className="relative">
                  <div
                    className={`
                      w-10 h-10 mx-auto rounded-lg p-2 flex items-center justify-center
                      bg-gradient-to-r ${tech.color}
                      transition-all duration-500
                      ${isHovered ? "scale-125 rotate-12 shadow-lg" : "group-hover:scale-110"}
                    `}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div
                    className={`
                      absolute inset-0 rounded-lg bg-gradient-to-r ${tech.color}
                      transition-all duration-500
                      ${isHovered ? "scale-150 opacity-20 blur-xl" : "scale-100 opacity-0"}
                    `}
                  />
                </div>
                <div className={`transition-all duration-300 ${isHovered ? "scale-110" : ""}`}>
                  <h3 className="font-medium text-xs text-gray-900 dark:text-gray-100 mb-1">
                    {tech.name}
                  </h3>
                  <p
                    className={`
                      text-xs transition-all duration-300
                      ${isHovered ? "text-gray-700 dark:text-gray-300" : "text-gray-500 dark:text-gray-400"}
                    `}
                  >
                    {tech.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MorphingCardsDesign
