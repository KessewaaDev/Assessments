import React from 'react'
import './App.css'
import Button from './Button'

const Firstpage = () => {
  return (
    <div className='first-page'>
      <div className='hero-content'>
        <h1>Make loss more livable</h1>
        <p>Need support after a death? Our trusted experts can help legally, logistically and emotionally.</p>
        <Button value= "Talk to someone for free" to="/providers"/>
        <div className='position-elements'>
        <ul><li><img src="star.png" alt="star" /></li>
        <li><img src="star.png" alt="star" /></li>
        <li><img src="star.png" alt="star" /></li>
        <li><img src="star.png" alt="star" /></li>
        <li><img src="star.png" alt="star" /></li>
        </ul>
        
        <p>Honestly,  it saved me - Christina H., Forest Hills,NY</p>
        </div>
      </div>
    </div>
  )
}

export default Firstpage