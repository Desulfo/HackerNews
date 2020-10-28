import React, { useState, useEffect } from 'react';

import News from '../molecules/News';

function NewsContainer() {
  let [news, setNews] = useState(null);
  let [isLoading, setLoading] = useState(false);

  const NewsURL = 'https://hacker-news.firebaseio.com/v0/item/24858750.json';

  useEffect(() => {
    setLoading(true);
    fetch(NewsURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setNews([data]);
      });
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return <>{news && news.map((news) => <News news={news} key={news.id} />)}</>;
}

export default NewsContainer;
