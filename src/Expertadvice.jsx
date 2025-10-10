import React from 'react'
import { items } from './advise'
import ExpertCard from './ExpertCard'

const Expertadvice = () => {
  return (
    <div className='expert-container'>
        <div className='expert-subcontain'>
            <h1>Expert advice from our Support Library</h1>
            <h3>Whether you're planning a funeral, settling an estate, or just trying to understand what happens next</h3>
            <ExpertCard item={items} />
             
        </div>

    </div>
  )
}

export default Expertadvice