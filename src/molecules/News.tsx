import React, { useState, useEffect } from 'react';

import { NewsContainer, Header, Title } from './NewsStyles';

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
    <NewsContainer>
      <Header>
        <section>
          <h3>{news.by}</h3>{' '}
          <p>
            <small>karma:</small> {karma || 'loading'}
          </p>
        </section>{' '}
        <data>{newsData.toDateString()}</data>
      </Header>
      <Title>{news.title}</Title>
      <h3>{`${news.score} ✩`}</h3>
    </NewsContainer>
  );
}

export default News;
