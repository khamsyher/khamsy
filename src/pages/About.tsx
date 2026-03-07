import { Code2, Rocket, Coffee } from "lucide-react";
import AboutMe from "../assets/images/Aboutme.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="max-w-6xl mx-auto px-4 py-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-3xl md:text-3xl font-extrabold text-center mb-2 text-foreground"
      >
        About Me
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 p-10">
        <div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6"
            >
              I'm a passionate full-stack developer with over 5 years of experience
              creating digital experiences that make a difference. I love turning
              complex problems into simple, beautiful, and intuitive solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed"
            >
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of coffee
              while sketching out my next big idea.
            </motion.p>
          </div>

          <div className="space-y-6 pl-2 py-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex items-center gap-4 hover:scale-105 transition duration-300 ease-in-out"
            >
              <Coffee className="w-6 h-6 text-amber-400" />
              <span className="text-foreground text-lg">
                Coffee enthusiast & night owl
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex items-center gap-4 hover:scale-105 transition duration-300 ease-in-out"
            >
              <Code2 className="w-6 h-6 text-primary" />
              <span className="text-foreground text-lg">
                5+ years of development experience
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="flex items-center gap-4 hover:scale-105 transition duration-300 ease-in-out"
            >
              <Rocket className="w-6 h-6 text-emerald-500" />
              <span className="text-foreground text-lg">
                20+ projects delivered successfully
              </span>
            </motion.div>
          </div>
        </div>

        <div>
          <img
            src={AboutMe}
            alt="About Me"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
