"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="group"
    >
      <SunIcon
        weight="bold"
        className="absolute size-4 scale-100 rotate-0 transition-all duration-500 text-muted-foreground group-hover:text-primary dark:scale-0 dark:rotate-45"
      />
      <MoonIcon
        weight="bold"
        className="absolute size-4 scale-0 rotate-45 transition-all duration-500 text-muted-foreground group-hover:text-primary dark:scale-100 dark:rotate-0"
      />
    </Button>
  );
}

export default ThemeSwitcher;

// className="relative shadow-[0_35px_10px_rgba(0,0,0,0.00),0_23px_9px_rgba(0,0,0,0.01),0_13px_8px_rgba(0,0,0,0.03),0_6px_6px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.06)]"