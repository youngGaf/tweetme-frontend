import React from 'react';


const Tweet = ({ tweet, ...otherProps  }) => {
    const className = otherProps.className ? otherProps.className : 'col-10 mx-auto col-md-6';
    return (
        <div className={className}>
            {tweet.id} - {tweet.content}
        </div>
    );
}

export default Tweet;