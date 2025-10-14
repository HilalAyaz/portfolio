"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? "bg-card/70 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full py-6 px-4 sm:px-6 mx-auto max-w-6xl">
        {" "}
        <div className="flex items-center justify-between w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex-shrink-0 min-w-0"
          >
            <Link href="/" className="block truncate">
              Hilal Ayaz
            </Link>{" "}
          </motion.div>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
            {" "}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors relative group duration-300 uppercase font-medium text-md lg:text-lg whitespace-nowrap flex-shrink-0"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:w-full" />
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors flex-shrink-0 p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-card/40 backdrop-blur-lg border border-border/50 rounded-lg mt-3 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-2 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 text-center hover:bg-primary/10 rounded-md text-md"
                  >
                    {item.name}
                  </Link>
                ))}
                <div
                  onClick={() => setIsOpen(false)}
                  className="pt-3 border-t border-border/50 flex justify-center"
                >
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
