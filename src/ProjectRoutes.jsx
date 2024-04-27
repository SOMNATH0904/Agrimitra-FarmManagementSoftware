import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "./pages/auth/Login"
import Signup from './pages/auth/SignupComp'
import AuthLayout from './pages/auth/AuthLayout'
import RootLayout from './pages/root/RootLayout'
import Dashboard from './pages/root/Dashboard'
import DashboardComponent from './component/DashboardComponent'
import Sell from './component/Sell'
import IndustryLogin from './component/IndustryLogin'
import IndustrySignup from './component/IndustrySignup'
import Setting from './component/Setting'
import { Industry } from './component/Industry'
import IndustryLayout from './pages/root/IndustryLayout'
import Buy from './component/Buy'
import IndustryDashboard from './component/IndustryDashboard'
import IndustrySetting from './component/IndustrySetting'
import BestMatches from './component/BestMatches'
import AlreadyInvested from './component/AlreadyInvested'
import PredictionPage from './component/PredictionPage'



const ProjectRoutes = () => {
  return (
   <React.Suspense>
    <Routes>
        {/* public route */}
        <Route element={<AuthLayout/>}>
            <Route element={<Login/>} path='/login'/>2
            <Route element={<Signup/>} path='/signup'/>
            <Route element = {<IndustryLogin/>} path='/industryLogin'/>
            <Route element={<IndustrySignup/>} path='/industrySignup'/>
        </Route>
        <Route element={<RootLayout/>}>
            <Route element={<DashboardComponent/>} path='/dashboard'/>
            <Route element={<Sell/>} path='/sell'/>
            <Route  element={<Setting/>} path='/setting'/>
            <Route  element={<PredictionPage/>} path='/prediction'/>
            
        </Route>
        <Route element={<IndustryLayout/>}>
            <Route element={<Industry/>} path='/industry' />
            <Route element={<Buy/>} path='/buy' />
            <Route element={<IndustryDashboard/>} path='/industry-dashboard' />
            <Route element={<IndustrySetting/>} path='/industry-setting' />
            <Route element={<BestMatches/>} path='/bestMatches' />
            <Route element={<AlreadyInvested/>} path='/alreadyInvested' />
        </Route>
    </Routes>
   </React.Suspense>
  )
}

export default ProjectRoutes