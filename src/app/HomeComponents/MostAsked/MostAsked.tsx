import React from 'react'
import styles from "./MostAsked.module.css"

const Contributions = () => {
  return (
    <div className={styles["mostAsked--container"]}>
        <h2 className={styles["title"]}>Most Asked</h2>
        <div className={styles["links--container"]}>
                    {
                        Array.from({length:5},(_,i)=>i+1)
                        .map((_,key)=><div key={key}>Quis nostrud exercitation ullamco laboris. <span>View</span></div>)
                    }
        </div>
    </div>
  )
}

export default Contributions