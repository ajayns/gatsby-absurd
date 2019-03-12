import React from 'react';
import { Link } from 'gatsby';

import Image from '@common/Image';
import { Container, Button } from '@components/global';

const Header = props => (
  <header style={{ padding: '40px 0', marginTop: 80 }}>
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 300 }}>
          <Image />
        </div>
        <div style={{ padding: 40 }}>
          <h1>Hi people</h1>
          <p>
            Welcome to your new Gatsby site. <br /> Now go build something
            great.
          </p>
          <Button as={Link} to="/page-2/">
            Go to page 2 &nbsp; &rarr;
          </Button>
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
