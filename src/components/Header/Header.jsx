import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className="logo"/>

        <ul className='header-menu'>
        <li><a href="#main">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#plan">Plans</a></li>
            <li><a href="#testimonials">Testimonals</a></li>
            <li><a href="#testimonials">Join Us</a></li>

        </ul>
    </div>
  )
}

export default Header
