import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <img className='logo' src='./logo.png' alt='logo'/>
        </div>
        <div className='h-container'>
            <p>Home</p>
            <p>Our Offerings</p>
            <p>Our Team</p>
            <p>Contact Us</p>
            <p>Blogs</p>
        </div>
        <div>
            <button className='register-btn'>Register Now</button>
        </div>
    </div>
  )
}

export default Navbar;