import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LanguageIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useAppContext } from "../context/AppProvider";

import "/node_modules/flag-icons/css/flag-icons.min.css";

const navLinks = [
  { to: "#home", labelKey: "nav.home" },
  { to: "#project", labelKey: "nav.project" },
  { to: "#skill", labelKey: "nav.skill" },
  { to: "#education", labelKey: "nav.education" },
  { to: "#about", labelKey: "nav.about" },
  { to: "#contact", labelKey: "nav.contact" },
];

const Navbar = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useAppContext();
  const { language, changeLang } = useAppContext();
  const [langButtonOpen, setLangButtonOpen] = useState(false);
  const langDropdownRef = useRef<HTMLLIElement>(null);
  const [activeSection, setActiveSection] = useState<string>("home");

  const toggleDropdown = () => setLangButtonOpen(!langButtonOpen);

  const handleLanguageChange = (lang: string) => {
    changeLang(lang);
    setLangButtonOpen(false);
  };

  // Springy navbar auto-hide on scroll
  const navPositionY = useSpring(0, { stiffness: 500, damping: 40 });
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    navPositionY.set(currentScrollY > lastScrollY ? -100 : 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    if (!langButtonOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangButtonOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langButtonOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navLinks.map((link) => link.to.replace("#", ""));
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ y: navPositionY }}
      className="fixed top-0 left-0 right-0 w-full p-2 flex justify-center z-50"
    >
      <ul className="flex space-x-1 py-1 px-4 rounded-full shadow-lg border border-border/50 text-center justify-center bg-card/80 backdrop-blur-xl">
        {navLinks.map(({ to, labelKey }) => {
          const sectionId = to.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <li
              key={labelKey}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-300
                ${isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
            >
              <a href={to}>{t(labelKey)}</a>
            </li>
          );
        })}

        {/* Language Selector */}
        <li
          className="relative flex items-center cursor-pointer hover:bg-muted py-2 px-4 rounded-full transition select-none"
          onClick={toggleDropdown}
          ref={langDropdownRef}
        >
          <LanguageIcon className="h-5 w-5 cursor-pointer text-muted-foreground" />
          <span className="ml-1 text-sm text-muted-foreground">
            {language === "en" ? "EN" : "ລາວ"}
          </span>
          {langButtonOpen && (
            <div className="absolute top-12 right-0 w-40 bg-card border border-border rounded-xl shadow-xl z-10 overflow-hidden">
              <ul className="py-1">
                <li
                  className={`cursor-pointer px-4 py-2.5 transition-colors ${
                    language === "la" ? "bg-secondary text-secondary-foreground" : "hover:bg-muted text-foreground"
                  }`}
                  onClick={() => handleLanguageChange("la")}
                >
                  <div className="flex items-center gap-3">
                    <span className="fi fi-la" />
                    <span className="text-sm">{t("nav.lao")}</span>
                  </div>
                </li>
                <li
                  className={`cursor-pointer px-4 py-2.5 transition-colors ${
                    language === "en" ? "bg-secondary text-secondary-foreground" : "hover:bg-muted text-foreground"
                  }`}
                  onClick={() => handleLanguageChange("en")}
                >
                  <div className="flex items-center gap-3">
                    <span className="fi fi-us" />
                    <span className="text-sm">{t("nav.english")}</span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* Theme Toggle */}
        <li className="py-2 px-3 rounded-full flex items-center justify-center transition-all duration-300 bg-muted hover:bg-surface-hover">
          <button onClick={toggleTheme} className="flex items-center justify-center">
            {theme === "light" ? (
              <MoonIcon className="h-5 w-5 text-foreground" />
            ) : (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            )}
          </button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;