import React from "react";

export default function Badge({ label, size = "md" }) {
  // Define size options
  const sizes = {
    sm: {
      padding: "px-1 py-1 sm:px-2 sm:py-2",
      text: "text-xs",
    },
    md: {
      padding: "px-4 py-2",
      text: "text-sm",
    },
    lg: {
      padding: "px-6 py-3",
      text: "text-base",
    },
  };

  const { padding, text } = sizes[size] || sizes.md;

  return (
    <span className="relative inline-block rounded-full p-[1px]">
      {/* Gradient border wrapper */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-300 to-blue-300 dark:from-pink-300 dark:to-indigo-500"></span>

      {/* Inner badge */}
      <span
        className={`relative inline-block ${padding} rounded-full bg-white border border-transparent text-gray-600 font-medium dark:bg-indigo-950 dark:text-gray-50 ${text}`}
      >
        {label}
      </span>
    </span>
  );
}
