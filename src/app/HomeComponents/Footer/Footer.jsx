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
                 <a href="https://www.linkedin.com/in/sagar-sharma-697a2519b/" target="_blank"><IoLogoLinkedin size={40} color={"#fff"} /></a> 
                 <a href="https://www.facebook.com/sgr.sharma.5?mibextid=ZbWKwL" target="_blank"><FaFacebookSquare size={40} color={"#fff"} /></a> 
                 <a href="https://www.instagram.com/sagars_soul?igsh=MXVzbWp1ZThua3Ft" target="_blank"><FaSquareInstagram size={40} color={"#fff"} /></a> 
                 <a href="https://github.com/Sagarsharma11" target="_blank"><FaSquareGithub size={40} color={"#fff"} /></a> 
                 <a href="mailto:sagarsharmatech00@gmail.com" ><IoIosMail size={40} color={"#fff"} /></a> 
                 <a href="tel:7366986973" ><IoCallSharp size={40} color={"#fff"} /></a> 
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
