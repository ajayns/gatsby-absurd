import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What did Obi-Wan Kenobi say?',
    content: () => (
      <>
        If you define yourself by your power to take life, your desire to
        dominate, to possess, then you have nothing.
      </>
    ),
  },
  {
    title: 'Jedi wisdom on love?',
    content: () => (
      <>
        Attachment is forbidden. Possession is forbidden. Compassion, which I
        would define as unconditional love, is essential to a Jedi’s life. So
        you might say, that we are encouraged to love.
      </>
    ),
  },
  {
    title: 'Where did you even find these FAQs?',
    content: () => (
      <>
        Ripped straight from{' '}
        <ExternalLink href="https://www.starwars.com/news/40-memorable-star-wars-quotes">
          here
        </ExternalLink>
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq" accent>
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
