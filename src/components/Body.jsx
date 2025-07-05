import React from 'react'
import LoginForm from './LoginForm'

const Body = () => {
  return (
    <div className='relative'>
      <div className='absolute z-10'>
        <img className='sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-32 lg:h-32 m-5' src="https://img.icons8.com/dotty/80/0891B2/d.png" alt="d"/>
      </div>
      <img
        className="brightness-40 w-screen h-screen object-cover "
        src="https://png.pngtree.com/background/20230616/original/pngtree-wall-of-movie-posters-on-display-picture-image_3620105.jpg">
      </img>
      <div className='absolute z-20 inset-0 flex items-center justify-center'>
        <LoginForm/>
      </div>
    </div>
  )
}

export default Body