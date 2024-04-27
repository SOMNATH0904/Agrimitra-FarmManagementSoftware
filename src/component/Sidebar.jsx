import React from 'react'
import Logo from '../../public/farmLogo.png'
import LogoutButton from './LogoutButton'
import { Link } from 'react-router-dom'


const Sidebar = ({isIndustry}) => {
  return (
   <div>
     <div className=" bg-gray-900 text-white w-60 min-h-screen fixed overflow-y-auto">
        <div className="logo ML-4 h-[200px] w-[200px]  ">
            <img className="rounded-full h-full w-full mx-auto" src={Logo} alt="Farm Logo"/>
        </div>
        <div className="navbar">
            
            <Link to={isIndustry?'/industry-dashboard':'/dashboard'} className="block py-3 px-4 hover:bg-gray-700">Dashboard</Link>
            <Link to={isIndustry ? '/bestMatches':'/prediction'} className="block py-3 px-4 hover:bg-gray-700">{isIndustry?'Best matches':'Predictions'}</Link>
            <Link to={isIndustry?'/buy':'/sell'} className="block py-3 px-4 hover:bg-gray-700">{isIndustry ? "Buy":"Sell"}</Link>
            {isIndustry && <Link to={isIndustry ? '/alreadyInvested':'/prediction'} className="block py-3 px-4 hover:bg-gray-700">{isIndustry?"Already Invested":"prediction"}</Link>}
            <Link to={isIndustry?'/industry-setting':'/setting'} className="block py-3 px-4 hover:bg-gray-700">Settings</Link>
            <hr  className='bg-slate-500 h-1 my-2'/>
            <LogoutButton/>
        </div>
    </div>

   
   </div>
  )
}

export default Sidebar