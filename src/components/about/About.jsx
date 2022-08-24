import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {BiUserCheck} from 'react-icons/bi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
          <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Masters Graduate in IT</h5>
              <small>Majoring in software development</small>
              </article>
              <article className="about_card">
              <BiUserCheck className="about_icon"/>
              <h5>Hobbies</h5>
              <small>Playing chess, carrom and cricket</small>
              </article>
              <article className="about_card">
              <AiFillFolderOpen className="about_icon"/>
              <h5>Projects</h5>
              <small>30 plus projects</small>
              </article>
       </div>
       <p>
        I have graduated from Latrobe University and started learning new concepts
         in software development. Initially started with FREECODECAMP to learn
          HTML, CSS and BOOTSTRAP by completing the Responsive Web Design Certification and later completed JavaScript Algorithms and Data Structres
           and now currently learning REACT JS and SASS advanced topics to build some awesome websites.
      </p>
       <a href="#contact" className='btn btn-primary'> Let's Talk</a>
</div>
</div>

    </section>
  )
}

export default About