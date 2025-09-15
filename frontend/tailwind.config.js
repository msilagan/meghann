/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // manual toggle
    content: [
      "./index.html",           // include your HTML if needed
      "./src/**/*.{js,jsx,ts,tsx}" // include all your React components
    ],
    theme: { extend: {} },
    plugins: [],
  };
  