import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'

const GptContainer = () => {
  return (
    <div className='flex flex-col  bg-gradient-to-b from-gray-950  to-gray-900 min-h-screen'>
      <GptSearchBar/>
      <GptSuggestions/>
    </div>
  )
}

export default GptContainer