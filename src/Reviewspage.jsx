import React from 'react'
import { reviews } from './information'
import Reviewscard from './Reviewscard'
import Button from './Button'


const Reviewspage = () => {
  return (
    <div className='rcontainer'>
    <div className='reviews-container'>
        <div className='reviews-subcontain'>
            <div className='reviews-info'>
                <h2>We've helped more than 40,000 bereaved families</h2>
                <Reviewscard info= {reviews}/>
                <Button value="About Autumn" to = "/about"/>


            </div>

        </div>

    </div>
    </div>
  )
}

export default Reviewspage