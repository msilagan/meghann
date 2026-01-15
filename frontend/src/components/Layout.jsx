import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children, darkMode, setDarkMode }) {
  return (
    <div
      className={`
    min-h-screen flex flex-col
    bg-gradient-to-br
      from-indigo-100 via-white/20 to-pink-100/75
      dark:from-indigo-950 dark:via-gray-900 dark:to-pink-950
    transition-colors duration-700
    backdrop-blur-sm
  `}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">{children}</main>
      <Footer />
    </div>
  );
}
