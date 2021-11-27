import React from 'react'

const Loader = () => {
  return (
    <div className=' h-screen flex justify-center items-center my-8'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-warning'></div>
    </div>
  )
}

export default Loader
