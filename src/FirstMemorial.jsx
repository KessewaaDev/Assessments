import React from 'react'
import Button from './Button'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import './App.css'


const FirstMemorial = () => {
  return (
    <div className='fm-container'>
        <div className='fm-subcontain'>
            <h1>Funeral & Memorial Websites</h1>
            <p className='fmp'>Organizing a funeral event? Our memorial websites make it easy to tell guests where to go and how to help</p>
         <Button value="Create a free memorial" to ="/memorials"/>
          <Link>
         View example
         <img src=''/>
        
         </Link>

         <div className='fm-group'>
            <div className='fm-subgroup'>
                <h2>Share dates and locations</h2>
                <div className='fm-paragraph'>
                    <p>List all events in one place</p>
                    <p>Send one link to everyone</p>
                    <p>Maps and directions for easy travel</p>
                </div>
                <Button value="Create a free memorial" to ="/memorials"/>

            </div>
            <img src='Homepage2.webp' />

         </div>
         

        

         <div className='fm-group'>
            <img src='photo4.webp' />
            <div className='fm-subgroup'>
                <h2>Manage RSVPs and gifts</h2>
                <div className='fm-paragraph'>
                    <p>Track who's coming</p>
                    <p>Guests send flowers, meals & more</p>
                    <p>See who sent which gift</p>

                </div>
                <Button  value="Create a free memorial" to="/memorials"/>

            </div>

         </div>

         <div className='fm-group'>
            
            <div className='fm-subgroup'>
                <h2>Share and collect memories</h2>
                <div className='fm-paragraph'>
                    <p>Post stories, photos and videos</p>
                    <p>Invite others to contribute</p>
                    <p>Build a lasting tribute</p>

                </div>
                <Button  value="Create a free memorial" to="/memorials"/>

            </div>
            <img src='photo5.webp' />

         </div>

         <div className='fm-group'>
            <img src='photo6.webp' />
            <div className='fm-subgroup'>
                <h2>Share and collect memories</h2>
                <div className='fm-paragraph'>
                    <p>Post stories, photos and videos</p>
                    <p>Invite others to contribute</p>
                    <p>Build a lasting tribute</p>

                </div>
                <Button  value="Create a free memorial" to="/memorials"/>

            </div>


         </div>

         <div className='fm-group'>
             <div className='fm-subgroup'>
                <h2>Control website privacy</h2>
                <div className='fm-paragraph'>
                    <p>Choose who can view the site</p>
                    <p>Set password protection</p>
                    <p>Keep details off social media and Google</p>

                </div>
                <Button  value="Create a free memorial" to="/memorials"/>
                

            </div>
            <img src='photo7.webp' />


            </div>
         </div>

     </div>
  )
}

export default FirstMemorial