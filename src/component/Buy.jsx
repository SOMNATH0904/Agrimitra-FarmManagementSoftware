import React, { useState,useEffect } from 'react'
import Service from '../appwrite/appwriteconf';
import BestMatchCard from './BestMatchCard'

const Buy = () => {
  const [bestmatches,setBestMatches] = useState([])
  const getData = async ()=>{
      const bestMatches = await Service.getBestMatches().then((response)=>{
          if(response){
              console.log(response)
              setBestMatches(response.documents)
          }
      })
  }
   useEffect(()=>{
      getData()
  },[])
    
  return (
    <div className=' fixed top-[80px] ml-[214px] w-[80%]'>
        <div className='flex items-center justify-center flex-col'>
      <h1 className='font-bold text-2xl font-serif '>Best matches for your company</h1>  
            <div className='grid grid-cols-3 gap-2'>
            {bestmatches.map((match) => {
                return(
                    <div id={match.$id}>
                       <BestMatchCard cropName={match.cropName} cropPrice={match.cropPrice} farmerName ={match.farmerName} isBuying={true}/>
                    </div>
                )
            
            })
            
            }
            </div>
        </div>
    </div>
  )
}

export default Buy