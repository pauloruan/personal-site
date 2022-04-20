import styled from 'styled-components';

const HeaderContainer = styled.div`
  ul {
    max-width: 20%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0.3rem;
    margin: 0.3rem auto;
  }

  li {
    list-style: none;
    margin: auto;
    padding: 0.4rem auto;
  }

  a {
    color: #d95032;
    font-size: 20px;
    font-weight: bold;
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

export default HeaderContainer;
