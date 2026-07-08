import React, { createContext, useContext, useState, useEffect } from "react";

export const THEMES = [
  { id: "cyan",   name: "Cyan",    accent: "#00eee0", rgb: "0, 238, 224"    },
  { id: "indigo", name: "Índigo",  accent: "#818cf8", rgb: "129, 140, 248"  },
  { id: "violet", name: "Violeta", accent: "#c084fc", rgb: "192, 132, 252"  },
  { id: "rose",   name: "Rosa",    accent: "#f472b6", rgb: "244, 114, 182"  },
  { id: "amber",  name: "Ámbar",   accent: "#fbbf24", rgb: "251, 191, 36"   },
  { id: "green",  name: "Verde",   accent: "#4ade80", rgb: "74, 222, 128"   },
];

const ThemeContext = createContext();

const getInitialTheme = () => {
  try {
    const stored = localStorage.getItem("portfolioTheme");
    if (stored) {
      const { id } = JSON.parse(stored);
      return THEMES.find((t) => t.id === id) || THEMES[0];
    }
  } catch {}
  return THEMES[0];
};

const applyTheme = (theme) => {
  document.documentElement.style.setProperty("--accent", theme.accent);
  document.documentElement.style.setProperty("--accent-rgb", theme.rgb);
};

export const ThemeProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(activeTheme);
  }, [activeTheme]);

  const setTheme = (theme) => {
    setActiveTheme(theme);
    applyTheme(theme);
    try {
      localStorage.setItem("portfolioTheme", JSON.stringify({ id: theme.id }));
    } catch {}
  };

  return (
    <ThemeContext.Provider value={{ activeTheme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
