import React from 'react'

import Button from './Button'
import './App.css'

const SecondProvider = () => {
  return (
    <div className='sp-container'>
        <div className='sp-subcontain'>
            <div className='sp-group'>
                <div className='sp-subgroup'>
                    <h2>Can't find a provider near you?</h2>
                    <p>If you need help finding support, we'll personally connect you with someone trusted. For free</p>
                     <Button value="Contact us" to="/contact" />

                </div>

            </div>

        </div>

    </div>
  )
}

export default SecondProvider