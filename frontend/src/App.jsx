import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Albums from "./components/Albums";
import Favorites from "./components/Favorites";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      {/* Add /experience, /projects, /contact pages */}
    </Routes>
  );
}

