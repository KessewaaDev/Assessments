import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const MostviewedList = ({lists}) => {
  return (
    <div className='mv-list'>
        {lists.map((list) => (
            <Link to={list.path} id = {list.id}>
                <ul>
                    <li>{list.heading}</li>
                </ul>

            </Link>

        ))}

    </div>
  )
}

export default MostviewedList