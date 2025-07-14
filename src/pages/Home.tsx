import {
    FaGithub,
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
import { FiMail } from "react-icons/fi";
import Avatar from "../assets/icons/Khamsy Avatar.png";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
// import TypewriterWithMotion from '../components/animations/TypewriterWithMotion';
import { TypewriterEffectSmooth } from "../components/ui/Typewriter-effect";
import { motion } from "framer-motion";
import ToolsAndTechnologies from "./ToolsAndTechnologies";
import EducationCertifications from "./EducationCertifications";

const Home = () => {
    const { t } = useTranslation();
    const words = [
        { text: t('hero.myname.hi') },
        { text: t('hero.myname.my') },
        { text: t('hero.myname.name') },
        { text: t('hero.myname.is') },
        { text: t('hero.myname.khamsy'), className: "text-blue-500 dark:text-blue-500" },
    ];
    // const words = [
    //     {
    //         text: "👋Hi,",
    //     },
    //     {
    //         text: "My",
    //     },
    //     {
    //         text: "name",
    //     },
    //     {
    //         text: "is",
    //     },
    //     {
    //         text: "Khamsy.",
    //         className: "text-blue-500 dark:text-blue-500",
    //     },
    // ];
    return (
        <div>
            <div className="relative">
                <div
                    className="absolute inset-0 bg-gray-100 z-0"
                    style={{
                        backgroundImage: `
                        linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                    }}
                ></div>
                <div className="relative max-w-6xl mx-auto p-4 pt-10 md:pt-30 z-10 ">
                    <div className="flex flex-col items-center justify-center my-6 select-none">
                        <motion.img
                            src={Avatar}
                            alt="Logo"
                            className="w-65 h-65 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 120, damping: 10 }}
                        />
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <TypewriterEffectSmooth words={words} />
                        </div>

                        {/* <TypewriterWithMotion text="Hi, my name is Khamsy" speed={80} pause={1000} /> */}
                        {/* <h1 className='text-3xl md:text-5xl font-bold text-center mb-4'>
                            Hi, my name is <span className='text-blue-500'>Khamsy</span>
                        </h1> */}
                        {/* I'm a Full Stack Developer based in{" "}
                            <span className="text-blue-500">Vientiane</span> */}
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 120, damping: 10 }}
                            className="text-xl md:text-3xl font-semibold text-gray-700 text-center">
                            <Trans
                                i18nKey="hero.intro"
                                components={{ blue: <span className="text-blue-500" /> }}
                            />
                        </motion.h2>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 10 }}
                            className="text-lg md:text-xl text-gray-600 mt-4 text-center">
                                {t('hero.description')}
                        </motion.p>
                    </div>
                    <div className="mt-8 mb-12 flex flex-col items-center">
                        <div className="flex space-x-4 mb-6">
                            <button className="flex items-center space-x-2 bg-black text-white py-2 px-5 rounded-full hover:bg-gray-800 transition">
                                <span> {t('hero.contactMe')} </span>
                                <FiMail />
                            </button>
                            <button className="border border-black py-2 px-5 rounded-full hover:bg-gray-100 transition">
                                {t('hero.downloadCV')}
                            </button>
                        </div>
                        <div className="flex space-x-5 text-2xl text-gray-600">
                            <FaGithub className="hover:text-black transition" />
                            <FaInstagram className="hover:text-pink-600 transition" />
                            <FaFacebook className="hover:text-blue-600 transition" />
                            <FaYoutube className="hover:text-red-500 transition" />
                            <FaLinkedin className="hover:text-blue-500 transition" />
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <ToolsAndTechnologies />
            <Skills />
            <Projects />
            <Education />
            <EducationCertifications />
        </div>
    );
};

export default Home;
