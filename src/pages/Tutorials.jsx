import React from "react"
import Navbar from "../components/Navbar"
import CoursesBar from "./../components/CoursesBar"
import TutorialsBox from "../components/TutorialsBox"
import styles from "../css/Tutorial.module.css"

const Tutorials = () => {
  return (
    <div>
      <Navbar />
      <CoursesBar />
      <div className={styles.tutorials}>
        <TutorialsBox
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
          header="Python"
        />
        <TutorialsBox
          img="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          header="CSS"
        />
        <TutorialsBox
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
          header="HTML"
        />
        <TutorialsBox
          img="https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg"
          header="JS"
        />
        <TutorialsBox
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
          header="NodeJS"
        />
        <TutorialsBox
          img="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
          header="PHP"
        />
        <TutorialsBox
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
          header="ReactJS"
        />
      </div>
    </div>
  )
}

export default Tutorials
