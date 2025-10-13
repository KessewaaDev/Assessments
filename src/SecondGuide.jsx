import React from 'react'
import Button from './Button'
import './App.css'

const SecondGuide = () => {
  return (
    <div className='fg-container'>
        <div className='fg-subcontain'>
            <div className='fg-group'>
                <div className='fg-subgroup'>
                    <h2>Autumn has what you need to manage after loss</h2>
                    <p>Navigating life after a death and need more support ? Contact us we'll help for free</p>
                    <Button value="Contact us" to='/contact'/>

                </div>

            </div>

        </div>


    </div>
  )
}

export default SecondGuide