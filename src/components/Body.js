import React,{useEffect} from 'react'
import Offer from './Offer'
import Mind from './Mind'
import Top from './Top'
import ResCard from './ResCard'
import url from '../config/ConstURL'
import { useEffect , useState} from 'react'
import BestPlace from './BestPlace'


function Body() {
    
    const[mindData , setMindData] = useState({});
    const[resData , setResData] = useState({});
    const[offerData , setOfferData] = useState({});
    const[topData , settopData] = useState({});
    const[bestPlaceData , setBestPlaceData] = useState({});

    useEffect(()=> {
        fetchURL();
    },[]);

    const fetchURL = async()=> {
        try{
            const data = await fetch(url);
            const completeJSON = await data.json();

            setOfferData(completeJSON.data?.cards[0]);
            setMindData(completeJSON.data?.cards[0]);
            settopData(completeJSON.data?.cards[1]);
            setResData(completeJSON.data?.cards[4]);
            setBestPlaceData(completeJSON.data?.cards[6]);

        }
        catch(err) {
            console.log(err);
        }
    }

    if(Object.keys(mindData).length === 0) {
        return <h1>Loading. . .</h1>
    }

    // console.log(resData);
    
  return (
    <div className='body-container'>
        {/* <Offer  offerjson={offerData}/> */}
        <Mind mindjson={mindData}/>
        <Top topdetailjson={topData}/>
        <ResCard  resdetailjson={resData}/>
        <BestPlace bestPlaceDetailJson={bestPlaceData}/>
    </div>
  )

}

export default Body









// const [mindJSON , setMindJSON] = useState({});
//     const fetch_url = async ()=> {
//         try {
//             const objects = await fetch(url);
//             const data = await objects.json();
//             setMindJSON(data.data.cards[1]);
//             console.log(data.data.cards[1]);
//         }
//         catch(err) {
//             console.log(err);
//         }
//     }
    
//     useEffect(()=> {
//         fetch_url();
//     },[]);
    
//     if(Object.keys(mindJSON).length === 0)  {
//         return <h1>Loading...</h1>
//     }