"use client";
import styles from "./FlowBitSideBar.module.css";
import { FaCircle } from "react-icons/fa";
export const FlowBitSideBar = ({topics}:{topics:string[]}) => {



  return (
    <div className={styles.sideBarMainContainer}>
      {topics?.map((ele, key) => (
        <p key={key} title={ele}>
          {/* <FaCircle size={18} /> */}
          {ele.length <= 20?ele:ele.slice(0,20)+".."}
        </p>
      ))}
    </div>
  );
};
