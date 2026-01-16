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
        from-indigo-100 via-white/10 to-pink-100/80
        dark:from-indigo-950 dark:via-gray-900 dark:to-pink-950
        transition-colors duration-700
        backdrop-blur-sm
      `}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main content wrapper */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
