import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiMui } from "react-icons/si";
import RecentProjectImage1 from "../assets/images/zionrealestates.com.png";
import RecentProjectImage2 from "../assets/images/admin.zionrealestates.com_.png";
import RecentProjectImage3 from "../assets/images/zionmaxhub.com_.png";
import RecentProjectImage4 from "../assets/images/zionelectroniclao.com_home.png";
import RecentProjectImage5 from "../assets/images/farmland.zionelectroniclao.com.png";
import RecentProjectImage6 from "../assets/images/pingkai.zionmaxhub.com_.png";
import MacBook from "../assets/images/macbook-desktop.webp";

const Projects = () => {
  const recentProjects = [
    {
      id: 1,
      title: "Zion Real Estates website",
      description:
        "A modern real estate platform showcasing properties and services.",
      image: RecentProjectImage1,
      link: "https://zionrealestates.com",
      tools: [
        { title: "Vite", icon: SiVite, className: "text-[#41d1ff]" },
        { title: "React ts", icon: FaReact, className: "text-blue-500" },
        { title: "Material UI", icon: SiMui, className: "text-blue-500" },
        { title: "CSS3", icon: FaCss3Alt, className: "text-blue-500" },
      ],
      features: ["Responsive Design", "SEO Optimized", "Fast Loading Speed"],
    },
    {
      id: 2,
      title: "Zion Admin Real Estates website",
      description: "A comprehensive hub for all Zion services and products.",
      image: RecentProjectImage2,
      link: "",
      tools: [
        { title: "Vite", icon: SiVite, className: "text-[#646CFF]" },
        { title: "React ts", icon: FaReact, className: "text-blue-500" },
        { title: "Nodejs", icon: FaNodeJs, className: "text-green-500" },
        { title: "CSS3", icon: FaCss3Alt, className: "text-blue-500" },
      ],
      features: ["Responsive Design", "SEO Optimized", "Fast Loading Speed"],
    },
    {
      id: 3,
      title: "Zion MaxHub website",
      description: "A comprehensive hub for all Zion services and products.",
      image: RecentProjectImage3,
      link: "https://zionmaxhub.com",
      tools: [
        { title: "Vite", icon: SiVite, className: "text-[#41d1ff]" },
        { title: "React ts", icon: FaReact, className: "text-blue-500" },
        { title: "CSS3", icon: FaCss3Alt, className: "text-blue-500" },
      ],
      features: ["Responsive Design", "SEO Optimized", "Fast Loading Speed"],
    },
    {
      id: 4,
      title: "Zion Electronic Lao and zion Itc website",
      description:
        "An electronic store offering a wide range of products and services.",
      image: RecentProjectImage4,
      link: "https://zionelectroniclao.com/home",
      tools: [
        { title: "Vite", icon: SiVite, className: "text-[#41d1ff]" },
        { title: "React ts", icon: FaReact, className: "text-blue-500" },
        { title: "Material UI", icon: SiMui, className: "text-blue-500" },
        { title: "CSS3", icon: FaCss3Alt, className: "text-blue-500" },
      ],
      features: ["Responsive Design", "SEO Optimized", "Fast Loading Speed"],
    },
    {
      id: 5,
      title: "Zion Farmland website",
      description:
        "A platform dedicated to promoting and selling agricultural products.",
      image: RecentProjectImage5,
      link: "https://farmland.zionelectroniclao.com/",
      tools: [
        { title: "Vite", icon: SiVite, className: "text-[#41d1ff]" },
        { title: "React ts", icon: FaReact, className: "text-blue-500" },
        {
          title: "TailwindCSS",
          icon: SiTailwindcss,
          className: "text-blue-500",
        },
      ],
      features: ["Responsive Design", "SEO Optimized", "Fast Loading Speed"],
    },
    {
      id: 6,
      title: "Binkai Industrial website",
      description:
        "A showcase of Zion's manufacturing capabilities and products.",
      image: RecentProjectImage6,
      link: "https://pingkai.zionmaxhub.com/",
      tools: [
        { title: "Vite", icon: SiVite, className: "text-[#41d1ff]" },
        { title: "React ts", icon: FaReact, className: "text-blue-500" },
        {
          title: "TailwindCSS",
          icon: SiTailwindcss,
          className: "text-blue-500",
        },
      ],
      features: ["Responsive Design", "SEO Optimized", "Fast Loading Speed"],
    },
  ];
  return (
    <div className=" text-gray-800">
      {/* Showcase / Portfolio */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className=" font-bold text-3xl md:text-3xl mb-12 text-center">
          Recent Projects
        </h2>
        <div className="space-y-8">
          {recentProjects.map((item) => (
            <motion.div
              // key={item.id}
              // initial="hidden"
              // whileInView="visible"
              // variants={{
              //   hidden: { opacity: 0, scale: 0.5 },
              //   visible: { opacity: 1, scale: 1 },
              // }}
              // transition={{ duration: 0.5, ease: "linear" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white hover:bg-gray-200 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start gap-6"
            >
              <div className="pr-5">
                <div
                  className="flex-shrink-0 bg-cover bg-center w-full md:w-80 h-56 rounded-lg mb-4 flex items-center justify-center"
                  style={{ backgroundImage: `url(${MacBook})` }}
                >
                  <img
                    src={item.image}
                    onClick={() => window.open(item.link, "_blank")}
                    alt={`Project ${item}`}
                    className="w-full md:w-72 rounded mb-4"
                  />
                </div>
                <div className="flex gap-4 justify-center">
                  <a
                    href=""
                    className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100"
                  >
                    View Website
                  </a>
                  <a
                    href=""
                    className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="mb-4">
                  <span className="text-gray-600 font-semibold">
                    Key Features:
                  </span>
                  <ul className="list-disc pl-5 text-gray-700">
                    {item.features &&
                      item.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="text-gray-600 font-semibold">
                    Technologies Used:
                  </span>
                  <div className="flex gap-3 mt-4">
                    {item.tools?.map((tool, idx) => {
                      const IconComponent = tool.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-gray-800 text-white px-3 py-1.5 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-700 hover:scale-105"
                        >
                          <IconComponent
                            className={`text-lg ${tool.className}`}
                          />
                          <span className="text-sm">{tool.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
