import React from "react";
import styles from "./AskMe.module.css";

const AskMe = () => {
  return (
    <div className={styles["AskMe--container"]}>
      <h2 className={styles["title"]}>Ask Me</h2>
      <div className={styles["cards--container"]}>
        <input type="email" placeholder="enter your email" />
        <textarea ></textarea>
        <div className={styles["submit--container"]}>
              <p>{">>"}</p>
              <p>Submit</p>
        </div>
      </div>
    </div>
  );
};

export default AskMe;
