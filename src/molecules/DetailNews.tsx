import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const newsAPI = (id: number) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
const fetchData = async (endpoint: string) => {
  const result = await axios.get(endpoint).then((response) => response.data);
  return result;
};

interface State {
  title?: string;
  time?: any;
  score?: number;
  by?: string;
  url?: string;
}

function DetailNews({ match, stories }: any) {
  const [story, setStory] = useState<State>({});
  const [isLoading, setLoading] = useState(false);
  const newsId: number = match.params.id;
  useEffect(() => {
    setStory(stories.find((news: any) => news.id == newsId));
  }, []);

  if (story === undefined) {
    return (
      <>
        <p>ups</p>
        <Link to="/">wstecz</Link>
      </>
    );
  } else {
    const newsData = new Date(story.time);
    const { title, score, by: author, url } = story;
    return (
      <main>
        <Link to="/">wstecz</Link>
        <h2>{title}</h2>
        <h3>{`${score} ✩`}</h3>
        <data>{newsData.toDateString()}</data>
        <h4>{author}</h4>
        <p>
          <small>karma:</small>
        </p>
        <a href={url}>full news</a>
        <section>komentarze</section>
      </main>
    );
  }
}
export default DetailNews;
