import React, { useState, useRef, useEffect } from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa"
import {
  SiNuxtdotjs,
  SiRedux,
  SiTailwindcss,
  SiPostman,
  SiExpress,
  SiMysql,
  SiReactrouter,
  SiFlutter,
  SiLaravel,
  SiPhp,
  SiPython,
  SiOpenai,
  SiVercel,
  SiMui,
  SiTypescript,
  SiMongodb,
  SiReact
} from "react-icons/si"
import { IoSparkles, IoGrid, IoLayers } from "react-icons/io5"
import { HiOutlineSparkles, HiViewGrid } from "react-icons/hi"

import FloatingCardsDesign from "../components/ui/FloatingCardDesign"
import MagneticGridDesign from "../components/ui/MagneticGridDesign"
import MorphingCardsDesign from "../components/ui/MagneticGridDesign"
import WaveAnimationDesign from "../components/ui/WaveAnimationDesign"

// import { useAppContext } from "../context/AppProvider" // 👈 import global app context

// Utility function for class merging
function cnLocal(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs.filter(Boolean).join(" ")
}

// Simple Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg"
}

const Button: React.FC<ButtonProps> = ({ className, variant = "default", size = "default", ...props }) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  }

  const sizes = {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3 text-xs",
    lg: "h-10 px-8",
  }

  return (
    <button
      className={cnLocal(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
}

// Theme Toggle using AppContext
// const ThemeToggle: React.FC = () => {
//   const { theme, toggleTheme } = useAppContext()

//   return (
//     <Button variant="outline" size="sm" onClick={toggleTheme} className="gap-2 bg-transparent">
//       {theme === "light" ? (
//         <>
//           <IoMoon className="w-4 h-4" />
//           Dark
//         </>
//       ) : (
//         <>
//           <IoSunny className="w-4 h-4" />
//           Light
//         </>
//       )}
//     </Button>
//   )
// }

// Types
interface Technology {
  name: string
  category: "Frontend" | "Backend" | "Tools"
  icon: React.ComponentType<{ className?: string }>
  color: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
}

interface DesignOption {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
}

// Updated Data with React Icons
const technologies: Technology[] = [
  { name: "HTML", category: "Frontend", icon: FaHtml5, color: "from-orange-500 to-red-500", level: "Expert" },
  { name: "CSS", category: "Frontend", icon: FaCss3Alt, color: "from-blue-500 to-cyan-500", level: "Expert" },
  { name: "JavaScript", category: "Frontend", icon: FaJs, color: "from-yellow-500 to-orange-500", level: "Expert" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "from-blue-700 to-blue-500", level: "Advanced" },
  { name: "PHP", category: "Backend", icon: SiPhp, color: "from-indigo-600 to-indigo-400", level: "Advanced" },
  { name: "Python", category: "Backend", icon: SiPython, color: "from-yellow-400 to-blue-500", level: "Advanced" },
  { name: "React.js", category: "Frontend", icon: FaReact, color: "from-cyan-500 to-blue-500", level: "Expert" },
  { name: "Nuxt.js", category: "Frontend", icon: SiNuxtdotjs, color: "from-green-500 to-green-700", level: "Advanced" },
  { name: "Redux Toolkit", category: "Frontend", icon: SiRedux, color: "from-purple-600 to-purple-400", level: "Advanced" },
  { name: "Flutter", category: "Frontend", icon: SiFlutter, color: "from-blue-500 to-cyan-400", level: "Intermediate" },
  { name: "React Native", category: "Frontend", icon: SiReact, color: "from-cyan-500 to-blue-500", level: "Advanced" },
  { name: "Git", category: "Tools", icon: FaGitAlt, color: "from-orange-600 to-red-600", level: "Expert" },
  { name: "Tailwind", category: "Frontend", icon: SiTailwindcss, color: "from-teal-500 to-cyan-500", level: "Expert" },
  { name: "MUI", category: "Frontend", icon: SiMui, color: "from-blue-600 to-blue-400", level: "Advanced" },
  { name: "Postman", category: "Tools", icon: SiPostman, color: "from-orange-500 to-orange-600", level: "Advanced" },
  { name: "Node.js", category: "Backend", icon: FaNodeJs, color: "from-green-600 to-green-500", level: "Advanced" },
  { name: "Express.js", category: "Backend", icon: SiExpress, color: "from-gray-600 to-gray-500", level: "Advanced" },
  { name: "Laravel", category: "Backend", icon: SiLaravel, color: "from-red-600 to-red-400", level: "Advanced" },
  { name: "MySQL", category: "Backend", icon: SiMysql, color: "from-blue-600 to-blue-500", level: "Intermediate" },
  { name: "MongoDB", category: "Backend", icon: SiMongodb, color: "from-green-600 to-green-400", level: "Advanced" },
  { name: "React Router", category: "Frontend", icon: SiReactrouter, color: "from-red-500 to-pink-500", level: "Advanced" },
  { name: "ChatGPT", category: "Tools", icon: SiOpenai, color: "from-emerald-600 to-emerald-400", level: "Advanced" },
  { name: "V0", category: "Tools", icon: SiVercel, color: "from-gray-900 to-gray-700", level: "Intermediate" },
  // { name: "Redux", category: "Frontend", icon: SiRedux, color: "from-purple-500 to-pink-500", level: "Advanced" },
  // { name: "React Query", category: "Frontend", icon: SiReactquery, color: "from-pink-500 to-rose-500", level: "Intermediate" },
  // { name: "Supabase", category: "Backend", icon: SiSupabase, color: "from-green-500 to-emerald-500", level: "Advanced" },
  // { name: "Socket.io", category: "Backend", icon: SiSocketdotio, color: "from-indigo-500 to-purple-500", level: "Intermediate" },
  // { name: "StyledComponent", category: "Frontend", icon: SiStyledcomponents, color: "from-pink-500 to-purple-500", level: "Advanced" },


]

const categories = ["All", "Frontend", "Backend", "Tools"] as const
type Category = (typeof categories)[number]

// Main Component
const ToolsAndTechnology: React.FC = () => {
  const [activeDesign, setActiveDesign] = useState<string>("floating")
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const designs: DesignOption[] = [
    { id: "floating", name: "Floating Cards", icon: HiViewGrid },
    { id: "magnetic", name: "Magnetic Grid", icon: IoGrid },
    { id: "wave", name: "Wave Animation", icon: HiOutlineSparkles },
    { id: "morphing", name: "Morphing Cards", icon: IoLayers },
  ]

  const filteredTechnologies: Technology[] =
    activeCategory === "All" ? technologies : technologies.filter((tech) => tech.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const renderDesign = () => {
    switch (activeDesign) {
      case "floating":
        return <FloatingCardsDesign technologies={filteredTechnologies} isVisible={isVisible} />
      case "magnetic":
        return <MagneticGridDesign technologies={filteredTechnologies} isVisible={isVisible} />
      case "wave":
        return <WaveAnimationDesign technologies={filteredTechnologies} isVisible={isVisible} />
      case "morphing":
        return <MorphingCardsDesign technologies={filteredTechnologies} isVisible={isVisible} />
      default:
        return <FloatingCardsDesign technologies={filteredTechnologies} isVisible={isVisible} />
    }
  }

  return (
    <div ref={sectionRef} className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
          {/* <div className="flex justify-between items-center mb-6">
            <div />
            <ThemeToggle />
          </div> */}

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-sm rounded-full border border-border/20">
            <IoSparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-muted-foreground">Tech Stack</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground/70 to-foreground bg-clip-text">
            Tools & Technologies
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies and tools that power modern digital experiences
          </p>

          {/* Design Selector */}
          <div className="flex justify-center">
            <div className="flex gap-2 p-1 bg-card/60 backdrop-blur-sm rounded-xl border border-gray-400">
              {designs.map((design) => {
                const Icon = design.icon
                return (
                  <Button
                    key={design.id}
                    variant={activeDesign === design.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveDesign(design.id)}
                    className={`gap-2 ${activeDesign === design.id ? "bg-primary text-primary-foreground shadow-sm" : ""}`}
                  >
                    <Icon className="w-4 h-4" />
                    {design.name}
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center">
            <div className="flex gap-2 p-1 bg-card/40 backdrop-blur-sm rounded-lg border border-gray-400">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={`${activeCategory === category ? "bg-primary text-primary-foreground shadow-sm" : ""}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        {renderDesign()}
      </div>
    </div>
  )
}

export default ToolsAndTechnology
