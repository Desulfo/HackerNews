import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import './typography.css';
import NewsContainer from './organisms/NewsContainer';
import DetailNews from './molecules/DetailNews';

const topStoriesAPI = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
const newsAPI = (id: number) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

const getRandomNumber = (max: number) =>
  Math.floor(Math.random() * Math.floor(max));
const fetchData = async (endpoint: string) => {
  const result = await axios.get(endpoint).then((response) => response.data);
  //const result = await fetch(endpoint).then((response) => response.json());
  return result;
};
const getRandomIds = (idArray: Array<number>, maxNumber: number) => {
  const randomIds: Array<number> = [];
  const randomIndexNumbers: Array<number> = [];
  for (let i = 0; i < 10; ) {
    const randomNumber: number = getRandomNumber(maxNumber);
    if (!randomIndexNumbers.includes(randomNumber)) {
      randomIndexNumbers.push(randomNumber);
      i++;
    }
  }
  randomIndexNumbers.forEach((number) => {
    randomIds.push(idArray[number]);
  });
  return randomIds;
};

function App() {
  //let [error, setError] = useState(null);
  const [stories, setStories] = useState([{}]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getRandomStories() {
      setLoading(true);
      const storiesId: Array<number> = await fetchData(topStoriesAPI);
      const idLength: number = storiesId.length;
      const randomIds: Array<number> = getRandomIds(storiesId, idLength);
      const response: Array<object> = await Promise.all(
        randomIds.map((ID) => fetchData(newsAPI(ID)))
      );
      setStories(response);
      setLoading(false);
    }
    getRandomStories();
  }, []);

  return (
    <>
      <h1>Top Hacker's News</h1>
      <Router>
        <Switch>
          <Route
            path="/HackerNews/"
            exact
            render={() =>
              isLoading ? (
                <p>loading...</p>
              ) : (
                <NewsContainer stories={stories} />
              )
            }
          />
          <Route
            path={`/HackerNews/:id`}
            render={(props) => <DetailNews {...props} stories={stories} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
