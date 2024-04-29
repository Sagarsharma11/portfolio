"use client";
import React, { useState, useEffect } from "react";
import Icon from "../../Icon";
import styles from "./Navbar.module.css";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // setIsMobile(window.innerWidth < 481);
      setIsMobile(window.innerWidth / window.devicePixelRatio <= 481);
    };
    console.log("window width ", window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <Hamburger />
      ) : (
        <div className={styles["navbar--container"]}>
          <div>
            <Icon />
          </div>
          <div className={styles["navbar-items"]}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Posts</li>
              <li>Blogs</li>
              <li>Upcoming</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
