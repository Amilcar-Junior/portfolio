"use client";

import { useState, useCallback } from "react";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/contexts/settings-context";
import { NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";

export function Navbar() {
  const { language, setLanguage, isDark, toggleTheme } = useSettings();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <nav
        className={`mx-4 mt-4 transition-all duration-300 ${
          isMenuOpen ? "bg-black/95" : "bg-white/70 dark:bg-black/70"
        } backdrop-blur-md rounded-[30px] shadow-lg max-w-[90%] md:max-w-[1200px] w-full`}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <button
            onClick={() => {
              const heroSection = document.getElementById("hero");
              if (heroSection) {
                heroSection.scrollIntoView({ behavior: "smooth" });
              }
              setIsMenuOpen(false);
            }}
            className="flex items-center"
          >
            <Image
              src={isDark ? "./img/logo_wite.png" : "./img/logo_black.png"}
              alt="Amilcar Júnior Logo"
              width={100}
              height={100}
              className="mr-2"
            />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-8">
            {NAV_ITEMS[language].map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("./docs/curriculo.pdf", "_blank")}
              title={language === "en" ? "Download CV" : "Baixar Currículo"}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
            >
              <Download className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 px-2 min-w-[40px]"
            >
              {language.toUpperCase()}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2">
            <div className="space-y-4">
              {NAV_ITEMS[language].map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-base font-medium text-gray-200 hover:text-white transition-colors w-full text-left py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
