import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  width: 100wh;
  height: calc(100vh - 10vh);

  h1 {
    font-weight: 800;
    font-size: 3rem;
  }
  
  p {
    font-style: italic;
    font-size: 1.2rem;
  }
`;