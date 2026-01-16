// Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main content wrapper */}
      <main className="w-full flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
