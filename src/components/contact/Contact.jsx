import React from 'react'
import { useRef } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa'
import emailjs from 'emailjs-com'

import './Contact.css'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    

    emailjs
      .sendForm(
        'service_i70yiim',
        'template_ob7z47f',
        form.current,
        '6xkMOF5uxlZi3SJI8'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ahmedd.code@gmail.com</h5>
            <a
              href="mailto:ahmedd.code@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Mr React</h5>
            <a href="https://m.me/ahmdreshad1" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91234567890</h5>
            <a
              href="https://api.whatsapp.com/send/phone=+919392875900"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* === end of contact options  */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
