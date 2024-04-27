import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from '../../component/Sidebar'

const IndustryLayout = () => {
  return (
    <section className='w-[100vw]'>
     <div className='w-full border-2 border-slate-300 p-5 fixed top-0'><h2 className='font-bold text-2xl'>Industry Highlights</h2></div>
      <div className='fixed left-0 top-0 w-[40%]'>
      <Sidebar isIndustry={true}/>
      </div>
        <div className='fixed top-2'>
          <Outlet/>
        </div>
      </section>
  )
}

export default IndustryLayout
