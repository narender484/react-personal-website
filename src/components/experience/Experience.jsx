import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2> My Experience</h2>
      <div className="container experience_container">
        <div classname="experience_frontend">
          <h3>Frontend Developer</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
            <h4>HTML</h4>
            <small className='text-light'> Experienced</small>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
            <h4>CSS</h4>
            <small className='text-light'> Experienced</small>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
            <h4>JAVA SCRIPT</h4>
            <small className='text-light'> Experienced</small>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
            <h4>BOOTSTRAP</h4>
            <small className='text-light'> Experienced</small>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icon'/>
            <h4>REACT JS</h4>
            <small className='text-light'> Experienced</small>
            </article>
            
       </div>
        </div>
      </div>

    </section>
  )
}

export default experience