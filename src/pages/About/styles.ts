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
    height: 300px;
  }

  h1 {
    font-weight: 800;
    font-size: 3rem;
    text-align: center;
    padding: 0 5vw;
  }

  p {
    font-style: normal;
    font-size: 1rem;
    text-align: center;
    margin: 0.1rem;
    padding: 0 5vw;
  }

  @media only screen and (max-width: 992px) {
    img {
      width: auto;
      height: 280px;
    }
  }

  @media only screen and (max-width: 768px) {
    img {
      width: auto;
      height: 220px;
    }
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-weight: 800;
      font-size: 2.6rem;
      text-align: center;
    }

    img {
      width: auto;
      height: 140px;
    }
  }
`;

export default AboutContainer;
