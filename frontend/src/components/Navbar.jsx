import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { path: "/", label: "Home" },
    { path: "/favorites", label: "Favorites" },
    { path: "/resume", label: "Resume" },
  ];

  return (
    <header className="w-full top-0 z-50 border-b border-gray-200 shadow-xs">

      <div className="max-w-6xl mx-auto px-2 py-3 flex items-center justify-between ">
        {/* Logo */}
        <h1 className="text-2xl text-indigo-700">Meghann Silagan</h1>

        {/* Desktop Menu */}
        <nav className="md:flex space-x-6 text-indigo-600 font-medium">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-800"
                  : "hover:border-b-2 border-indigo-800 transition-colors duration-200 opacity-70"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white hover:text-indigo-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-transparent">
          <ul className="flex flex-col px-6 py-4 space-y-2 text-white">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-400 font-bold block py-2"
                    : "hover:text-indigo-300 block py-2 transition-colors duration-200"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
