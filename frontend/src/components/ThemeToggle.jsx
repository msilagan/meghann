import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`
        flex items-center justify-center w-6 h-6 rounded-full 
        bg-indigo-200 dark:bg-gray-800 
        text-indigo-600 dark:text-yellow-400
        shadow-md dark:shadow-yellow-300/50
        hover:scale-125 hover:rotate-12
        transition-all duration-300 ease-in-out
      `}
      aria-label="Toggle Dark Mode"
    >
      <span
        className={`
          transform transition-transform duration-500
          ${darkMode ? "rotate-0" : "rotate-180"}
        `}
      >
        {darkMode ? <FaSun size={10} /> : <FaMoon size={10} />}
      </span>
    </button>
  );
}
