"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

/**
 * Sticky navigation bar with smooth scroll links and theme toggle
 * Includes glassmorphic mobile responsive menu
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-hilal" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? "bg-card/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            <a href="/">Hilal Ayaz</a>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors relative group duration-500 uppercase font-medium text-lg"
              >
                {item.name}
                <span
                  className="
    absolute -bottom-1 left-0 h-0.5 w-0 
    bg-gradient-to-r from-primary via-secondary to-accent 
    opacity-0 
    transition-all duration-300 ease-out 
    group-hover:opacity-100 
    group-hover:w-full
    transform scale-x-0 
    group-hover:scale-x-100
    origin-left
  "
                />
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Glassmorphism */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 bg-card/50 backdrop-blur-lg border rounded-lg p-6 shadow-xl"
            >
              <div className="flex flex-col items-center space-y-4">
                {navItems.map((item) =>
                  item.href.startsWith("/#") ? (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <div className="pt-4 border-t w-full flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
