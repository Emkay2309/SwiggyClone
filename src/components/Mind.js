import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../styles/mind.css'
  

function Mind({mindjson}) {
    const imgUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
    const info = mindjson?.card?.card?.gridElements?.infoWithStyle?.info;

    console.log(info);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const carousalCard = info.map((image, index)=>(
        <img key={index}  className='image' src={imgUrl+image?.imageId}></img>
    ))

    return (
        <div className='mind-container'>
            <h2>{mindjson?.card?.card?.header?.title}</h2>
            <div className='carousal-container'>
                <Carousel responsive={responsive} showDots={true}>
                    {carousalCard}
                </Carousel>
            </div>

        </div>
  )
}

export default Mind

