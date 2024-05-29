import React, { useState } from "react";
import styles from "../Portfolio.module.css";
import SiteViewer from "./SiteViewer/SiteViewer";

const Card = ({ ele }: any) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [siteUri, setSiteUri] = useState({
    uri: "",
    type: "",
  });
  const handleShow = (path: any, type: any) => {
    setSiteUri((prev) => ({
      ...prev,
      uri: path,
      type,
    }));
    setShow(true);
  };

  return (
    <div className={styles["card--box"]}>
      <SiteViewer setShow={setShow} show={show} siteUri={siteUri} />
      <div className={styles["image--container"]}>
        <img src={ele?.path} alt="" />
      </div>
      <div className={styles["card--links"]}>
        <p
          onClick={() => {
            ele?.link?.length
              ? handleShow(ele?.link, "link")
              : handleShow(ele?.path, "image");
          }}
        >
          Go
        </p>
      </div>
    </div>
  );
};

export default Card;
