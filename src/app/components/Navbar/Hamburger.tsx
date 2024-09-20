import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Hamburger.module.css";
import Icon from "@/app/Icon";
import Link from "next/link";
const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className={styles["navbar--container"]}>
        <div className={styles.iconContainer}>
          <Icon />
          <div
            className={`${styles.itemsContainer}
          ${isOpen ? styles.menuOpen : styles.menuClose}`}
          >
            <ul className={styles.navbarItems}>
              <Link href={"/"}>
                <li>home</li>
              </Link>
              <Link href={"/"}>
              <li>about</li>
              </Link>
              <Link href={"/"}>
              <li>posts</li>
              </Link>
              <Link href={"/"}>
              <li>blog</li>
              </Link>
              <a  href="https://devloper-stream.vercel.app/" target="_blank">
              <li>Dev Stream</li>
              </a>
            </ul>
          </div>
        </div>
        <div className={styles["navbar-items"]}>
          <div
            onClick={() => setOpen(!isOpen)}
            className={styles.hamburgerContainer}
          >
            <RxHamburgerMenu color={"#FFF"} size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
