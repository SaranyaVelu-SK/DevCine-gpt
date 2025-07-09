import React, { useEffect } from 'react'
import auth from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../store/userSlice';
import { USER_PHOTO_URL } from '../utils/constants';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log(true)
            
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate('/browse')
            } else {
                dispatch(removeUser());
                navigate('/')
            }
        });
        return () =>{unsubscribe()}
    }, [])

    console.log(user)
    return (
        <div className='bg-gradient-to-b from-black w-screen flex justify-between items-center'>
            <div className='flex py-4 items-center' >
                <p className='header-font pl-6'>Dev<span className='subheader-font'>Cine</span></p>
            </div>
            {user && <div className='flex text-white p-5'>
                <img className='w-15 h-12 pr-2' src={USER_PHOTO_URL} alt="user" />
                <div className='flex flex-col items-start justify-center'>
                    <p className='text-white'>{user.displayName}</p>
                    <button onClick={handleSignOut}>(Sign Out)</button>
                </div>
            </div>}

        </div>
    )
}

export default Header