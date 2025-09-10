import React from "react";

export default function Badge({ label, delay = 0, color = "indigo" }) {
  // Tailwind dynamic colors
  const bgColor = `bg-${color}-100`;
  const textColor = `text-${color}-800`;

  return (
    <span
      className={`px-4 py-2 rounded-full font-medium shadow-md hover:shadow-xl transition-transform duration-300 ${bgColor} ${textColor} cursor-default`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {label}
    </span>
  );
}
