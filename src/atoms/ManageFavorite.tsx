import React, { useState, useEffect } from 'react';

const hollowHeart = 'nie lubię'; //'&#9825;';
const heart = 'lubię'; //'&#9829;';

let ListOfFavorite: object[] =
  JSON.parse(localStorage.getItem('favorite')!) || [];

const isInListOfFavorite = (story: any) => {
  if (ListOfFavorite) {
    return ListOfFavorite.some((stories: any) => stories.id === story.id)
      ? true
      : false;
  }
};

function Favorite({ story }: any) {
  const [isFavorite, setFavorite] = useState(false);

  const addToListOfFavorite = () => {
    if (ListOfFavorite.some((stories: any) => stories.id === story.id)) {
      return;
    }
    ListOfFavorite.push(story);
    localStorage.setItem('favorite', JSON.stringify(ListOfFavorite));
    setFavorite(true);
  };
  const removeFromListOfFavorite = () => {
    const newListOfFavorite = ListOfFavorite.filter((sto) => sto !== story);
    ListOfFavorite = newListOfFavorite;
    localStorage.setItem('favorite', JSON.stringify(ListOfFavorite));
    setFavorite(false);
  };

  useEffect(() => {
    setFavorite(isInListOfFavorite(story) || false);
  }, [story]);

  const manageFavorite = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!isFavorite) {
      addToListOfFavorite();
      return;
    }
    removeFromListOfFavorite();
  };
  return (
    <button onClick={manageFavorite}>{isFavorite ? heart : hollowHeart}</button>
  );
}

export default Favorite;
