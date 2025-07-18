import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

const GptSuggestions = () => {

  const searchedMovies = useSelector(store => store?.movies?.searchedMovies);
  const upcomingMovies = useSelector(store => store?.movies?.upcomingMovies);
  return (
    
        <div className='flex flex-col items-center my-10 text-4xl'>
          {searchedMovies?.length<1 && (<p className='button-font text-white'>No resuts found !</p>)}
          <h1 className='button-font text-white mb-10'>{searchedMovies?.length>0 ? "Search Results" : "You may also watch"}</h1>
          <div className='flex flex-wrap justify-center '>
            {searchedMovies?.length>0  ?
              searchedMovies?.map((movie) => <MovieCard key={movie?.id} imgId={movie?.poster_path} title={movie?.original_title} />) :
              upcomingMovies?.map((movie) => <MovieCard key={movie?.id} imgId={movie?.poster_path} title={movie?.original_title} />)
            }
          </div>
        </div>
      
  )
}

export default GptSuggestions