import React from 'react'
import LoginForm from './LoginForm'
import Header from './Header'

const Body = () => {
  return (
    <div className='relative'>
      <div className='absolute z-10'>
        <Header />
      </div>
      <img
        className="brightness-40 w-screen h-screen object-cover "
        src="https://png.pngtree.com/background/20230616/original/pngtree-wall-of-movie-posters-on-display-picture-image_3620105.jpg">
      </img>

      <div className='absolute z-20 inset-0 flex items-center justify-center'>
        <LoginForm />
      </div>
    </div>
  )
}

export default Body