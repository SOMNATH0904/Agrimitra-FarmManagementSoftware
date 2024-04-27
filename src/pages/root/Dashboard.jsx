import React, { useEffect, useState } from 'react'
import { useAuth } from '../../store/authStore'
import { useUser } from '../../store/userStore'
import {Outlet} from "react-router-dom"

const Dashboard = () => {
  const authStatus = useAuth((state)=>state.isLoggedIn);
  const user = useUser((state)=>state.user);
  console.log("Showing user from dashboard",user)
  return (
    <div >
      <h1>dashbaord page</h1>
      <Outlet/>
    </div>
  )
}

export default Dashboard