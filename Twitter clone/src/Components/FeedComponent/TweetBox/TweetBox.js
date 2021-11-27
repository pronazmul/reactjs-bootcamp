import { Avatar, Button } from '@material-ui/core'
import { Event, Gif, Image, SentimentVeryDissatisfiedRounded } from '@material-ui/icons'
import React from 'react'
import './TweetBox.css'

const TweetBox = () => {
    return (
        <div className='tweet-box'>
            <form>
                <div className='tweetbox-input'>
                    <Avatar src='https://i.ibb.co/3v4qVhN/pro-nazmul.jpg' />
                    <input type='text' placeholder="What's happening?" />
                </div>
                <div className='tweet-input-button'>
                    <div className='tweet-input-icons'>
                        <Image fontSize='small' />
                        <Gif fontSize='small' />
                        <SentimentVeryDissatisfiedRounded fontSize='small' />
                        <Event fontSize='small' />
                    </div>
                    <Button className='tweetBox-tweetButton'>Tweet</Button>
                </div>
            </form>
        </div>
    )
}

export default TweetBox