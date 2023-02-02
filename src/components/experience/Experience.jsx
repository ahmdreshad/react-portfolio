import React from 'react'
import './Experience.css'
import { FaCheckCircle } from 'react-icons/fa'

function Experience() {
  return (
    <section id="experience">
      <h5>What skills I Have</h5>
      <h2>My Experiences</h2>
      <div className="container experience__container">
        {/* ============ frontend =========== */}
        <div className="experience__frontend">
          <h3>Frontend Development </h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckCircle />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle />
              <div>
                <h4>Next JS 13</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle />
              <div>
                <h4>TailwindCss</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/*=========== backend ======= */}
        <div className="experience__backend">
          <h3>Backend Development </h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckCircle />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
