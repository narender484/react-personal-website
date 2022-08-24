import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v0prd4k', 'template_g3ba87s', form.current, 'LYp9jyZXNyv7_ODT5')
     
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          
          <article className="contact_option">
            <MdEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>tippuluri.narender@gmail.com</h5>
            <a href="mailto:tippuluri.narender@gmail.com" target="_blank">Send a message</a>
            
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+61451842749</h5>
            <a href="https://api.whatsapp.com/send?phone+61451842749" target="_blank">Send a message</a>
            
          </article>
         

        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name= "email" placeholder="Your Email" required/>
          <textarea name="message" rows='4' placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">submit</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact