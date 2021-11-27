import React, { useState } from 'react'
import DextopCart from '../sections/DextopCart'
import ExtandMenuBar from '../sections/ExtandMenuBar'
import MobileCartDrawer from '../sections/MobileCartDrawer'
import MobileMenuDrawer from '../sections/MobileMenuDrawer'
import DashboardContent from './../sections/DashboardContent'
import ShinkMenuBar from './../sections/ShinkMenuBar'

const Dashboard = () => {
  // Dextop Menu Shrink/Extand State
  const [menuToggoler, setMenuToggoler] = useState(true)
  const menuTogglerHandler = () => setMenuToggoler(!menuToggoler)

  // Menu Drawer Show/Hide State
  const [menuDrawer, setMenuDrawer] = useState(false)
  const menuDrawerHandler = () => setMenuDrawer(!menuDrawer)

  // Cart Drawer Show/Hide State
  const [cartDrawer, setCartDrawer] = useState(false)
  const cartDrawerHandler = () => setCartDrawer(!cartDrawer)

  return (
    <div className='h-screen grid grid-cols-12'>
      {/* Dextop Fixed Menubar Extand/Shrink*/}
      <div
        className={`bg-primary hidden md:block col-span-0 md:col-span-${
          menuToggoler ? '2' : '1'
        } border-r-2 border-light`}
      >
        {menuToggoler ? <ExtandMenuBar /> : <ShinkMenuBar />}
      </div>

      {/* Main Content Section */}
      <div
        className={`bg-secondary col-span-12 md:col-span-${
          menuToggoler ? '7' : '8'
        }`}
      >
        <DashboardContent
          menuTogglerHandler={menuTogglerHandler}
          menuDrawerHandler={menuDrawerHandler}
          cartDrawerHandler={cartDrawerHandler}
        />
        {/* Menu Drawer For Small Devices */}
        <div className='block md:hidden'>
          <MobileMenuDrawer
            menuDrawer={menuDrawer}
            menuDrawerHandler={menuDrawerHandler}
          />
        </div>

        {/* Mobile Cart Drawer */}
        <MobileCartDrawer
          cartDrawer={cartDrawer}
          cartDrawerHandler={cartDrawerHandler}
        />
      </div>

      {/* Dextop Fixed Cart Sidebar */}
      <div className='bg-primary hidden md:block col-span-0 md:col-span-3  border-l-2 border-light'>
        <DextopCart />
      </div>
    </div>
  )
}

export default Dashboard
