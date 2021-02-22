import React, { useState, useEffect } from 'react';

const hollowHeart = 'nie lubię'; //'&#9825;';
const heart = 'lubię'; //'&#9829;';

let ListOfFavorite: object[] =
  JSON.parse(localStorage.getItem('favorite')!) || [];

const isInListOfFavorite = (story: any) => {
  console.log({ eh: story });
  if (ListOfFavorite) {
    return ListOfFavorite.some((stories: any) => stories.id === story.id)
      ? true
      : false;
  }
};
const addToListOfFavorite = (story: any) => {
  if (ListOfFavorite.some((stories: any) => stories.id === story.id)) {
    return;
  }
  ListOfFavorite.push(story);
  localStorage.setItem('favorite', JSON.stringify(ListOfFavorite));
};
const removeFromListOfFavorite = (story: any) => {
  const newListOfFavorite = ListOfFavorite.filter((sto) => sto !== story);
  ListOfFavorite = newListOfFavorite;
  localStorage.setItem('favorite', JSON.stringify(ListOfFavorite));
};

function Favorite({ story }: any) {
  console.log({ story });
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    isInListOfFavorite(story);
    setFavorite(isInListOfFavorite(story) || false);
  }, [story]);

  const manageFavorite = (e: any) => {
    e.preventDefault();
    addToListOfFavorite(story);
  };
  const add = (e: any) => {
    e.preventDefault();
    addToListOfFavorite(story);
    setFavorite(true);
  };
  const remo = (e: any) => {
    e.preventDefault();
    removeFromListOfFavorite(story);
    setFavorite(false);
  };

  return (
    <>
      <button onClick={manageFavorite}>
        {isFavorite ? heart : hollowHeart}
      </button>
      <button onClick={add}>add</button>
      <button onClick={remo}>remove</button>
    </>
  );
}

export default Favorite;
