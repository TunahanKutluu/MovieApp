import React from 'react'
import { PiFilmReelFill } from "react-icons/pi";
import { TiHome } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
        <div className="left">
        <h1>MovieApp</h1>
        </div>
        <div className='center'>
        <PiFilmReelFill />
        </div>
        <div className='right'>
        <ul>
            <li> <TiHome/> </li>
            <li> <FaHeart /></li>
        </ul>
        </div>
        </nav>
    </div>
  )
}

export default Navbar