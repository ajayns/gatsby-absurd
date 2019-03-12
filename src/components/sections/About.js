import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 380) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 380) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 380) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>This is heading one</h2>
              <p>
                Look, just because I don't be givin' no man a foot massage don't
                make it right for Marsellus to throw Antwone into a glass
                motherfuckin' house, fuckin' up the way the nigger talks.
                Motherfucker do that shit to me, he better paralyze my ass,
                'cause I'll kill the motherfucker, know what I'm sayin'?
              </p>
            </div>
            <div>
              <Art fluid={data.art_fast.childImageSharp.fluid} />
            </div>
          </Grid>
          <Grid inverse>
            <div>
              <Art fluid={data.art_learn.childImageSharp.fluid} />
            </div>
            <div>
              <h2>This is heading two</h2>
              <p>
                Look, just because I don't be givin' no man a foot massage don't
                make it right for Marsellus to throw Antwone into a glass
                motherfuckin' house, fuckin' up the way the nigger talks.
                Motherfucker do that shit to me, he better paralyze my ass,
                'cause I'll kill the motherfucker, know what I'm sayin'?
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>This is heading three</h2>
              <p>
                Look, just because I don't be givin' no man a foot massage don't
                make it right for Marsellus to throw Antwone into a glass
                motherfuckin' house, fuckin' up the way the nigger talks.
                Motherfucker do that shit to me, he better paralyze my ass,
                'cause I'll kill the motherfucker, know what I'm sayin'?
              </p>
            </div>
            <div>
              <Art fluid={data.art_ideas.childImageSharp.fluid} />
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }
`;

const Art = styled(Img)`
  width: 380px;
  max-width: 100%;
`;

export default About;
