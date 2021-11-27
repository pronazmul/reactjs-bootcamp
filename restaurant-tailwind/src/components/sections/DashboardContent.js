import React from 'react'
import ItemCard from '../elements/ItemCard'
import SearchBox from '../elements/SearchBox'

const DashboardContent = ({
  menuTogglerHandler,
  menuDrawerHandler,
  cartDrawerHandler,
}) => {
  return (
    <div
      className='space-y-2 h-screen overflow-y-scroll relative'
      id='sidebar-scroll'
    >
      {/* Content Top Section */}
      <div className='p-4 space-y-3 sticky top-0 z-10 backdrop-filter backdrop-blur-lg'>
        <div className='flex justify-between'>
          <div className='flex space-x-2'>
            <div>
              <button
                onClick={menuTogglerHandler}
                className='bg-success px-3 py-2 rounded-md text-white hidden md:block'
              >
                <i className='fas fa-bars'></i>
              </button>

              <button
                onClick={menuDrawerHandler}
                className='bg-success px-3 py-2 rounded-md text-white block md:hidden'
              >
                <i className='fas fa-bars'></i>
              </button>
            </div>
            <div>
              <p className='text-white font-bold text-sm'>Ray's ResTaurant</p>
              <p className='text-gray-400 text-xs font-bold'>
                Saturday, 16th October 2021, 2:48:01 PM
              </p>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='flex space-x-2'>
              <div>
                <p className='text-gray-500 text-xs font-bold'>last synced</p>
                <p className='text-gray-400 text-xs font-bold'>0 mins ago</p>
              </div>
              <button className='bg-success px-3 py-2 rounded-md text-white '>
                <i className='fas fa-sync'></i>
              </button>
            </div>
          </div>
        </div>

        {/* Search */}
        <div>
          <SearchBox placeholder='Find food by name' />
        </div>

        {/* Item Categories */}
        <div className='space-x-2'>
          <button className='bg-success text-xs text-white font-semibold py-1 px-2 rounded-xl '>
            All items
          </button>
          {[
            'Pizza',
            'Burger',
            'Pasta',
            'Appetizer',
            'Milkshake & Juice',
            'Set Menu',
            'Extra',
            'Drinks',
            'Meat Box',
          ].map((item, index) => (
            <button
              key={index}
              className='hover:bg-success text-xs text-white font-semibold py-1 px-2 rounded-xl transition duration-200'
            >
              {item}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className='border-t-2 border-light'></div>
      </div>

      {/* Content Food Items */}
      <div className='px-4 pb-4 grid grid-cols-3  sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-2'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (item, index) => (
            <ItemCard key={index} />
          )
        )}
      </div>

      {/* Cart Drawer For Small Devices */}
      <div
        onClick={cartDrawerHandler}
        className='bg-success px-3 py-1 fixed right-2 bottom-10 rounded-sm opacity-70 hover:opacity-100 transition duration-300 cursor-pointer block md:hidden'
      >
        <div className='text-center flex flex-col text-white font-bold bold'>
          <span>
            <i className='fas fa-shopping-bag text-xl'></i>
          </span>
          <span className='text-xs'>0 Item</span>
        </div>
        <div className=' text-white font-bold text-center text-xs'>
          <p>$0</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardContent
