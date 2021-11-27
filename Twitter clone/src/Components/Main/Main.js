import React from 'react'
import './Main.css'
import Feed from '../Feed/Feed'
import Sidebar from '../Sidebar/Sidebar'
import Widgets from '../Widgets/Widgets'

const Main = () => {
    return (
        <div className="root-container">
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    )
}

export default Main