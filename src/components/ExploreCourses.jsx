import React from 'react'
import styles from "./componentsCss/ExploreCourses.module.css"

const ExploreCourses = (props) => {
  return (
    <>
      <div className={styles.hero}>
        <img src={props.img} alt={props.alt} className={styles.image} loading='lazy'/>
        <div className={styles.center}>
          <h3 className={styles.tutorialHeader}>{props.tutorialHeader}</h3>
          <p className={styles.tutorialDesc}>{props.tutorialDesc}</p>
          <button type='button' className={styles.tutorialBtn}>Start Watching</button>
        </div>
      </div> 
    </>
  )
}

export default ExploreCourses
