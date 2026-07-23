"use client";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
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
        <Link href="/" className={styles.logo}>
          Mon Portfolio
        </Link>

        <ul className={styles.menu}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${
                  pathname === link.href ? styles.active : ""
                }`}
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
