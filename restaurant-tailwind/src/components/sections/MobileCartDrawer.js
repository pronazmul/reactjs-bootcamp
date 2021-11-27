import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const MobileCartDrawer = ({ cartDrawer, cartDrawerHandler }) => {
  return (
    <Transition.Root show={cartDrawer} as={Fragment}>
      <Dialog
        as='div'
        onClose={cartDrawerHandler}
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
        <div className='fixed inset-y-0 right-0 w-3/4 sm:w-3/5 flex z-20'>
          <Transition.Child
            as={Fragment}
            enter='transform transition ease-in-out duration:500'
            leave='transform transition ease-in-out duration:500'
            enterFrom='translate-x-96'
            leaveTo='translate-x-96'
            enterTo='translate-x-full'
            leaveFrom='translate-x-full'
          >
            <div className=' h-screen flex flex-col bg-primary w-full'>
              <div className='px-3 py-4 space-y-6'>
                <div className='flex justify-between items-baseline'>
                  <h2 className='text-white text-base lg:text-lg font-bold'>
                    Selected Food
                  </h2>
                  <button className='text-danger border-2 border-danger rounded-md px-2 lg:px-3 py-1 text-sm'>
                    Clear All
                  </button>
                </div>
                <div className='space-x-1 space-y-2'>
                  <button className='bg-warning border-2 border-warning text-white px-2 py-1 rounded-md font-semibold text-xs'>
                    Dine In
                  </button>
                  <button className=' text-white border-2 border-gray-500 px-2 py-1 rounded-md font-semibold text-xs'>
                    Delivery
                  </button>
                  <button className=' text-white border-2 border-gray-500 px-2 py-1 rounded-md font-semibold text-xs'>
                    Foodpanda
                  </button>
                  <button className=' text-white border-2 border-gray-500 px-2 py-1 rounded-md font-semibold text-xs'>
                    Hungari
                  </button>
                </div>
              </div>
              <div className='flex-grow px-3 py-4 border-t-2 border-b-2 border-light'></div>

              <div className='px-3 py-4 divide-y-2 divide-white'>
                <div className='px-4 space-y-1 pb-2'>
                  <p className='text-xs font-semibold flex justify-between'>
                    <span className='text-white'>Subtotal</span>
                    <span className='text-warning'>$0.00</span>
                  </p>
                  <p className='text-xs font-semibold flex justify-between'>
                    <span className='text-white'>Discount</span>
                    <span className='text-warning'>-$0.00</span>
                  </p>
                  <p className='text-xs font-semibold flex justify-between'>
                    <span className='text-white'>Cash Discount</span>
                    <span className='text-warning'>
                      <span className='bg-gray-800 p-1 rounded-sm text-white pl-5'>
                        -0%
                      </span>
                      =$0.00
                    </span>
                  </p>
                  <p className='text-xs font-semibold flex justify-between'>
                    <span className='text-white'>VAT</span>
                    <span className='text-warning'>$0.00</span>
                  </p>
                </div>
                <div className='px-4 py-1 space-y-2'>
                  <p className=' text-base lg:text-lg font-bold flex justify-between'>
                    <span className='text-white'>Total</span>
                    <span className='text-warning'>$0.00</span>
                  </p>
                  <p className='text-sm font-semibold flex justify-between'>
                    <span className='text-warning'>Tendered</span>
                    <span className='text-white bg-gray-800 p-1 rounded-sm w-3/6 text-right'>
                      $0.00
                    </span>
                  </p>
                  <p className=' text-xs lg:text-sm font-semibold flex justify-between'>
                    <span className='text-white'>Change</span>
                    <span className='text-warning'>$0.00</span>
                  </p>

                  <button className='bg-warning text-white w-full rounded-md py-2 uppercase font-bold  text-xs lg:text-base'>
                    Confirm Payment
                  </button>
                  <p
                    onClick={cartDrawerHandler}
                    className='text-danger font-bold text-xs text-center cursor-pointer'
                  >
                    Back to Shop
                  </p>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default MobileCartDrawer
