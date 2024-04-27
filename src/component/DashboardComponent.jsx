import React from 'react'
import CropDetailCard from './CropDetailCard'
import BarChart from './Barchart'


const DashboardComponent = () => {
  return (
    <div className='w-screen'>
      <h2 className='text-2xl font-bold font-sans mb-4'>Farmer Dashboard</h2>
    <div className='flex justify-center items-center fixed left-[270px]'>
        <div className=" ml-8 grid grid-cols-1 md:grid-cols-3  gap-10 w-[90%]">
           <CropDetailCard cropName={'Cardamom'} title={'Crop name'}/>
           <CropDetailCard cropName={'53 Acres'} title={'Area'}/>
           <CropDetailCard cropName={'1200kg'} title={'Last production'}/>
           <CropDetailCard cropName={'1000000'} title={'Total Earning'}/>
           
        </div>
    </div>
    <div className='border-2  h-[200px]  bottom-2 w-[82%] fixed left-[243px] flex items-center justify-center '>
    <BarChart />
    </div>
</div>
  )
}

export default DashboardComponent