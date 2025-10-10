import React from 'react'
import './App.css'
import { guideCategories } from './guideCategories'
import Guidecard from './Guidecard'

const Guidespage = () => {
  return (
    <div className='gContainer'>
         <div className='guide1'>
        <h1>Step-by-step Guides</h1>
        <p> Everything to after death, broken down simply and clearly.</p>
        <Guidecard data={guideCategories}/>
      </div>
      
    </div>
  )
}

export default Guidespage