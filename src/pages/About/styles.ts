import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  width: 100wh;
  height: calc(100vh - 10vh);
  
  img {
    width: auto;
    height: 320px;
  }

  h1 {
    font-weight: 800;
  }

`;

export default AboutContainer;
