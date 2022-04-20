import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li>
            <Link
              to='/'
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to='/about'
            >
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

