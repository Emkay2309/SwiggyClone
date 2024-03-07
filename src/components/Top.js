import React from 'react'
import Card from './Card'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Top({topdetailjson}) {
  const title = topdetailjson?.card?.card?.header?.title;
  const restaurantList = topdetailjson?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
  // const carousalCard = restaurantList.map((items,index)=> (
  //   <Card key={index} cardjson={items}/>
  //   // console.log(items);
  // ));

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  
  return (
    <div className='res-container'>
      <h2>{title}</h2>
      
      <div className='card-conatiner'>
        <Carousel responsive={responsive} showDots={false}>
            {
              restaurantList.map((items,index)=> (
                <Card key={index} cardjson={items}/>
                // console.log(items);
              ))
            }
        </Carousel>
      </div>
    </div>
  )
}
export default Top

