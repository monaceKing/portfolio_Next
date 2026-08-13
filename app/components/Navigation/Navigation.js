"use client";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/projects", label: "Projets" },
    { href: "/a-propos", label: "À propos" },
    // { href: "/formation", label: "Formations" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={styles.nav}>
      <div className="container">
        {/* Bouton burger pour mobile */}
        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={isOpen ? styles.burgerOpen : ""}></span>
          <span className={isOpen ? styles.burgerOpen : ""}></span>
          <span className={isOpen ? styles.burgerOpen : ""}></span>
        </button>

        <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  link.href === "/contact"
                    ? styles.ctaButton
                    : `${styles.link} ${pathname === link.href ? styles.active : ""}`
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
