import React from 'react'

const VideoDetails = ({title,overview}) => {
  return (
    <div className='flex flex-col items-start pl-20 pt-90 absolute w-screen aspect-video bg-gradient-to-r from-black'>
        <h1 className='movie-overview-title text-3xl'>{title}</h1>
        <p className='movie-overview w-1/4 pl-2'>{overview}</p>
        <div>
            <button className='bg-black text-white rounded-sm px-4 py-2 m-2 hover:opacity-70'> ▷ Play</button>
            <button className='bg-gray-500 text-white rounded-sm px-4 py-2 m-2 opacity-40'> ⓘ More info</button>
        </div>
    </div>
  )
}

export default VideoDetails;