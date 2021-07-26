import React from 'react';
import Button from '../custom-button/button.component';

const Tweet = ({ tweet, ...otherProps  }) => {
    const className = otherProps.className ? otherProps.className : 'col-10 mx-auto col-md-6';

    return (
        <div className={className}>
            <p>{tweet.id} - {tweet.content}</p>
            <div className="btn btn-group">
                <Button 
                    tweet={tweet} 
                    className='btn btn-primary btn-sm' 
                    action='likes' 
                />
                <Button 
                    tweet={tweet} 
                    className='btn btn-primary btn-sm' 
                    action='unlike'
                />
                <Button 
                    tweet={tweet} 
                    className='btn btn-primary btn-sm' 
                    action='retweet'
                />
            </div>
        </div>
    );
}

export default Tweet;