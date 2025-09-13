import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children, darkMode, setDarkMode }) {
  return (
    <div
      className={`min-h-screen flex flex-col
        bg-gradient-to-br from-indigo-50 via-white to-pink-100/75 dark:from-indigo-900 `}
    >
      {/* dark:from-indigo-900 dark:via-gray-800 dark:to-pink-900
        transition-colors duration-500*/}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">{children}</main>
      <Footer />
    </div>
  );
}
