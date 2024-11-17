import React from "react"
import styles from "./componentsCss/TutorialsBox.module.css"

const TutorialsBox = (props) => {

  const startLearningClicked = ()=>{
    window.open(`https://www.w3schools.com/${props.header}`, '_blank_')
  }

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.one}>
          <img
            src={props.img}
            alt="img1"
            className={styles.image}
            loading="lazy"
          />
        </div>
        <div className={styles.two}>
          <h2 className={styles.header}>{props.header}</h2>
        </div>
        <div className={styles.three}>
          <button type="button" className={styles.button} onClick={startLearningClicked}>Start Learning</button>
        </div>
      </div>
    </>
  )
}

export default TutorialsBox
