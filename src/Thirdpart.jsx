import React from 'react'
import './App.css'
import Button from './Button'

const Thirdpart = ({staff}) => {
  return (
    <div className='container'>
    <div className='third-part'>
        {staff.map((data)=>(
               <div className='heroContent3'key={data.id}>
                < a href='https://www.google.com'>
                <img src={data.userImage} className='img'/>
                <p className='first'>
                    {data.userName}
                </p>
                <p className='second'>
                    {data.estate}
                </p>

                <div className='group'>
                    <img src={data.location}/>
                    <p className='g1'>{data.address}</p>
                </div>

                <div className='group'>
                    <img src={data.bulb} />
                    <p className='g1'>{data.division}</p>

                </div>

                <div className='group'>
                    <img src={data.phone}/>
                    <p className='g2'>{data.consultation}</p>

                </div>

                <div className='group'>
                    <img  src={data.image}/>
                    <p className='g2'>{data.verify}</p>
                </div>
                <Button value="View and contact" />
                </a>

              </div>

        ))}
        

    </div>
    </div>
  )
}

export default Thirdpart