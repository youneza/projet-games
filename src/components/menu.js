import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';
import Home from './home'
import './menu.css'

const Menu=()=>{
    const [Mobile,setMobile]= useState(false)
    return(
        <nav className='navbar'>
       
        <h3 className='logo'>
        FREE GAMES
        </h3>
        <ul className= {Mobile? 'mobile-links' : 'links'} onClick={()=>setMobile(false)}>
            <Link to='/'><li>Home</li></Link>
            <Link to='./Browsergames'><li>Browser Games</li></Link>
            <Link to='./Pcgame'><li>Pc games</li></Link>

        </ul>
        <button className='mobile' onClick={() => setMobile(!Mobile)}>
            {Mobile? <ImCross/> : <FaBars/>}
          </button>
       
        
        </nav>
       
    )
   
}
<Home/>

export default Menu;