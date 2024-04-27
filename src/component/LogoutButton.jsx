import React from 'react';
import authService from '../appwrite/auth';
import { useUser } from '../store/userStore';
import { useAuth } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigator = useNavigate();
    const setUser = useUser((state) => state.setUser);
    const logout = useAuth((state) => state.logout); // Corrected typo here
    const user = useUser((state) => state.user);
    const authStatus = useAuth((state) => state.isLoggedIn);
    const handleLogOut = () => {
        authService.logOut().then(() => {
            setUser({});
            logout(); // Corrected function call here
            console.log(authStatus);
            navigator('/signup');
        })                                            
    };

    return (
        <button onClick={handleLogOut} className='border-2 p-2 border-red-500 rounded-xl w-[60%] hover:bg-red-800'>
            Log out
        </button>
    );
};

export default LogoutButton;
