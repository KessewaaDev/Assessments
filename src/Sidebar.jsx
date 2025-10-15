import React from 'react'
import './App.css'


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
                    <li><a href='/providers'>Providers</a></li>
                    <li><a href="/guides">Guides</a></li>
                    <li><a href="/memorials">Memorials</a></li>
                    <li><a href="/library">Library</a></li>
                    <li><a href="/glossary" className='glossary'>Glossary</a></li>
                    

                </ul>
            </div>

            <div className='spr-3'>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/terms">Terms</a></li>
                <li><a href="/privacy" className='privacy'>Privacy</a></li>
            </div>

            <div className='spr-4'>
                <ul>
                    <li><a href="/signup">Sign up</a></li>
                    <li><a href="/login">Log in</a></li>
                </ul>
                
                  
            </div>



        </nav>

           
        




        

    </div>
  )
}

export default Sidebar