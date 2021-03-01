import styled from 'styled-components';

const Container = styled.main`
  position: relative;
  background-color: #f0f0f0;
  display: flex;
  flex-flow: column wrap;
  max-width: 850px;
  margin: 0 auto;
  padding: 1.5rem;
  h2,
  h3,
  h4 {
    text-align: left;
  }
  h3 {
    margin: 0.3rem 0;
  }
  h4 {
    margin-bottom: 0.2rem;
  }
`;
const Title = styled.h2`
  margin: 0.6rem 60px 0.6rem 0;
  @media (min-width: 550px) {
    margin-right: 100px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export { Container, Title };
