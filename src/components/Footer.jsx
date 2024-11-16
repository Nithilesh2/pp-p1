import React from 'react'
import styles from "./componentsCss/Footer.module.css"
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';
import { TiSocialLinkedin } from 'react-icons/ti';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.left}>Copyright © 2024 GovardhanTechnical.com</div>
        <div className={styles.right}>
          <ul className={styles.socialMedia}>
            <li><a className={styles.logoFb} href='#!'><IoLogoFacebook /></a></li>
            <li><a className={styles.logoGh} href='https://github.com/Govardhan201/'><IoLogoGithub /></a></li>
            <li><a className={styles.logoIg} href='https://www.instagram.com/its_govardhan_04/'><IoLogoInstagram /></a></li>
            <li><a className={styles.logoTt} href='#!'><IoLogoTwitter /></a></li>
            <li><a className={styles.logoLn} href='#!'><TiSocialLinkedin /></a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
