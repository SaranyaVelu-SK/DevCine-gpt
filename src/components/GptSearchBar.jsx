import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { languages } from '../utils/languages';
import client from '../utils/openai';
import { API_GET_OPTIONS_FOR_TMDB } from '../utils/constants';
import { addSearchedMovies } from '../store/moviesSlice';

const GptSearchBar = () => {

  const dispatch = useDispatch();
  const lang = useSelector(store => store?.appConfig?.language); 
  const [isLoading,setIsLoading] =useState(false); 

  const searchText = useRef(null);

  const searchMovie = async(movie)=>{
    setIsLoading(true)
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_GET_OPTIONS_FOR_TMDB);
    const jsonData = await data.json();
    dispatch(addSearchedMovies(jsonData.results));
    setIsLoading(false)
  }

  const handleSearchSubmit = async () => {
    
    const inputText = searchText?.current?.value;
    // const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + inputText + ". Only give names of 5 movies, that are comma separated like the examples given ahead. Example: War,3Idiots,Bahubali,RRR,Coolie"

    // const data = await client.chat.completions.create({
    //   model: 'gpt-3.5-turbo',
    //   messages: [
    //     { role: 'user', content: gptQuery }
    //   ],
    // }).then(()=>{
    //   console.log(data?.choices)
    // }).catch(()=>{
      searchMovie(inputText);
      
    // })    
  }
  return (
    <div className='flex flex-col items-center my-5 '>
      <form className='bg-white/50 p-3 rounded-sm flex flex-col md:flex-row w-[70%] md:w-max' onSubmit={(e) => e.preventDefault()} >
        <input ref={searchText} type='text' placeholder={languages[lang].placeholder} className='text-white bg-transparent p-5 mr-1.5  w-full md:w-[600px] border-b-2  border-b-black  focus:outline-none focus:bg-white/60 focus:placeholder-black focus:text-black transition-colors duration-200' />
        <button className='p-5 mt-3 md:mt-0 bg-black md:ml-1.5 text-white  cursor-pointer button-font font-semibold rounded-sm' onClick={handleSearchSubmit}>{languages[lang].search}</button>
      </form>
      {isLoading && (<div className="loader my-20 mx-auto "></div>)}

    </div>
  )
}

export default GptSearchBar
