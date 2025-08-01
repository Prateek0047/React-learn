import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemeButton";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darktheme = () => {
    setThemeMode("dark");
  };

  const lighttheme = () => {
    setThemeMode("light");
  };

  // actual change in theme using javascript

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darktheme, lighttheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
