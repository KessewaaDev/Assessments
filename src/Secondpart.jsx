import React from 'react'
import Button from './Button'
import './App.css'
import Thirdpart from './Thirdpart'
import { data } from './data'

const Secondpart = () => {
  return (
    <div className='second-part'>
        <div className='hero-content2'>
        <h2>Vetted providers for every step after loss</h2>
         <h3>Find support from experts</h3>
         <Button value= "Find a provider" to="/providers"/>
         <Thirdpart staff={data} />
         </div>
    </div>
  )
}

export default Secondpart