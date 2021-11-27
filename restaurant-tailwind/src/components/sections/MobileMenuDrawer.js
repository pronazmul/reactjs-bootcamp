import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { menuData } from './../Data'
import { Link } from 'react-router-dom'

const MobileMenuDrawer = ({ menuDrawer, menuDrawerHandler }) => {
  return (
    <Transition.Root show={menuDrawer} as={Fragment}>
      <Dialog
        as='div'
        onClose={menuDrawerHandler}
        className='absolute z-20 inset-0 overflow-hidden md:hidden'
      >
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='absolute h-screen inset-0 bg-gray-700 bg-opacity-75 transition-opacity' />
        </Transition.Child>
        <div className='fixed inset-y-0 left-0 w-3/5 sm:w-2/5 flex z-20'>
          <Transition.Child
            as={Fragment}
            enter='transform transition ease-in-out duration:500'
            leave='transform transition ease-in-out duration:500'
            enterFrom='-translate-x-10'
            leaveTo='-translate-x-10'
            enterTo='translate-x-0'
            leaveFrom='translate-x-0'
          >
            <div
              className='h-screen p-4 space-y-4 overflow-y-scroll bg-primary w-full'
              id='sidebar-scroll'
            >
              {/* Profile Section */}
              <div className='space-y-4 relative'>
                <div className='flex space-x-2'>
                  <div className='w-12 h-12'>
                    <img src='/images/avatar.png' alt='' />
                  </div>
                  <div className='mt-2'>
                    <h3 className='text-white text-base font-bold'>Ray</h3>
                    <p className='text-gray-500 text-xs font-bold'>Admin</p>
                  </div>
                  {/* Drawer Close Button  */}
                  <span
                    onClick={menuDrawerHandler}
                    className='absolute right-0 top-4 text-xl text-danger cursor-pointer opacity-75 hover:opacity-100 transition duration-300'
                  >
                    <i className='fas fa-times'></i>
                  </span>
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
                            <Link
                              to={item.path}
                              className='space-x-2 text-white'
                            >
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
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default MobileMenuDrawer
