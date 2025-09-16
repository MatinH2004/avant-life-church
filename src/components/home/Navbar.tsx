"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const navItems = [
  { href: "#locations", label: "Locations"},
  { href: "/connect", label: "Connect" },
  { href: "/about", label: "About Us" },
  { href: "/give", label: "Give"},
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center h-16 px-6 py-10 bg-white text-black">
      {/* Logo */}
      <Link href="/" className="text-2xl font-semibold tracking-tight flex items-center gap-2">
        AVANT LIFE CHURCH
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-gray-400 transition ${
                isActive ? "text-gray-800" : "text-black"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blurred Backdrop */}
            <motion.div
              className="fixed inset-0 bg-white/50 backdrop-blur-md z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

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