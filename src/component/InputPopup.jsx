/* eslint-disable no-useless-catch */
import React from 'react'
import Input from '../component/Input'
import { useForm } from 'react-hook-form'
import service from '../appwrite/appwriteconf';
import toast from 'react-hot-toast'
import {useUser} from '../store/userStore'
import Button from './Button';
const InputPopup = ({showModal,setShowModal}) => {
    const {register,handleSubmit} = useForm();
      
    const user = useUser((state)=>state.user);
    console.log(user);

    const createCrop = async(data) =>{
            try{
                console.log("showing the data ",data)
                const createdCrop  = await service.createCrop({...data},{userId:user.$id});
                console.log(createdCrop);
                toast.success("Crop created successfully");
                setShowModal(false)
            }catch(error){
                toast.error("Error occured")
                throw error
            }
    }
  return (
    <div>
        {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full" onSubmit={handleSubmit(createCrop)}>
                    
                    <Input
                        label="Crop Name: "
                        placeholder="Enter Crop Name"
                        {...register("cropName", {
                            required: true,
                        })}
                        />
                    <Input
                        label="Crop description: "
                        placeholder="Enter Crop description"
                        {...register("CropDescription", {
                            required: true,
                        })}
                        />
                   <Input
                        label="Quantity: "
                        placeholder="Enter Crop Quantity"
                        {...register("cropQuantity", {
                            required: true,
                        })}
                        />
                        <Input
                        
                        label="Crop Min Price: "
                        placeholder="Enter Crop Min Price per kg."
                        {...register("cropMinPrice", {
                            required: true,
                        })}
                        className="text-black"
                        />
                        <Button type="submit" className="w">
                            save
                        </Button>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default InputPopup