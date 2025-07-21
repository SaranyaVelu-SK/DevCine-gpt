import React, { useEffect, useState } from 'react'
import auth from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../store/userSlice';
import { SUPPORTED_LANGUAGES, USER_PHOTO_URL } from '../utils/constants';
import { isMoveToMainPage, toggleToGptSearch } from '../store/gptSlice';
import { changeLanguage } from '../store/appConfigSlice';

const Header = () => {

    const [showUser, setShowUser] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // console.log(true)

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
        return () => { unsubscribe() }
    }, [])

    const displayUserName = () => {
        setShowUser(prev => !prev);
    }
    const toggleGptSearch = () => {
        dispatch(toggleToGptSearch())
    }
    const switchedToGptSearch = useSelector(store => store?.gpt?.toggleToSearch);


    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className={` ${user ? "bg-gradient-to-b from-black to-gray-950" : ""}  flex flex-col items-center md:flex-row md:justify-between md:items-center relative`}>
            <div className='flex py-4 items-center' >
                <p className='header-font text-[#22D3EE] text-6xl pl-6 cursor-pointer' onClick={()=>{dispatch(isMoveToMainPage())}}>Dev<span className='text-[#FCD34D]'>Cine</span></p>
            </div>
            {user && <div className='flex gap-2 text-white py-5 px-5     items-center'>
                {switchedToGptSearch && <select className='bg-gradient-to-tl from-[#d3a307] to-[#FCD34D] font-semibold text-lg rounded-sm text-black py-1' onChange={handleLanguageChange}>
                    <option value=""  disabled>lang</option>
                    {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>}
                <button className='mx-2 bg-gradient-to-tl from-[#096472] to-cyan-600 font-semibold text-lg rounded-sm text-white px-2 py-1 ' onClick={toggleGptSearch}>{switchedToGptSearch ? "Home" : "Search"}</button>
                <button onClick={handleSignOut} className=' bg-gradient-to-tl from-[#096472] to-cyan-600  text-lg font-semibold rounded-sm text-white px-2 py-1'>Sign Out</button>
                <img className='w-15 h-12 pr-2 ' src={USER_PHOTO_URL} alt="user" onClick={displayUserName} />
                {showUser && (<span className='absolute top-20 right-9 py-1 px-2 text-black bg-gray-100 rounded-sm'>{user?.displayName}</span>)}
            </div>}
        </div>
    )
}

export default Header