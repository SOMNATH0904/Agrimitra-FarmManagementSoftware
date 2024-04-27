import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import Service from '../appwrite/appwriteconf';
import toast from "react-hot-toast"


const CropCard = ({ title, description, quantity, minPrice,id }) => {

    const handleDeleteCrop = () =>{
        console.log(id);
        Service.deleteCrop(id);
        Service.showAllCrops()
        toast.success("Successfully deleted crop!");
        
    }
    return (
            <div className="bg-white rounded-lg shadow-lg p-4">
                <button onClick={handleDeleteCrop} className='text-red-600'><MdOutlineDeleteOutline size={'20px'} /></button>
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="flex justify-between flex-col">
                <p className="text-gray-700">Quantity: {quantity}</p>
                
                <p className="text-gray-700">Minimum Price: {minPrice} /Kg.</p>
              </div>
              
            </div>
          );    
      
}

export default CropCard