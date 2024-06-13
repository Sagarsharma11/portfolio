import React from "react";
import styles from "./AskMe.module.css";

const AskMe = () => {
  return (
    <div className={styles["AskMe--container"]}>
      <h2 className={styles["title"]}>Ask Me</h2>
      <div className={styles["cards--container"]}>
        <input required={true} type="email" placeholder="enter your email" />
        <textarea required={true} ></textarea>
        <div className={styles["submit--container"]}>
        <div className={styles["btn-section"]}>
            <button>
              Send Mail
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AskMe;