import React ,{useEffect, useState}from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import service from '../appwrite/appwriteconf';
import InputPopup from './InputPopup';
import CropCard from './CropCard';

const Sell = () => {
  const [showModal, setShowModal] = useState(false);
  const [crops,setAllCrops] = useState([])
 
  useEffect(()=>{
     service.showAllCrops().then((allCrops)=>{
      if(allCrops){
        console.log(allCrops);
        setAllCrops(allCrops.documents)
      }
    })
  },[showModal])
  console.log(crops);
 
  return (
    <div className=' fixed left-[240px] top-0 border-2 border-red-500 w-[83%] h-screen flex items-center justify-center bg-slate-200'>
      <div className='fixed right-[20px] top-10 bg-green-600 p-3 text-white font-bold rounded-xl'>
        <button className='flex items-center justify-center  gap-2 ' onClick={() => setShowModal(true)}> <IoIosAddCircleOutline size={'20px'} />Add crop</button>
        <InputPopup showModal={showModal} setShowModal={setShowModal}/>
      </div>
      <div className=' flex flex-wrap gap-8 ml-9'>  
        
        {crops.map((crop) =>( <CropCard title={crop.cropName} key={crop.$id} description={crop.cropDescription} quantity={crop.cropQuantity} minPrice={crop.cropMinPrice} id={crop.$id}/>))}
      </div>
    </div>
  );
}

export default Sell