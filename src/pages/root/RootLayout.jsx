import React from 'react'
import {Outlet} from "react-router-dom"
import Sidebar from '../../component/Sidebar';

const RootLayout = () => {
  return (
    <section className='w-full'>
      <div className='fixed left-0 top-0'>
      <Sidebar/>
      </div>
          <div className=''>
            <Outlet/>
          </div>
        </section>
  )
}

export default RootLayout