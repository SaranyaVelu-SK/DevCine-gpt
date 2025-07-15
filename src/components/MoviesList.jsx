import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({ title, movies, subtitle }) => {
    return (
        <div className='p-4' >
            <h1 className='header-font text-[#cbcdd1] text-4xl pl-2'>{title}<span>{subtitle}</span></h1>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                {movies && (
                    movies?.map(movie => <MovieCard key={movie?.id} imgId={movie?.poster_path} title={movie?.original_title} />)
                )}
            </div>
        </div>
    )
}

export default MoviesList