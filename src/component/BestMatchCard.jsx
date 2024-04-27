import React from 'react'
import { FaHeart } from "react-icons/fa6";
import Button from "../component/Button"

const BestMatchCard = ({cropName,cropPrice,farmerName,isBuying}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 min-w-[300px]">
        
    <h2 className="text-xl font-bold mb-2">Farmer name : {farmerName}</h2>
   <h3>Crop : {cropName}</h3>
    <div className="flex justify-between flex-col">        
    <p className="text-gray-700">Minimum Price: {cropPrice} /Kg.</p>
  </div>
  <div className='flex items-end justify-end mt-2'>{isBuying?<Button className='bg-green-600'>Buy</Button>:<FaHeart color='red' size={'20px'}/>}</div>
    </div>
  )
}

export default BestMatchCard