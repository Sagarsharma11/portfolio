import React from "react";
import styles from "./ContentArea.module.css";

type props = {
  htmlCode: string;
};

const ContentArea: React.FC<props> = ({ htmlCode }) => {
  return (
    <div
      className={styles.contentArea}
      dangerouslySetInnerHTML={{ __html: htmlCode }}
    ></div>
  );
};

export default ContentArea;
