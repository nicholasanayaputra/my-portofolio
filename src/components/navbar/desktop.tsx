"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Hamburger from "./hamburger";
import Mobile from "./mobile";
import Logo from "./logo";
import { navLinks } from "@/lib/data/links";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  return (
    <header className="max-w-6xl mx-auto container p-5">
      <nav className="flex justify-between items-center ">
        <Link href={"/"}>
          <h1 className="font-bold">Portofolio.</h1>
        </Link>
        {/* Nav Link for pc */}
        <ul className="md:flex items-center gap-8 hidden">
          {navLinks.map(({ path, link }) => (
            <li key={path}>
              <Link
                href={path}
                className={`text-base font-medium ${
                  pathname === path ? "text-black" : "text-gray-400"
                }`}
              >
                {link}
              </Link>
            </li>
          ))}
          <Logo />
        </ul>

        {/* Hamburger menu */}
        <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />
      </nav>

      {/* Mobile Items menu */}
      <Mobile
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        navLinks={navLinks}
        pathname={pathname}
      />
    </header>
  );
};
