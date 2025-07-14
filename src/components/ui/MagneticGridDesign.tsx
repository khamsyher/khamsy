import { useState } from "react"

// Types
interface Technology {
  name: string
  category: "Frontend" | "Backend" | "Tools"
  icon: React.ComponentType<{ className?: string }>
  color: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
}


// Design Components
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
            className={`group relative cursor-pointer ${isVisible ? "animate-in zoom-in-50 fade-in" : "opacity-0"}`}
            style={{ animationDelay: `${index * 80}ms` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`
              relative overflow-hidden rounded-2xl transition-all duration-500 ease-out
              ${
                isHovered
                  ? "bg-gradient-to-br from-card to-card/80 shadow-2xl scale-110 -translate-y-2"
                  : "bg-card/60 hover:bg-card/80"
              }
              backdrop-blur-xl border border-border/20
            `}
            >
              <div className="p-6 text-center space-y-3">
                <div className="relative">
                  <div
                    className={`
                      w-10 h-10 mx-auto rounded-lg bg-gradient-to-r ${tech.color} p-2 transition-all duration-500 flex items-center justify-center
                      ${isHovered ? "scale-125 rotate-12 shadow-lg" : "group-hover:scale-110"}
                    `}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div
                    className={`
                    absolute inset-0 rounded-lg bg-gradient-to-r ${tech.color} transition-all duration-500
                    ${isHovered ? "scale-150 opacity-20 blur-xl" : "scale-100 opacity-0"}
                  `}
                  />
                </div>
                <div className={`transition-all duration-300 ${isHovered ? "scale-110" : ""}`}>
                  <h3 className="font-medium text-xs text-foreground mb-1">{tech.name}</h3>
                  <p
                    className={`text-xs transition-all duration-300 ${
                      isHovered ? "text-foreground/80" : "text-muted-foreground"
                    }`}
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

export default MorphingCardsDesign;