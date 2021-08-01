import React, { useState } from 'react';
import Button from '../custom-button/button.component';
import ParentTweet from './parent-tweet.component'
import { getCsrfToken, apiRequest } from '../tweet-requests/tweet-requests';

const Tweet = ({ tweet, handleDidRetweet, ...otherProps  }) => {
    const className = otherProps.className ? otherProps.className : 'col-10 mx-auto col-md-6';
    const [actionTweet, setActionTweet] = useState(null);
    
    const handleClick = async (e) => {
        console.log(e.target.innerText);
        const getAction = e.target.innerText;
        const action = getAction.split(' ')[1] === 'like' ? getAction.split(' ')[1] : getAction;
        
        const { csrfToken } = await getCsrfToken();
        const tweetAction = await apiRequest('action/', 'POST', {id: tweet.id, action}, csrfToken);
        setActionTweet(tweetAction);
        
        if (getAction === 'retweet'){
            handleDidRetweet(tweetAction);
        }
    }

    return (
        <div className={className}>
            <div>
                <p>{tweet.id} - {tweet.content}</p>
                <ParentTweet tweet={tweet}/>    
            </div>
            
            {(tweet.original_tweet || tweet.is_retweet === false) &&
                <div className="btn btn-group">
                    <Button 
                        tweet={tweet} 
                        className='btn btn-primary btn-sm' 
                        action='like'
                        handleClick={handleClick}
                        actionTweet={actionTweet}
                    />
                    <Button 
                        tweet={tweet} 
                        className='btn btn-primary btn-sm' 
                        action='unlike'
                        handleClick={handleClick} 
                    />
                    <Button 
                        tweet={tweet} 
                        className='btn btn-primary btn-sm' 
                        action='retweet'
                        handleClick={handleClick} 
                    />
                </div>
            }
        </div>
    );
}

export default Tweet;