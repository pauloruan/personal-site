import styled from 'styled-components';

const SocialContainer = styled.div`
  ul {
    max-width: 20%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: 0.3rem;
    margin: 0.3rem auto;
  }

  li {
    list-style: none;
    margin: auto 0.8rem;
    padding: 0.4rem 0.2rem;
  }

  a {
    color: #d95032;
    font-size: 2rem;
    text-decoration: none;
  }

  a:hover {
    color: #f2f2f2;
    text-decoration: none;
    transition: ease-in-out 0.5s;
  }

  a:link,
  a:visited,
  a:active {
    text-decoration: none;
  }

  @media only screen and (max-width: 992px) {
    li {
      padding: 0.4rem 0.2rem;
    }

    a {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 768px) {
    li {
      padding: 0.4rem 0.2rem;
    }

    a {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 600px) {
    li {
      padding: 0.4rem 0.2rem;
    }

    a {
      font-size: 1.4rem;
    }
  }
`;

export default SocialContainer;
