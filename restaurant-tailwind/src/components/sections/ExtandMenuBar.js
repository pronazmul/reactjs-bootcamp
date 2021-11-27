import React from 'react'
import { menuData } from './../Data'
import { Link } from 'react-router-dom'

const ExtandMenuBar = () => {
  return (
    <div
      className='h-screen p-4 space-y-4 overflow-y-scroll w-full'
      id='sidebar-scroll'
    >
      {/* Profile */}
      <div className='space-y-4'>
        <div className='flex space-x-2'>
          <div className='w-12 h-12'>
            <img src='/images/avatar.png' alt='' />
          </div>
          <div className='mt-2'>
            <h3 className='text-white text-base font-bold'>Ray</h3>
            <p className='text-gray-500 text-xs font-bold'>Admin</p>
          </div>
        </div>

        <div>
          <button className='bg-warning text-white font-bold space-x-2 lg:space-x-4 py-2 px-2 lg:px-5 rounded-md text-xs lg:text-sm w-full text-left'>
            <i className='fas fa-home'></i>
            <span>Make Order</span>
          </button>
        </div>
      </div>

      {/* Menus */}
      <div className='space-y-2'>
        {menuData &&
          menuData.map((data, key1) => (
            <div className='space-y-2' key={key1}>
              <p className='text-gray-500 font-black text-xs uppercase'>
                {data.title}
              </p>
              {data.menus &&
                data.menus.map((item, key2) => (
                  <div
                    key={key2}
                    className=' font-bold  rounded-md text-xs lg:text-sm w-full text-left py-2 px-2 lg:px-5 transition duration-100'
                  >
                    <Link to={item.path} className='space-x-2 text-white'>
                      <span className={`text-${item.iconColor}`}>
                        <i className={item.icon}></i>
                      </span>
                      <span>{item.name}</span>
                    </Link>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}

export default ExtandMenuBar
