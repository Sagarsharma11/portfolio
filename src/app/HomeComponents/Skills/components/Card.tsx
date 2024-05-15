import React from 'react'
import styles from "../Skills.module.css"

const Card = ({item}:any) => {
  return (
    <div className={styles["card--box"]}>
        <div className={styles["card--icons"]}>{item?.icons}</div>
        <div className={styles["card--name"]}>
          {item["technologyName"]}
        </div>
    </div>
  )
}

export default Card