

"use client";
import { AlignRight, Crown, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div id="nav-main">
        <nav id="nav">
          <h1 className="logo">
            <Crown id="crown" /> Port<span id="folio">folio </span>
          </h1>

          <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
            <li className="li">
              <Link href="/" className="link">
                Home
              </Link>
            </li>
            <li className="li">
              <Link href="/about" className="link">
                {" "}
                About
              </Link>
            </li>
            <li className="li">
              <Link href="/contact" className="link">
                Contact-Us
              </Link>
            </li>
          </ul>

          <button> Skills</button>

          <div className="navbar-menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <X id="bar" /> : <AlignRight id="bar" />}
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <ul
          className={`navbar-menu ${isMenuOpen ? "close" : ""}`}
          onClick={toggleMenu}
        >
          <li className="li list">
            <Link href="/" className="link">
              Home
            </Link>
          </li>
          <li className="li list">
            <Link href="/about" className="link">
              {" "}
              About
            </Link>
          </li>
          <li className="li list">
            <Link href="/contact" className="link">
              Contact-Us
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
{
  /* ====================================== */
}
