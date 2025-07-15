import React from 'react'
import { useSelector } from 'react-redux'
import VideoDetails from './VideoDetails';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowStreamingMovies);
    if(!movies) return;
    const movieToDisplayInBG = movies[1];
    const{original_title,overview,id}=movieToDisplayInBG;
  return (
    <div >       
       <VideoDetails title={original_title} overview={overview}/>
       <VideoBackground movieId={id}/>
       
    </div>
  )
}

export default MainContainer