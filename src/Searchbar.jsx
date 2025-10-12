import React from 'react'
import './App.css'

const Searchbar = () => {
  return (
    <div className='searchbar-container'>
        <div className='searchbar'>
            <img src='location.png' className='location-icon'/>
            <input type='text' placeholder='Enter location' className='search-input' />
             <button className='search-btn'>
                <img src='search.png' className='search-icon' />

             </button>
        </div>

    </div>
  )
}

export default Searchbar