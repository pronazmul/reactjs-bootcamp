import React from 'react'

const ItemCard = () => {
  return (
    <div className=' bg-primary border border-light rounded-md p-2 space-y-2 md:space-y-4 mt-10 md:mt-12 w-full'>
      <img
        className='-mt-8 md:-mt-10 w-2/3 mx-auto shadow'
        src='/images/resturant.png'
        alt=''
      />
      <p className='text-white font-bold text-center text-xs lg:text-sm'>
        Set Menu-1
      </p>
      <p className='text-warning font-bold text-center text-xs lg:text-sm'>
        $25.00
      </p>
    </div>
  )
}

export default ItemCard
