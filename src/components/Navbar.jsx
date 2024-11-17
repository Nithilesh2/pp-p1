import React, { useState } from "react"
import styles from "./componentsCss/Navbar.module.css"
import { IoMenu } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()
  const userId = localStorage.getItem("userId") || ""

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <h3 className={styles.logo} onClick={() => navigate("/")}>
          Course provider platform
          </h3>
        </div>
        <div className={styles.right}>
          <ul className={toggle ? styles.rightPagesA : styles.rightPages}>
            <li
              onClick={() => {
                navigate("/")
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/courses")
              }}
            >
              Courses
            </li>
            <li
              onClick={() => {
                navigate("/tutorials")
              }}
            >
              Tutorials
            </li>
            <li
              onClick={() => {
                navigate("/contact")
              }}
            >
              Contact
            </li>
            {userId === "" ? (
              <>
                <li
                  onClick={() => {
                    navigate("/login")
                  }}
                >
                  Log in
                </li>
              </>
            ) : (
              <li
                onClick={() => {
                  localStorage.removeItem("userId")
                  navigate("/")
                }}
              >
                Log out
              </li>
            )}
          </ul>
        </div>
        <div className={styles.toggleBtn}>
          <IoMenu onClick={() => setToggle(!toggle)} />
        </div>
      </nav>
    </>
  )
}

export default Navbar
