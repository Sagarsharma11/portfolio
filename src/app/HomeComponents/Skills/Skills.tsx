import React from 'react';
import styles from "./Skills.module.css"
import Card from './components/Card';
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
const Skills = () => {
  const data = [
    {
      icons: <FaHtml5 size={70} />,
      name:"HTML5"
    },
    {
      icons: <FaNodeJs size={70} />,
      name:"Node JS"
    },
    {
      icons: <SiExpress size={70} />,
      name:"Express JS"
    },
    {
      icons: <IoLogoCss3 size={70} />,
      name:"Css3"
    },
    {
      icons: <FaReact size={70} />,
      name:"React JS"
    },
    {
      icons: <TbBrandNextjs size={70} />,
      name:"Next JS"
    },
    {
      icons: <SiMysql size={70} />,
      name:"Mysql"
    },
    {
      icons: <GrStorage size={70} />,
      name:"MongoDb"
    },
    {
      icons: <FaPython size={70}  />,
      name:"Python"
    },
    {
      icons: <FaAws size={70} />,
      name:"AWS"
    },
  ]
  return (
    <div className={styles["skills--container"]}>
        <h2 className={styles["title"]}>My Skills</h2>
        <div className={styles["card--container"]}>
                {
                    data.map((item, key)=>(<Card key={key} item={item}/>))
                }
        </div>
    </div>
  )
}

export default Skills