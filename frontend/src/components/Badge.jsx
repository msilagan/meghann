import React from "react";
export default function Badge({ label }) {
  return (
    <span className="relative inline-block rounded-full p-[2px]">
      {" "}
      {/* Gradient border wrapper */}{" "}
      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-300 to-blue-300"></span>{" "}
      {/* Inner transparent badge */}{" "}
      <span className="relative inline-block px-4 py-2 rounded-full bg-white border border-transparent text-gray-600 font-small">
        {" "}
        {label}{" "}
      </span>{" "}
    </span>
  );
}
