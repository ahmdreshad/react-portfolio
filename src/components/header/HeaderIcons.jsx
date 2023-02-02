import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaDribbble } from 'react-icons/fa'

function HeaderIcons() {
  return (
    <div className="header__icons">
      <a
        href="https://www.linkedin.com/in/ahmdreshad/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/ahmdreshad" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://dribbble.com" target="_blank" rel="noreferrer">
        <FaDribbble />
      </a>
    </div>
  )
}

export default HeaderIcons
