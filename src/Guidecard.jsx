import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Guidecard = ({data}) => {
  return (
    <div className='sg-con'>
        {data.map((guide)=>(
            <Link to={guide.path} className="guide-card">
                <div className='sg-container'>
                <div className='guide-category'>
                    <div className='guide-group'>
                    <div >
                        <img src={guide.icon}className='guide-image'/>
                    </div>
                    <div>
                        <h4>{guide.title}</h4>
                        <small>{guide.description}</small>
                    </div>
                    </div>
                    <span className='arrow'>→</span>

                </div>
                </div>
      
      
      
      
    </Link>

        ))}
        

    </div>
      
    
  )
}

export default Guidecard