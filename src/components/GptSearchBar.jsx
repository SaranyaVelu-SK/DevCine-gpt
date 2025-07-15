import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='flex justify-center mt-5 '>      
        <form className=' bg-gray-900/70 p-3 rounded-sm' >
          <input type='text' placeholder='What would you like to watch?' className='bg-white p-5 mr-1.5 w-[600px] rounded-sm'/>
          <button className='p-5 bg-cyan-600/40 ml-1.5 text-white rounded-sm cursor-pointer button-font font-semibold'>Search</button>
        </form>
      
    </div>
  )
}

export default GptSearchBar