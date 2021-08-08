import React from 'react';
import TweetPage from './pages/tweet-page/tweet-page.component';
import Header from './components/navbar/navbar.component';


import './App.css';

function App(props) {
  return (
    <div className="App">
        <Header />
        <TweetPage props={props}/>
    </div>
  )
}

export default App;
