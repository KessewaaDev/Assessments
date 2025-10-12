import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

const Navbar = ({data, logos}) => {
  return (
    
        
            <nav className='nav-bar'>
            <a href={logos.path} className='logo'>
                <img src={logos.src}  alt='logo'/>
            </a>
            <ul className='list-group'>
            {data.map((infos) =>(
            
                <li key={infos.id}>
                    <NavLink to={infos.path} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        {infos.icon && <img src={infos.icon} alt={`${infos.title} icon`} />}
                        {infos.showText && <span>{infos.title}</span>}
                    </NavLink>
                </li>
                
            
          
        ))}
        </ul>
        
        </nav>
        
    
  )
}

export default Navbar