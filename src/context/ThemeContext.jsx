import { useEffect, useContext, useState, createContext } from "react";

// Buat context
const ThemeContext = createContext();

// Fungsi untuk mendapatkan tema awal
const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false; // Default ke light mode jika `window` tidak tersedia
};

// Provider yang membungkus seluruh aplikasi
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // Efek untuk mengupdate class di <html> dan localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook agar lebih mudah digunakan di komponen lain
export const useTheme = () => useContext(ThemeContext);
