import { useEffect, useState } from 'react';
import Tweet from './components/tweet-section/tweet.component';

import logo from './logo.svg';
import './App.css';

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() =>{
    fetch('/api/tweets')
    .then(response => response.json())
    .then(data => setTweets(data))
    .catch((error) =>{ console.log(error)
      alert('An error occured!')
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            {tweets.map(tweet => (  
                <Tweet key={tweet.id} tweet={tweet} className='my-5 py-5 border bg-white text-dark'/>
            ))}
        </div>
      </header>
    </div>
  );
}

export default App;
