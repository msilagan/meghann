import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">{children}</main>
    </div>
  );
}
