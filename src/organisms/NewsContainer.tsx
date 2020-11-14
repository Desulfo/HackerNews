import React, { useState, useEffect } from 'react';

import axios from 'axios';
import News from '../molecules/News';
import { TopNews } from './NewsContainerStyles';

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

//COMPONENT
function NewsContainer() {
  //let [error, setError] = useState(null);
  const [stories, setStories] = useState([{}]);
  const [isLoading, setLoading] = useState(false);

  //USE EFFECT
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
  //RENDERING
  return (
    <TopNews>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        stories
          .sort(
            (fistStory: any, secondStory: any) =>
              secondStory.score - fistStory.score
          )
          .map((story: any) => <News news={story} key={story.id} />)
      )}
    </TopNews>
  );
}

export default NewsContainer;
