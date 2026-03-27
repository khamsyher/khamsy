import React, { createContext, useCallback, useContext, useMemo, type ReactNode, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Define types
interface AppContextType {
  isSidebarActive: boolean;
  toggleSidebar: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: string;
  changeLang: (newLang: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();

  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [language, setLanguage] = useState<string>(i18n.language);

  const toggleSidebar = useCallback(() => setIsSidebarActive((prev) => !prev), []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') ?? (prefersDark ? 'dark' : 'light');
    setTheme(savedTheme);
  }, []);

  const changeLang = useCallback((newLang: string) => {
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
    localStorage.setItem('lang', newLang);
  }, [i18n]);

  useEffect(() => {
    document.body.classList.remove('lang-en', 'lang-la', 'lang-cn');
    if (language === 'en') {
      document.body.classList.add('lang-en');
    } else if (language === 'la') {
      document.body.classList.add('lang-la');
    } else if (language === 'cn') {
      document.body.classList.add('lang-cn');
    }
  }, [language]);

  const contextValue = useMemo<AppContextType>(() => ({
    isSidebarActive, toggleSidebar, theme, toggleTheme, language, changeLang,
  }), [isSidebarActive, toggleSidebar, theme, toggleTheme, language, changeLang]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };