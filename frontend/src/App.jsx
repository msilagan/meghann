import Home from "./components/Home";
import Resume from "./components/Resume";
import { Routes, Route } from "react-router-dom";
import Favorites from "./components/Favorites";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/resume" element={<Resume />} />
      {/* Add /experience, /projects, /contact pages */}
    </Routes>
  );
}

