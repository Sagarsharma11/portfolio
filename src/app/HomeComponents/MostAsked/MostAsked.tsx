"use client"
import React, { useState, useEffect } from 'react'
import styles from "./MostAsked.module.css"
import PrimaryLayout from '@/utils/components/PrimaryLayout';

const Contributions = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetchData();
  }, []);
  //git comment
  const fetchData = async () => {
    try {
      const jsonResponse = await fetch(
        `https://sagar.alphaworldtech.com/most-asked-question/getAllQuestion.php`
        // `${process.env.NEXT_PUBLIC_API}/most-asked-question`
      );
      const response = await jsonResponse.json();
      console.log(response?.data);
      setData(response?.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <PrimaryLayout>
    <div className={styles["mostAsked--container"]}>
      <h2 className={styles["title"]}>Most Asked</h2>
      <div className={styles["links--container"]}>
        {
          data.length ?
            data?.map((ele: any, key: any) => <div key={key}>{ele?.question}  <span>View<span className={styles["span2"]}> ({ele?.viewCount})</span></span></div>)
            : ""
        }
      </div>
    </div>
    </PrimaryLayout>
  )
}

export default Contributions