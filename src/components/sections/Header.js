import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <Img
                fluid={data.art_build.childImageSharp.fluid}
                style={{ width: 700, maxWidth: '100%', marginBottom: -28 }}
              />
            </div>
            <div style={{ paddingLeft: 40 }}>
              <h1>
                Build highly <br />
                performant sites <br />
                amazingly fast
              </h1>
              <br />
              <p>with Gatsby of course</p>
            </div>
          </div>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 128px;
  margin-top: 96px;
`;

export default Header;
