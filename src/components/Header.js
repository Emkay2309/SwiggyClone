import React from 'react'
import logo from '../../logo.jpeg'
import { BiSolidOffer } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import '../styles/header.css'

function Header() {
  return (
    <div className='header-container'>
        <div className='logo-container'>
            <img className='logo' src={logo}></img>
        </div>
        <div className='navbar'>
            <ul className='navbar-ul'>
                <FaSearchDollar/>
                <li>Search</li>

                <BiSolidOffer/>
                <li>Offers</li>

                <AiOutlineLogin/>
                <li>Sign In</li>

                <FaCartArrowDown/>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header