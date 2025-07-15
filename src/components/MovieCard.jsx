import React from 'react'
import { TMDB_IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({imgId,title}) => {
  return (
   <div>
     <div className='m-1 p-1 w-72'>
        <img className="rounded-sm backdrop-opacity-25" alt = {title} src = {TMDB_IMG_CDN_URL+ imgId}/>
     </div>
    
   </div>

  )
}

export default MovieCard