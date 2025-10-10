import React from 'react'

const Reviewscard = ({info}) => {
  return (
    <div className='reviewscard-container'>
        {info.map((review) => (
        <div className='review-card' id = {review.id}>
            <div>
            <ul className='review-lists'>
                <li><img src={review.icon}/></li>
                <li><img src={review.icon}/></li>
                <li><img src={review.icon}/></li>
                <li><img src={review.icon}/></li>
                <li><img src={review.icon}/></li>
            </ul>
            </div>
            <h4>{review.title}</h4>
            <p className='p1'>{review.info}</p>
            <p className='p2'>{review.name}</p>

        </div>
        ))}

    </div>
  )
}

export default Reviewscard