# gatsby-absurd

An absurd Gatsby starter. The collection of illustrations, [absurd.design](https://absurd.design/) by [Diana Valeanu](https://twitter.com/diana_valeanu) is a very fascinating and beautiful project with some pretty thoughtful concepts. Experimentation on how that could be put together on a site ended up as this starter.

[Live Demo](https://gatsby-absurd.netlify.com/)

## Installation

Install the dependencies:

### `yarn install`

Run the development server:

### `yarn dev`

Production build to `/public`:

### `yarn build`

Cleanup cache (often fixes misc errors when run before `yarn dev`):

### `yarn clean`

## Content

Each of the sections in the site are placed in `src/sections`. Data is usually separated out into objects/arrays to be rendered in the component.

## SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

## Styling

This project uses [styled-components]() to handle styling: `src/styles/theme.js` defines the styling base and `src/styles/GlobalStyles.js` includes basic element styles along with the CSS Reset.
