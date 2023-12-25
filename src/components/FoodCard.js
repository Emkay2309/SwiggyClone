import React from 'react'
import { MdStars } from "react-icons/md";
import '../styles/foodcard.css'

function FoodCard({foodjson}) {
    const imgUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

    return (
        <div className='foodcard-container'>
            <div className='foodcardimg-container'>
                <img className="foodcardimages" src={imgUrl+foodjson?.info?.cloudinaryImageId}></img>
            </div>
            <div className='foodcardimg-container-data'>
                <p>{foodjson?.info?.name}</p>
                <span className='star'><MdStars/></span>
                <span>{foodjson?.info?.avgRating}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{foodjson?.info?.sla?.deliveryTime}</span>
                <p>{foodjson?.info?.cuisines.join(", ")}</p>
                <p>{foodjson?.info?.areaName}</p>
            </div>    
        </div>
      )
}

export default FoodCard