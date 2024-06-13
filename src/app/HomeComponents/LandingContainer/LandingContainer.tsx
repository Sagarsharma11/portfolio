"use client"
import React from "react";
import styles from "./LandingContainer.module.css";
import RightSideIcon from "./components/RightSideIcon";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";


const LandingContainer = () => {
  return (
    <div className={styles["Landing--container"]}>
      <div className={styles["svg--container"]}>
        <RightSideIcon />
      </div>
      <div className={styles["text--container"]}>
        <div className={styles["innerContainer"]}>
          <div className={styles["textOne"]}>
            <div>
              <MdKeyboardDoubleArrowRight />
            </div>
            <h2>I am Sagar</h2>
          </div>
          <div className={styles["textTwo"]}>
            <div>
              <MdKeyboardDoubleArrowRight />
            </div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full Stack Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.875rem", display: "inline-block" }}
              repeat={Infinity}
            />
            {/* <p><Typewriter text="full stack develope" delay={100} />r</p> */}
          </div>
          <div className={styles["btn-section"]}>
            <button>
              <a href="mailto:sagarsharmatech00@gmail.com">
              Hire Me
              </a>
            </button>
            <button>
              <a href={"/pdf/sagar.pdf"} download={true}>
              Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
