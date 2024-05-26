import React from "react";
import styles from "./Footer.module.css";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {

  return (
    <div className={styles["footer--container"]}>
      <div className={styles["footer-inner-container"]}>
        <div className={styles.footerLeft}>
          <img className={styles.sagarImage} src={"/image/bgremoveportfolio.png"} />
        </div>
        <div className={styles.footerRight}>
          <div className={styles.contentBox}>
            <div>
              <h2>About Me:</h2>
              {/* <img className={styles.stepImage} src="/image/footer.png" alt="" /> */}
            </div>
            <div>
              <p>
                Hello, I’m <span>Sagar</span>, a passionate and experienced full-stack developer specializing in Node.js. With a solid educational foundation in computer applications (BCA and MCA) and practical experience in the tech industry, I am committed to building efficient and scalable web applications.
              </p>
              <p>
                I began my career at <span>Alphaworldtech</span> as a part-time full-stack developer, honing my frontend and backend skills over one year. Now, I am with <span>Exzellenz Careershapers Pvt Ltd</span>, focusing on Node.js backend development. In the past nine months, I've designed RESTful APIs, managed databases, and ensured seamless system integration.
              </p>
              <p className={styles.viewMore}>View More</p>
            </div>
            <div>
              <div className={styles.socialMedia}>
                 <a href="#"><IoLogoLinkedin size={40} color={"#0077B5"} /></a> 
                 <a href="#"><FaFacebookSquare size={40} color={"#1877F2"} /></a> 
                 <a href="#"><FaSquareInstagram size={40} color={"#405DE6"} /></a> 
                 <a href="#"><FaSquareGithub size={40} color={"#181717"} /></a> 
                 <a href="#"><IoIosMail size={40} color={"#D93025"} /></a> 
                 <a href="#"><IoCallSharp size={40} color={"#4285F4"} /></a> 
              </div>
              <div className={styles.copyRight}>
                  <p>© 2024 Sagar. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
