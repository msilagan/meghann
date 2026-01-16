import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Favorites from "./components/Favorites";
import WhoAmI from "./components/WhoAmI";

export default function App() {
  const [darkMode, setDarkMode] = useState(null); // null = undecided

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    if (darkMode === null) return;

    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Prevent flash before theme is resolved
  if (darkMode === null) return null;

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/who-am-i" element={<WhoAmI />} />
      </Routes>
    </Layout>
  );
}
