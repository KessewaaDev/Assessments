import React from 'react'
import './App.css'
import Searchbar from './Searchbar'
import { boxes } from './cards'
import Boxcards from './Boxcards'


const FirstProviderpage = () => {
  return (
    <div className='fp-container'>
        <div className='fp-subcontain'>
            <h1>Trusted experts near you</h1>
            <p>Local providers to help legally, logistically, financially and emotionally.</p>
            <Searchbar />
            

        </div>
        <Boxcards cards={boxes}/>

        <div className='provider-container'>
            
                <p>We couldn't find a provider near you. But don't worry, please <a href='/contact'>contact us</a> and we'll personally help you find the support you need.</p>

            

        </div>
        

    </div>
  )
}

export default FirstProviderpage