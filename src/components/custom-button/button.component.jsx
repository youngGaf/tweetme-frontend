import React, { useState } from 'react';

const Button = ({tweet, action, ...otherProps}) => {
    const [likes, setLikes] = useState(tweet ? tweet.likes : 0);
    const [userLike, setUserLike] = useState(false);
    const className = otherProps.className ? otherProps.className : 'btn btn-primary'; 
    const tweetLikes = action === 'likes' ? likes  : '';

    const handleClick = (e) => {
        if (e.target.innerHTML.includes('likes')){
            if (userLike === true){
                setLikes(likes - 1);
                setUserLike(!userLike)
            }else{
                setLikes(likes + 1);
                setUserLike(!userLike);
            }
        }
    }

    return (
        <button 
            className={className} 
            onClick={otherProps.handleClick ? otherProps.handleClick : handleClick}
        > 
            {tweetLikes} {action} 
        </button>
    );    
}

export default Button;
