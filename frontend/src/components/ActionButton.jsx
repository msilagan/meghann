// src/components/ActionButton.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function ActionButton({
  icon: Icon,
  iconSize = 20,
  text,
  to,
  external,
  download,
}) {
  const commonClasses = `
    relative inline-flex items-center gap-2 px-6 py-3 rounded-full
    font-semibold text-white 
    bg-gradient-to-r from-indigo-400 to-pink-300 dark:from-indigo-900 dark:to-pink-900
    shadow-lg overflow-hidden group hover:from-pink-500 hover:to-indigo-600
    transition-colors duration-300
  `;

  const innerSpan = (
    <>
      <Icon size={iconSize} />
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 bg-white opacity-10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
    </>
  );

  if (external) {
    return (
      <a
        href={to}
        download={download}
        className={commonClasses}
        target="_blank"
        rel="noreferrer"
      >
        {innerSpan}
      </a>
    );
  }

  return (
    <NavLink to={to} className={commonClasses}>
      {innerSpan}
    </NavLink>
  );
}
