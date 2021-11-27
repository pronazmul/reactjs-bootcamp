import React from 'react'
import { menuData } from './../Data'
import { Link } from 'react-router-dom'

const ShinkMenuBar = () => {
  return (
    <div className='w-full space-y-6 p-2 lg:p-6 '>
      <div className='w-12 h-12'>
        <img src='/images/avatar.png' alt='' />
      </div>
      <div>
        <Link className='bg-warning text-white font-bold space-x-4 p-3 rounded-md '>
          <i className='fas fa-home'></i>
        </Link>
      </div>

      {/* Menus */}
      <div className='space-y-6'>
        {menuData &&
          menuData.map((data, key1) => (
            <div className='space-y-2' key={key1}>
              {data.menus &&
                data.menus.map((item, key2) => (
                  <div className='font-bold  rounded-md text-sm w-full text-left px-4 py-2 transition duration-100'>
                    <Link to={item.path} className=''>
                      <span className={`text-${item.iconColor}`}>
                        <i className={item.icon}></i>
                      </span>
                    </Link>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}

export default ShinkMenuBar
