import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { languages } from '../utils/languages';
import client from '../utils/openai';

const GptSearchBar = () => {

  const lang = useSelector(store => store?.appConfig?.language);

  const searchText = useRef(null);

  const handleSearchSubmit = async () => {
    const inputText = searchText?.current?.value;
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + inputText + ". Only give names of 5 movies, that are comma separated like the examples given ahead. Example: War,3Idiots,Bahubali,RRR,Coolie"

    const data = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: gptQuery }
      ],
    });
    console.log(data?.choices)
  }





  return (
    <div className='flex justify-center my-5 '>
      <form className=' bg-gray-300 p-3 rounded-sm' onSubmit={(e) => e.preventDefault()} >
        <input ref={searchText} type='text' placeholder={languages[lang].placeholder} className='bg-white p-5 mr-1.5 w-[600px] rounded-sm' />
        <button className='p-5 bg-cyan-600 ml-1.5 text-white rounded-sm cursor-pointer button-font font-semibold' onClick={handleSearchSubmit}>{languages[lang].search}</button>
      </form>

    </div>
  )
}

export default GptSearchBar
