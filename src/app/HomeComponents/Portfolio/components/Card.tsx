import React from 'react'
import styles from "../Portfolio.module.css"

const Card = ({ele}:any) => {
  return (
    <div className={styles['card--box']}>
        <div className={styles["image--container"]}>
            <img src={ele?.path} alt="" />
        </div>
        <div className={styles['card--links']}>
            <a href={ele?.link} target='_blank' >Go</a>
        </div>
    </div>
  )
}

export default Card