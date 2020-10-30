import React, { useState, useEffect } from 'react';

import News from '../molecules/News';

const topStoriesAPI = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
const newsAPI = (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));
const fetchData = async (endpoint) => {
  const result = await fetch(endpoint).then((response) => response.json());
  return result;
};
const getRandomIds = (idArray, maxNumber) => {
  const randomIds = [];
  const randomIndexNumbers = [];
  for (let i = 0; i < 10; ) {
    const randomNumber = getRandomNumber(maxNumber);
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
const randomStory = {
  by: 'DyslexicAtheist',
  descendants: 5,
  id: 24929190,
  kids: (2)[(24930220, 24929715)],
  score: 15,
  time: 1603969526,
  title: 'Internal Google document reveals campaign against EU lawmakers',
  type: 'story',
  url: 'https://www.ft.com/content/d9d05b1e-45c0-44b8-a1ba-3aa6d0561bed',
};
//COMPONENT
function NewsContainer() {
  //let [error, setError] = useState(null);
  let [stories, setStories] = useState([]);
  let [isLoading, setLoading] = useState(false);

  //USE EFFECT
  useEffect(() => {
    async function getRandomStories() {
      setLoading(true);
      let storiesId = await fetchData(topStoriesAPI);
      let idLength = storiesId.length;
      let randomIds = getRandomIds(storiesId, idLength);
      const randomStories = [];
      await Promise.all(
        randomIds.map((ID) =>
          fetch(newsAPI(ID)).then((response) => response.json())
        )
      ).then((data) => {
        setStories(data);
      });
      // randomIds.forEach(async (ID) => {
      //   const story = await fetchData(newsAPI(ID));
      //   randomStories.push(story);
      //   console.log(randomStories);
      // });
      // console.log('koniec');
      // setStories(randomStories);
      setLoading(false);
    }
    getRandomStories();
  }, []);
  //RENDERING
  return (
    <main className="topNews">
      {isLoading && <p>loading...</p>}
      {stories.map((story) => (
        <News news={story} key={story.id} />
      ))}
    </main>
  );
}

export default NewsContainer;
