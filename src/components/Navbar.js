import React from 'react'
import Dhoni from '../image/Dhoni.jpeg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">My Chat</span>
      <div className="user">
      <img src={Dhoni} alt='image' />
        <span>Dhoni</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
