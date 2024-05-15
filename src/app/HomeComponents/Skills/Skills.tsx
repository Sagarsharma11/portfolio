"use client";
import React, { useState, useEffect } from "react";
import styles from "./Skills.module.css";
import Card from "./components/Card";

import { iconData } from "./data/dataSets";

const Skills = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const jsonResponse = await fetch(
        "http://localhost/portfolio-backend/Technology/getAllTechnology.php"
      );
      const response = await jsonResponse.json();
      console.log(response);
      setData(response?.data);
      let array: any[] = [];
      response?.data?.forEach((ele: any, index: number) => {
        let obj = ele;
        for(let i=0; i<iconData.length; i++ ){
          console.log(Object.keys(iconData[i]), " ===== ",ele.technologyName, "~", Object.keys(iconData[i]) ==ele.technologyName);
          if(ele.technologyName == Object.keys(iconData[i])){
            console.log("all are equals")
            obj.icons = iconData[i][Object.keys(iconData[i]) as any];
            array.push(obj)
          }
        }
        setData(array);

        // console.log(ele);
      });
      // console.log(`array => ${array}`);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles["skills--container"]}>
      <h2 className={styles["title"]}>My Skills</h2>
      <div className={styles["card--container"]}>
        {data.map((item:any, key:number) => (
          <Card key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
