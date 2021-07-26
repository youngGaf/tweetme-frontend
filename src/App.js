import { useEffect, useState } from 'react';
import Tweet from './components/tweet-section/tweet.component';
import Form from './components/form-input/form.component'
import Button from './components/custom-button/button.component';
import Header from './components/navbar/navbar.component';
import { apiRequest, getCsrfToken }from './components/tweet-requests/tweet-requests';


import './App.css';

function App() {
  const [tweets, setTweets] = useState([]);
  const [tweetPost, setTweetPost] = useState('');
  

  useEffect(() =>{
    fetch('/api/tweets')
    .then(response => response.json())
    .then(data => setTweets(data))
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
    if (tweets){
      const csrfToken = await getCsrfToken();
      const postTweet = await apiRequest('create/','POST', tweetPost, csrfToken);
      console.log(postTweet);
      tweets.unshift({
        content: tweetPost,
        likes: 0,
        id: 1010
      });
      console.log(csrfToken);
    }
    setTweetPost('');
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
            {tweets.map(tweet => (  
                <Tweet 
                  key={tweet.id} 
                  tweet={tweet} 
                  className='my-5 py-5 border bg-white text-dark'
                />
            ))}
        </div>
    </div>
  );
}

export default App;
