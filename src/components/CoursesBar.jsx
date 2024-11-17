import React, { useRef } from "react"
import styles from "./componentsCss/CoursesBar.module.css"
import { IoSearch } from "react-icons/io5"

const CoursesBar = () => {
  const inputRef = useRef()
  const searchClicked=()=>{
    const input = inputRef.current.value
    if(input === ''){
      alert('Please enter a search query')
      return
    }
    const removeSpaces = input.replace(/\s/g,'')
    window.open(`https://www.w3schools.com/${removeSpaces}`, '_blank_')
    inputRef.current.value = ''
  }

  return (
    <>
      <div className={styles.hero}>
        <ul className={styles.coursesL}>
          <li onClick={()=>window.open(`https://www.w3schools.com/html`, '_blank_')}>HTML</li>
          <li onClick={()=>window.open(`https://www.w3schools.com/css`, '_blank_')}>CSS</li>
          <li onClick={()=>window.open(`https://www.w3schools.com/js`, '_blank_')}>JAVASCRIPT</li>
          <li onClick={()=>window.open(`https://www.w3schools.com/reactjs`, '_blank_')}>REACTJS</li>
          <li onClick={()=>window.open(`https://www.w3schools.com/python`, '_blank_')}>PYTHON</li>
          <li onClick={()=>window.open(`https://www.w3schools.com/c`, '_blank_')}>C</li>
          <li onClick={()=>window.open(`https://www.w3schools.com/java`, '_blank_')}>JAVA</li>
        </ul>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search tutorials here"
            className={styles.inputTag}
            ref={inputRef}
          />
          <div className={styles.search}>
            <IoSearch onClick={searchClicked}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursesBar
