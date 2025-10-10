import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Button = ({value, to}) => {
  return (
    <div>
        <Link to={to}>
        <button className='button'>
            <small>{value}</small>
            <img src="right-arrow.png" alt="arrow" className='button-arrow'/>

        </button>
        </Link>
    </div>
  )
}

export default Button