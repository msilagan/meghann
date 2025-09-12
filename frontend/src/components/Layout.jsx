import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">{children}</main>
      <Footer />
    </div>
  );
}
