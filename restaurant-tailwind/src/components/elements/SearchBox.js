import React from 'react'

const SearchBox = ({ placeholder }) => {
  return (
    <div className='w-full relative'>
      <input
        className=' py-2 w-full bg-light focus:ring-0 border-2 border-secondary focus:border-secondary rounded-md placeholder-gray-400 font-bold pl-12 text-sm'
        type='text'
        placeholder={(placeholder && placeholder) || 'Search Here'}
      />
      <span className='absolute inset-0 text-gray-400 left-4 top-2.5'>
        <i className='fas fa-search'></i>
      </span>
    </div>
  )
}

export default SearchBox
