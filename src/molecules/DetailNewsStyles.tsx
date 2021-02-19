import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.main`
  display: flex;
  flex-flow: column wrap;
  max-width: 850px;
  margin: 0 auto;
  padding: 1.5rem;
`;
const StyledLink = styled(Link)`
  margin-left: auto;
  text-align: right;
  border: 1px solid black;
  padding: 0.5rem;
  background-color: #db0000;
  color: white;
  :hover {
    background-color: #ad0000;
  }
`;
const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 1rem;
  @media (min-width: 550px) {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  h2 {
    margin-bottom: 0;
  }
`;
const Title = styled.h2`
  margin-right: 2rem;
`;
const Detail = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
`;
const Redirect = styled.a`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: #5f0f5f;
  :hover {
    color: #490549;
  }
`;

export { Container, StyledLink, Header, Title, Detail, Redirect };