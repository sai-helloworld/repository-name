// import { useState } from "react";
// import Navbar from "./Navbar.jsx";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <Navbar />
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [theme, setTheme] = useState("light"); // Default to light theme

  useEffect(() => {
    // Function to detect system theme preference
    const detectTheme = () => {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDarkScheme ? "dark" : "light");
    };

    // Detect theme on initial load
    detectTheme();

    // Listen for theme changes
    const themeChangeListener = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    themeChangeListener.addEventListener("change", detectTheme);

    // Cleanup listener when component unmounts
    return () => {
      themeChangeListener.removeEventListener("change", detectTheme);
    };
  }, []);

  // Apply the theme to the body tag
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <h1>{theme === "dark" ? "Dark Theme" : "Light Theme"} is applied</h1>
      <p>The theme is automatically detected based on your device settings.</p>
    </div>
  );
}

export default App;
