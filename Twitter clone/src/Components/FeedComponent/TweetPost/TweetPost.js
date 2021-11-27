import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, Favorite, Publish, Repeat, VerifiedUser } from '@material-ui/icons'
import React from 'react'
import './TweetPost.css'

const TweetPost = ({data, VarifiedId}) => {
    console.log(data)
    return (
        <div className='post'>
            <div className='post-avatar'>
                <Avatar src={data.owner.picture} />
            </div>

            <div className='post-body'>
                <div className='post-header'>
                    <div className='post-headerText'>
                        <h3>{`${data.owner.firstName} ${data.owner.lastName}`}
                            {VarifiedId && <VerifiedUser className='verified-userBadge' />}
                            {<span className='light-text'>{data.publishDate}</span>}
                        </h3>
                    </div>
                    <div className='post-headerDescription'>
                        <p>{data.text}</p>
                    </div>
                </div>
                <img src={data.image} alt='' />
                
                <div className='post-footer'>
                    <span className='like-icon'><Favorite fontSize='small' />  {data.likes} likes</span>
                    <ChatBubbleOutline fontSize='small' />
                    <Repeat fontSize='small' />
                    <Publish fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default TweetPost