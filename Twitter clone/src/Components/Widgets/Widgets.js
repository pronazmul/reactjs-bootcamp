import { Search } from '@material-ui/icons';
import React from 'react';
import './Widgets.css'
import {TwitterTweetEmbed} from 'react-twitter-embed'

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='twitter-input'>
                <Search className='widget-searchIcon'/>
                <input type='text' placeholder='Search on Twitter'/>
            </div>

            <div className='widgets-widegtContainer'>
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId='1342191726102937605'/>
                <TwitterTweetEmbed tweetId='1341956477297123330'/>
                <TwitterTweetEmbed tweetId='1337268250778824704'/>
            </div>



        </div>
    );
};

export default Widgets;