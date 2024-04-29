import React,{useState} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Hamburger.module.css";
import Icon from "@/app/Icon";
const Hamburger = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <div className={styles["navbar--container"]}>
        <div className={styles.iconContainer}>
          <Icon />
          <div className={`${styles.itemsContainer}
          ${isOpen?styles.menuOpen:
            styles.menuClose
          }`}>
            <ul className={styles.navbarItems}>
              <li>home</li>
              <li>about</li>
              <li>posts</li>
              <li>blog</li>
              <li>upcoming</li>
            </ul>
          </div>
        </div>
        <div className={styles["navbar-items"]}>
          <div onClick={()=>setOpen(!isOpen)} className={styles.hamburgerContainer}>
            <RxHamburgerMenu color={"#FFF"} size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
