"use client";
import React, { useState, useEffect } from "react";
import Icon from "../../Icon";
import styles from "./Navbar.module.css";
import Hamburger from "./Hamburger";
import Link from 'next/link';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // Track if component has mounted

  useEffect(() => {
    setHasMounted(true); // Component has mounted

    const handleResize = () => {
      const mobileThreshold = 481;
      setIsMobile(window.innerWidth < mobileThreshold);
    };

    // Check window size on mount (client-side only)
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Return null if the component hasn't mounted yet to avoid hydration error
  if (!hasMounted) {
    return null;
  }

  return (
    <div className={styles["navbar--container--primary--spacing"]}>
      {isMobile ? (
        <Hamburger />
      ) : (
        <div className={styles["navbar--container"]}>
          <div>
            <Icon />
          </div>
          <div className={styles["navbar-items"]}>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <Link href={"/"}>Posts</Link>
              </li>
              <li>
                <Link href={"/"}>Blogs</Link>
              </li>
              <li>
                <Link href={"/"}>Upcoming</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
