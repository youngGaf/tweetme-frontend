import { useEffect, useState } from 'react';
import Tweet from './components/tweet-section/tweet.component';
import Form from './components/form-input/form.component'
import Button from './components/custom-button/button.component';
import Header from './components/navbar/navbar.component';
import { apiRequest, getCsrfToken }from './components/tweet-requests/tweet-requests';


import './App.css';

function App() {
  const [tweetLists, setTweetLists] = useState([]);
  const [retweet, setRetweet] = useState(false);
  const [tweetPost, setTweetPost] = useState('');
   
  useEffect(() =>{
    fetch('/api/tweets')
    .then(response => response.json())
    .then(data => {
      setTweetLists(data)})
    .catch((error) =>{ console.log(error)
      alert('An error occured!')
    })
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setTweetPost(value);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (tweetLists){
      const { csrfToken } = await getCsrfToken();
      const postTweet = await apiRequest('create/','POST', {content: tweetPost}, csrfToken);
      tweetLists.unshift(postTweet);
    }
    setTweetPost('');
  }

  const handleDidRetweet = (newTweet) => {
    tweetLists.unshift(newTweet);
    setRetweet(!retweet)
  }

  return (
    <div className="App">
        <Header />
  

        {/* Post tweets */}
        <div className='col-12 col-md-10 my-4 mx-auto border rounded py-3 mb-4 tweet'>
          <div className='col-12 mb-3'>
            <form onSubmit={handleSubmit}>
              <Form
                className='form-control'
                name='content'
                value={tweetPost}
                handleChange={handleChange}
                placeholder='Tweet'
                required
              />
              <Button action='tweet' className='btn btn-primary my-3' type='submit'/>
            </form>
          </div>
        </div>

        {/* Loaded tweets */}
        <div className='col-12 col-md-10 mx-auto rounded py-3 mb-4'>
            {tweetLists.map(tweet => (  
                <Tweet 
                  key={tweet.id} 
                  tweet={tweet}
                  retweet 
                  className='my-5 py-5 border bg-white text-dark'
                  handleDidRetweet={handleDidRetweet}
                />
            ))}
        </div>
    </div>
  );
}

export default App;
