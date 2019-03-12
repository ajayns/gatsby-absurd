import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 96px 0;

  ${props =>
    props.accent && `background-color: ${props.theme.color.black.lighter}`}
`;

export const Button = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  outline: none;
  text-decoration: none;

  background-color: ${props => props.theme.color.blue.regular};
  color: ${props => props.theme.color.white.regular};
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #2954bf;
  }
`;
