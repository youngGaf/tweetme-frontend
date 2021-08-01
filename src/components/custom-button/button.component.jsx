import React from 'react';

const Button = ({tweet, action, actionTweet, ...otherProps}) => {
    const likes = tweet ? tweet.likes : 0;
    const className = otherProps.className ? otherProps.className : 'btn btn-primary'; 
    const tweetLikes = action === 'like' ? likes  : '';

    return (
        <button 
            className={className} 
            onClick={otherProps.handleClick}
        > 
            { actionTweet ?  actionTweet.likes : tweetLikes} {action} 
        </button>
    );    
}

export default Button;
