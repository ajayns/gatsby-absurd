import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as GithubIcon } from '@static/icons/github.svg';
import { ReactComponent as InstagramIcon } from '@static/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '@static/icons/twitter.svg';

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/devfolioco/',
  },
  {
    icon: InstagramIcon,
    link: 'instagram.com',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/devfolioco',
  },
];

const Footer = () => (
  <FooterWrapper>
    <Container
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Copyright>
        <h2>Absurd</h2>
        <span>
          Illustrations by
          {` `}
          <ExternalLink href="https://twitter.com/diana_valeanu">
            @diana_valeanu
          </ExternalLink>
        </span>
      </Copyright>
      <SocialIcons>
        {SOCIAL.map(({ icon, link }) => (
          <ExternalLink href={link}>{icon()}</ExternalLink>
        ))}
      </SocialIcons>
    </Container>
  </FooterWrapper>
);

const SocialIcons = styled.div`
  display: flex;

  svg {
    color: ${props => props.theme.color.black.regular};
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default Footer;
