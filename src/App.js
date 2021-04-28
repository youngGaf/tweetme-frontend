import { useEffect, useState } from 'react';
import Tweet from './components/tweet-section/tweet.component';
import Form from './components/form-input/form.component'
import Button from './components/custom-button/button.component';

import logo from './logo.svg';
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

  const handleChange = (e) => {
    const { value } = e.target;
    setTweetPost(value);
  }

  const handleSubmit = (e) => {
    e.target.preventDefault();
    console.log(e);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Post tweets */}
        <div>
          <div className='col-12 mb-3'>
            <form onSubmit={handleSubmit}>
              <Form
                className='form-control'
                name='tweet'
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
        <div>
            {tweets.map(tweet => (  
                <Tweet 
                  key={tweet.id} 
                  tweet={tweet} 
                  className='my-5 py-5 border bg-white text-dark'
                />
            ))}
        </div>

      </header>
    </div>
  );
}

export default App;
