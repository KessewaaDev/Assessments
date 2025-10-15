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
                    <li><Link to='/providers'>Providers</Link></li>
                    <li><Link to = '/guides'>Guides</Link></li>
                    <li><Link to = '/memorials'>Memorials</Link></li>
                    <li><Link to ='/library'>Library</Link></li>
                    <li><Link to ='/glossary'>Glossary</Link></li>
                    

                </ul>
            </div>

            <div className='spr-3'>
                <li><Link to ='/about'>About</Link></li>
                <li><Link to ='/contact'>Contact</Link></li>
                <li><Link to = '/terms'>Terms</Link></li>
                <li><Link to ='/privacy'>Privacy</Link></li>
            </div>

            <div className='spr-4'>
                <ul>
                    <li><Link to ='/signup'>Sign up</Link></li>
                    <li><Link to = '/login'>Log in</Link></li>
                </ul>
                
                  
            </div>



        </nav>

           
        




        

    </div>
  )
}

export default Sidebar