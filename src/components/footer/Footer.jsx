import React from 'react'
import { FaFacebook, FaDribbbleSquare, FaGithubSquare } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        MrReact
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__icons">
        <a href="https:facebook.com">
          <FaFacebook />
        </a>
        <a href="https:github.com">
          <FaGithubSquare />
        </a>
        <a href="https:dribbble.com">
          <FaDribbbleSquare />
        </a>
      </div>
      <div className="footer__copyright">
        <small>Copyright at &copy; MrReact, all rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
