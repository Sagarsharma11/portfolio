"use client";
import React, { useState, useEffect } from "react";
import styles from "./Skills.module.css";
import Card from "./components/Card";
// import { iconData } from "./data/dataSets";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { GrStorage } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

// Define the type for the icon components
type IconComponentType = JSX.Element;

type IconData = {
  [key: string]: IconComponentType;
};


export const iconData: IconData[] = [
  { "HTML5": <FaHtml5 size={70} /> },
  { "Node JS": <FaNodeJs size={70} /> },
  { "Express JS": <SiExpress size={70} /> },
  { "Css3": <IoLogoCss3 size={70} /> },
  { "React JS": <FaReact size={70} /> },
  { "Next JS": <TbBrandNextjs size={70} /> },
  { "Mysql": <SiMysql size={70} /> },
  { "MongoDb": <GrStorage size={70} /> },
  { "Python": <FaPython size={70} /> },
  { "AWS": <FaAws size={70} /> },
];

type IconsType = {
  icons?: IconComponentType;
};


const Skills = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const jsonResponse = await fetch(
        `https://sagar.alphaworldtech.com/Technology/getAllTechnology.php`
        // `${process.env.NEXT_PUBLIC_API}/Technology/getAllTechnology.php`
      );
      const response = await jsonResponse.json();
      // console.log(response);
      setData(response?.data);
      let array: any[] = [];
      response?.data?.forEach((ele: any, index: number) => {
        let obj: IconsType = {};
         obj = ele;
        for(let i=0; i<iconData.length; i++ ){
          if(ele.technologyName == Object.keys(iconData[i])){
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
