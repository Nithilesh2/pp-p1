import React from 'react'
import Navbar from "../Navbar"
import CoursesBar from "../CoursesBar"
import CoursesVideos from "../CoursesVideos"
import styles from "./CoursesPages.module.css"

const PostgreSql = () => {
  return (
    <>
      <Navbar />
      <CoursesBar />
      <div className={styles.hero}>
        <CoursesVideos
          videoId="n2Fluyr3lbc"
          title="PostgreSQL in 100 Seconds"
        />
        <CoursesVideos
          videoId="cnzka7kF5Zk"
          title="Master POSTGRESQL in ONE VIDEO: Beginner to Advanced Course For Beginners"
        />
        <CoursesVideos
          videoId="b3ODTURCbKU"
          title="Introduction to PostgreSQL and RDBMS"
        />
        <CoursesVideos
          videoId="X_lRcgNbfJg"
          title="PostGreSQL Basics"
        />
        <CoursesVideos
          videoId="JxUWWoGwpt4"
          title="PostGreSQL Setup and Working with Postgresql"
        />
        <CoursesVideos
          videoId="6HYSr8iKots"
          title="SQL Commands in PostGreSQL"
        />
        <CoursesVideos
          videoId="FyjAobTT0PE"
          title="PostGreSQL Commands with Examples"
        />
        <CoursesVideos
          videoId="fPmnORfaDqA"
          title="PostGreSQL Clauses used in Select statement"
        />
        <CoursesVideos
          videoId="sKs4adbMvr8"
          title="Operators in PostGreSQL Part 1"
        />
        <CoursesVideos
          videoId="-9o4glIOFZM"
          title="Operators in PostGreSQL Part 2"
        />
        <CoursesVideos
          videoId="4Jwky13wVk0"
          title="Math Functions in PostGreSQL"
        />
      </div>
    </>
  )
}

export default PostgreSql
