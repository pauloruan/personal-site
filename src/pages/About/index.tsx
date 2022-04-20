import React from 'react';
import { Header } from '../../components/Header';
import { Social } from '../../components/Social';
import { AboutContainer } from './styles';
import illustration from '../../images/undraw_version_control_re_mg66.svg';

export const About: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutContainer>
        <img src={illustration} alt="undraw_version_control_re_mg66" />
        <h1>Sobre</h1>
        <p>Olá, meu nome é Paulo Ruan. Sou Desenvolvedor Web Full Stack em formação.</p>

        <p>Atualmente estudo na Trybe, uma escola de desenvolvimento web. São mais de 1500 horas de formação que aborda fundamentos de desenvolvimento web, desenvolvimento Front-end, desenvolvimento Back-end, ciência da computação, metodologias ágeis e habilidades comportamentais. Nesse periodo tive a oportunidade de aprender as tecnologias mais utilizadas no desenvolvimento web, como HTML e CSS, JavaScript entre outras.</p>

        <p>Meu foco atualmente é ingressar em uma empressa de tecnologia, após quase 10 anos de carreira como operador logistico, e realizar meu sonho de trabalhar com algo relacionado a tecnologia</p>

        {/* <p>Tenho trabalhado em projetos pessoais para aprimorar o aprendizado até o momento.</p> */}
        <Social />
      </AboutContainer>
    </div>
  )
}