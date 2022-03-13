import React from 'react'
import { Link } from "react-router-dom";
import home from "../assets/home-icon.png"

function Header() {
  return (
    <div className='header'>
    
    <div className='homeLink'>
    <Link to={"/"} ><img src={home} alt="Home-Icon" width="50px"/></Link>  
    </div>
    
    
    </div>
  )
}

export default Header