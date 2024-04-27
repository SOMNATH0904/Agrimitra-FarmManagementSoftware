import { useAuth } from "../../store/authStore"
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
    const isAuthStaus = useAuth((state) =>state.isLoggedIn);
    
  return (
        <>
            {isAuthStaus ? (<Navigate to="/dashboard"/>):(
                  <>
                  <section className='w-full flex flex-col items-center mx-3 my-10'>
                      <Outlet/>
                  </section>
              </>
            )}  
        </>
  )
}

export default AuthLayout        