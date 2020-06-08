import React from 'react';
import './App.css';
import Post from './posts/post';
import Jaron from './components/jaron';

function App  () {
  return (
    <div className="App">
      <div className="quoteBox">
        <Post />
        <Jaron />
      </div>
    </div>
  );
}

export default App;
