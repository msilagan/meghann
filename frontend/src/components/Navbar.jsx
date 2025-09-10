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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-600">Meghann Silagan</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-bold border-b-2 border-indigo-600"
                  : "hover:text-indigo-500 transition-colors duration-200"
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
            className="focus:outline-none text-gray-600 hover:text-indigo-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col px-6 py-4 space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-bold block py-2"
                    : "text-gray-600 hover:text-indigo-500 block py-2 transition-colors duration-200"
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
