import React, { useState, useEffect } from 'react';

import './App.css';
import NewsContainer from './organisms/NewsContainer';

function App() {
  return (
    <div className="App">
      <h1>Top Hacker's News</h1>
      <NewsContainer />
    </div>
  );
}

export default App;

// [id;
// by (author);
// karma-/user/{by}.json
// time
// score; url]
