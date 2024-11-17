import React from 'react'
import Navbar from "../Navbar"
import CoursesBar from "../CoursesBar"
import CoursesVideos from "../CoursesVideos"
import styles from "./CoursesPages.module.css"

const Python = () => {
  return (
    <>
      <Navbar />
      <CoursesBar />
      <div className={styles.hero}>
        <CoursesVideos
          videoId="t2_Q2BRzeEE"
          title="Python Full Course❤️ | Variables & Data Types | Lecture 1"
        />
        <CoursesVideos
          videoId="lIId8IDP6TU"
          title="Strings & Conditional Statements | Lecture 2"
        />
        <CoursesVideos
          videoId="qVyvmzFxF_o"
          title="List & Tuple in Python | Lecture 3"
        />
        <CoursesVideos
          videoId="078tYSD7K8E"
          title="Dictionary & Set in Python | Lecture 4"
        />
        <CoursesVideos
          videoId="S73thl0AyFU"
          title="Loops in Python | While & For Loops | Lecture 5"
        />
        <CoursesVideos
          videoId="OvTH-7ESoRA"
          title="Functions & Recursion in Python | Lecture 6"
        />
        <CoursesVideos
          videoId="jU0cndZziO0"
          title="File Input/Output in Python | Lecture 7"
        />
        <CoursesVideos
          videoId="HeW-D6KpDwY"
          title="OOPS in Python | Object Oriented Programming | Classes & Objects | Lecture 8"
        />
        <CoursesVideos
          videoId="bAwmZVJeO5s"
          title="OOPS Part 2 | Object Oriented Programming | Lecture 9"
        />
      </div>
    </>
  )
}

export default Python
