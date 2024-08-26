"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import styles from "./topics.module.css";
// import SideBar from '../components/SideBar/SideBar';
import { FlowBitSideBar } from "../components/FlowBitSideBar/FlowBitSideBar";
import ContentArea from "../components/ContentArea/ContentArea";
import PrimaryLayout from "@/utils/components/PrimaryLayout";
import Hamburger from "../components/Hamburger/Hamburger";

// import { useRouter } from 'next/router';

const page = ({ params }: any) => {
  const [data, setData] = useState([]);
  const { slug } = params;
  const technologyId = slug?.split("-")[1];


  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // Track if component has mounted

  const fetchData = async () => {
    try {
      //   const requestOptions = {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       id: technologyId,
      //     }),
      //   };
      //   console.log("Request Options:", requestOptions);
      //   const response = await fetch(
      //     `http://localhost/portfolio-backend/Posts/getPostsById.php`,
      //     requestOptions
      //   );
      //   if (!response.ok) {
      //     throw new Error(`HTTP error! Status: ${response.status}`);
      //   }
      //   const jsonData = await response.json();
      //   setData(jsonData?.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
    setHasMounted(true); // Component has mounted

    const handleResize = () => {
      const mobileThreshold = 769;
      setIsMobile(window.innerWidth < mobileThreshold);
    };

    // Check window size on mount (client-side only)
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Return null if the component hasn't mounted yet to avoid hydration error
  if (!hasMounted) {
    return null;
  }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log("Fetched Data:", data);

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
    <>
      <Navbar />
      <div className={styles["black--border"]}>
        {isMobile ? <Hamburger topics={htmlTopics} /> : ""}
      </div>
      <PrimaryLayout>
        <div className={styles["topics--mainContainer"]}>
          {isMobile ? "" : <FlowBitSideBar topics={htmlTopics} />}
          <ContentArea />
        </div>
      </PrimaryLayout>
    </>
  );
};

export default page;
