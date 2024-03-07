import React from 'react'
import '../styles/bestPlace.css'

function BestPlace({bestPlaceDetailJson}) {
    const title = bestPlaceDetailJson?.card?.card?.title;
    const brands = bestPlaceDetailJson?.card?.card?.brands;
  return (
    <div className='bestPlaceCard-container'>
        <h2>{title}</h2>
        <div className='place-container'>
            {
                brands.map((item , key) => (
                    <a href={item.link}  className='card-place'>{item.text}</a>
                ))
            }
        </div>
    </div>
  )
}

export default BestPlace