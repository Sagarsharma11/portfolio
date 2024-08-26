import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Hamburger.module.css";
import Icon from "@/app/Icon";
import Link from "next/link";
const Hamburger = ({ topics }: { topics: string[] }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className={styles["navbar--container"]}>
        <div className={styles.iconContainer}>
          {/* <Icon /> */}
          <div
            className={`${styles.itemsContainer}
          ${isOpen ? styles.menuOpen : styles.menuClose}`}
          >
            <ul className={styles.navbarItems}>
              {topics.map((ele, key) => {
                return(<Link key={key} href={"/"}>
                  <li>{ele}</li>
                </Link>)
              })}
              
            </ul>
          </div>
        </div>
        <div className={styles["navbar-items"]}>
          <div
            onClick={() => setOpen(!isOpen)}
            className={styles.hamburgerContainer}
          >
            <RxHamburgerMenu color={"gray"} size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
