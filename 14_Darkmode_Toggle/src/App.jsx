import { useEffect, useState } from "react"
import "./app.css"

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  },[darkMode]);

  return(
    <div className="app">
      <h1>Dark Toggle App</h1>
      <p>This theme stays after the page is reloaded.</p>
      <button onClick={() => setDarkMode((prev) => !prev)}>Switch to {darkMode ? "light" : "dark"}mode</button>
    </div>
  );
}
export default App;