import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Hamburger.module.css";
import Icon from "@/app/Icon";
import Link from "next/link";

const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Explicitly define type

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false); // Close the menu
      }
    };

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    // Clean up the event listener when the component unmounts or menu closes
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <div className={styles["navbar--container"]} ref={menuRef}>
        <div className={styles.iconContainer}>
          <Icon />
          <div
            className={`${styles.itemsContainer} ${
              isOpen ? styles.menuOpen : styles.menuClose
            }`}
          >
            <ul className={styles.navbarItems}>
              <Link href="/" passHref>
                <li>home</li>
              </Link>
              <Link href="/about" passHref>
                <li>about</li>
              </Link>
              <Link href="/posts" passHref>
                <li>posts</li>
              </Link>
              <Link href="/blog" passHref>
                <li>blog</li>
              </Link>
              <a
                href="https://developer-stream.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Dev Stream</li>
              </a>
            </ul>
          </div>
        </div>
        <div className={styles["navbar-items"]}>
          <div
            onClick={() => setOpen(!isOpen)}
            className={styles.hamburgerContainer}
            aria-expanded={isOpen}
            aria-controls="navbar-items"
          >
            <RxHamburgerMenu color={"#FFF"} size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
