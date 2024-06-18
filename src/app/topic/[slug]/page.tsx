"use client"
import Navbar from '@/app/HomeComponents/Navbar/Navbar';
import React, { useState, useEffect } from 'react'
import styles from "./topics.module.css"
import SideBar from '../components/SideBar/SideBar';
import { FlowBitSideBar } from '../components/FlowBitSideBar/FlowBitSideBar';
import ContentArea from '../components/ContentArea/ContentArea';
// import { useRouter } from 'next/router';

const page = ({ params }: any) => {
  const [data, setData] = useState([])
  const { slug } = params;
  const technologyId = slug?.split("-")[1];

  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: technologyId
        })
      };

      console.log("Request Options:", requestOptions);

      const response = await fetch(`http://localhost/portfolio-backend/Posts/getPostsById.php`, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      setData(jsonData?.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  console.log("Fetched Data:", data);

  return (
    <>
      <Navbar />
      <div className={styles["topics--mainContainer"]}>
        <FlowBitSideBar />
        <ContentArea />
      </div>
    </>
  )
}

export default page