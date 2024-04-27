import { useEffect, useState } from 'react'
import './App.css'
import ProjectRoutes from './ProjectRoutes'
import authService from './appwrite/auth';
import { useUser } from './store/userStore';
import { useAuth } from './store/authStore'



function App() {
  const setUser = useUser((state)=>state.setUser);
  const loginStatus = useAuth((state)=>state.login)

  //  useEffect(()=>{
  //    authService.getCurrentUser().then((userData)=>{
  //     if(userData){
  //       console.log(userData,"User data is ");
  //       setUser(userData);
  //       loginStatus();
  //     }
  //    })
     
  // })
  return (
   <ProjectRoutes/>
   
  )
}

export default App
