import React from 'react'
import Button from './Button'
import './App.css'

const Mission = () => {
  return (
    <div className='mission-container'>
        <div className='mission-subcontain'>
            <div className='mission-group'>
                <div className='m-group'>
                    <h2>We're on a mission to make a loss more livable</h2>
                    <p>We're technology experts who've experienced the challenges of analog death in a digital world. We knew there had to be a better way</p>
                    <Button value="Learn more"/>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Mission