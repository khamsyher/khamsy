import React, { useState, useRef, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
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
  SiReact,
} from "react-icons/si";
import { IoSparkles, IoGrid, IoLayers } from "react-icons/io5";
import { HiOutlineSparkles, HiViewGrid } from "react-icons/hi";

import FloatingCardsDesign from "../components/ui/FloatingCardDesign";
import MagneticGridDesign from "../components/ui/MagneticGridDesign";
import MorphingCardsDesign from "../components/ui/MagneticGridDesign";
import WaveAnimationDesign from "../components/ui/WaveAnimationDesign";

// Types
export interface Technology {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

interface DesignOption {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Data
const technologies: Technology[] = [
  { name: "HTML", category: "Frontend", icon: FaHtml5, color: "from-orange-500 to-red-500", level: "Expert" },
  { name: "CSS", category: "Frontend", icon: FaCss3Alt, color: "from-blue-500 to-cyan-500", level: "Expert" },
  { name: "JavaScript", category: "Frontend", icon: FaJs, color: "from-yellow-500 to-orange-500", level: "Expert" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "from-blue-700 to-blue-500", level: "Advanced" },
  { name: "PHP", category: "Backend", icon: SiPhp, color: "from-indigo-600 to-indigo-400", level: "Advanced" },
  { name: "Python", category: "Backend", icon: SiPython, color: "from-yellow-400 to-blue-500", level: "Advanced" },
  { name: "React.js", category: "Frontend", icon: FaReact, color: "from-cyan-500 to-blue-500", level: "Expert" },
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
];

const categories = ["All", "Frontend", "Backend", "Tools"] as const;
type Category = (typeof categories)[number];

const designs: DesignOption[] = [
  { id: "floating", name: "Floating Cards", icon: HiViewGrid },
  { id: "magnetic", name: "Magnetic Grid", icon: IoGrid },
  { id: "wave", name: "Wave Animation", icon: HiOutlineSparkles },
  { id: "morphing", name: "Morphing Cards", icon: IoLayers },
];

const ToolsAndTechnology: React.FC = () => {
  const [activeDesign, setActiveDesign] = useState<string>("floating");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredTechnologies: Technology[] =
    activeCategory === "All" ? technologies : technologies.filter((tech) => tech.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renderDesign = () => {
    switch (activeDesign) {
      case "floating":
        return <FloatingCardsDesign technologies={filteredTechnologies} isVisible={isVisible} />;
      case "magnetic":
        return <MagneticGridDesign technologies={filteredTechnologies} isVisible={isVisible} />;
      case "wave":
        return <WaveAnimationDesign technologies={filteredTechnologies} isVisible={isVisible} />;
      case "morphing":
        return <MorphingCardsDesign technologies={filteredTechnologies} isVisible={isVisible} />;
      default:
        return <FloatingCardsDesign technologies={filteredTechnologies} isVisible={isVisible} />;
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-background p-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary backdrop-blur-sm rounded-full border border-border">
            <IoSparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Tech Stack</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
            Tools & Technologies
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies and tools that power modern digital experiences
          </p>

          {/* Design Selector */}
          <div className="flex justify-center">
            <div className="flex gap-2 p-1 bg-card backdrop-blur-sm rounded-xl border border-border">
              {designs.map((design) => {
                const Icon = design.icon;
                return (
                  <button
                    key={design.id}
                    onClick={() => setActiveDesign(design.id)}
                    className={`inline-flex items-center gap-2 h-9 px-3 text-xs rounded-md font-medium transition-colors ${
                      activeDesign === design.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {design.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center">
            <div className="flex gap-2 p-1 bg-muted backdrop-blur-sm rounded-lg border border-border">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`h-8 px-3 text-xs rounded-md font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-surface-hover hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        {renderDesign()}
      </div>
    </div>
  );
};

export default ToolsAndTechnology;
