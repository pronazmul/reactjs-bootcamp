import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({active, Icon, text}) => {
    return (
        <div className={`sideBarOption ${active && 'sideBarOption--active'}`}>
            <Icon/>
            <h2 className='sidebar-text'>{text}</h2>
        </div>
    )
}

export default SidebarOption