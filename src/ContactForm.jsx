
import React from 'react'
import { useState } from 'react'
import Button from './Button'
import './App.css'


const ContactForm = () => {
  return (
    <div className='cf-container'>
        <div className='cf-subcontain'>
            <h1>Contact us at anytime</h1>
             
            <div className='cf-group'>
                <p>A real person will get back to you within a day</p>
               
                <form >
                <input type='text' placeholder='First Name' required/><br/>
                <input type='text' placeholder='Last Name' required /><br/>
                <input type='email' placeholder='Email' required /><br/>
                <select id="country" name="country" required><br/>
               <option value="">What can i help you with</option>
               <option value="ghana">Ghana</option>
                <option value="nigeria">Nigeria</option>
               <option value="kenya">Kenya</option>
              <option value="south-africa">South Africa</option>
            </select><br/>
            <input type='text' placeholder='Subject' required /><br/>
            <textarea placeholder='message'></textarea>
            <Button value= "Submit" />
                

                </form>


            </div>


        </div>

    </div>
  )
}

export default ContactForm