import React, { useRef, useState } from 'react'
import validate from '../utils/validate';
import auth from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../store/userSlice';

const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null)

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
    if (errMsg) {
      setErrMsg(null)
    }
  }

  const fName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    const err = validate(email.current.value, password.current.value);
    setErrMsg(err);
    if (err) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fName.current.value
          }).then(() => {
            const {uid,email,displayName} = auth.currentUser;
            dispatch(addUser({ uid: uid, email:email, displayName: displayName}));
            navigate('/browse')
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " - " + errorMessage)
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/browse')
          // updateProfile(user, {

          // })
      //     .then(() => {
      //       console.log(auth.currentUser)
      //       const {uid,name,displayName,photoURL} = auth.currentUser;
      // dispatch(addUser({uid:uid,name:name,displayName:displayName,photoURL:photoURL}))
      //       navigate('/browse')
      //     })
          // .catch((error) => {
          //   // An error occurred
          //   // ...
          // });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " - " + errorMessage)
        });
    }
  }

  return (
    <div className="sm:w-[340px] md:w-[420px] lg:w-[476px] bg-black/70 px-14 py-10 flex flex-col items-start">
      <h1 className='text-3xl font-bold text-white mb-5'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
      <div className='flex flex-col items-center w-full'>
        {!isSignIn && <input type='text' name="name" className='text-white my-2 border p-3.5 border-gray-300 rounded-sm placeholder-white/50 w-full' placeholder='full name' ref={fName}></input>}
        <input type='text' name="email" className='text-white my-2 border p-3.5 border-gray-300 rounded-sm placeholder-white/50 w-full' placeholder='email or mobile number' ref={email}></input>
        <input type='text' name="password" className='text-white my-2 border p-3.5 border-gray-300 rounded-sm placeholder-white/50 w-full' placeholder='Password' ref={password}></input>
        {errMsg && <p className='text-red-500'>{errMsg}</p>}
        <button className={`${isSignIn ? "my-2" : "mt-2 mb-7"} text-white bg-cyan-800 p-2 font-semibold rounded-sm w-full`} onClick={handleSubmit}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn && <><p className='text-white my-2'>
          OR
        </p>
          <button className='my-2 text-white bg-gray-300/20 p-2 font-bold rounded-sm w-full'>Use a sign-in code</button>

          <p className='text-white underline'>Forgot password?</p>
        </>}
      </div>
      {isSignIn && <label className='py-2'>
        <input type='checkbox' />
        <span className='text-white'> Remember me</span>
      </label>}
      <p className='text-gray-400 py-2'>{isSignIn ? "New to DevFlix? " : "Already an user? "}<span className='text-white font-bold cursor-pointer' onClick={handleSignIn}>{isSignIn ? "Sign Up Now" : "Sign In Now"}</span></p>


    </div>
  )
}

export default LoginForm