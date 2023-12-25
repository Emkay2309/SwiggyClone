import React from 'react'
import FoodCard from './FoodCard'

function ResCard({resdetailjson }) {
  const title = resdetailjson?.card?.card?.header?.title;
  const resDetails = resdetailjson?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
  // console.log(resDetails);
  return (
    <div className='res-container'>
      <h2>Restaurants with online food delivery in Delhi</h2>
      <div className='cards-conatiner'>
        {
          resDetails.map((items)=> (
            <FoodCard foodjson={items}/>
          ))
        }
      </div>
    </div>
  )
}

export default ResCard