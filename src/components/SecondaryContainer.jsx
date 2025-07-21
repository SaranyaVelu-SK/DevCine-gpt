import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store?.movies);
  return (
    <div className='  md:-mt-[1%] lg:-mt-32 xl:-mt-56 relative z-20'>
      <MoviesList title={"Now"} subtitle={" Streaming"} movies={movies?.nowStreamingMovies}/>
      <MoviesList title={"Up"}subtitle={"Coming"} movies={movies?.upcomingMovies}/>
      <MoviesList title={"Top"} subtitle={" Rated"} movies={movies?.topRatedMovies}/>
      <MoviesList title={"Pop"} subtitle={"ular"} movies={movies?.popularMovies}/>
    </div>
  )
}

export default SecondaryContainer