"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const navItems = [
  { href: "/", label: "HOME" },
  { href: "/#locations", label: "LOCATIONS" },
  { href: "/connect", label: "CONNECT" },
  { href: "/about", label: "ABOUT US" },
  { href: "/give", label: "GIVE" },
];

type NavbarProps = {
  showOnScroll?: boolean;
};

export default function Navbar({ showOnScroll = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(!showOnScroll); // default: visible if not scroll-based
  const pathname = usePathname();

  useEffect(() => {
    if (!showOnScroll) return; // skip scroll logic if always visible

    const handleScroll = () => {
      setShow(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showOnScroll]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        flex justify-between items-center h-16 px-6
        bg-white text-black shadow-md
        transition-all duration-500
        ${
          show
            ? "opacity-100 translate-y-0"
            : showOnScroll
            ? "opacity-0 -translate-y-10"
            : ""
        }
      `}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-semibold tracking-tight flex items-center gap-2 md:ml-12"
      >
        AVANT LIFE CHURCH
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 md:mr-12 font-semibold">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-gray-400 ${
                isActive ? "text-gray-800" : "text-black"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blurred Backdrop */}
            {/* <motion.div
              className="fixed inset-0 bg-white/50 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            /> */}

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-64 bg-white text-black flex flex-col items-start py-10 px-6 z-20 shadow-lg"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg py-2 w-full ${
                      isActive ? "text-gray-400" : "hover:text-gray-400"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-black hover:text-gray-400"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
