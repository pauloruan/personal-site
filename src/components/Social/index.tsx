import React from 'react';
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';
import SocialContainer from './styles';

function Social() {
  return (
    <SocialContainer>
      <ul>
        <li>
          <a href="https://www.github.com/pauloruan" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            className="link-icon"
            href="https://www.linkedin.com/in/pauloruan/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            className="link-icon"
            href="https://dev.to/pauloruan"
            target="_blank"
            rel="noreferrer"
          >
            <FaDev />
          </a>
        </li>
      </ul>
    </SocialContainer>
  );
}

export default Social;
