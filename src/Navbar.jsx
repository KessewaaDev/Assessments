
import './App.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './Sidebar'

const Navbar = ({data, logos}) => {
const[isOpen, setIsOpen] = useState(false)

  return (
    
        
            <nav className='nav-bar'>
            <a href={logos.path} className='logo'>
                <img src={logos.src}  alt='logo'/>
            </a>

          
            <ul className= "list-group">
            {data.map((infos) =>(
            
                <li key={infos.id}>
                    <NavLink to={infos.path} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        {infos.icon && <img src={infos.icon} alt={`${infos.title} icon`} />}
                        {infos.showText && <span>{infos.title}</span>}
                    </NavLink>
                </li>
                
                
            
          
        ))}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <img
             src={isOpen ? '/close.png' : '/hamburger.png'}
            alt="menu"
            className="hamburger-icon"
            />
      </div>
          
        </ul>
        
        
        <Sidebar isOpen={isOpen} logos={logos} onClose = {() =>setIsOpen(false)}/>
        
        </nav>
        
    
  )
}

export default Navbar