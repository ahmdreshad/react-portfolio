import React from 'react'
import CTA from './CTA'
import HeaderIcons from './HeaderIcons'
import './Header.css'
import ME from '../../assets/me.png'

function Header(props) {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Ahmad Reshad</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <CTA />
        <HeaderIcons />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
