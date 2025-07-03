import React, { useRef, useState } from 'react'
import validate from '../utils/validate';

const LoginForm = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn)
  }

  const fName = useRef(null);
  const email=useRef(null);
  const password = useRef(null);

  const handleSubmit=()=>{
    const errMsg = validate(email.current.value,password.current.value,fName.current.value);
    console.log(errMsg)
  }

  return (
    <div className="w-1/4 bg-black/70 px-14 py-10 flex flex-col items-start">
      <h1 className='text-3xl font-bold text-white mb-5'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
      <div className='flex flex-col items-center w-full'>
        {!isSignIn && <input type='text' name="name" className='text-white my-2 border p-3.5 border-gray-300 rounded-sm placeholder-white/50 w-full' placeholder='full name' ref={fName}></input>}
        <input type='text' name="email" className='text-white my-2 border p-3.5 border-gray-300 rounded-sm placeholder-white/50 w-full' placeholder='email or mobile number' ref={email}></input>
        <input type='text' name="password" className='text-white my-2 border p-3.5 border-gray-300 rounded-sm placeholder-white/50 w-full' placeholder='Password' ref = {password}></input>

        {/* {errMsg.email && <p className='text-red-500'>errMsg.email</p>}
        {errMsg.password && <p className='text-red-500'>errMsg.password</p>}
        {errMsg.fName && <p className='text-red-500'>errMsg.fName</p>} */}
        <button className={`${isSignIn ? "my-2" : "mt-2 mb-7"} text-white bg-red-600 p-2 font-semibold rounded-sm w-full`} onClick={handleSubmit}>
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
      <p className='text-gray-400 py-2'>{isSignIn ? "New to Netflix? " : "Already an user? "}<span className='text-white font-bold cursor-pointer' onClick={handleSignIn}>{isSignIn ? "Sign Up Now" : "Sign In Now"}</span></p>
      <p className='text-gray-400 text-sm py-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      <span className='underline text-sm mb-20'>Learn More</span>

    </div>
  )
}

export default LoginForm