import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FavoriteButton = styled.button`
  background-color: #fffbe7;
  color: #fe3e58;
  border: none;
  font-size: 1.5rem;
  height: 80px;
  width: 50px;
  position: absolute;
  right: 20px;
  top: -20px;
  padding-top: 30px;
  -webkit-box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.75);
  :hover {
    cursor: pointer;
  }
  @media (min-width: 550px) {
    right: 45px;
  }
`;

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
    <FavoriteButton title="add to favorite" onClick={manageFavorite}>
      {isFavorite ? (
        <i className="fas fa-heart"></i>
      ) : (
        <i className="far fa-heart"></i>
      )}
    </FavoriteButton>
  );
}

export default Favorite;
