import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import News from '../molecules/News';
import { TopNews } from './NewsContainerStyles';

const Content = styled(Link)`
  width: 100%;
  @media (min-width: 550px) {
    width: auto;
  }
`;

function NewsContainer({ stories }: any) {
  return (
    <TopNews>
      {stories
        .sort(
          (fistStory: any, secondStory: any) =>
            secondStory.score - fistStory.score
        )
        .map((story: any) => {
          return (
            <Content
              key={story.id}
              to={`/HackerNews/${story.id}`}
              title={story.title}
            >
              <News news={story} />
            </Content>
          );
        })}
    </TopNews>
  );
}

export default NewsContainer;
