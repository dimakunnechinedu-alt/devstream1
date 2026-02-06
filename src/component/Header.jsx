import React from 'react'
import {Link} from 'react-router-dom';
import { Zap } from 'lucide-react';


function Header() {
  return (
    <header id='head'>
        <nav id='navcon'>
            <Link id='logo-name'>
           <div id='logo-link'> <Zap /></div>
           <div id='devstream'>DEVSTREAM</div>
            </Link>
            <ul id='ul-listing'>
            <Link className='link' to="/">Home</Link>
            <Link  className='link' to="/articles">Articles</Link>
            <Link className='link' to="/add-story" id='addstory'>Add Story</Link>

            </ul>
            <div className='manuburger'>
              <img src="/menu-burger.png" alt="" id='burgerimg' />
            </div>
           </nav>

    </header>
  )
}

export default Header