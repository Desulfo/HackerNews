import styled from 'styled-components';

const NewsContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f0f0;
  max-width: 300px;
  padding: 1rem;
  margin: 1.5rem;
  -webkit-box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.75);
  transition: box-shadow 0.5s;
  :hover {
    -webkit-box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.75);
  }
  @media (min-width: 550px) {
    max-width: none;
    width: 500px;
  }
  @media (min-width: 1113px) {
    height: 200px;
  }
`;
const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export { NewsContainer, Header, Title };
