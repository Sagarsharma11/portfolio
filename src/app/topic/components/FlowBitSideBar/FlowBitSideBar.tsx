"use client";
import styles from "./FlowBitSideBar.module.css";
import { FaCircle } from "react-icons/fa";
export const FlowBitSideBar = () => {
  const htmlTopics = [
    "Introduction to HTML",
    "HTML Document Structure",
    "HTML Elements",
    "HTML Attributes",
    "HTML Headings",
    "HTML Paragraphs",
    "HTML Text Formatting",
    "HTML Lists",
    "HTML Links",
    "HTML Images",
    "HTML Tables",
    "HTML Forms",
    "HTML Input Types",
    "HTML Multimedia",
    "HTML Semantics",
    "HTML Block and Inline Elements",
    "HTML Class and Id Attributes",
    "HTML Styles",
    "HTML Scripts",
    "HTML Entities",
    "HTML5 New Elements",
    "HTML5 Semantic Elements",
    "HTML5 Forms",
    "HTML5 APIs",
    "HTML Accessibility",
    "HTML Best Practices",
  ];


  return (
    <div className={styles.sideBarMainContainer}>
      {htmlTopics.map((ele, key) => (
        <p title={ele}>
          {/* <FaCircle size={18} /> */}
          {ele.length <= 20?ele:ele.slice(0,20)+".."}
        </p>
      ))}
    </div>
  );
};
