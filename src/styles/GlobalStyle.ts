import  { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
}

body {
  background-color: #0d0d0d;
}

h1 {
  color: #d95032;
}

strong, p {
  color: #f2f2f2;
}
`;