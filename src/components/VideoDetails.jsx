import React from 'react'

const VideoDetails = ({title,overview}) => {
  return (
    <div className='flex flex-col items-start p-6'>
        <h1 className='movie-overview-title text-3xl'>{title}</h1>
        <p className='movie-overview w-1/4 pl-2'>{overview}</p>
        <div>
            <button className='bg-black text-amber-50 rounded-sm px-4 py-2 m-2'> ▷ Play</button>
            <button className='bg-gray-500 text-white rounded-sm px-4 py-2 m-2'> ⓘ More info</button>
        </div>
    </div>
  )
}

export default VideoDetails;