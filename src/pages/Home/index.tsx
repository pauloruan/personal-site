import React from 'react';
import Header from '../../components/Header';
import Social from '../../components/Social';
import HomeContainer from './styles';

function Home() {
  return (
    <div>
      <Header />
      <HomeContainer>
        <h1>Paulo Ruan</h1>
        <p>Desenvolvedor Web Full Stack</p>
        <p>Entusiasta de Linux, Go, suco de limão e piadas sem graça.</p>
        <Social />
      </HomeContainer>
    </div>
  );
}

export default Home;
