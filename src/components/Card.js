import React from 'react'
import { MdStars } from "react-icons/md";
import '../styles/card.css'

function Card({cardjson}) {
    const imgUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const imgHead = cardjson?.info?.aggregatedDiscountInfoV3?.header;
    const imgsub = cardjson?.info?.aggregatedDiscountInfoV3?.subHeader;

  return (
    <div className='card-container'>
        <div className='img-container'>
            <img className="images" src={imgUrl+cardjson?.info?.cloudinaryImageId}></img>
        </div>
        <div className='img-container-data'>
            <p>{cardjson?.info?.name}</p>
            <span className='star'><MdStars/></span>
            <span>{cardjson?.info?.avgRating}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>{cardjson?.info?.sla?.deliveryTime}</span>
            <p>{cardjson?.info?.cuisines.join(", ")}</p>
            <p>{cardjson?.info?.areaName}</p>
        </div>    
    </div>
  )
}

export default Card