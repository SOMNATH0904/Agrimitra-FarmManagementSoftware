import React from 'react'

const AlreadyInvestedCard = ({cropName,farmerName}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 min-w-[300px]">
        
    <h2 className="text-xl font-bold mb-2">Farmer name : {farmerName}</h2>
   <h3>Crop : {cropName}</h3>
    
  <div className='flex items-end justify-end mt-2'></div>
    </div>
  )
}

export default AlreadyInvestedCard