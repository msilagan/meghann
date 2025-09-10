import React from "react";

export default function Badge({ label, delay = 0 }) {
  return (
    <span
      className="
        px-4 py-2 rounded-full font-medium 
        shadow-md hover:shadow-xl hover:scale-105
        transition-transform transition-shadow duration-300
        bg-indigo-100
        text-indigo-800
        cursor-default
      "
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {label}
    </span>
  );
}
