import { Code2, Palette, Rocket, Target, Server, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        {
            name: "Frontend Development",
            icon: Code2,
            level: 95,
            color: "from-blue-500 to-cyan-500",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
            name: "Mobile Development",
            icon: MonitorSmartphone,
            level: 85,
            color: "from-pink-500 to-rose-500",
            technologies: ["React Native", "Flutter", "iOS", "Android"],
        },
        {
            name: "Backend Development",
            icon: Server,
            level: 60,
            color: "from-amber-500 to-orange-500",
            technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
        },
        {
            name: "UI/UX Design",
            icon: Palette,
            level: 30,
            color: "from-purple-500 to-pink-500",
            technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
        },
        {
            name: "Full Stack",
            icon: Rocket,
            level: 92,
            color: "from-green-500 to-emerald-500",
            technologies: ["MERN", "T3 Stack", "Serverless", "Docker"],
        },
        {
            name: "Problem Solving",
            icon: Target,
            level: 96,
            color: "from-orange-500 to-red-500",
            technologies: ["Algorithms", "AI", "System Design", "Debugging", "Optimization"],
        },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10 hover:scale-[1.03] transition-all duration-300"
                    >
                        <div className="flex items-center gap-5 mb-6">
                            <div
                                className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg`}
                            >
                                <skill.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold">{skill.name}</h3>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                                className="ml-auto w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-bold shadow-inner"
                            >
                                {skill.level}%
                            </motion.div>
                        </div>

                        <div className="relative w-full h-3 rounded-full bg-gray-700 overflow-hidden">
                            <motion.div
                                className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.3 }}
                                viewport={{ once: true }}
                            />
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2 md:mt-3">
                            {skill.technologies.slice(0, 2).map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-2 py-1 rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                            {skill.technologies.length > 2 && (
                                <span className="text-xs px-2 py-1 rounded-md">
                                    +{skill.technologies.length - 2}
                                </span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

