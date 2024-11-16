import React from "react"
import styles from "./componentsCss/CoursesBar.module.css"
import { IoSearch } from "react-icons/io5"

const CoursesBar = () => {
  return (
    <>
      <div className={styles.hero}>
        <ul className={styles.coursesL}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>REACTJS</li>
          <li>PYTHON</li>
          <li>C</li>
          <li>JAVA</li>
        </ul>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search tutorials here"
            className={styles.inputTag}
          />
          <div className={styles.search}>
            <IoSearch />
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursesBar
