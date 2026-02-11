import React from 'react'
import { Link } from 'react-router-dom'


function MenuBurger({menuOpen,setMenuOpen}) {
  if(!menuOpen) return null;
  return (

    <div className='menuBurger ${menuOpen ? "open" :""}'>
      <button className='exit-btn'
      onClick={()=> setMenuOpen(false)}>
        <div ><img id='imageexist' src="/exist.png" alt="" /></div>

      </button>
      
      <Link className='menu-art' to="/" onClick={()=>setMenuOpen(false)}>Home</Link>
      <Link className='menu-art' to="/Articles" onClick={()=>setMenuOpen(false)}>Articles</Link>
      <Link className='add-art' to="/add-story" onClick={()=>setMenuOpen(false)}>Add Story</Link>
       
    </div>
    
  );
}

export default MenuBurger