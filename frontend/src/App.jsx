import React from "react"; 
import { Routes, Route, NavLink } from "react-router-dom";
import Albums from "./components/Albums";

function Home() {
  return (
    <div className="py-12 text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to My Music App 🎶</h2>
      <p className="text-gray-600">Explore albums, artists, and more!</p>
    </div>
  );
}

function Artists() {
  return (
    <div className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">🎤 Artists</h2>
      <p className="text-gray-600">Artist info will go here.</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-indigo-600">🎵 My Music App</h1>
          <nav className="space-x-6 text-gray-600 font-medium">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-bold" : "hover:text-indigo-500"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/albums"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-bold" : "hover:text-indigo-500"
              }
            >
              Albums
            </NavLink>
            <NavLink
              to="/artists"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-bold" : "hover:text-indigo-500"
              }
            >
              Artists
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/artists" element={<Artists />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} My Music App — Built with React + Tailwind + Go
        </div>
      </footer>
    </div>
  );
}
