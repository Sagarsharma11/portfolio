"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-canvas/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <a href="#home" className="text-lg font-semibold tracking-tight text-neutral-50">
          Sagar<span className="text-gradient">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-neutral-400 transition-colors hover:text-neutral-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-neutral-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-border/80 bg-canvas px-6 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm text-neutral-300 transition-colors hover:text-neutral-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
