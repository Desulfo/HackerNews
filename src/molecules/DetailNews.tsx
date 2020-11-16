import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const newsAPI = (id: number) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
const fetchData = async (endpoint: string) => {
  const result = await axios.get(endpoint).then((response) => response.data);
  return result;
};
function DetailNews({ match }: any) {
  const [story, setStory] = useState({});
  const [isLoading, setLoading] = useState(false);
  const newsId: number = match.params.id;

  const getNews = async (id: number) => {
    setLoading(true);
    const news = await fetchData(newsAPI(id));
    setStory(news);
    setLoading(false);
  };
  useEffect(() => {
    getNews(newsId);
  }, []);

  return (
    <main>
      <Link to="/">wstecz</Link>
      {isLoading ? <p>loading</p> : <h2>{story.title}</h2>}
      <h4>by</h4>
      <a>full news</a>
      <section>komentarze</section>
    </main>
  );
}

{
  /* <Header>
<section>
  <h3>{news.by}</h3>{' '}
  <p>
    <small>karma:</small> {karma || 'loading'}
  </p>
</section>{' '}
<data>{newsData.toDateString()}</data>
</Header>
<h2>{news.title}</h2>
<h3>{`${news.score} ✩`}</h3> */
}
export default DetailNews;
