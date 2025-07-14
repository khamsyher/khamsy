import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useAppContext } from "../context/AppProvider";

import "/node_modules/flag-icons/css/flag-icons.min.css";

const navLinks = [
    { to: "/", labelKey: "nav.home" },
    { to: "/", labelKey: "nav.project" },
    { to: "/", labelKey: "nav.skill" },
    { to: "/", labelKey: "nav.education" },
    { to: "/about", labelKey: "nav.about" },
    { to: "/contact", labelKey: "nav.contact" },
];

const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const { t } = useTranslation();
    const { language, changeLang } = useAppContext();
    const [LangButtonOpen, setLangButtonOpen] = useState(false);
    const toggleDropdown = () => {
        setLangButtonOpen(!LangButtonOpen);
    }

    const handleLanguageChange = (lang: string) => {
        changeLang(lang);
        setLangButtonOpen(false);
    }

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="absolute top-0 left-0 right-0 w-full p-2 flex justify-center z-50"
        >
            <ul className="flex space-x-2 bg-gray-100 py-1 px-4 rounded-full shadow text-gray-600 text-center justify-center">
                {navLinks.map(({ to, labelKey }) => (
                    <li key={to} className="py-2 px-4 rounded-full hover:bg-gray-200 font-medium">
                        <Link to={to}>{t(labelKey)}</Link>
                    </li>
                ))}



                {/* Language Selector */}

                <li className="relative md:flex items-center cursor-pointer hover:bg-gray-200 py-2 px-4 rounded-full transition select-none"
                    onClick={toggleDropdown}
                >
                    <LanguageIcon
                        className="h-6 w-6 cursor-pointer"
                    />
                    <span className="ml-0.5">
                        {language === 'en' ? 'English' : 'ລາວ'}
                    </span>
                    {LangButtonOpen && (
                        <div className="absolute top-8 right-0 mt-2 w-40 bg-white border border-amber-50 rounded shadow-lg z-10">
                            <ul className="p-2">
                                <li
                                    className={`cursor-pointer p-2 ${language === 'la' ? 'bg-gray-100' : ''}`}
                                    onClick={() => handleLanguageChange('la')}
                                >
                                    <div className="flex items-center">
                                        <span className="fi fi-la"></span>
                                        <span className="ml-4">{t('nav.lao')}</span>
                                    </div>
                                </li>
                                <li
                                    className={`cursor-pointer p-2 ${language === 'en' ? 'bg-gray-100' : ''}`}
                                    onClick={() => handleLanguageChange('en')}
                                >
                                    <div className="flex items-center">
                                        <span className="fi fi-us"></span>
                                        <span className="ml-4">{t('nav.english')}</span>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    )}
                </li>
                {/* Theme toggle */}
                <li className="py-2 px-4 rounded-full hover:bg-gray-200 flex items-center justify-center">
                    <button onClick={toggleTheme}>
                        {theme === "light" ? (
                            <MoonIcon className="h-5 w-5" />
                        ) : (
                            <SunIcon className="h-5 w-5 text-yellow-500" />
                        )}
                    </button>
                </li>

            </ul>
        </motion.nav>
    )
}

export default Navbar;