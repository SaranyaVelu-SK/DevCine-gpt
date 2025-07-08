import React from 'react'
import auth from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log(true)
            navigate('/')
        }).catch((error) => {
            console.log(error)
        });
    }
    console.log(user)
    return (
        <div className='bg-gradient-to-b from-black w-screen flex justify-between items-center'>
            <div className='flex py-4 items-center' >
                {/* <img className='sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-32 lg:h-32 ' src="https://img.icons8.com/dotty/80/0891B2/d.png" alt="d" /> */}
                <p className='header-font pl-6'>Dev<span className='subheader-font'>Cine</span></p>
            </div>
            {user && <div className='flex text-white p-5'>
                <img className='w-12 h-12 pr-2' src="https://img.icons8.com/material-sharp/24/user.png" alt="user"/>
                <div className='flex flex-col items-start justify-center'>
                    <p className='text-white'>{user.displayName}</p>
                <button onClick={handleSignOut}>(Sign Out)</button>
                </div>
            </div>}

        </div>
    )
}

export default Header