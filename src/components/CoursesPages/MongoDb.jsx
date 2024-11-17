import React from 'react'
import Navbar from "../Navbar"
import CoursesBar from "../CoursesBar"
import CoursesVideos from "../CoursesVideos"
import styles from "./CoursesPages.module.css"

const MongoDb = () => {
  return (
    <>
      <Navbar />
      <CoursesBar />
      <div className={styles.hero}>
        <CoursesVideos
          videoId="J6mDkcqU_ZE"
          title="MongoDB Tutorial in 1 Hour (2024) 🍃"
        />
        <CoursesVideos
          videoId="2Qj33fkKRo0"
          title="CRUD Operations in MongoDB"
        />
        <CoursesVideos
          videoId="IFMfHhhq0ls"
          title="Find vs FindOne in MongoDB"
        />
        <CoursesVideos
          videoId="-mYB6Ym8ZIc"
          title="Datatypes in MongoDB"
        />
        <CoursesVideos
          videoId="6Cv7ihA4388"
          title="Schema validation in MongoDB"
        />
      </div>
    </>
  )
}

export default MongoDb
