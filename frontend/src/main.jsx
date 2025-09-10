import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

AOS.init({
  duration: 800,      // animation duration
  easing: "ease-out", // easing function
  once: true,         // animate only once
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
