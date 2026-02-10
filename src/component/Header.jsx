import React from 'react'
import {Link} from 'react-router-dom';
import { Zap } from 'lucide-react';
import { useState,useEffect } from 'react';
import MenuBurger from './MenuBurger';



function Header() {
  const[menuOpen,setMenuOpen] = useState(false);
  const closeMenu = () =>{
    setMenuOpen(false);
  };
  useEffect(()=>{
    document.body.style.overflow=menuOpen ?"hidden":"auto";
  },[menuOpen]);
  return (
    <header id='head'>
        <nav id='navcon'>
            <div  id='logo-name'>
            
           <Link id='logo-link'> <Zap /></Link>
           {menuOpen &&( <div className='overlay' onClick={closeMenu}></div> )}
           <div id='devstream'>DEVSTREAM</div>
           
            </div>
            <ul id='ul-listing'>
            <Link className='link' to="/">Home</Link>
            <Link  className='link' to="/articles">Articles</Link>
            <Link className='link' to="/add-story" id='addstory'>Add Story</Link>
            </ul>
           <div className='burger' onClick={()=> setMenuOpen(true)}>
      <img src="/menu-burger.png" alt="" />

    </div>
           </nav>
           <MenuBurger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

    </header>
  )
}

export default Header