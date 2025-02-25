import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="p-2">
      {darkMode ? (
        <button
          className="flex cursor-pointer items-center"
          onClick={() => setDarkMode((prevTheme) => !prevTheme)}
        >
          <HiSun className="text-text-primary mr-2 text-2xl" /> Light Mode
        </button>
      ) : (
        <button
          className="flex cursor-pointer items-center"
          onClick={() => setDarkMode((prevTheme) => !prevTheme)}
        >
          <HiMoon className="text-text-primary mr-2 text-2xl" /> Dark Mode
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
