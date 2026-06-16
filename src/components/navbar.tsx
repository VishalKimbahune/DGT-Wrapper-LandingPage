"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BarChart3, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 h-16"
      initial={{ backgroundColor: "transparent", borderBottom: "1px solid transparent", backdropFilter: "blur(0px)" }}
      animate={{
        backgroundColor: scrolled ? "var(--hero-bg-overlay)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border-light)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(0px)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
            <BarChart3 className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold text-foreground">
            DGT<span className="text-[var(--accent-text)]">Wrapper</span>
          </span>
          <span
            className="ml-1.5 rounded-full border px-2 py-0.5 text-[10px] font-medium"
            style={{
              borderColor: "var(--border-light)",
              backgroundColor: "var(--glass-bg)",
              color: "var(--text-muted)",
            }}
          >
            by Pixaflip
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="group relative text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue-500 transition-all duration-200 group-hover:w-full" />
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={toggleTheme}
            className="cursor-pointer text-text-secondary transition-colors duration-200 hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button className="cursor-pointer text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-foreground">
            Log in
          </button>
          <button className="btn-primary !h-9 !rounded-full !px-5 !py-0 !text-[13px]">
            Get Started
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="cursor-pointer text-text-secondary transition-colors duration-200 hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex cursor-pointer text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b md:hidden"
            style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg)" }}
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleAnchor(e, link.href)}
                    className="flex min-h-[48px] items-center text-sm text-text-secondary transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-[48px] items-center text-sm text-text-secondary transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="mt-2 flex flex-col gap-3 pt-4 border-t" style={{ borderColor: "var(--border-light)" }}>
                <button className="w-full cursor-pointer text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-foreground">
                  Log in
                </button>
                <button className="btn-primary w-full justify-center !rounded-full !text-[13px]">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
