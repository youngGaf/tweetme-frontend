import React from 'react';
import TweetList from '../../components/tweet-section/tweet-lists.component';


const TweetPage = ({props}) => {
    const { username } = props.userInfo;
    return(
        <TweetList username={username}/>
    )
};

export default TweetPage;