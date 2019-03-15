import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as AirbnbLogo } from '@static/logos/airbnb.svg';
import { ReactComponent as AppleMusicLogo } from '@static/logos/apple-music.svg';
import { ReactComponent as CokeLogo } from '@static/logos/coca-cola.svg';
import { ReactComponent as NodeLogo } from '@static/logos/nodejs.svg';
import { ReactComponent as NikeLogo } from '@static/logos/nike.svg';
import { ReactComponent as InstagramLogo } from '@static/logos/instagram.svg';

const LOGOS = [
  {
    logo: AirbnbLogo,
    link: 'https://airbnb.io',
  },
  {
    logo: AppleMusicLogo,
    link: 'https://www.apple.com/in/music/',
  },
  {
    logo: CokeLogo,
    link: 'https://coca-cola.com',
  },
  {
    logo: NodeLogo,
    link: 'https://nodejs.org',
  },
  {
    logo: NikeLogo,
    link: 'https://nike.com',
  },
  {
    logo: InstagramLogo,
    link: 'https://instagram.com',
  },
];

const UsedBy = () => (
  <Section accent>
    <StyledContainer>
      <div width="50%">
        <h1>Used by biggest in tech</h1>
        <LogoGrid>
          {LOGOS.map(({ logo, link }) => (
            <ExternalLink href={link}>{logo()}</ExternalLink>
          ))}
        </LogoGrid>
      </div>
    </StyledContainer>
  </Section>
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export default UsedBy;
