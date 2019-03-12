import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const GALLERY = [
  {
    name: 'Yoda',
    image: 'yoda.jpeg',
  },
  {
    name: 'r2d2',
    image: 'r2d2.jpeg',
  },
  {
    name: 'Darth Vader',
    image: 'darthvader.jpeg',
  },
  {
    name: 'Stormtrooper',
    image: 'stormtrooper.jpeg',
  },
  {
    name: 'r2d2',
    image: 'r2d2.jpeg',
  },
  {
    name: 'Yoda',
    image: 'yoda.jpeg',
  },
  {
    name: 'Stormtrooper',
    image: 'stormtrooper.jpeg',
  },
  {
    name: 'Darth Vader',
    image: 'darthvader.jpeg',
  },
];

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="gallery">
        <Container>
          <h1 style={{ marginBottom: 40 }}>Gallery</h1>
          <Grid>
            {GALLERY.map(({ name, image }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <p>{name}</p>
                </div>
              );
            })}
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 24px;
`;

export default Gallery;
