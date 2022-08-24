import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#'className='footer_logo'>NARENDER REDDY TIPPULURI</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
       
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://twitter.com"><AiFillTwitterSquare/></a>

      </div>
      <div className="footer_copyright">
        <small>&copy; NARENDER Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer