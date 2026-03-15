"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div onClick={() => toggleTheme()}>
      {theme === "dark" ? <SunIcon className="size-5"/> : <MoonIcon className="size-5"/>}
    </div>
  );
}

export default ThemeSwitcher;
