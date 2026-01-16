import React from "react";

const COLOR_MAP = {
  white: "bg-white/20 text-gray-800",
  indigo: "bg-pink-50/30 text-indigo-800",
  pink: "bg-pink-50 text-pink-800",
  gray: "bg-gray-100 text-gray-800",
  // add more as needed
};

export default function Card({ title, subtitle, children, color = "white" }) {
  const bgClass = COLOR_MAP[color] || COLOR_MAP.white;

  return (
    <div
      className={`shadow-xs hover:shadow-xl hover:scale-105 transition-transform transition-shadow p-6 ${bgClass}`}
      data-aos="fade-up"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {subtitle && <p className="text-sm italic mb-4">{subtitle}</p>}
      <div className="text-gray-800">{children}</div>
    </div>
  );
}
