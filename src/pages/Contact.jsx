import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar';
import style from "../css/Contact.module.css"
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import emailjs from "@emailjs/browser"

const Contact = () => {

  const form = useRef()
  const userNameRef = useRef()
  const userEmailRef = useRef()
  const userMobileRef = useRef()
  const userMessageRef = useRef()
  const [mailSent, setMainSent] = useState(false)
  

  const sendEmail = (e) => {
    e.preventDefault()
    setMainSent(true)

    emailjs
      .sendForm("service_khd4ons", "template_w587wv8", form.current, {
        publicKey: "PixE8S-7pHeZ6vNBj",
      })
      .then(
        () => {
          alert("Message Received")
          userNameRef.current.value = ""
          userEmailRef.current.value = ""
          userMobileRef.current.value = ""
          userMessageRef.current.value = ""
        },
      )
      .finally(() => {
        setMainSent(false)
      })
  }


  return (
    <div>
      <Navbar />
      <div className={style.contactMain}>
        <div className={style.topLeft}>
          
        </div>
        <div className={style.bottom}>
          <div className={style.bottomLeft}>
            <div className={style.bottomLeftTop}>
              <div className={style.bottomLeftTopCallToUsBox}>
                <div className={style.bottomLeftTopCallToUsCallIcon}>
                  <AiOutlinePhone />
                </div>
                <div className={style.bottomLeftTopCallToUs}>Call To Us</div>
              </div>
              <div className={style.bottomLeftTopOne}>
                We are available 24/7, 7 days a week.
              </div>
              <div className={style.bottomLeftTopTwo}>Phone: +919876543210</div>
            </div>
            <hr className={style.hr} />
            <div className={style.bottomLeftBottom}>
              <div className={style.bottomLeftBottomWriteToUsBox}>
                <div className={style.bottomLeftBottomEnvelopeIcon}>
                  <AiOutlineMail />
                </div>
                <div className={style.bottomLeftBottomWriteToUs}>
                  Write to us
                </div>
              </div>
              <div className={style.bottomLeftTopOne}>
                Fill out our form and we will contact you within 24 hours
              </div>
              <div className={style.bottomLeftTopTwo}>
                Emails: govardhan@exclusive.com
              </div>
              <div className={style.bottomLeftTopThree}>
                Emails: govardhan@exclusive.com
              </div>
            </div>
          </div>
          <div className={style.bottomRight}>
            <form
              className={style.bottomRightFormBox}
              ref={form}
              onSubmit={sendEmail}
            >
              <div className={style.bottomRightFormBoxTop}>
                <input
                  type="text"
                  className={style.bottomRightFormBoxTopName}
                  placeholder="Your Name *"
                  name="user_name"
                  ref={userNameRef}
                  required
                />
                <input
                  type="email"
                  className={style.bottomRightFormBoxTopEmail}
                  placeholder="Your Email *"
                  name="user_email"
                  ref={userEmailRef}
                  required
                />
                <input
                  type="tel"
                  className={style.bottomRightFormBoxTopTelNumber}
                  placeholder="Your Phone *"
                  maxLength={10}
                  name="user_mobile"
                  ref={userMobileRef}
                  required
                />
              </div>
              <div className={style.bottomRightFormBoxTopCenter}>
                <textarea
                  className={style.bottomRightFormBoxTopCenterYourMessage}
                  placeholder="Your Message"
                  rows={8}
                  name="message"
                  ref={userMessageRef}
                ></textarea>
              </div>
              <div className={style.bottomRightFormBoxTopBottom}>
                {mailSent ? (
                  <button
                    value="Send"
                    type="submit"
                    className={
                      style.bottomRightFormBoxTopBottomButtonSendingMessage
                    }
                    disabled
                  >
                    Sending Message...
                  </button>
                ) : (
                  <button
                    value="Send"
                    type="submit"
                    className={style.bottomRightFormBoxTopBottomButton}
                  >
                    Send Message
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
