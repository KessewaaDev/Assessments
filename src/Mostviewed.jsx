import React from 'react'
import './App.css'
import { libraryArticles } from './article'
import MostviewedList from './MostviewedList'

const Mostviewed = () => {
  return (
    <div className='mostviewed-container'>
        <div className='mostviewed-subcontain'>
            <div className='mv-group'>
                <h2>Most viewed library articles</h2>
            </div>
            <MostviewedList lists={libraryArticles} />


        </div>
    </div>
  )
}

export default Mostviewed