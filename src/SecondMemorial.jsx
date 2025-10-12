import React from 'react'
import Button from './Button'
import './App.css'

const SecondMemorial = () => {
  return (
    <div className='sm-container'>
        <div className='sm-subcontain'>
            <div className='sm-group'>
                <div className='sm-subgroup'>
                    <h2>Autumn has what you need to manage life after loss</h2>
                    <p>Navigating life after a death and need more support ? Contact us and we'll help for free. </p>
                    <Button value="Contact us" to ="/contact" />

                </div>

            </div>

        </div>

    </div>
  )
}

export default SecondMemorial