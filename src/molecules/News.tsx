import React, { useState, useEffect } from 'react';

function News({ news }: any) {
  const newsData = new Date(news.time);
  const authorsURL = `https://hacker-news.firebaseio.com/v0/user/${news.by}.json`;
  const [karma, setKarma] = useState(null);

  useEffect(() => {
    fetch(authorsURL)
      .then((response) => response.json())
      .then((data) => {
        setKarma(data.karma);
      });
  }, []);

  return (
    <a href="#">
      <article className="News">
        <header className="News__header">
          <section>
            <h3>{news.by}</h3>{' '}
            <p>
              <small>karma:</small> {karma || 'loading'}
            </p>
          </section>{' '}
          <data>{newsData.toDateString()}</data>
        </header>
        <h2>{news.title}</h2>
        <h3>{`${news.score} ✩`}</h3>
      </article>
    </a>
  );
}

export default News;
