import React from 'react'

const CropDetailCard = ({cropName,details,title}) => {
  return (
        
        <div className="bg-white rounded-lg overflow-hidden shadow-md border-2  w-[300px]">
            <div className="p-4">
                <p>{title}</p>
                <h6 className="text-xl font-semibold">{cropName}</h6>
                <p className="mt-2"><b>{details}</b></p>
            </div>
        </div>
  )
}

export default CropDetailCard