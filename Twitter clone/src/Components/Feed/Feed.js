import { Flare } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TweetBox from '../FeedComponent/TweetBox/TweetBox'
import TweetPost from '../FeedComponent/TweetPost/TweetPost'
// import firebaseApp from '../Firebase/firebaseConfig'
import './Feed.css'


const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://dummyapi.io/data/api/post?limit=10", { headers: { 'app-id': '60041ffb57b278dfd93806e9' } })
            .then(({ data }) => setPosts(data.data))
            .catch(console.error)
    }, [])

    return (
        <div className='feed'>
            {/* Header */}
            <div className='feed-header'>
                <h2>Home</h2>
                <Flare className='feed-headerIcon'/>
            </div>

            {/* Tweet Box */}
            <TweetBox />

            {posts.map(post =>
                <TweetPost data={post} VarifiedId></TweetPost>
            )}

        </div>
    )
}

export default Feed