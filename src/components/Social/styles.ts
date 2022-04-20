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
    margin: auto 1rem;
    padding: 0.4rem auto;
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

  a:link, a:visited, a:active {
    text-decoration: none;
  }
`;

export default SocialContainer;
