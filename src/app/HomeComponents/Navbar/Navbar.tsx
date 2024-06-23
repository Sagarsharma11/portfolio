"use client";
import React, { useState, useEffect } from "react";
import Icon from "../../Icon";
import styles from "./Navbar.module.css";
import Hamburger from "./Hamburger";
import Link from 'next/link';
import PrimaryLayout from "@/utils/components/PrimaryLayout";

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
        <PrimaryLayout>
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
                <Link href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  About
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  Posts
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
        </PrimaryLayout>
  );
};

export default Navbar;
