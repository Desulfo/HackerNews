import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Favorite from '../atoms/ManageFavorite';
import { Container, Title } from './DetailNewsStyles';

const newsAPI = (id: number) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
const fetchData = async (endpoint: string) => {
  const result = await axios.get(endpoint).then((response) => response.data);
  return result;
};

interface State {
  id?: string;
  title?: string;
  time?: any;
  score?: number;
  by?: string;
  url?: string;
}

function DetailNews({ match, stories }: any) {
  const [story, setStory] = useState<State>({});
  const [isLoading, setLoading] = useState(false);
  const newsId: number = parseInt(match.params.id);
  useEffect(() => {
    interface ID {
      id: number;
    }
    setStory(stories.find((news: object | any) => news.id === newsId));
  }, []);

  let content;
  if (story === undefined) {
    content = (
      <Link to="/HackerNews/">
        Can't load content. Click me to go into main site.
      </Link>
    );
  } else {
    const newsData = new Date(story.time * 1000);
    const { title, score, by: author, url } = story;
    content = (
      <>
        <Favorite story={story} />
        <h4 title="Author">
          <small>by: </small>
          {author}
        </h4>
        <data>
          <small>{newsData.toDateString()}</small>
        </data>
        <a href={url} title="See full news">
          <Title>{title}</Title>
        </a>
        <h3>{`${score} ✩`}</h3>
      </>
    );
  }
  return (
    <>
      <Container>{content}</Container>
      <section>komentarze</section>
    </>
  );
}
export default DetailNews;
