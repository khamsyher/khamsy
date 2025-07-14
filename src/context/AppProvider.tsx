import React, { createContext, useContext, type ReactNode, useState, useEffect } from 'react';
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

// Create Context
const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();

  // Sidebar state
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);

  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Language state
  const [language, setLanguage] = useState<string>(i18n.language);

  // Toggle Sidebar
  const toggleSidebar = () => setIsSidebarActive(!isSidebarActive);

  // Toggle Theme
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  // Change Language
  const changeLang = (newLang: string) => {
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  // Change body class to apply the correct font
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

  // Provide global state
  return (
    <AppContext.Provider value={{ isSidebarActive, toggleSidebar, theme, toggleTheme, language, changeLang }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook for using the context
const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };
