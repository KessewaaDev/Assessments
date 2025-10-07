import React from 'react'
import './App.css'

const Button = ({value}) => {
  return (
    <div>
        <a href=''>
        <button className='button'>
            <small>{value}</small>
            <img src="right-arrow.png" alt="arrow" className='button-arrow'/>

        </button>
        </a>
    </div>
  )
}

export default Button