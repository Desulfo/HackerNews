import React from 'react';
import { Link } from 'react-router-dom';

import News from '../molecules/News';
import { TopNews } from './NewsContainerStyles';

//COMPONENT
function NewsContainer({ stories }: any) {
  //RENDERING
  return (
    <TopNews>
      {stories
        .sort(
          (fistStory: any, secondStory: any) =>
            secondStory.score - fistStory.score
        )
        .map((story: any) => {
          return (
            <Link
              key={story.id}
              to={`/HackerNews/${story.id}`}
              title={story.title}
            >
              <News news={story} />
            </Link>
          );
        })}
    </TopNews>
  );
}

export default NewsContainer;
