import React from 'react';
import Tweet from './tweet.component';

const ParentTweet = ({ tweet }) => (
    tweet.original_tweet ? 
        <div className='col-11 mx-auto p-3 border rounded'>
            <p className='mb-0 text-muted small'>
                Retweet
            </p>
            <Tweet className={' '} tweet={tweet.original_tweet}/>
        </div>
    : null
);

export default ParentTweet;