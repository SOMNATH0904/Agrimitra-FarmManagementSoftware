import React, { useEffect } from 'react'
import service from '../appwrite/appwriteconf'
import { useState } from 'react'
import CropCard from './CropCard'
import BestMatchCard from './BestMatchCard'
import AlreadyInvestedCard from './AlreadyInvestedCard'


const AlreadyInvested = () => {
  const [bestmatches,setBestMatches] = useState([])
  const getData = async ()=>{
      const bestMatches = await service.getBestMatches().then((response)=>{
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
                   <AlreadyInvestedCard cropName={match.cropName} cropPrice={match.cropPrice} farmerName ={match.farmerName}/>
                </div>
            )
        
        })
        
        }
        </div>
    </div>
</div>
  )
}

export default AlreadyInvested