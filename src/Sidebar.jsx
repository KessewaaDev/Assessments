import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'


const Sidebar = ({ isOpen,  logos, onClose}) => {
  return (
    <div className='side-profile'>
        <nav className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className='spr-1'>
            <a href={logos.path}>
                <img src={logos.src} />
            </a>
            <button onClick = {onClose} className='close-btn'>X</button>
            </div>

             <div className='spr-2'>
                <ul>
                    <li><Link to='/providers'onClick={onClose}>Providers</Link></li>
                    <li><Link to = '/guides' onClick={onClose}>Guides</Link></li>
                    <li><Link to = '/memorials' onClick={onClose}>Memorials</Link></li>
                    <li><Link to ='/library' onClick={onClose}>Library</Link></li>
                    <li><Link to ='/glossary' onClick={onClose}>Glossary</Link></li>
                    

                </ul>
            </div>

            <div className='spr-3'>
                <li><Link to ='/about' onClick={onClose}>About</Link></li>
                <li><Link to ='/contact' onClick={onClose}>Contact</Link></li>
                <li><Link to = '/terms' onClick={onClose}>Terms</Link></li>
                <li><Link to ='/privacy'onClick={onClose}>Privacy</Link></li>
            </div>

            <div className='spr-4'>
                <ul>
                    <li><Link to ='/signup' onClick={onClose}>Sign up</Link></li>
                    <li><Link to = '/login' onClick={onClose}>Log in</Link></li>
                </ul>
                
                  
            </div>



        </nav>

           
        




        

    </div>
  )
}

export default Sidebar