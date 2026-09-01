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
      className="group"
      onClick={toggleTheme}
      size="icon"
      variant="outline"
    >
      <SunIcon
        className="absolute size-4 rotate-0 scale-100 text-muted-foreground transition-all duration-500 group-hover:text-primary dark:rotate-45 dark:scale-0"
        weight="bold"
      />
      <MoonIcon
        className="absolute size-4 rotate-45 scale-0 text-muted-foreground transition-all duration-500 group-hover:text-primary dark:rotate-0 dark:scale-100"
        weight="bold"
      />
    </Button>
  );
}

export default ThemeSwitcher;

// className="relative shadow-[0_35px_10px_rgba(0,0,0,0.00),0_23px_9px_rgba(0,0,0,0.01),0_13px_8px_rgba(0,0,0,0.03),0_6px_6px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.06)]"
