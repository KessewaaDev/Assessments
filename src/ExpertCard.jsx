import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const ExpertCard = ({item}) => {
  return (
    <div className='expertCard-container'>
        
       {item.map((card) =>(
        <Link to={card.path} id={card.id} className='expert-link'>
        <div className='expertCard-subcontain' >
            
                <img src={card.icon}/>
                <p>{card.description}</p>
            

        </div>
        </Link>
       )
    )} 
    

    </div>
  )
}

export default ExpertCard