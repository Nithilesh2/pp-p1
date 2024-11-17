import React from 'react'
import styles from "./componentsCss/ExploreCourses.module.css"
import { useNavigate } from 'react-router-dom';

const ExploreCourses = (props) => {
  const navigate = useNavigate()
  const exploreCoursesBtnClicked = ()=>{
    navigate(props.navigate)
  }

  return (
    <>
      <div className={styles.hero}>
        <img src={props.img} alt={props.alt} className={styles.image} loading='lazy'/>
        <div className={styles.center}>
          <h3 className={styles.tutorialHeader}>{props.tutorialHeader}</h3>
          <p className={styles.tutorialDesc}>{props.tutorialDesc}</p>
          <button type='button' className={styles.tutorialBtn} onClick={exploreCoursesBtnClicked}>Start Watching</button>
        </div>
      </div> 
    </>
  )
}

export default ExploreCourses
