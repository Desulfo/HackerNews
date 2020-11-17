import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container,
  StyledLink,
  Header,
  Title,
  Detail,
  Redirect,
} from './DetailNewsStyles';

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
  const newsId: number = parseInt(match.params.id);
  useEffect(() => {
    interface ID {
      id: number;
    }
    setStory(stories.find((news: object | any) => news.id === newsId));
  }, []);
  let content;
  if (story === undefined) {
    content = <p>ups</p>;
  } else {
    const newsData = new Date(story.time);
    const { title, score, by: author, url } = story;
    content = (
      <>
        <Header>
          <Title>{title}</Title>
          <h3>{`${score} ✩`}</h3>
        </Header>
        <Detail>
          <section>
            <h4 title="Author">{author}</h4>
            <p>
              <small>karma:</small> 123
            </p>
          </section>
          <data>{newsData.toDateString()}</data>
        </Detail>
        <Redirect href={url} title="See original news">
          See full news
        </Redirect>
        <section>komentarze</section>
      </>
    );
  }
  return (
    <Container>
      <StyledLink to="/" title="Back to main site">
        Back
      </StyledLink>
      {content}
    </Container>
  );
}
export default DetailNews;
