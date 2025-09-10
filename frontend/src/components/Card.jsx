import React from "react";

export default function Card({ title, subtitle, children, color = "white" }) {
  const bgColor = `bg-${color}`;
  return (
    <div
      className={`${bgColor} rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6`}
      data-aos="fade-up"
    >
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      {subtitle && <p className="text-gray-600 italic mb-3">{subtitle}</p>}
      {children}
    </div>
  );
}
