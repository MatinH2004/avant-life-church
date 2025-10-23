"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const navItems = [
  { href: "/", label: "HOME" },
  {
    label: "LOCATIONS",
    children: [
      { label: "NORTH SHORE", href: "/northshore" },
      { label: "SQUAMISH", href: "/squamish" },
      { label: "TORONTO", href: "/toronto" },
    ],
  },
  {
    label: "CONNECT",
    children: [
      { label: "CONNECT & ENGAGE", href: "https://avantlife.churchcenter.com/people/forms/724215" },
      { label: "PRAISE & PRAYER", href: "https://avantlife.churchcenter.com/people/forms/112752" },
      { label: "JOIN A LIFEGROUP", href: "https://avantlife.churchcenter.com/people/forms/72092" },
      { label: "YOUTUBE CHANNEL", href: "https://www.youtube.com/c/AvantLifeChurch" },
    ],
  },
  { href: "/about", label: "ABOUT" },
  { href: "/give", label: "GIVE" },
];

type NavbarProps = {
  showOnScroll?: boolean;
};

export default function Navbar({ showOnScroll = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuStack, setMobileMenuStack] = useState(navItems);
  const [show, setShow] = useState(!showOnScroll);
  const pathname = usePathname();

  useEffect(() => {
    if (!showOnScroll) return;
    const handleScroll = () => setShow(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showOnScroll]);

  // Desktop dropdown hover state
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  // Delay hiding dropdown to prevent flicker
  let hideTimeout: NodeJS.Timeout;
  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => setHoveredDropdown(null), 100);
  };
  const handleMouseEnter = () => {
    clearTimeout(hideTimeout);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        flex justify-between items-center h-16 px-4
        bg-white/95 text-black shadow-md
        transition-all duration-500
        ${show ? "opacity-100 translate-y-0" : showOnScroll ? "opacity-0 -translate-y-10" : ""}
      `}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 md:ml-12">
        <div className="relative w-12 h-12">
          <Image 
            src="/logo/blacklogo.png" 
            alt="Avant Logo" 
            fill 
            sizes="(max-width: 768px) 48px, (max-width: 1200px) 48px, 48px"
            className="object-contain" />
        </div>
        <span className="hidden md:inline-block text-2xl font-semibold tracking-wide mt-1">
          AVANT LIFE CHURCH
        </span>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 md:mr-12 md:mt-1 font-semibold relative">
        {navItems.slice(1).map((item) => {
          const isActive = pathname === item.href;
          const hasChildren = item.children && item.children.length > 0;

          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHoveredDropdown(hasChildren ? item.label : null)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onMouseEnter={handleMouseEnter}
                className={`transition hover:text-gray-400 flex items-center gap-1 ${
                  isActive ? "text-gray-800" : "text-black"
                }`}
              >
                {item.label} {hasChildren && <ChevronDown size={16} />}
              </button>

              {hasChildren && hoveredDropdown === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl border border-gray-200 rounded-sm flex flex-col"
                >
                  {item.children!.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href!}
                      className="px-4 py-2 text-black hover:bg-gray-100 flex justify-between items-center"
                    >
                      {child.label} <ChevronRight size={12} />
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
          setMobileMenuStack(navItems);
        }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-full md:hidden bg-white/95 text-black z-50 flex flex-col py-12 px-6"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-black hover:text-gray-400"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {/* Back Button */}
            {mobileMenuStack !== navItems && (
              <button
                className="mb-4 text-left text-xl font-semibold flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200/30 transition"
                onClick={() => setMobileMenuStack(navItems)}
              >
                <ChevronDown className="rotate-180" size={18} /> Back
              </button>
            )}

            {/* Menu Items */}
            <div className="mt-4 flex flex-col gap-2">
              {mobileMenuStack.map((item) => {
                const hasChildren = item.children && item.children.length > 0;

                if (hasChildren) {
                  return (
                    <button
                      key={item.label}
                      className="text-left py-4 px-4 text-2xl font-semibold rounded-md flex justify-between items-center w-full hover:bg-gray-300/70 transition"
                      onClick={() => setMobileMenuStack(item.children!)}
                    >
                      {item.label} <ChevronDown size={20} />
                    </button>
                  );
                } else {
                  return (
                    <Link
                      key={item.label}
                      href={item.href!}
                      className="text-left py-4 px-4 text-2xl font-semibold rounded-md hover:bg-gray-300/70 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                }
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
