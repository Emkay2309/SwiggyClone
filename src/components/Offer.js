import React from 'react'
import '../styles/offer.css'

function Offer({offerjson}) {
  const imgUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
    const info = offerjson?.card?.card?.imageGridCards?.info;
  return (
    <div className='offer-container'>
      <h2>Offer</h2>
      {
        info.map((image, index)=>(
          <img key={index} className='images' src={imgUrl+image?.imageId}></img>
      ))
      }
    </div>
  )
}

export default Offer