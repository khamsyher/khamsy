import React from "react"

// Utility function for class merging
function cnLocal(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs.filter(Boolean).join(" ")
}



// Simple Card Components
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cnLocal("rounded-xl border bg-card text-card-foreground shadow", className)} {...props} />
))
Card.displayName = "Card"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cnLocal("p-6 pt-0", className)} {...props} />,
)
CardContent.displayName = "CardContent"

// Simple Badge Component
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline"
}

const Badge: React.FC<BadgeProps> = ({ className, variant = "default", ...props }) => {
  const variants = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-input bg-background text-foreground",
  }

  return (
    <div
      className={cnLocal(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}
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

const WaveAnimationDesign: React.FC<DesignProps> = ({ technologies, isVisible }) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {technologies.map((tech, index) => {
          const Icon = tech.icon
          const row = Math.floor(index / 6)
          const col = index % 6

          return (
            <div
              key={tech.name}
              className={`group relative ${isVisible ? "animate-in slide-in-from-bottom-8 fade-in" : "opacity-0"}`}
              style={{
                animationDelay: `${row * 200 + col * 100}ms`,
                animationDuration: "800ms",
              }}
            >
              <div className="relative p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/30 hover:bg-card/90 transition-all duration-500 group-hover:scale-110">
                <div className="text-center space-y-3">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r ${tech.color} p-3 group-hover:animate-pulse flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">{tech.name}</h3>
                    <div className="flex justify-center">
                      <Badge variant="outline" className={`text-xs border-0 bg-gradient-to-r ${tech.color} text-white`}>
                        {tech.level}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WaveAnimationDesign;