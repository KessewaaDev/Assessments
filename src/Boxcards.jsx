import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Boxcards = ({cards}) => {
  return (
    <div className='boxcard-container'>
        {cards.map((cards) =>(

         <Link to={cards.path}>
            <div className='boxcard-subcontain' id= {cards.id}>
                <span>{cards.title}</span>

            </div>
        </Link>
        ))}

    </div>
  )
}

export default Boxcards